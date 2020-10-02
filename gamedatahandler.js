function onload() {
  var title = localStorage.getItem("title");
  var desc = localStorage.getItem("desc");
  var buttons = localStorage.getItem("buttons");
  var buttonsdestin = localStorage.getItem("buttonsdestin");
  document.getElementById("title").innerHTML = title;
  document.getElementById("title").innerHTML = desc;
}