import { _ as __extends, a as __assign, c as ObservableLike } from './Observable-063af883.js';
import './core-4c1f1367.js';
import { r as react } from './index-abdc4d2d.js';

/**
 * Basic ItemProvider that surfaces an array of items through the IItemProvider
 * interface.
 */
var ArrayItemProvider = /** @class */ (function () {
    function ArrayItemProvider(items) {
        this.items = items;
    }
    Object.defineProperty(ArrayItemProvider.prototype, "length", {
        get: function () {
            return this.items.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArrayItemProvider.prototype, "value", {
        get: function () {
            return this.items;
        },
        enumerable: true,
        configurable: true
    });
    return ArrayItemProvider;
}());
/**
 * Helper function to get the value of a set of items that can be an itemProvider or normal array.
 * @param items the items to retrieve the value from.
 */
function getItemsValue(items) {
    return Array.isArray(items) ? items : items.value;
}

/**
 * Handles subscription to properties that are IObservableValues, so that components don't have to handle on their own.
 *
 * Usage:
 *
 * <Observer myObservableValue={observableValue} className='foo'>
 *     <MyComponent myObservableValue='' />
 * </Observer>
 *
 * Your component will get re-rendered with the new value of myObservableValue whenever that value changes.
 * Additionally, any additional props set on the Observer will also get passed down.
 */
var Observer = /** @class */ (function (_super) {
    __extends(Observer, _super);
    function Observer(props) {
        var _this = _super.call(this, props) || this;
        _this.subscriptions = {};
        // Initialize the state with the initial value of the observable.
        var state = { values: {}, oldProps: {} };
        for (var propName in props) {
            state.values[propName] = getPropValue(props[propName]);
        }
        _this.state = state;
        return _this;
    }
    Observer.getDerivedStateFromProps = function (props, state) {
        var newState = updateSubscriptionsAndState(state.oldProps, props, state);
        if (newState != null) {
            return __assign(__assign({}, newState), { oldProps: props });
        }
        return { oldProps: props };
    };
    Observer.prototype.render = function () {
        var newProps = {};
        // Copy over any properties from the observable component to the children.
        for (var key in this.state.values) {
            if (key !== "children") {
                newProps[key] = this.state.values[key];
            }
        }
        if (typeof this.props.children === "function") {
            var child = this.props.children;
            return child(newProps);
        }
        else {
            var child = react.Children.only(this.props.children);
            return react.cloneElement(child, __assign(__assign({}, child.props), newProps), child.props.children);
        }
    };
    Observer.prototype.componentDidMount = function () {
        this.updateSubscriptionsAndStateAfterRender();
    };
    Observer.prototype.componentDidUpdate = function () {
        this.updateSubscriptionsAndStateAfterRender();
        if (this.props.onUpdate) {
            this.props.onUpdate();
        }
    };
    Observer.prototype.componentWillUnmount = function () {
        // Unsubscribe from any of the observable properties.
        for (var propName in this.subscribedProps) {
            this.unsubscribe(propName, this.subscribedProps);
        }
    };
    Observer.prototype.subscribe = function (propName, props) {
        if (propName !== "children") {
            var observableExpression = void 0;
            var observableValue = props[propName];
            var action = void 0;
            // If this is an observableExpression, we need to subscribe to the value
            // and execute the filter on changes.
            if (observableValue && observableValue.observableValue !== undefined) {
                observableExpression = observableValue;
                observableValue = observableExpression.observableValue;
                action = observableExpression.action;
            }
            if (ObservableLike.isObservable(observableValue)) {
                var delegate = this.onValueChanged.bind(this, propName, observableValue, observableExpression);
                ObservableLike.subscribe(observableValue, delegate, action);
                this.subscriptions[propName] = { delegate: delegate, action: action };
            }
        }
    };
    Observer.prototype.unsubscribe = function (propName, props) {
        if (propName !== "children") {
            var observableValue = getObservableValue(props[propName]);
            if (ObservableLike.isObservable(observableValue)) {
                var subscription = this.subscriptions[propName];
                ObservableLike.unsubscribe(observableValue, subscription.delegate, subscription.action);
                delete this.subscriptions[propName];
            }
        }
    };
    Observer.prototype.updateSubscriptionsAndStateAfterRender = function () {
        var newState = updateSubscriptionsAndState(this.subscribedProps, this.props, this.state, this);
        if (newState != null) {
            this.setState(newState);
        }
        this.subscribedProps = __assign({}, this.props);
    };
    Observer.prototype.onValueChanged = function (propName, observableValue, observableExpression, value, action) {
        var setState = true;
        if (!(propName in this.subscriptions)) {
            return;
        }
        // If this is an ObservableExpression we will call the filter before setting state.
        if (observableExpression && observableExpression.filter) {
            setState = observableExpression.filter(value, action);
        }
        if (setState) {
            this.setState(function (prevState, props) {
                var _a;
                return {
                    values: __assign(__assign({}, prevState.values), (_a = {}, _a[propName] = observableValue.value || value, _a))
                };
            });
        }
    };
    return Observer;
}(react.Component));
function getObservableValue(propValue) {
    if (propValue && propValue.observableValue !== undefined) {
        return propValue.observableValue;
    }
    return propValue;
}
function getPropValue(propValue) {
    return ObservableLike.getValue(getObservableValue(propValue));
}
function updateSubscriptionsAndState(oldProps, newProps, state, component) {
    // We need to unsubscribe from any observable values on old props and
    // subscribe to any observable values on new props.
    // In addition, if any of the values of the observables on the new props
    // differ from the value on the state, then we need to update the state.
    // This is possible if the value of the observable changed while the value
    // was being rendered, but before we had set up the subscription.
    // If we want to unsubscribe/resubscribe, then a component should be passed,
    // since this method is always called statically.
    var newState = __assign({}, state);
    var stateChanged = false;
    if (oldProps) {
        for (var propName in oldProps) {
            var oldValue = getObservableValue(oldProps[propName]);
            var newValue = getObservableValue(newProps[propName]);
            if (oldValue !== newValue) {
                component && component.unsubscribe(propName, oldProps);
                if (newValue === undefined) {
                    delete newState.values[propName];
                    stateChanged = true;
                }
            }
        }
    }
    for (var propName in newProps) {
        var oldValue = oldProps && getObservableValue(oldProps[propName]);
        var newValue = getObservableValue(newProps[propName]);
        if (oldValue !== newValue) {
            component && component.subscribe(propName, newProps);
            // Look for changes in the observables between creation and now.
            if (state.values[propName] !== getPropValue(newValue)) {
                newState.values[propName] = getPropValue(newValue);
                stateChanged = true;
            }
        }
    }
    // If any state updates occurred update the state now.
    if (stateChanged) {
        return newState;
    }
    return null;
}

var ItemsObserver = /** @class */ (function (_super) {
    __extends(ItemsObserver, _super);
    function ItemsObserver() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onItemsChanged = function (value, action) {
            var _a = _this.props, getUnselectableRanges = _a.getUnselectableRanges, items = _a.items, selection = _a.selection;
            selection.onItemsChanged(value, action);
            selection.unselectableRanges = getUnselectableRanges(getItemsValue(items));
            return false;
        };
        return _this;
    }
    ItemsObserver.prototype.componentDidMount = function () {
        this.props.selection.unselectableRanges = this.props.getUnselectableRanges(getItemsValue(this.props.items));
    };
    ItemsObserver.prototype.render = function () {
        var itemsObservable = {
            observableValue: this.props.items,
            filter: this.onItemsChanged
        };
        return react.createElement(Observer, { itemsObservable: itemsObservable }, this.props.children);
    };
    return ItemsObserver;
}(react.Component));

var ReadyableArrayObserver = /** @class */ (function (_super) {
    __extends(ReadyableArrayObserver, _super);
    function ReadyableArrayObserver() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loaded = false;
        _this.handleLoaded = function () {
            if (_this.props.data.ready.value && !_this.loaded) {
                _this.props.onReady && _this.props.onReady();
                _this.loaded = true;
            }
        };
        return _this;
    }
    ReadyableArrayObserver.prototype.render = function () {
        var _a = this.props, dataComponent = _a.dataComponent, loadingComponent = _a.loadingComponent, zeroDataComponent = _a.zeroDataComponent;
        return (react.createElement(Observer, { data: this.props.data, onUpdate: this.handleLoaded, ready: this.props.data.ready }, function (props) {
            if (!props.ready) {
                return loadingComponent ? loadingComponent() : null;
            }
            if (props.data.length) {
                return dataComponent(props.data);
            }
            return zeroDataComponent ? zeroDataComponent() : null;
        }));
    };
    ReadyableArrayObserver.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.data !== this.props.data) {
            this.loaded = false;
            this.handleLoaded();
        }
    };
    ReadyableArrayObserver.prototype.componentDidMount = function () {
        this.handleLoaded();
    };
    return ReadyableArrayObserver;
}(react.Component));

var SelectionObserver = /** @class */ (function (_super) {
    __extends(SelectionObserver, _super);
    function SelectionObserver() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onSelectionChanged = function (value, action) {
            var shouldUpdate = false;
            if (action === "select" && _this.props.onSelect) {
                shouldUpdate = _this.props.onSelect(value);
            }
            if ((action === "select" || action === "unselect" || action === "set") && _this.props.onSelectionChanged) {
                shouldUpdate = _this.props.onSelectionChanged(_this.props.selection.value, action);
            }
            return shouldUpdate;
        };
        return _this;
    }
    SelectionObserver.prototype.render = function () {
        var selectionObservable = { observableValue: this.props.selection, filter: this.onSelectionChanged };
        return react.createElement(Observer, { selectionObservable: selectionObservable }, this.props.children);
    };
    return SelectionObserver;
}(react.Component));

export { ArrayItemProvider as A, ItemsObserver as I, Observer as O, SelectionObserver as S, getItemsValue as g };
