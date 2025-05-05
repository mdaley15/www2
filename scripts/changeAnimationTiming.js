document.addEventListener('DOMContentLoaded', function() {
    let stats = document.querySelectorAll('.stats .contentOuter');
    console.log(stats);
    stats.forEach(stat => {
        console.log(window.width);
        if (window.width < 1300) {
            console.log(window.width);
            stat.setAttribute('data-aos-anchor-placement', 'top-bottom');
            stat.setAttribute('data-aos-delay', '200');
        }
    });
});