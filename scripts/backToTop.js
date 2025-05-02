let toTopBtn = document.getElementById("toTop");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var scrollHeight = 76;
    if (window.scrollY > (76+"vh")) {
        toTopBtn.style.display = "flex";
    } else {
        toTopBtn.style.display = "none";
    }
}