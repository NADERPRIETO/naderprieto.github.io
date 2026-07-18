// Source - https://stackoverflow.com/a/57857665
// Posted by brk
// Retrieved 2026-07-18, License - CC BY-SA 4.0

function fechaUltimaVez() {
  var x = document.lastModified;
  console.log("fecha");
  console.log(x);
  document.getElementById("fecha").innerHTML = new Date(document.lastModified).toLocaleString();
}