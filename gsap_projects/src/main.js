import "./style.css";
import { gsap } from "gsap";



const obj = {
  value: 0,
};

const loader = document.querySelector(".loader");
const counter = document.querySelector(".loader-count h2");

gsap.to(obj, {
  value: 100,
  duration:2,
  ease: "none",
  onUpdate: () => {
    counter.textContent = `${Math.round(obj.value)}%`;
  },
  onComplete: () => {
    gsap.to(loader, {
      autoAlpha: 0,
      duration: 1.2,
      ease: "power3.out",
      onComplete: () => {
          tl.play();
      },
    });
  },
});


const tl = gsap.timeline({paused: true});

tl.to(".loader", {
  yPercent: 100,
  duration: 1.2,
  ease: "expo.out",
}).from(".hero-bg img", {
  scale: 1.5,
  duration:1.23,
  ease: "expo.out",
}, "-=1.1" );


