const elements = document.querySelectorAll('.tix');

// Function to handle scroll event
function onScroll() {
    console.log("working")
    elements.forEach(element => {
        element.classList.toggle('visible'); 

    });
  }
  
  // Add event listener for scroll event
  window.addEventListener('click', onScroll);