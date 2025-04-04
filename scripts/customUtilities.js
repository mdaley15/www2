$( document ).ready(function() {

    $('.whatWeDo .Header-nav-item:first-child > a.Header-nav-folder-title').removeAttr('href');
    $('.whatWeDo .Header-nav-item:nth-child(2) > .Header-nav-folder-title').attr('href', '/school-yearbooks');

    var pathName = window.location.pathname;
    if (pathName.includes("/school-yearbooks")) {
        $('.whatWeDo .Header-nav-item:nth-child(2) > .Header-nav-folder-title').addClass('active');
    }
    
    /* Sample function that returns boolean in case the browser is Internet Explorer */
    function isIE() {
        ua = navigator.userAgent;
        /* MSIE used to detect old browsers and Trident used to newer ones*/
        var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1 || ua.indexOf("Edge") > -1;
        
        return is_ie;
    }
    /* Create an alert to show if the browser is IE or not */
    if (isIE()) {
        // console.log('Is IE');
    } else {
        // console.log('Is NOT IE');
    }

    $('a[href*="#"]:not([href="#"])').click(function() {
        $('body').removeClass('is-mobile-overlay-active');
        var offset = -100; // <-- change the value here
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top + offset
                }, 1000);
                return false;
            }
        }
    });

    ////////////////// Random ////////////////////////////////////

    $('.SocialLinks a').each(function() {
        var ariaLabel = $(this).attr('aria-label');
        ariaLabel = ariaLabel.split('-')[0]
        $(this).attr('aria-label', ariaLabel);
        // console.log(ariaLabel);
    });

    // var headerLinkRemoveAttr = $('.whatWeDo > .Header-nav-item:nth-child(2) > .Header-nav-folder-title');
    // console.log(headerLinkRemoveAttr);

    $(".sqs-search-page").closest("main.Main").prepend('<section class = "Intro search-page-intro"> </section>');

    $("p:contains('. - 5')").html(function(_, html) {
      return html.replace(/(. - 5)/g, '<span class="noWrap">. - 5</span>');
    });
    $("p:contains('0 a')").html(function(_, html) {
      return html.replace(/(0 a)/g, '<span class="noWrap">0 a</span>');
    });
    $("p:contains('0 p')").html(function(_, html) {
      return html.replace(/(0 p)/g, '<span class="noWrap">0 p</span>');
    });

    $('a[href^="tel:"]').css('white-space', 'nowrap');

    $('a.previous').append('<i class="fas fa-chevron-left"></i>');
    $('a.next').append('<i class="fas fa-chevron-right"></i>');

    $('.sqs-block-button-element, .sqs-system-button, .meta p:last-child a, .sqs-lightbox-meta p a').addClass('lift allBtns');

    // Index Page Galleries
    var slides = document.querySelectorAll('#home .slide > img, #school-yearbooks .slide > img');
    slides.forEach((slide, index) => {
        var wrap = document.createElement('div');
        wrap.classList.add('slideImgWrap');
        slide.parentNode.insertBefore(wrap, slide);
        wrap.appendChild(slide);
    });

    var galleryThumbs = document.querySelectorAll('.sqs-gallery-thumbnails img');
    galleryThumbs.forEach((thumb, index) => {
        var alt = thumb.getAttribute('alt');
        alt = alt.replace(/(<([^>]+)>)/gi, "");
        thumb.setAttribute('alt', alt);
        const wrapper = document.createElement('div');
        thumb.parentNode.insertBefore(wrapper, thumb);
        wrapper.appendChild(thumb);
        if (index === 0) {
            thumb.parentElement.classList.add('sqs-active-slide');
        }
    });

});

// Image Filters
var galleryItems,
    filterTexts;
document.addEventListener('DOMContentLoaded', function() {
    galleryItems = document.querySelectorAll('.sqs-gallery-design-grid .slide');
    galleryItems.forEach(item => {
        let category = item.querySelector('a').getAttribute('data-title');
        if (category) {
            let firstLetter = category.charAt(0).toLowerCase();
            let restOfString = category.slice(1);
            let newCategory = (firstLetter + restOfString).replace(/\s/g, '');
            if (newCategory) {
                item.classList.add(newCategory);
            }
        }
    });

    let watermark = document.querySelector('.watermark');
    let pageIcon = document.querySelector('.introTitle i');
    if (pageIcon) {
        watermark.classList.add(pageIcon.classList[1]);
    }
    let startingBtns = document.querySelectorAll('.startingBtn');
    startingBtns.forEach(btn => {
        btn.click();
    });
});
function imgFilter(btn) {
    let filter = btn.getAttribute('data-filter');
    let thisBlock = btn.closest('.col');
    let filterBtns = thisBlock.querySelectorAll('.filterBtn');
    filterTexts = thisBlock.querySelectorAll('.filterText');
    let thisGallery = thisBlock.querySelector('.sqs-gallery-design-grid');
    galleryItems = thisGallery.querySelectorAll('.slide');
    filterBtns.forEach(filterBtn => {
        filterBtn.classList.remove('activeBtn');
    });
    btn.classList.add('activeBtn');
    filterTexts.forEach(filterText => {
        let target = filterText.getAttribute('data-target');
        if (filter == target) {
            filterText.classList.remove('hide');
        } else {
            filterText.classList.add('hide');
        }
    });
    galleryItems.forEach(item => {
        if (item.classList.contains(filter)) {
            item.classList.remove('hide');
        } else {
            item.classList.add('hide');
        }
    });
}