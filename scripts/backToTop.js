let toTopBtn = document.getElementById("toTop");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var scrollHeight = 76;
    if (window.scrollY > 500) {
        toTopBtn.style.display = "block";
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