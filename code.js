let contents = [
    ["bsabt", "About"],
    ["bsdev", "BiggSpin<b>\u2009Dev</b>"],
    ["bsmc", "BiggSpin<b>\u2009MC</b>"],
    ["bsbot", "<b>Muziek\u2009</b>Snel"],
    ["bsparent", "<b>Bouw\u2009</b>Snel"],
]

function main() {
    let insert = ""
    for (let x in contents) {
        insert += `<p class="item" onclick="setTimeout(function(){ location.href = '${contents[x][0]}' }, 200);">${contents[x][1]}</p>`
    }
    document.getElementById("holder").innerHTML = insert
}