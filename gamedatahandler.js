function onload() {
  var title = localStorage.getItem("title");
  var istitleshort = localStorage.getItem("istitleshort");
  var desc = localStorage.getItem("desc");
  var buttons = localStorage.getItem("buttons");
  var buttonsdestin = localStorage.getItem("buttonsdestin");
  document.getElementById("title").innerHTML = title;
  document.getElementById("desc").innerHTML = desc;
  if (istitleshort) {
    document.getElementById("descbox").style.top = "200px"
  }
}