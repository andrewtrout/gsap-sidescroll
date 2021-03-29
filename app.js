gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");
let sections2 = gsap.utils.toArray(".panel-left");


let container = document.querySelector(".container");
let containerLeft = document.querySelector(".left");

// let panel = document.querySelector(".panel");

// let panelWidth = document.querySelector(".panel").offsetWidth;
// container.style.transform = "translateX(calc(-100% + " + panelWidth + "px))";

// window.addEventListener("resize", function(event) {
//   panelWidth = document.querySelector(".panel").offsetWidth;

// });


gsap.to(sections, {
  xPercent: +100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: container,
    start: "center center",
    pin: true,
    scrub: 1,
    // snap: 1 / (sections.length - 1),
    end: () => "+=" + container.offsetWidth
  }
});

gsap.to(sections2, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: containerLeft,
    start: "center center",
    pin: true,
    scrub: 1,
    end: () => "+=" + containerLeft.offsetWidth
  }
})

