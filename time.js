function time() {
    setInterval(refreshTime, 250)
    console.log("sniss")
}

function refreshTime() {
    let date = new Date()
    let startdate = new Date()
    startdate.setTime(1604413372000)
    let d_year = date.getFullYear() - startdate.getFullYear()
    let d_mnth = date.getMonth() - startdate.getMonth()
    let d_day = date.getDate() - startdate.getDate()
    let d_hr = date.getHours() - startdate.getHours()
    let d_min = date.getMinutes() - startdate.getMinutes()
    let d_sec = date.getSeconds() - startdate.getSeconds()
    while ((d_mnth < 0) || (d_day < 0) || (d_hr < 0) || (d_min < 0) || (d_sec < 0)) {
        if (d_mnth < 0) {
            d_year -= 1
            d_mnth += 12
        }
        if (d_day < 0) {
            d_day += new Date(startdate.getFullYear() + d_year, date.getMonth() + d_mnth, 0).getDate()
            d_mnth -= 1
            
        }
        if (d_hr < 0) {
            d_day -= 1
            d_hr += 24
        }
        if (d_min < 0) {
            d_hr -= 1
            d_min += 60
        }
        if (d_sec < 0) {
            d_min -= 1
            d_sec += 60
        }
    }
    document.getElementById("bottomstats").innerHTML = `${d_year} year${((d_year == 1)&&(","))||("s,")} ${d_mnth} month${((d_mnth == 1)&&(","))||("s,")} ${d_day} day${((d_day == 1)&&(","))||("s,")} ${d_hr} hour${((d_hr == 1)&&(","))||("s,")} ${d_min} minute${((d_min == 1)&&(" "))||("s ")}and ${d_sec} second${((d_sec == 1)&&(" "))||("s ")}<br><i>Copyright© 2020-${date.getFullYear()} BouwSnel</i>`
}