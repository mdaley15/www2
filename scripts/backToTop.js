let toTopBtn = document.getElementById("toTop");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > (90+"vh") || document.documentElement.scrollTop > (90+"vh")) {
        toTopBtn.style.display = "flex";
    } else {
        toTopBtn.style.display = "none";
    }
}