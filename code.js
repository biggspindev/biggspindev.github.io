function main() {
    var slider = document.getElementById("slider")
    var flip = [1,-1]
    slider.style.setProperty('--offsetx', getRandomInt(25, 110)*flip[Math.floor(Math.random()+0.5)] +'%');
    slider.style.setProperty('--offsety', getRandomInt(25, 110)*flip[Math.floor(Math.random()+0.5)] +'%');
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}