const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");



function runclock() {
    let date = new Date();
    // console.log(date);

    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    // console.log(hr,min,sec);

    let hrPosition = (hr * 360 / 12) + (min * (360 / 60) / 12);
    let minPoistion = (min * 360 / 60) + (sec * (360 / 60) / 60);
    
    let secPosition = sec * 360 / 60;
    

    HOURHAND.style.transform = `rotate(${hrPosition}deg)`;
    MINUTEHAND.style.transform = `rotate(${minPoistion}deg)`;
    SECONDHAND.style.transform = `rotate(${secPosition}deg)`;
}

let time = setInterval(() => {
    runclock();
}, 1000);