function onload() {
  var curdir = "min"
  var fadeTarget = document.getElementById("loadtext");
  fadeTarget.style.opacity = 1;
  setInterval(fade, 80);
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
  //clearInterval(fadoutloadscreen);
  } 
}