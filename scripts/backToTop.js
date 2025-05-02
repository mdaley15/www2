let toTopBtn = document.getElementById("toTop");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var scrollHeight = 76;
    if (window.scrollY > 800) {
        toTopBtn.style.display = "block";
    } else {
        toTopBtn.style.display = "none";
    }
}