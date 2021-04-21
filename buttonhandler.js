function notifychange() {
	const message = JSON.stringify({
	  content: 'LOADTIME'
	});
	window.parent.postMessage(message, '*');
}

function navto(destination) {
	notifychange()
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
  notifychange();
  window.location.href = destination;
}
function navtospecial(destination, id) {
  if (gameid == 0) {
    localStorage.setItem("title", "Game Status Meaning");
    localStorage.setItem("istitleshort", true);
    localStorage.setItem("desc", "Description here lol");
    localStorage.setItem("buttons", ["Button1", "Button2"]);
    localStorage.setItem("buttonsdestin", ["Buttondest1", "Buttondest2"]);
  } else if (gameid == 1) {
    localStorage.setItem("title", "About Us");
    localStorage.setItem("istitleshort", true);
    localStorage.setItem("desc", "Description here lol");
    localStorage.setItem("buttons", ["Button1", "Button2"]);
    localStorage.setItem("buttonsdestin", ["Buttondest1", "Buttondest2"]);
  } else if (gameid == 2) {
    localStorage.setItem("gtitle", "The Team");
    localStorage.setItem("isteam", true);
  }
  notifychange();
  window.location.href = destination;
}

