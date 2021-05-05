export function download(saveAs, contents) {
  const a = document.createElement("a");
  a.setAttribute("href", `data:text/json;base64,${btoa(contents)}`);
  a.setAttribute("download", saveAs);
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
