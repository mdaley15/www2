document.addEventListener('DOMContentLoaded', function() {
    let stats = document.querySelectorAll('.stats .contentOuter');
    console.log(stats);
    stats.forEach(stat => {
        if (screen.width < 1300) {
            stat.setAttribute('data-aos-anchor-placement', 'top-bottom');
            stat.setAttribute('data-aos-delay', '200');
        }
    });
});