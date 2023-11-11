let contents = [
    ["bsabt", "About"],
    ["encbrowse", "<b>Encrypted\u2009</b> Pages"],
    ["bsdev", "BiggSpin<b>\u2009Dev</b>"],
    ["bsparent", "<b>Bouw\u2009</b>Snel"],
    ["bspanel", "<b>Pterodactyl\u2009</b>Panel"],
    ["bsfs", "<b>File\u2009</b>stash"],
]

function main() {
    let insert = ""
    for (let x in contents) {
        insert += `<p class="item" onclick="setTimeout(function(){ location.href = '${contents[x][0]}' }, 200);">${contents[x][1]}</p>`
    }
    document.getElementById("holder").innerHTML = insert
}