function decrypt() {
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let key = String(urlParams.get('key'))
    while (key == "null" || key == "" || key == null) {
        key = prompt("Enter decryption key:");
    }
    key = key.replace(/[<>/ "=()%\\]/g, "") //filter out some stuff to prevent code injection
    let page = String(location.href.split("/").slice(-1)).split("?")[0]
    
    document.getElementById('pageheader').innerHTML = `Viewing encrypted page: <b>${page}</b><br>Using key: <b>${key}</b>`

    if (key != "null") {
        children = document.getElementById("contents").children
        for (let i=0; i < children.length; i++) {
            let child = children[i]
            var encrypted = child.innerHTML
            child.innerHTML = AESdecrypt(key, encrypted);
        }
    }
}

function encryptPage(key) { // to use when making page
    children = document.getElementById("contents").children
    for (let i=0; i < children.length; i++) {
        let child = children[i]
        child.innerHTML = AEScrypt(key, child.innerHTML)
    }
}

const AEScrypt = (salt, text) => {
    const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
    const byteHex = (n) => ("0" + Number(n).toString(16)).substr(-2);
    const applySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code);

    return text
        .split("")
        .map(textToChars)
        .map(applySaltToChar)
        .map(byteHex)
        .join("");
};
  
const AESdecrypt = (salt, encoded) => {
    const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
    const applySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code);
    return encoded
        .match(/.{1,2}/g)
        .map((hex) => parseInt(hex, 16))
        .map(applySaltToChar)
        .map((charCode) => String.fromCharCode(charCode))
        .join("");
};