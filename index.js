// Add an event listener for scrolling
window.addEventListener('scroll', function() {
    const body = document.body;

    // Check if the page has been scrolled
    if (window.scrollY > 100) {
        // Add a class to the body element to change the background
        body.classList.add('scrolled');
    } else {
        // Remove the class if not scrolled
        body.classList.remove('scrolled');
    }
});