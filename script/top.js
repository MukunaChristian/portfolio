function toggleNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


// animation.js

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
  
document.addEventListener("DOMContentLoaded", function() {
  const observerOptions = {
    root: null, // Use the viewport as the container
    rootMargin: "0px",
    threshold: 0.1 // Trigger when 10% of the element is visible
  };

  const fadeInScaleElements = document.querySelectorAll('.fade-in-scale');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Optional: stop observing after adding the class
      }
    });
  }, observerOptions);

  fadeInScaleElements.forEach(element => {
    observer.observe(element);
  });
});

