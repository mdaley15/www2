document.addEventListener('DOMContentLoaded', function() {
    let stats = document.querySelectorAll('.stats .contentOuter');
    stats.forEach(stat => {
        if (window.innerWidth < 1300) {
            stat.setAttribute('data-aos-anchor-placement', 'center-bottom');
            stat.setAttribute('data-aos-delay', '200');
        }
    });
});