//page is large if content > 905 window height, varry top of content from 50% to -50%, disable transform

progress = 0
dprogress = 0

function scrollInit() {
    screensize = window.innerHeight
    content = document.getElementById("holder")
    contentsize = content.offsetHeight
    if (contentsize/screensize > 0.9) {
        contentsize = content.offsetHeight - Math.round(0.5 * screensize)
        content.style.transform = "translate(0, 0)"

        addEventListener("wheel", (event) => {
            progress += event.deltaY
            if (progress < 0) {progress = 0}
            if (progress > contentsize) {progress = contentsize}
        });

        addEventListener("touchstart", touchStart);
        addEventListener("touchmove", touchMove);

        var start = 0;

        function touchStart(event) {
            start = event.touches[0].pageY;
        }

        function touchMove(event) {
            offset = start - event.touches[0].pageY;
            progress += offset
            if (progress < 0) {progress = 0}
            if (progress > contentsize) {progress = contentsize}
        }

        setInterval(function(){
            screensize = window.innerHeight
            contentsize = content.offsetHeight - Math.round(0.5 * screensize)

            dprogress += ((progress - dprogress)/6);
            dprogress = Math.round(dprogress * 100) / 100
            pxProgress = Math.round(-dprogress) + Math.round(0.3 * screensize)
            content.style.top = pxProgress + "px"
        }, 20);
    }   
}