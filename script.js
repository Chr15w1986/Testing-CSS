// window.addEventListener("scroll", fadeInSections);

// function fadeInSections() {
//   var sections = document.getElementsByClassName("section");

//   for (var i = 0; i < sections.length; i++) {
//     var section = sections[i];
//     var position = section.getBoundingClientRect().top;
//     var windowHeight = window.innerHeight;

//     if (position < windowHeight - 100) {
//       section.style.opacity = "1";
//     }
//   }
// }

// Helper function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to handle the scroll event
  function handleScroll() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
      if (isInViewport(card)) {
        card.classList.add('fade-in');
      }
    });
  }
  
  // Add event listener for scroll event
  window.addEventListener('scroll', handleScroll);
  
