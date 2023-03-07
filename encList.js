let contents = ["bsmcplugins","sample",]

function main() {
    let insert = ""
    for (let x in contents) {
        insert += `<p class="item" onclick="setTimeout(function(){ location.href = 'encP/${contents[x]}' }, 200);">${contents[x]}</p>`
    }
    document.getElementById("holderbox").innerHTML = document.getElementById("holderbox").innerHTML + insert
}