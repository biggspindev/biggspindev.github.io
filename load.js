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
	if (fadeTarget.style.opacity == 1 && loopnr > 48) {
	clearInterval(loadfadeinterv);
	fadeTarget.remove();
	document.getElementById("loadbg").remove();
	}
  } 
}