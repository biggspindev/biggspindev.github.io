
function onload() {
    console.log("Sending user to home page");
    setTimeout("redirect()", "500")
}

function redirect() {
    window.location.pathname = '/home';
}
