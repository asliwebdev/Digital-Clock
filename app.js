let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let ampm = document.getElementById("ampm");
let hh = document.getElementById("hh");
let ss = document.getElementById("ss");
let mm = document.getElementById("mm");
let hrDot = document.querySelector(".hr_dot");
let minDot = document.querySelector(".min_dot");
let secDot = document.querySelector(".sec_dot");


function updateTime() {
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    let am = h > 12 ? "PM" : "AM";

    if(h > 12) {
        h = h - 12;
    }

    function format(item) {
        if(item < 10) {
            item = `0${item}`;
        }
        return item;
    }

    hours.innerHTML = format(h) + "<br><span>Hours</span>";
    minutes.innerHTML = format(m) + "<br><span>Minutes</span>";
    seconds.innerHTML = format(s) + "<br><span>seconds</span>";
    ampm.innerText = am;

    hh.style.strokeDashoffset = 440 - (440 * h) / 12;
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;

    hrDot.style.transform = `rotate(${h * 30}deg)`;
    minDot.style.transform = `rotate(${m * 6}deg)`;
    secDot.style.transform = `rotate(${s * 6}deg)`;
}
setInterval(updateTime, 1000);
// updateTime();
