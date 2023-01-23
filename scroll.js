//page is large if content > 905 window height, varry top of content from 50% to -50%, disable transform

progress = 0
dprogress = 0

function scrollInit() {
    screensize = window.innerHeight
    content = document.getElementById("holder")
    contentsize = content.offsetHeight
    if (contentsize/screensize > 0.9) {
        content.style.transform = "translate(0, 0)"
        addEventListener("wheel", (event) => {
            progress += event.deltaY
            if (progress < 0) {progress = 0}
            if (progress > contentsize) {progress = contentsize}
        });

        setInterval(function(){
            dprogress += ((progress - dprogress)/6);
            dprogress = Math.round(dprogress * 100) / 100
            percProgress = Math.round((dprogress*-100/contentsize) * 100) / 100
            content.style.top = percProgress + 50 + "%"
        }, 20);
    }   
}