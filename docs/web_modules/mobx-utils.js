import { f as action, o as observable, k as keys, b as isObservableArray, i as isObservableMap, h as isComputed, j as computed, l as observe, m as reaction, O as ObservableMap, n as extendObservable, r as runInAction, a as isObservableObject, $ as $mobx, p as isComputedProp, q as getAdministration, t as entries, v as values, w as transaction } from './common/mobx.module-4bfa4f10.js';
import './common/process-2545f00a.js';

function fail$1(message) {
    throw new Error("[mobx-utils] " + message);
}
function invariant(cond, message) {
    if (message === void 0) { message = "Illegal state"; }
    if (!cond)
        fail$1(message);
}
var deepFields = function (x) {
    return (x &&
        x !== Object.prototype &&
        Object.getOwnPropertyNames(x).concat(deepFields(Object.getPrototypeOf(x)) || []));
};
var distinctDeepFields = function (x) {
    var deepFieldsIndistinct = deepFields(x);
    var deepFieldsDistinct = deepFieldsIndistinct.filter(function (item, index) { return deepFieldsIndistinct.indexOf(item) === index; });
    return deepFieldsDistinct;
};
var getAllMethodsAndProperties = function (x) {
    return distinctDeepFields(x).filter(function (name) { return name !== "constructor" && !~name.indexOf("__"); });
};

var PENDING = "pending";
var FULFILLED = "fulfilled";
var REJECTED = "rejected";
function caseImpl(handlers) {
    switch (this.state) {
        case PENDING:
            return handlers.pending && handlers.pending(this.value);
        case REJECTED:
            return handlers.rejected && handlers.rejected(this.value);
        case FULFILLED:
            return handlers.fulfilled ? handlers.fulfilled(this.value) : this.value;
    }
}
/**
 * `fromPromise` takes a Promise, extends it with 2 observable properties that track
 * the status of the promise and returns it. The returned object has the following observable properties:
 *  - `value`: either the initial value, the value the Promise resolved to, or the value the Promise was rejected with. use `.state` if you need to be able to tell the difference.
 *  - `state`: one of `"pending"`, `"fulfilled"` or `"rejected"`
 *
 * And the following methods:
 * - `case({fulfilled, rejected, pending})`: maps over the result using the provided handlers, or returns `undefined` if a handler isn't available for the current promise state.
 * - `then((value: TValue) => TResult1 | PromiseLike<TResult1>, [(rejectReason: any) => any])`: chains additional handlers to the provided promise.
 *
 * The returned object implements `PromiseLike<TValue>`, so you can chain additional `Promise` handlers using `then`. You may also use it with `await` in `async` functions.
 *
 * Note that the status strings are available as constants:
 * `mobxUtils.PENDING`, `mobxUtils.REJECTED`, `mobxUtil.FULFILLED`
 *
 * fromPromise takes an optional second argument, a previously created `fromPromise` based observable.
 * This is useful to replace one promise based observable with another, without going back to an intermediate
 * "pending" promise state while fetching data. For example:
 *
 * @example
 * \@observer
 * class SearchResults extends React.Component {
 *   \@observable.ref searchResults
 *
 *   componentDidUpdate(nextProps) {
 *     if (nextProps.query !== this.props.query)
 *       this.searchResults = fromPromise(
 *         window.fetch("/search?q=" + nextProps.query),
 *         // by passing, we won't render a pending state if we had a successful search query before
 *         // rather, we will keep showing the previous search results, until the new promise resolves (or rejects)
 *         this.searchResults
 *       )
 *   }
 *
 *   render() {
 *     return this.searchResults.case({
 *        pending: (staleValue) => {
 *          return staleValue || "searching" // <- value might set to previous results while the promise is still pending
 *        },
 *        fulfilled: (value) => {
 *          return value // the fresh results
 *        },
 *        rejected: (error) => {
 *          return "Oops: " + error
 *        }
 *     })
 *   }
 * }
 *
 * Observable promises can be created immediately in a certain state using
 * `fromPromise.reject(reason)` or `fromPromise.resolve(value?)`.
 * The main advantage of `fromPromise.resolve(value)` over `fromPromise(Promise.resolve(value))` is that the first _synchronously_ starts in the desired state.
 *
 * It is possible to directly create a promise using a resolve, reject function:
 * `fromPromise((resolve, reject) => setTimeout(() => resolve(true), 1000))`
 *
 * @example
 * const fetchResult = fromPromise(fetch("http://someurl"))
 *
 * // combine with when..
 * when(
 *   () => fetchResult.state !== "pending",
 *   () => {
 *     console.log("Got ", fetchResult.value)
 *   }
 * )
 *
 * // or a mobx-react component..
 * const myComponent = observer(({ fetchResult }) => {
 *   switch(fetchResult.state) {
 *      case "pending": return <div>Loading...</div>
 *      case "rejected": return <div>Ooops... {fetchResult.value}</div>
 *      case "fulfilled": return <div>Gotcha: {fetchResult.value}</div>
 *   }
 * })
 *
 * // or using the case method instead of switch:
 *
 * const myComponent = observer(({ fetchResult }) =>
 *   fetchResult.case({
 *     pending:   () => <div>Loading...</div>,
 *     rejected:  error => <div>Ooops.. {error}</div>,
 *     fulfilled: value => <div>Gotcha: {value}</div>,
 *   }))
 *
 * // chain additional handler(s) to the resolve/reject:
 *
 * fetchResult.then(
 *   (result) =>  doSomeTransformation(result),
 *   (rejectReason) => console.error('fetchResult was rejected, reason: ' + rejectReason)
 * ).then(
 *   (transformedResult) => console.log('transformed fetchResult: ' + transformedResult)
 * )
 *
 * @param {IThenable<T>} promise The promise which will be observed
 * @param {IThenable<T>} oldPromise? The previously observed promise
 * @returns {IPromiseBasedObservable<T>}
 */
