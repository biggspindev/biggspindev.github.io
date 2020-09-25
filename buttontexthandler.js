function onload() {
  var games = ["Testgame1", "Testgame2", "Testgame3", "Testgame4", "Testgame5", "Testgame6"]; 
  var destinsgames = ["/a", "/a", "/a", "/a", "/a", "/a"];
  var platforms = ["Testplatform1", "Testplatform2", "Testplatform3", "Testplatform4", "Testplatform5", "Testplatform6"]; 
  var destins = ["/a", "/a", "/a", "/a", "/a", "/a"];
  var divZero = document.getElementById("gamediv0");
  document.getElementById("div0button1").innerHTML = platforms[0];
  document.getElementById("div0button2").innerHTML = games[0];
  if (games !== null) {
    var curGameId;
    for (curGameId = 1; curGameId < games.length; curGameId++) {
      let newDiv = document.createElement('div');
      document.body.append(newDiv);
      var newDivId = "gamediv" + curGameId.toString();
      var newTop = (292 + (curGameId + 1) * 35) + (15 * (curGameId));
      var newDivStyle = "top:" + newTop.toString() + "px;";
      var newDivElement = "<div class=\"gwd-div-1a51 gwd-div-74ds\" id=\"" + newDivId + "\" style=\"" + newDivStyle + "\"></div>";
      newDiv.outerHTML = newDivElement;
      //breaker for readability
      var newPButId = "div" + curGameId.toString() + "button1";
      var newPButNav = destins[curGameId];
      var newPButText = platforms[curGameId];
      var newPlatformButton = "<button id=\"" + newPButId + "\" class=\"gwd-button-csa8\" onclick=\"navto(\'" + newPButNav + "\')\">" + newPButText + "</button>";
      let newPDiv = document.createElement('div');
      var appender = document.getElementById(newDivId)
      appender.appendChild(newPDiv);
      newPDiv.outerHTML = newPlatformButton;
      //breaker for readability
      var newGButId = "div" + curGameId.toString() + "button2";
      var newGButNav = destinsgames[curGameId];
      var newGButText = games[curGameId];
      var newGameButton = "<button id=\"" + newGButId + "\" class=\"gwd-button-csa8\" onclick=\"navto(\'" + newGButNav + "\')\">" + newGButText + "</button>";
      let newGDiv = document.createElement('div');
      appender.appendChild(newGDiv);
      newGDiv.outerHTML = newGameButton;
    }
  }
}