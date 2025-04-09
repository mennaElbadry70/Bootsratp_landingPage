// Get all the nav links
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

// Loop through each link and add a click event listener
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    // Remove the 'active' and 'underline' class from all links
    navLinks.forEach(item => item.classList.remove('underline'));

    // Add the 'active' and 'underline' class to the clicked link
    this.classList.add('underline');
  });
});
