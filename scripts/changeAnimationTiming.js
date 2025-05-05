document.addEventListener('DOMContentLoaded', function() {
    let stats = document.querySelectorAll('.stats .contentOuter');
    console.log(stats);
    stats.forEach(stat => {
        console.log(window.innerWidth);
        if (window.innerWidth < 1300) {
            console.log(window.innerWidth);
            stat.setAttribute('data-aos-anchor-placement', 'center-bottom');
            stat.setAttribute('data-aos-delay', '200');
        }
    });
});