let toTopBtn = document.getElementById("toTop");
let mainHeader = document.querySelector('.Header--bottom');
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (window.scrollY > 500) {
        toTopBtn.style.display = "flex";
    } else {
        toTopBtn.style.display = "none";
    }
}
function scrollToTop() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}