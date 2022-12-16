let contents = [
    ["bsabt", "About"],
    ["bsdev", "BiggSpin<b>\u2009Dev</b>"],
    ["bsmc", "BiggSpin<b>\u2009MC</b>"],
    ["bsbot", "<b>Muziek\u2009</b>Snel"],
    ["bsparent", "<b>Bouw\u2009</b>Snel"],
]

function main() {
    let slider = document.getElementById("slider")
    let flip = [1,-1]
    slider.style.setProperty('--offsetx', getRandomInt(25, 110)*flip[Math.floor(Math.random()+0.5)] +'%');
    slider.style.setProperty('--offsety', getRandomInt(25, 110)*flip[Math.floor(Math.random()+0.5)] +'%');
    
    let insert = ""
    for (let x in contents) {
        insert += `<p class="item" onclick="setTimeout(function(){ location.href = '${contents[x][0]}' }, 200);">${contents[x][1]}</p>`
    }
    document.getElementById("holder").innerHTML = insert
    console.log("snuss")
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}