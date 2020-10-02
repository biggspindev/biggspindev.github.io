function onload() {
  var title = localStorage.getItem("title")
  var desc = localStorage.getItem("desc")
  var buttons = localStorage.getItem("buttons")
  var buttonsdestin = localStorage.getItem("buttonsdestin")
  console.log("Data recieved:")
  console.log("Title: %s", title)
  console.log("Desc: %s", desc)
  console.log("Buttons: %s", buttons)
  console.log("Buttonsdestins: %s", buttonsdestin)
}