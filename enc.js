function decrypt() {
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let key = String(urlParams.get('key'))
    while (key == "null" || key == "" || key == null) {
        key = prompt("Enter decryption key:");
    }
    key = key.replace(/[<>/ "=()%\\]/g, "") //filter out some stuff to prevent code injection
    window.history.replaceState(null, null, '?key='+key); //append url if not yet
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

function translateBox() {
    let input = document.getElementById('inputEnc').value;
    let key = document.getElementById('keyEnc').value;
    if (key == null || key == "") {
        return;
    }
    let output = "";
    var lines = input.split('\n');
    for(var i = 0;i < lines.length;i++){
        let line = lines[i]
        line = line.replaceAll('[[', '<b class=\"sellectme\">')
        line = line.replaceAll(']]', '<\/b>')
        let pre = "<p class=\"itemnoclick\">"
        let post = "<\/p>"
        if (line.substr(0,2) == "##") {
            line = line.substr(2)
            pre = "<p class=\"itemnoclick big\">"
        }
        output += pre + AEScrypt(key, line) + post + "\n"
    }
    document.getElementById('outputEnc').value = output;
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