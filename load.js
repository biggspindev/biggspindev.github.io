var ViewFrame = null;
var isdone = false;

document.addEventListener('DOMContentLoaded', (event) => {
  ViewFrame = document.getElementById('gwd-iframe_1');
  
  ViewFrame.addEventListener("load", function() {
    console.log("Bruh");
    isdone = true;
  });

})


function onload() {
  var curdir = "min";
  var loopnr = 0;
  var fadeTarget = document.getElementById("loadtext");
  fadeTarget.style.opacity = 1;
  var loadfadeinterv = setInterval(fade, 65);
  function fade() {
    if (curdir == "min") {
      fadeTarget.style.opacity -= 0.05;
      if (fadeTarget.style.opacity == 0.2) {
        curdir = "plus";
      }
    } else if (curdir == "plus") {
      fadeTarget.style.opacity = Number(fadeTarget.style.opacity) + 0.05;
      if (fadeTarget.style.opacity == 1) {
        curdir = "min";
      }
    }
	loopnr += 1;
	if (loopnr >= 15 && isdone) {
	clearInterval(loadfadeinterv);
	fadeTarget.style.visibility = "hidden";
  document.getElementById("loadbg").style.visibility = "hidden";
  //fadeTarget.remove();
	//document.getElementById("loadbg").remove();
	}
  } 
}