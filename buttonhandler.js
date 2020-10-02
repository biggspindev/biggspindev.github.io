function navto(destination) {
	window.location.href = destination;
}
function navtogame(destination, gameid) {
  if (gameid == 0) {
    localStorage.setItem("title", "Disaster Lab");
    localStorage.setItem("istitleshort", true);
    localStorage.setItem("desc", "Description here lol");
    localStorage.setItem("buttons", ["Button1", "Button2"]);
    localStorage.setItem("buttonsdestin", ["Buttondest1", "Buttondest2"]);
  }
  window.location.href = destination;
}
function navtoplatform(destination, gameid) {
  if (gameid == 0) {
    localStorage.setItem("title", "Title here lol");
    localStorage.setItem("istitleshort", true);
    localStorage.setItem("desc", "Description here lol");
    localStorage.setItem("buttons", ["Button1", "Button2"]);
    localStorage.setItem("buttonsdestin", ["Buttondest1", "Buttondest2"]);
  }
  window.location.href = destination;
}

