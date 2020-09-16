
function onload() {
    console.log("Sending user to home page");
    setTimeout("redirect()", "1000")
}

function redirect() {
    window.location.pathname = '/home';
}
