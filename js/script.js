document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const navbar = document.getElementById('navbar');

    menuIcon.addEventListener('click', function() {
        navbar.classList.toggle('active');
        closeIcon.style.display = navbar.classList.contains('active') ? 'block' : 'none'; 
    });

    closeIcon.addEventListener('click', function() {
        navbar.classList.remove('active');
        closeIcon.style.display = 'none'; 
    });
});
document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
});
