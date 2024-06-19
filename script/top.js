function toggleNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


// animation.js

document.addEventListener("DOMContentLoaded", function() {
  const observerOptions = {
    root: null, // Use the viewport as the container
    rootMargin: "0px",
    threshold: 0.1 // Trigger when 10% of the element is visible
  };

  const fadeIns = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Optional: stop observing after adding the class
      }
    });
  }, observerOptions);

  fadeIns.forEach(fadeIn => {
    observer.observe(fadeIn);
  });
});

  