// function toggleNav() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//         x.className += " responsive";
//     } else {
//         x.className = "topnav";
//     }
// }


// // animation.js

// document.addEventListener('DOMContentLoaded', () => {
//     const fadeInElements = document.querySelectorAll('.fade-in');
//     const fadeInLeftElements = document.querySelectorAll('.fade-in-left');
//     const fadeInRightElements = document.querySelectorAll('.fade-in-right');
  
//     const options = {
//       threshold: 0.1
//     };
  
//     const handleIntersect = (entries, observer) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('visible');
//           observer.unobserve(entry.target);
//         }
//       });
//     };
  
//     const observer = new IntersectionObserver(handleIntersect, options);
  
//     fadeInElements.forEach(element => observer.observe(element));
//     fadeInLeftElements.forEach(element => observer.observe(element));
//     fadeInRightElements.forEach(element => observer.observe(element));
//   });
  