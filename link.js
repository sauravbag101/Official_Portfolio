let circularProgress = document.querySelector(".circular-progress"),
progressValue = document.querySelector(".progress-value");


let progressStartvalue = 0,
    progressEndvalue = 75,
    speed = 90;

let progress = setInterval(() => {
    progressStartvalue++;

    progressValue.textContent = `${progressStartvalue}%`
    circularProgress.style.background = `conic-gradient(#1abc9c ${progressStartvalue * 3.6}deg, #ededed 0deg)`

    if(progressStartvalue == progressEndvalue){
        clearInterval(progress);
    }
}, speed);    

// formation 2

let circularProgress1 = document.querySelector(".circular-progress1");
let progressValue1 = document.querySelector(".progress-value1");

let progress1Startvalue = 0;
let progress1Endvalue = 55;
let speed1 = 60;

let progress1 = setInterval(() => {
    progress1Startvalue++;

    progressValue1.textContent = `${progress1Startvalue}%`;
    circularProgress1.style.background = `conic-gradient(#1abc9c ${progress1Startvalue * 3.6}deg, #ededed 0deg)`;

    if (progress1Startvalue == progress1Endvalue) {
        clearInterval(progress1);
    }
}, speed1);

// formation 3

let circularProgress2 = document.querySelector(".circular-progress2");
let progressValue2 = document.querySelector(".progress-value2");

let progress2Startvalue = 0;
let progress2Endvalue = 45;
let speed2 = 80;

let progress2 = setInterval(() => {
    progress2Startvalue++;

    progressValue2.textContent = `${progress2Startvalue}%`;
    circularProgress2.style.background = `conic-gradient(#1abc9c ${progress2Startvalue * 3.6}deg, #ededed 0deg)`;

    if (progress2Startvalue == progress2Endvalue) {
        clearInterval(progress2);
    }
}, speed2);

// formation 4

let circularProgress3 = document.querySelector(".circular-progress3");
let progressValue3 = document.querySelector(".progress-value3");

let progress3Startvalue = 0;
let progress3Endvalue = 85;
let speed3 = 80;

let progress3 = setInterval(() => {
    progress3Startvalue++;

    progressValue3.textContent = `${progress3Startvalue}%`;
    circularProgress3.style.background = `conic-gradient(#1abc9c ${progress3Startvalue * 3.6}deg, #ededed 0deg)`;

    if (progress3Startvalue == progress3Endvalue) {
        clearInterval(progress3);
    }
}, speed3);

// formation 5

let circularProgress4 = document.querySelector(".circular-progress4");
let progressValue4 = document.querySelector(".progress-value4");

let progress4Startvalue = 0;
let progress4Endvalue = 80;
let speed4 = 80;

let progress4 = setInterval(() => {
    progress4Startvalue++;

    progressValue4.textContent = `${progress4Startvalue}%`;
    circularProgress4.style.background = `conic-gradient(#1abc9c ${progress4Startvalue * 3.6}deg, #ededed 0deg)`;

    if (progress4Startvalue == progress4Endvalue) {
        clearInterval(progress4);
    }
}, speed4);

// formation 6

let circularProgress5 = document.querySelector(".circular-progress5");
let progressValue5 = document.querySelector(".progress-value5");

let progress5Startvalue = 0;
let progress5Endvalue = 65;
let speed5 = 80;

let progress5 = setInterval(() => {
    progress5Startvalue++;

    progressValue5.textContent = `${progress5Startvalue}%`;
    circularProgress5.style.background = `conic-gradient(#1abc9c ${progress5Startvalue * 3.6}deg, #ededed 0deg)`;

    if (progress5Startvalue == progress5Endvalue) {
        clearInterval(progress5);
    }
}, speed5);