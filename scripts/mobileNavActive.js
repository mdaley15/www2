document.addEventListener('DOMContentLoaded', function() {
    var pathName = window.location.pathname;
    console.log(pathName);
    let mobileLinks = document.querySelectorAll('.Mobile-overlay-menu-main a');
    console.log(mobileLinks);
    mobileLinks.forEach(link => {
        let href = link.getAttribute('href');
        if (href.includes(pathName)) {
            console.log(link);
        }
    });
});