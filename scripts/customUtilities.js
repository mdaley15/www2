$( document ).ready(function() {

    $('.whatWeDo .Header-nav-item:first-child > a.Header-nav-folder-title').removeAttr('href');
    $('.whatWeDo .Header-nav-item:nth-child(2) > .Header-nav-folder-title').attr('href', '/school-yearbooks');

    var pathName = window.location.pathname;
    if (pathName.includes("/school-yearbooks")) {
        $('.whatWeDo .Header-nav-item:nth-child(2) > .Header-nav-folder-title').addClass('active');
    }
    if (pathName.includes("/contact-us")) {
        $('.whatWeDo .Header-nav-item:nth-child(3)').addClass('active');
        const queryString = window.location.search.substring(1);
        const urlParams = new URLSearchParams(queryString);

        const formImgWrap = document.querySelector('.formImgWrap');
        const formImgInfo = formImgWrap.querySelector('.formImgInfo');
        const imgCategory = document.getElementById('imgCategory');
        const imgSubCategory = document.getElementById('imgSubCategory');
        const threeSplit = formImgInfo.querySelector('.threeSplit');
        const imgStyle = document.getElementById('imgStyle');
        const copiedText = document.getElementById('copied');
        const formImg = document.getElementById('formImg');
        formImg.setAttribute('src',queryString);
        if (queryString == "") {
            console.log('Url does NOT contain image src');
            formImgWrap.classList.add('hide');
        }
        let filename = getStringAfterLastSlash(queryString);
        var imgInfo = [];
        for (let i = 0; i < filename.length; i++) {
            let fileInfo = filename[i];
            const fileWithSpaces = addSpacesToCamelCase(fileInfo);
            imgInfo.push(fileWithSpaces);
        }
        if (imgInfo.length === 1) {
            imgCategory.innerText = imgInfo[0];
            imgSubCategory.remove();
            threeSplit.remove();
            imgStyle.remove();
        }
        if (imgInfo.length === 2) {
            imgSubCategory.remove();
            threeSplit.remove();
            imgCategory.innerText = imgInfo[0];
            imgStyle.innerText = imgInfo[1];
        }
        if (imgInfo.length === 3) {
            imgCategory.innerText = imgInfo[0];
            imgSubCategory.innerText = imgInfo[1];
            imgStyle.innerText = imgInfo[2];
        }
        formImgInfo.addEventListener('click', function() {
            const text = this.innerText;
            navigator.clipboard.writeText(text)
              .then(() => {
                // formImgInfo.innerText = 'Copied to clipboard!';
                setTimeout(() => {
                    copiedText.style.opacity = 1;
                    copiedText.style.visibility = 'visible';
                }, 50);
                setTimeout(() => {
                    // formImgInfo.innerText = text;
                    copiedText.style.opacity = 0;
                    copiedText.style.visibility = 'hidden';
                }, 2000); // 1000 milliseconds = 1 second
              })
              .catch(err => {
                console.error('Failed to copy text: ', err);
                // Handle the error appropriately, e.g., show an error message to the user
              });
          });
    }
    function getStringAfterLastSlash(str) {
        const lastSlashIndex = str.lastIndexOf('/');
        if (lastSlashIndex === -1) {
            return str; // Return the original string if no slash is found
        }
        return str.substring(lastSlashIndex + 1).split('.')[0].split('-');
    }
    function addSpacesToCamelCase(fileInfo) {
        // return fileInfo.replace(/([A-Z])/g, ' $1').trim();
        const spacedString = fileInfo.replace(/([A-Z])/g, ' $1');
        return spacedString.charAt(0).toUpperCase() + spacedString.slice(1);
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
    filter,
    filterTexts,
    lightbox,
    lightboxItems;
document.addEventListener('DOMContentLoaded', function() {
    let galleries = document.querySelectorAll('.sqs-gallery-design-grid');
    galleries.forEach(gallery => {
        galleryItems = gallery.querySelectorAll('.slide');
        galleryItems.forEach((item, index) => {
            let itemLink = item.querySelector('a');
            let category = itemLink.getAttribute('data-title');
            if (category) {
                let firstLetter = category.charAt(0).toLowerCase();
                let restOfString = category.slice(1);
                let newCategory = (firstLetter + restOfString).replace(/\s/g, '');
                if (newCategory) {
                    item.classList.add(newCategory);
                    item.setAttribute('data-class',newCategory);
                }
            }
            itemLink.addEventListener('click', function(e) {
                lightboxFilter(this);
            });
        });
    });

    let watermark = document.querySelector('.watermark');
    let pageIcon = document.querySelector('.introTitle i');
    if (pageIcon) {
        watermark.classList.add(pageIcon.classList[1]);
        const mainContent = document.querySelector('.Main');
        let rect = mainContent.getBoundingClientRect();
        window.addEventListener('scroll', function() {
            // console.log(window.scrollY,rect.top);
            if (window.scrollY >= rect.top-85) {
                watermark.classList.add('fixed');
            } else {
                watermark.classList.remove('fixed');
            }
        });
    }
    let startingBtns = document.querySelectorAll('.startingBtn');
    startingBtns.forEach(btn => {
        btn.click();
    });
});
function imgFilter(btn) {
    filter = btn.getAttribute('data-filter');
    let thisBlock = btn.closest('.col');
    let filterBtns = thisBlock.querySelectorAll('.filterBtn');
    filterTexts = thisBlock.querySelectorAll('.filterText');
    thisGallery = thisBlock.querySelector('.sqs-gallery-design-grid');
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
            item.querySelector('a').classList.remove('js-gallery-lightbox-opener');
        }
    });
}
function lightboxFilter(itemLink) {
    const filterClasses = [];
    let thisBlock = itemLink.closest('.col');
    let thisGallery = thisBlock.querySelector('.sqs-gallery-design-grid');
    galleryItems = thisGallery.querySelectorAll('.slide');
    galleryItems.forEach(item => {
        let itemClass = item.getAttribute('data-class');
        filterClasses.push(itemClass);
    });
    lightbox = document.querySelector('.yui3-lightbox2');
    lightboxItems = lightbox.querySelectorAll('.sqs-lightbox-slide');
    filterClasses.forEach((str, index) => {
        if (lightboxItems[index]) {
            lightboxItems[index].classList.add(str);
        }
    });

    let activeFilter = thisBlock.querySelector('.activeBtn');
    if (activeFilter) {
        activeFilter = activeFilter.getAttribute('data-filter');
        console.log(activeFilter);
        lightboxItems.forEach(item => {
            if (item.classList.contains(activeFilter)) {
                item.classList.remove('hide');
            } else {
                item.classList.add('hide');
                setTimeout(function() {
                    item.remove();
                }, 2000);
            }
        });
    }
    let currentItem = lightbox.querySelector('.sqs-active-slide');
    let infoBtn = currentItem.querySelector('.sqs-lightbox-meta a');
    if (infoBtn) {
        let currentImg = infoBtn.closest('.sqs-lightbox-padder').querySelector('img');
        let imgSrc = currentImg.getAttribute('data-src');
        let link = infoBtn.getAttribute('href');
        link = '/contact-us?' + imgSrc;
        infoBtn.setAttribute('href', link);
    }

    lightboxItems.forEach(item => {
        let img = item.querySelector('.thumb-image');
        let imgRatio = img.getAttribute('data-image-dimensions');
        console.log(imgRatio);
    });
}
function getRenderedAspectRatio(itemImg) {
    const width = itemImg.naturalWidth;
    const height = itemImg.naturalHeight;
    return width / height;
}