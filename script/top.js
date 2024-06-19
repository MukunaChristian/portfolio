function toggleNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}



  
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

