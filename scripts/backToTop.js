let toTopBtn = document.getElementById("toTop");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
        toTopBtn.style.display = "block";
    } else {
        toTopBtn.style.display = "none";
    }
}
function scrollToTop() {
    console.log(window.scrollY);
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}