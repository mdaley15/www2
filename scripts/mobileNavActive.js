document.addEventListener('DOMContentLoaded', function() {
    var pathName = window.location.pathname;
    console.log(pathName);
    let mobileLinks = document.querySelectorAll('.Mobile-overlay-menu-main a');
    mobileLinks.forEach(link => {
        console.log(link);
        let href = link.getAttribute('href');
        if (href == pathName) {
            console.log(link);
            link.classList.add('active');
        }
    });
});