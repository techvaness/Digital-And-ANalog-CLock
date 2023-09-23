

let hours = document.getElementById('hour');
let minute = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let ampm = document.getElementById('ampm');

let hr = document.querySelector("#hr");
let mn = document.querySelector("#mn");
let sc = document.querySelector("#sc");

setInterval(() => {
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    var am = h >= 12 ? 'PM' : 'AM';

    // Convert 24hrs clock to 12 hrs clock
    if (h > 12) {
        h = h - 12;
    }

    // Add zero before single digit number
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    hours.innerHTML = h;
    minute.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am;
    hr.style.transform = `rotateZ(${h * 30}deg)`;
    mn.style.transform = `rotateZ(${m * 6}deg)`;
    sc.style.transform = `rotateZ(${s * 6}deg)`;
}, 1000); // Update every second (1000 milliseconds)
