const parallax_el = document.querySelectorAll(".parallax");
let xValue = 0,
yValue = 0;

window.addEventListener("mousemove", (e) =>{
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;

    parallax_el.forEach((el) => {
      let speedx = el.dataset.speedx;
      let speedy = el.dataset.speedy;
      // let zValue = 100;

      // const forTest = document.querySelector(".mountain-2");
      let isInleft =
      parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;

      let zValue = (e.clientX - parasefloat(getComputedStyle(el).left)) * isInleft * 0.1;

      // let zValue = e.clientX - getComputedStyle(forTest).left;
      // console.log(getComputedStyle(forTest).left);

      el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) 
      translateY(calc(-50% + ${yValue * speedy
      }px)) perspective(2300px) translateZ(${zValue}px)`;
    });
});



// GSAP Animation

let timeline = gsap.timeline();

parallax_el.forEach(el =>{})

timeline.from(
  ".bg-img",
  {
    top: `${document.querySelector(".bg-img").offsetHeight / 4 - 200}px`,
    duration: 1,
  },
  "1"
  
);

timeline.from(
  ".fog-7",
  {
    top: `${document.querySelector(".fog-7").offsetHeight / 2 - 200}px`,
    duration:1,
  },
  "1"
  
);

timeline.from(
  ".mountain-10",
  {
    top: `${document.querySelector(".mountain-10").offsetHeight / 1 - 200}px`,
    duration:1,
  },
  "1"
  
);

timeline.from(
  ".fog-6",
  {
    top: `${document.querySelector(".fog-6").offsetHeight / 2 - 200}px`,
    duration:1,
  },
  "1"
  
);

timeline.from(
  ".mountain-9",
  {
    top: `${document.querySelector(".mountain-9").offsetHeight / 1 - 300}px`,
    duration:1,
  },
  "1"
  
);

timeline.from(
  ".mountain-8",
  {
    top: `${document.querySelector(".mountain-8").offsetHeight / 1 - 300}px`,
    duration:1,
  },
  "1"
  
);

timeline.from(
  ".fog-5",
  {
    top: `${document.querySelector(".fog-5").offsetHeight / 5 - 200}px`,
    duration:1,
  },
  "1"
  
);

timeline.from(
  ".mountain-7",
  {
    top: `${document.querySelector(".mountain-7").offsetHeight / 1 - 200}px`,
    duration:1,
  },
  "1"
  
);

timeline.from(
  ".mountain-6",
  {
    top: `${document.querySelector(".mountain-6").offsetHeight / 1 - 200}px`,
    duration:1,
  },
  "1"
  
);

timeline.from(
  ".fog-4",
  {
    top: `${document.querySelector(".fog-4").offsetHeight / 2 - 200}px`,
    duration:1,
  },
  "1"
  
);

timeline.from(
  ".mountain-5",
  {
    top: `${document.querySelector(".mountain-5").offsetHeight / 1 - 1}px`,
    duration:1,
  },
  "1"
  
);

timeline.from(
  ".fog-3",
  {
    top: `${document.querySelector(".fog-3").offsetHeight / 2 - 200}px`,
    duration:1,
  },
  "1"
  
);

timeline.from(
  ".mountain-4",
  {
    top: `${document.querySelector(".mountain-4").offsetHeight / 1 - 91}px`,
    duration:1,
  },
  "1"
  
);

timeline.from(
  ".mountain-3",
  {
    top: `${document.querySelector(".mountain-3").offsetHeight / 2 - 60}px`,
    duration:1,
  },
  "1"
  
);

timeline.from(
  ".fog-2",
  {
    top: `${document.querySelector(".fog-2").offsetHeight / 4 - 200}px`,
    duration:1,
  },
  "1"
  
);

timeline.from(
  ".mountain-2",
  {
    top: `${document.querySelector(".mountain-2").offsetHeight / 1 - 4}px`,
    duration:1,
  },
  "1"
  
);

timeline.from(
  ".mountain-1",
  {
    top: `${document.querySelector(".mountain-1").offsetHeight / 1 - 200}px`,
    duration:1.2,
  },
  "1"
  
);

timeline.from(
  ".text",
  {
    top: `${document.querySelector(".text").offsetHeight / 1 - 200}px`,
    duration:2.8,
  },
  "1"
  
);
