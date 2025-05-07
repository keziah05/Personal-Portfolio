document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const heading = header.querySelector('h1');
  
    if (heading) {
      heading.addEventListener('mouseover', function() {
        heading.style.color = '#ddd'; /* Light grey on hover */
        heading.style.cursor = 'pointer'; /* Change cursor to indicate it's interactive */
      });
  
      heading.addEventListener('mouseout', function() {
        heading.style.color = 'white'; /* Back to white when mouse leaves */
      });
    }
  });