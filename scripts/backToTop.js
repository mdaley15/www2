let toTopBtn = document.getElementById("toTop");
let mainHeader = document.querySelector('.Header--bottom');
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
    // console.log(window.scrollY);
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
    // mainHeader.scrollIntoView({ block: "start", behavior: "smooth" })
}