function fromPromise(origPromise, oldPromise) {
    invariant(arguments.length <= 2, "fromPromise expects up to two arguments");
    invariant(typeof origPromise === "function" ||
        (typeof origPromise === "object" &&
            origPromise &&
            typeof origPromise.then === "function"), "Please pass a promise or function to fromPromise");
    if (origPromise.isPromiseBasedObservable === true)
        return origPromise;
    if (typeof origPromise === "function") {
        // If it is a (reject, resolve function, wrap it)
        origPromise = new Promise(origPromise);
    }
    var promise = origPromise;
    origPromise.then(action("observableFromPromise-resolve", function (value) {
        promise.value = value;
        promise.state = FULFILLED;
    }), action("observableFromPromise-reject", function (reason) {
        promise.value = reason;
        promise.state = REJECTED;
    }));
    promise.isPromiseBasedObservable = true;
    promise.case = caseImpl;
    var oldData = oldPromise && oldPromise.state === FULFILLED
        ? oldPromise.value
        : undefined;
    extendObservable(promise, {
        value: oldData,
        state: PENDING,
    }, {}, { deep: false });
    return promise;
}
(function (fromPromise) {
    fromPromise.reject = action("fromPromise.reject", function (reason) {
        var p = fromPromise(Promise.reject(reason));
        p.state = REJECTED;
        p.value = reason;
        return p;
    });
    function resolveBase(value) {
        if (value === void 0) { value = undefined; }
        var p = fromPromise(Promise.resolve(value));
        p.state = FULFILLED;
        p.value = value;
        return p;
    }
    fromPromise.resolve = action("fromPromise.resolve", resolveBase);
})(fromPromise || (fromPromise = {}));

var __decorate = function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/** @class */ ((function () {
    function StreamListener(observable, initialValue) {
        var _this = this;
        runInAction(function () {
            _this.current = initialValue;
            _this.subscription = observable.subscribe(_this);
        });
    }
    StreamListener.prototype.dispose = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    StreamListener.prototype.next = function (value) {
        this.current = value;
    };
    StreamListener.prototype.complete = function () {
        this.dispose();
    };
    StreamListener.prototype.error = function (value) {
        this.current = value;
        this.dispose();
    };
    __decorate([
        observable.ref
    ], StreamListener.prototype, "current", void 0);
    __decorate([
        action.bound
    ], StreamListener.prototype, "next", null);
    __decorate([
        action.bound
    ], StreamListener.prototype, "complete", null);
    __decorate([
        action.bound
    ], StreamListener.prototype, "error", null);
    return StreamListener;
})());

