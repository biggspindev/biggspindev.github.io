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
    localStorage.setItem("title", "TBD");
    localStorage.setItem("istitleshort", true);
    localStorage.setItem("desc", "TBD");
    localStorage.setItem("buttons", false);
    localStorage.setItem("buttonsdestin", false);
  } else if (gameid == 1) {
    localStorage.setItem("title", "Cave Mining Simulator");
    localStorage.setItem("istitleshort", true);
    localStorage.setItem("desc", "Description here lol");
    localStorage.setItem("buttons", ["Button1", "Button2"]);
    localStorage.setItem("buttonsdestin", ["Buttondest1", "Buttondest2"]);
  }
  notifychange();
  window.location.href = destination;
}
function navtospecial(destination, id) {
  if (id == 0) {
    localStorage.setItem("title", "Project Status Meaning");
    localStorage.setItem("istitleshort", true);
    localStorage.setItem("desc", "A project has 5 possible states:<br><b>TBD</b>: This project's information is yet to be revealed to the public.<br><b>Date</b>: If the status is a date, the project will release / be finished at that date.<br><b>InDev</b>: The project is currently being worked on, and there is no release date yet.<br><b>On Hold</b>: This project isn't cancelled, but the is currently no work done on this project.<br><b>Cancelled</b>: this project will forever be unfinished.");
    localStorage.setItem("buttons", false);
    localStorage.setItem("buttonsdestin", false);
  } else if (id == 1) {
    localStorage.setItem("title", "About Us");
    localStorage.setItem("istitleshort", true);
    localStorage.setItem("desc", "We are an aspiring team of developers who have interest in making stuff on the internet, if you are interested in teaming up, contact one of our team members on discord.");
    localStorage.setItem("buttons", false);
    localStorage.setItem("buttonsdestin", false);
  } else if (id == 2) {
    localStorage.setItem("gtitle", "The Team");
    localStorage.setItem("isteam", true);
  }
  notifychange();
  window.location.href = destination;
}

