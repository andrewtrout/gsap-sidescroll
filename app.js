gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");
let sections2 = gsap.utils.toArray(".panel-left");


let containerRight = document.querySelector(".container-right");
let containerLeft = document.querySelector(".container-left");

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
});

gsap.to(sections, {
  xPercent: +100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: containerRight,
    start: "center center",
    pin: true,
    scrub: 1,
    // snap: 1 / (sections.length - 1),
    end: () => "+=" + containerRight.offsetWidth
  }
});