var __assign = function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate$1 = function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var RESERVED_NAMES = ["model", "reset", "submit", "isDirty", "isPropertyDirty", "resetProperty"];
/** @class */ ((function () {
    function ViewModel(model) {
        var _this = this;
        this.model = model;
        this.localValues = observable.map({});
        this.localComputedValues = observable.map({});
        this.isPropertyDirty = function (key) {
            return _this.localValues.has(key);
        };
        invariant(isObservableObject(model), "createViewModel expects an observable object");
        // use this helper as Object.getOwnPropertyNames doesn't return getters
        getAllMethodsAndProperties(model).forEach(function (key) {
            if (key === $mobx || key === "__mobxDidRunLazyInitializers") {
                return;
            }
            invariant(RESERVED_NAMES.indexOf(key) === -1, "The propertyname " + key + " is reserved and cannot be used with viewModels");
            if (isComputedProp(model, key)) {
                var derivation = getAdministration(model, key).derivation; // Fixme: there is no clear api to get the derivation
                _this.localComputedValues.set(key, computed(derivation.bind(_this)));
            }
            var descriptor = Object.getOwnPropertyDescriptor(model, key);
            var additionalDescriptor = descriptor ? { enumerable: descriptor.enumerable } : {};
            Object.defineProperty(_this, key, __assign(__assign({}, additionalDescriptor), { configurable: true, get: function () {
                    if (isComputedProp(model, key))
                        return _this.localComputedValues.get(key).get();
                    if (_this.isPropertyDirty(key))
                        return _this.localValues.get(key);
                    else
                        return _this.model[key];
                }, set: action(function (value) {
                    if (value !== _this.model[key]) {
                        _this.localValues.set(key, value);
                    }
                    else {
                        _this.localValues.delete(key);
                    }
                }) }));
        });
    }
    Object.defineProperty(ViewModel.prototype, "isDirty", {
        get: function () {
            return this.localValues.size > 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ViewModel.prototype, "changedValues", {
        get: function () {
            return this.localValues.toJS();
        },
        enumerable: false,
        configurable: true
    });
    ViewModel.prototype.submit = function () {
        var _this = this;
        keys(this.localValues).forEach(function (key) {
            var source = _this.localValues.get(key);
            var destination = _this.model[key];
            if (isObservableArray(destination)) {
                destination.replace(source);
            }
            else if (isObservableMap(destination)) {
                destination.clear();
                destination.merge(source);
            }
            else if (!isComputed(source)) {
                _this.model[key] = source;
            }
        });
        this.localValues.clear();
    };
    ViewModel.prototype.reset = function () {
        this.localValues.clear();
    };
    ViewModel.prototype.resetProperty = function (key) {
        this.localValues.delete(key);
    };
    __decorate$1([
        computed
    ], ViewModel.prototype, "isDirty", null);
    __decorate$1([
        computed
    ], ViewModel.prototype, "changedValues", null);
    __decorate$1([
        action.bound
    ], ViewModel.prototype, "submit", null);
    __decorate$1([
        action.bound
    ], ViewModel.prototype, "reset", null);
    __decorate$1([
        action.bound
    ], ViewModel.prototype, "resetProperty", null);
    return ViewModel;
})());

function buildPath(entry) {
    if (!entry)
        return "ROOT";
    var res = [];
    while (entry.parent) {
        res.push(entry.path);
        entry = entry.parent;
    }
    return res.reverse().join("/");
}
function isRecursivelyObservable(thing) {
    return isObservableObject(thing) || isObservableArray(thing) || isObservableMap(thing);
}
/**
 * Given an object, deeply observes the given object.
 * It is like `observe` from mobx, but applied recursively, including all future children.
 *
 * Note that the given object cannot ever contain cycles and should be a tree.
 *
 * As benefit: path and root will be provided in the callback, so the signature of the listener is
 * (change, path, root) => void
 *
 * The returned disposer can be invoked to clean up the listener
 *
 * deepObserve cannot be used on computed values.
 *
 * @example
 * const disposer = deepObserve(target, (change, path) => {
 *    console.dir(change)
 * })
 */
function deepObserve(target, listener) {
    var entrySet = new WeakMap();
    function genericListener(change) {
        var entry = entrySet.get(change.object);
        processChange(change, entry);
        listener(change, buildPath(entry), target);
    }
    function processChange(change, parent) {
        switch (change.type) {
            // Object changes
            case "add": // also for map
                observeRecursively(change.newValue, parent, change.name);
                break;
            case "update": // also for array and map
                unobserveRecursively(change.oldValue);
                observeRecursively(change.newValue, parent, change.name || "" + change.index);
                break;
            case "remove": // object
            case "delete": // map
                unobserveRecursively(change.oldValue);
                break;
            // Array changes
            case "splice":
                change.removed.map(unobserveRecursively);
                change.added.forEach(function (value, idx) {
                    return observeRecursively(value, parent, "" + (change.index + idx));
                });
                // update paths
                for (var i = change.index + change.addedCount; i < change.object.length; i++) {
                    if (isRecursivelyObservable(change.object[i])) {
                        var entry = entrySet.get(change.object[i]);
                        if (entry)
                            entry.path = "" + i;
                    }
                }
                break;
        }
    }
    function observeRecursively(thing, parent, path) {
        if (isRecursivelyObservable(thing)) {
            var entry = entrySet.get(thing);
            if (entry) {
                if (entry.parent !== parent || entry.path !== path)
                    // MWE: this constraint is artificial, and this tool could be made to work with cycles,
                    // but it increases administration complexity, has tricky edge cases and the meaning of 'path'
                    // would become less clear. So doesn't seem to be needed for now
                    throw new Error("The same observable object cannot appear twice in the same tree," +
                        (" trying to assign it to '" + buildPath(parent) + "/" + path + "',") +
                        (" but it already exists at '" + buildPath(entry.parent) + "/" + entry.path + "'"));
            }
            else {
                var entry_1 = {
                    parent: parent,
                    path: path,
                    dispose: observe(thing, genericListener),
                };
                entrySet.set(thing, entry_1);
                entries(thing).forEach(function (_a) {
                    var key = _a[0], value = _a[1];
                    return observeRecursively(value, entry_1, key);
                });
            }
        }
    }
    function unobserveRecursively(thing) {
        if (isRecursivelyObservable(thing)) {
            var entry = entrySet.get(thing);
            if (!entry)
                return;
            entrySet.delete(thing);
            entry.dispose();
            values(thing).forEach(unobserveRecursively);
        }
    }
    observeRecursively(target, undefined, "");
    return function () {
        unobserveRecursively(target);
    };
}

var __extends = (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Reactively sorts a base observable array into multiple observable arrays based on the value of a
 * `groupBy: (item: T) => G` function.
 *
 * This observes the individual computed groupBy values and only updates the source and dest arrays
 * when there is an actual change, so this is far more efficient than, for example
 * `base.filter(i => groupBy(i) === 'we')`. Call #dispose() to stop tracking.
 *
 * No guarantees are made about the order of items in the grouped arrays.
 *
 * The resulting map of arrays is read-only. clear(), set(), delete() are not supported and
 * modifying the group arrays will lead to undefined behavior.
 *
 * NB: ObservableGroupMap relies on `Symbol`s. If you are targeting a platform which doesn't
 * support these natively, you will need to provide a polyfill.
 *
 * @param {array} base The array to sort into groups.
 * @param {function} groupBy The function used for grouping.
 * @param options Object with properties:
 *  `name`: Debug name of this ObservableGroupMap.
 *  `keyToName`: Function to create the debug names of the observable group arrays.
 *
 * @example
 * const slices = observable([
 *     { day: "mo", hours: 12 },
 *     { day: "tu", hours: 2 },
 * ])
 * const slicesByDay = new ObservableGroupMap(slices, (slice) => slice.day)
 * autorun(() => console.log(
 *     slicesByDay.get("mo")?.length ?? 0,
 *     slicesByDay.get("we"))) // outputs 1, undefined
 * slices[0].day = "we" // outputs 0, [{ day: "we", hours: 12 }]
 */
/** @class */ ((function (_super) {
    __extends(ObservableGroupMap, _super);
    function ObservableGroupMap(base, groupBy, _a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.name, name = _c === void 0 ? "ogm" + ((Math.random() * 1000) | 0) : _c, _d = _b.keyToName, keyToName = _d === void 0 ? function (x) { return "" + x; } : _d;
        var _this = _super.call(this) || this;
        _this._keyToName = keyToName;
        _this._groupBy = groupBy;
        _this._ogmInfoKey = Symbol("ogmInfo" + name);
        _this._base = base;
        for (var i = 0; i < base.length; i++) {
            _this._addItem(base[i]);
        }
        _this._disposeBaseObserver = observe(_this._base, function (change) {
            if ("splice" === change.type) {
                transaction(function () {
                    for (var _i = 0, _a = change.removed; _i < _a.length; _i++) {
                        var removed = _a[_i];
                        _this._removeItem(removed);
                    }
                    for (var _b = 0, _c = change.added; _b < _c.length; _b++) {
                        var added = _c[_b];
                        _this._addItem(added);
                    }
                });
            }
            else if ("update" === change.type) {
                transaction(function () {
                    _this._removeItem(change.oldValue);
                    _this._addItem(change.newValue);
                });
            }
            else {
                throw new Error("illegal state");
            }
        });
        return _this;
    }
    ObservableGroupMap.prototype.clear = function () {
        throw new Error("not supported");
    };
    ObservableGroupMap.prototype.delete = function (_key) {
        throw new Error("not supported");
    };
    ObservableGroupMap.prototype.set = function (_key, _value) {
        throw new Error("not supported");
    };
    /**
     * Disposes all observers created during construction and removes state added to base array
     * items.
     */
    ObservableGroupMap.prototype.dispose = function () {
        this._disposeBaseObserver();
        for (var i = 0; i < this._base.length; i++) {
            var item = this._base[i];
            var grouperItemInfo = item[this._ogmInfoKey];
            grouperItemInfo.reaction();
            delete item[this._ogmInfoKey];
        }
    };
    ObservableGroupMap.prototype._getGroupArr = function (key) {
        var result = _super.prototype.get.call(this, key);
        if (undefined === result) {
            result = observable([], { name: "GroupArray[" + this._keyToName(key) + "]", deep: false });
            _super.prototype.set.call(this, key, result);
        }
        return result;
    };
    ObservableGroupMap.prototype._removeFromGroupArr = function (key, itemIndex) {
        var arr = _super.prototype.get.call(this, key);
        if (1 === arr.length) {
            _super.prototype.delete.call(this, key);
        }
        else if (itemIndex === arr.length - 1) {
            // last position in array
            arr.length--;
        }
        else {
            arr[itemIndex] = arr[arr.length - 1];
            arr[itemIndex][this._ogmInfoKey].groupArrIndex = itemIndex;
            arr.length--;
        }
    };
    ObservableGroupMap.prototype._addItem = function (item) {
        var _this = this;
        var groupByValue = this._groupBy(item);
        var groupArr = this._getGroupArr(groupByValue);
        var value = {
            groupByValue: groupByValue,
            groupArrIndex: groupArr.length,
            reaction: reaction(function () { return _this._groupBy(item); }, function (newGroupByValue, _r) {
                var grouperItemInfo = item[_this._ogmInfoKey];
                _this._removeFromGroupArr(grouperItemInfo.groupByValue, grouperItemInfo.groupArrIndex);
                var newGroupArr = _this._getGroupArr(newGroupByValue);
                var newGroupArrIndex = newGroupArr.length;
                newGroupArr.push(item);
                grouperItemInfo.groupByValue = newGroupByValue;
                grouperItemInfo.groupArrIndex = newGroupArrIndex;
            }),
        };
        Object.defineProperty(item, this._ogmInfoKey, {
            configurable: true,
            enumerable: false,
            value: value,
        });
        groupArr.push(item);
    };
    ObservableGroupMap.prototype._removeItem = function (item) {
        var grouperItemInfo = item[this._ogmInfoKey];
        this._removeFromGroupArr(grouperItemInfo.groupByValue, grouperItemInfo.groupArrIndex);
        grouperItemInfo.reaction();
        delete item[this._ogmInfoKey];
    };
    return ObservableGroupMap;
})(ObservableMap));

export { deepObserve };
