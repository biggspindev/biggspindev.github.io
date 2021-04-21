function onload() {
  var games = ["TBD", "Cave Mining Simulator", "Disaster Lab", "BiggSpinMC"]; 
  var platforms = ["TBD", "InDev", "On Hold", "On Hold"]; 
  var divZero = document.getElementById("gamediv0");
  document.getElementById("div0button1").innerHTML = platforms[0];
  document.getElementById("div0button2").innerHTML = games[0];
  var newHeightContainer = (35 * games.length) + (15 * (games.length - 1)) + 38;
  document.getElementById("pcontainerdiv").style.height = newHeightContainer.toString() + "px";
  document.getElementById("pcontainersvg").style.height = newHeightContainer.toString() + "px";
  var totalWidthFinal = 0;
  var totalWidthFinalId = 0;
  if (games !== null) {
    var curGameId;
    for (curGameId = 1; curGameId < games.length; curGameId++) {
      var totalWidth = 0;
      let newDiv = document.createElement('div');
      document.body.append(newDiv);
      var newDivId = "gamediv" + curGameId.toString();
      var newTop = (292 + (curGameId + 1) * 35) + (15 * (curGameId));
      var newDivStyle = "top:" + newTop.toString() + "px;";
      var newDivElement = "<div class=\"gwd-div-1a51 gwd-div-74ds\" id=\"" + newDivId + "\" style=\"" + newDivStyle + "\"></div>";
      newDiv.outerHTML = newDivElement;
      //breaker for readability
      var newPButId = "div" + curGameId.toString() + "button1";
      var newPButNav = "/item";
      var newPButText = platforms[curGameId];
      var newPlatformButton = "<button id=\"" + newPButId + "\" class=\"gwd-button-csa8\" onclick=\"navtospecial(\'" + newPButNav + "\', " + 0 + ")\">" + newPButText + "</button>";
      let newPDiv = document.createElement('div');
      var appender = document.getElementById(newDivId);
      appender.appendChild(newPDiv);
      newPDiv.outerHTML = newPlatformButton;
      totalWidth += platforms[curGameId].length;
      //breaker for readability
      var newGButId = "div" + curGameId.toString() + "button2";
      var newGButNav = "/item";
      var newGButText = games[curGameId];
      var newGameButton = "<button id=\"" + newGButId + "\" class=\"gwd-button-csa8\" onclick=\"navtogame(\'" + newGButNav + "\', " + curGameId + ")\">" + newGButText + "</button>";
      let newGDiv = document.createElement('div');
      appender.appendChild(newGDiv);
      newGDiv.outerHTML = newGameButton;
      totalWidth += games[curGameId].length;
      if (totalWidth > totalWidthFinal) {
        totalWidthFinal = totalWidth;
        totalWidthFinalId = curGameId;
      }
    }
  }
  var idToGetScale1 = "div" + totalWidthFinalId.toString() + "button1";
  var idToGetScale2 = "div" + totalWidthFinalId.toString() + "button2";
  var width1 = document.getElementById(idToGetScale1).offsetWidth;
  var width2 = document.getElementById(idToGetScale2).offsetWidth;
  var widthTotal = width1 + width2;
  widthTotal += 18 * 2;
  document.getElementById("pcontainersvg").style.width = widthTotal.toString() + "px";
}