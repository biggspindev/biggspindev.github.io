progress = 0
dprogress = 0
scrolling = false

addEventListener("resize", (event) => {scrollInit();});

function scrollInit() {
    if (scrolling) {return;}
    screensize = window.innerHeight
    content = document.getElementById("holder")
    contentsize = content.offsetHeight
    if (contentsize/screensize > 0.9) {
        scrolling = true
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

        function scrollEvent() {
            screensize = window.innerHeight
            contentsize = content.offsetHeight - Math.round(0.5 * screensize)

            dprogress += ((progress - dprogress)/10);
            dprogress = Math.round(dprogress * 100) / 100
            pxProgress = Math.round(-dprogress) + Math.round(0.3 * screensize)
            content.style.top = pxProgress + "px"
            requestAnimationFrame(scrollEvent);
        }

        scrollEvent()
    }   
}