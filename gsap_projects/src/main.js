import "./style.css";
import { gsap } from "gsap";

gsap.to(".box", {
  x: 200,
  duration: 1.5,   // seconds
  delay: 0.3,      // wait 0.3s before starting
  ease: "elastic.out(1, 0.4)"
});

document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    gsap.to(btn, { scale: 1.08, duration: 0.3, ease: "back.out(2)" });
  });
  btn.addEventListener("mouseleave", () => {
    gsap.to(btn, { scale: 1, duration: 0.3, ease: "power2.out" });
  });
});
