# GSAP-Projects

DOC https://app.notion.com/p/The-Ultimate-GSAP-Book-by-Swaraj-Singh-3b469b6210fc80e8bfaac76e539ec544

gsap.method(element,{property});

// how to select 
- select like css
- select like jquery selecter
- multiple elements :- 
                        - query selecter all 
                        - like array []


The four core tween methods
gsap.to()  // Animates from current values → given values
gsap.from() // Animates from given values → current values (great for entrance animations)
gsap.fromTo() // You explicitly set both the start and end values
gsap.set() // Instantly sets values, no animation (duration 0)




To create a separate new Vite project

npm create vite@latest my-new-project

Follow the prompts to choose a framework (such as Vanilla, React, or Vue) and JavaScript or TypeScript. For a plain JavaScript project, you can use:

npm create vite@latest my-new-project -- --template vanilla
cd my-new-project
npm install
npm run dev


main.js is empty, so add this at the top if you want the browser to load style.css:
import "./style.css";
