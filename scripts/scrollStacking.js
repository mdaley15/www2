const sections = document.querySelectorAll('.snap-section');
const releaseOffset = 100; // pixels past last section to release

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    sections.forEach((section, index) => {
        const offsetTop = section.offsetTop;

        // Fix section when it reaches top
        if (scrollY >= offsetTop) {
            console.log(scrollY, offsetTop);
            section.classList.add('fixed');
        }
    });

    // Check if user scrolled past the stacked group
    const lastSection = sections[sections.length - 1];
    console.log(lastSection);
    const lastBottom = lastSection.offsetTop + lastSection.offsetHeight;

    if (scrollY > lastBottom + releaseOffset) {
        // Release all fixed sections
        sections.forEach(section => section.classList.remove('fixed'));
    }
});