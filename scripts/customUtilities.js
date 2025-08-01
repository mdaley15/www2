$( document ).ready(function() {
    let introBlock = document.querySelector('.Intro');
    let body = document.querySelector('body');
    if (!introBlock) {
        let main = document.querySelector('.Main');
        if (main) {
            body.classList.add('noIntro');
        }
    }
    
    const allLinks = document.querySelectorAll('a');
    allLinks.forEach(link => {
        if (link.textContent.includes('inter-state')) {
            link.classList.add('noWrap');
        }
    });

    $('.whatWeDo .Header-nav-item:first-child > a.Header-nav-folder-title').attr('href', '/school-photography');
    $('.Mobile-overlay-nav--secondary .Mobile-overlay-nav-item:first-child > span').contents().unwrap().wrap('<a href="/school-photography"></a>');
    $('.whatWeDo .Header-nav-item:nth-child(2) > .Header-nav-folder-title').attr('href', '/yearbooks');
    $('.Mobile-overlay-nav--secondary .Mobile-overlay-nav-item:nth-child(6) > span').contents().unwrap().wrap('<a href="/yearbooks"></a>');

    // console.log(window.location);
    var pathName = window.location.pathname,
        href = window.location.href;
    // if (href == "https://schools.inter-state.com/" || "https://schools.inter-state.com" || "schools.inter-state.com" || "schools.inter-state.com/") {
    //     // window.location.replace("https://inter-state.com/");
    //     // console.log('Redirect this href');
    // } else {
    //     // console.log(href);
    // }
    let mobileLinks = document.querySelectorAll('.Mobile-overlay-menu-main a');
    mobileLinks.forEach(link => {
        let href = link.getAttribute('href');
        if (href == pathName) {
            link.classList.add('active');
        }
    });
    if (pathName.includes("/yearbooks")) {
        $('.whatWeDo .Header-nav-item:nth-child(2) > .Header-nav-folder-title').addClass('active');
    }
    if (pathName.includes("/school-photography")) {
        $('.whatWeDo .Header-nav-item:first-child > .Header-nav-folder-title').addClass('active');
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
            // console.log('Url does NOT contain image src');
            formImgWrap.classList.add('hide');
        }
        let filename = getStringAfterLastSlash(queryString);
        let category = getStringAfterQM(queryString);
        let categoryWSpaces = addSpacesToCamelCase(category);
        // console.log(categoryWSpaces);
        let imgInfo = [];
        var fileInfo;
        for (let i = 0; i < filename.length; i++) {
            fileInfo = filename[i];
            const fileWithSpaces = addSpacesToCamelCase(fileInfo);
            imgInfo.push(fileWithSpaces);
        }
        // console.log(fileInfo);
        if (fileInfo == 'webp') {
            imgCategory.innerText = categoryWSpaces.split('/')[0];
            formImg.classList.add('webp');
        } else {
            imgCategory.innerText = categoryWSpaces;
        }
        // if (imgInfo.length === 1) {
        //     imgCategory.innerText = imgInfo[0];
        //     imgSubCategory.remove();
        //     threeSplit.remove();
        //     imgStyle.remove();
        // }
        // if (imgInfo.length === 2) {
        //     imgSubCategory.remove();
        //     threeSplit.remove();
        //     imgCategory.innerText = imgInfo[0];
        //     imgStyle.innerText = imgInfo[1];
        // }
        // if (imgInfo.length === 3) {
        //     imgCategory.innerText = imgInfo[0];
        //     imgSubCategory.innerText = imgInfo[1];
        //     imgStyle.innerText = imgInfo[2];
        // }
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
            // thumb.parentElement.classList.add('sqs-active-slide');
        }
    });
    document.addEventListener('contextmenu', function(event) {
        if (event.target.tagName === 'IMG') {
            // ADD WHEN SITE GOES LIVE
            // event.preventDefault();
        }
    });
    var titles = document.querySelectorAll('.image-caption strong, h2, h3, h4');
    titles.forEach(title => {
        let titleText = title.textContent;
        const hasPlus = /\+/g.test(titleText);
        if (hasPlus) {
            let plusSigns = titleText.replace(/\+/g, '<span class="drkOrange">+</span>');
            title.innerHTML = plusSigns;
        }
    });
    var paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(paragraph => {
        const aTag = paragraph.querySelector('a');
        const strong = paragraph.querySelector('strong');
        let paragraphText = paragraph.textContent;
        const hasHyphenatedWord = /\b\w+-\w+\b/.test(paragraphText);
        const regex = /(?=\S*['-])([a-zA-Z0-9'-]+)/gm;
        if (hasHyphenatedWord) {
            if (strong) {
                let strongText = strong.textContent;
                let noWrap = strongText.replace(regex, '<span class="noWrap">$&</span>');
                strong.innerHTML = noWrap;
            } else if (aTag) {
                let aText = aTag.textContent;
                let noWrap = aText.replace(regex, '<span class="noWrap">$&</span>');
                aTag.innerHTML = noWrap;
            } else {
                let noWrap = paragraphText.replace(regex, '<span class="noWrap">$&</span>');
                paragraph.innerHTML = noWrap;
            }
        }
    });
});

function getStringAfterLastSlash(str) {
    const lastSlashIndex = str.lastIndexOf('/');
    if (lastSlashIndex === -1) {
        return str; // Return the original string if no slash is found
    }
    return str.substring(lastSlashIndex + 1).split('.')[0].split('-');
}
function getStringAfterQM(str) {
    const lastQMIndex = str.lastIndexOf('?');
    if (lastQMIndex === -1) {
        return str; // Return the original string if no slash is found
    }
    return str.substring(lastQMIndex + 1);
}
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
                if (itemLink.getAttribute('role') === 'button') {
                    lightboxFilter(this);
                }
            });
            itemLink.addEventListener('keydown', function(e) {
                if (e.which == 13 || e.which == 32) {
                    if (itemLink.getAttribute('role') === 'button') {
                        lightboxFilter(this);
                    }
                };
            });
        });
    });

    let watermark = document.querySelector('.watermark');
    let pageIcon = document.querySelector('.introTitle i');
    let intro = document.querySelector('.Intro');
    if (pageIcon) {
        const mainContent = document.querySelector('.Main');
        if (mainContent) {
            let rect = mainContent.getBoundingClientRect();
            if (watermark) {
                watermark.classList.add(pageIcon.classList[1]);
                window.addEventListener('scroll', function() {
                    if (intro) {
                        if (Number(window.scrollY) >= Number(rect.top-85)) {
                            watermark.classList.add('fixed');
                        } else {
                            watermark.classList.remove('fixed');
                        }
                    } else {
                        if (Number(window.scrollY) >= Number(rect.top+35)) {
                            watermark.classList.add('fixed');
                        } else {
                            watermark.classList.remove('fixed');
                        }
                    }
                });
            }
        }
    }
    let startingBtns = document.querySelectorAll('.startingBtn');
    startingBtns.forEach(btn => {
        // btn.click();
        imgFilter(btn);
    });
    var toTop = document.getElementById('toTop');
    toTop.focus();
    toTop.click();
});
function imgFilter(btn) {
    filter = btn.getAttribute('data-filter');
    let thisBlock = btn.closest('.col');
    let filterBtns = thisBlock.querySelectorAll('.filterBtn');
    filterTexts = thisBlock.querySelectorAll('.filterText');
    thisGallery = thisBlock.querySelector('.sqs-gallery-design-grid');
    if (thisGallery) {
        galleryItems = thisGallery.querySelectorAll('.slide');
    }
    filterBtns.forEach(filterBtn => {
        filterBtn.classList.remove('activeBtn');
        filterBtn.setAttribute('tabindex','-1');
        filterBtn.setAttribute('aria-selected','false');
    });
    btn.classList.add('activeBtn');
    btn.removeAttribute('tabindex');
    btn.setAttribute('aria-selected','true');
    filterTexts.forEach(filterText => {
        let target = filterText.getAttribute('data-target');
        if (filter == target) {
            filterText.classList.remove('hide');
        } else {
            filterText.classList.add('hide');
        }
    });
    if (galleryItems) {
        galleryItems.forEach(item => {
            const itemClass = item.getAttribute('data-class');
            if (itemClass === filter || filter === 'all') {
                item.classList.remove('hide');
            } else {
                item.classList.add('hide');
                item.style.pointerEvents = 'none';
            }
            // if (item.classList.contains(filter)) {
            //     item.classList.remove('hide');
            // } else {
            //     item.classList.add('hide');
            //     item.querySelector('a').classList.remove('js-gallery-lightbox-opener');
            // }
        });
    }
}
function lightboxFilter(itemLink) {
    var pathName = window.location.pathname;
    // console.log(pathName);
    const filterClasses = [];
    let thisBlock = itemLink.closest('.collapsible-body');
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
    lightboxItems.forEach(item => {
        let classList = item.classList;
        let lastClass = classList[classList.length - 1];
        // console.log(lastClass);
        let img = item.querySelector('.thumb-image');
        let imgDataSrc = img.getAttribute('data-src');
        let fileType = imgDataSrc.split('.').pop();
        var coverPath;
        
        if ((pathName.includes("/cover-designs-themes")) || (pathName.includes("/sports-and-clubs-photography") && thisBlock.classList.contains('switchImgs'))) {
            let lastSlashIndex = imgDataSrc.lastIndexOf('/');
            let filename = imgDataSrc.substring(lastSlashIndex + 1);
            filename = filename.split(".", 1)[0];
            let newImgPth = '../assets/'+filename+'.webp';
            if (window.innerWidth > 640) {
                img.setAttribute('data-src', '');
                img.setAttribute('src', '');
                img.setAttribute('data-image', '');
                img.setAttribute('data-src', newImgPth);
                img.setAttribute('src', newImgPth);
            }
            coverPath = newImgPth;
        };
        if (pathName.includes("/cover-designs-themes")) {
            img.setAttribute('alt', 'Yearbook cover assets');
            img.classList.add('ybAssets');
        }
        if (pathName.includes("/sports-and-clubs-photography") && thisBlock.classList.contains('switchImgs')) {
            img.setAttribute('alt', 'Sports + Clubs image assets');
            img.classList.add('scAssets');
        }
        let imgRatio = img.getAttribute('data-image-dimensions');
        let width = Number(imgRatio.split('x', 1)[0]);
        let height = Number(imgRatio.split('x')[1]);
        if (width < height) {
            img.classList.add('portrait');
        } else if (width == height) {
            img.classList.add('square');
        } else {
            img.classList.add('landscape');
        }
        let padder = item.querySelector('.sqs-lightbox-padder');
        let infoBtn = document.createElement('a');
        const text = document.createTextNode('Get More Info');
        infoBtn.appendChild(text);
        infoBtn.classList.add('allBtns');
        var link;
        if ((pathName.includes("/cover-designs-themes")) || (pathName.includes("/sports-and-clubs-photography") && thisBlock.classList.contains('switchImgs'))) {
            link = '/contact-us?' + coverPath+'?'+lastClass+'/webp';
        } else {
            link = '/contact-us?' + imgDataSrc+'?'+lastClass;
        }
        infoBtn.setAttribute('href', link);
        padder.appendChild(infoBtn);
    });

    let activeFilter = thisBlock.querySelector('.activeBtn');
    if (activeFilter) {
        activeFilter = activeFilter.getAttribute('data-filter');
        let activeItems = [];
        lightboxItems.forEach(item => {
            if (item.classList.contains(activeFilter)) {
                activeItems.push(item);
                item.classList.remove('hide');
            } else {
                item.classList.add('hide');
                setTimeout(function() {
                    item.remove();
                }, 2000);
            }
        });
        // console.log(activeItems);
        if (activeItems.length === 1) {
            let prev = document.querySelector('.sqs-lightbox-previous');
            let next = document.querySelector('.sqs-lightbox-next');
            prev.remove();
            next.remove();
        }
    }
}
document.addEventListener('click', function(event) {
    const lightbox = document.querySelector('.yui3-lightbox2');
    if (lightbox) {
        const closeBtn = lightbox.querySelector('.sqs-lightbox-close');
        const el = lightbox.querySelector('.yui3-lightbox2-content');
        if (el && !el.contains(event.target)) {
            closeBtn.click();
        }
    }
});
var popup,
    animatedPop,
    submitMessage;
function waitForElementObserver(selector, callback) {
    const observer = new MutationObserver((mutations) => {
        if ((popup = document.querySelector('.yui-popup-container-node')) && (animatedPop = document.querySelector('.sqs-slide-layer-content'))) {
            observer.disconnect();
            callback();
        }
    });
    const otherObserver = new MutationObserver((mutations) => {
        if (submitMessage = document.querySelector('.submitted-message')) {
            otherObserver.disconnect();
            callback();
        }
    });
    observer.observe(document.documentElement, {
        childList: true,
        subtree: true,
    });
    otherObserver.observe(document.documentElement, {
        childList: true,
        subtree: true,
    });
}
waitForElementObserver(popup || submitMessage, () => {
    if (popup) {
        let body = document.querySelector('body');
        // console.log('Popup exists!');
        // console.log(popup);
        // console.log(animatedPop);

        body.style.overflow = 'hidden';
        document.addEventListener('click', function(event) {
            const closeBtn = popup.querySelector('.sqs-popup-overlay-close');
            const el = popup.querySelector('.sqs-slice-group');
            if (el && !el.contains(event.target)) {
                closeBtn.click();
                body.style.overflow = 'auto';
                body.style.overflowX = 'hidden';
            }
        });
        let modal = popup.querySelector('.sqs-popup-overlay');
        modal.setAttribute('aria-modal', 'true');
        
        $('#sqs-slash-page-header').contents().unwrap().wrap('<div id="sqs-slash-page-header"></div>');

        animatedPop.addEventListener('mouseenter', function(event) {
            animatedPop.classList.add('pause');
        });
        animatedPop.addEventListener('mouseleave', function(event) {
            animatedPop.classList.remove('pause');
        });
    }
    if (submitMessage) {
        let formWrapper = document.getElementById('contactFormWrap');
        requestAnimationFrame(() => {
            const height = submitMessage.offsetHeight;
            formWrapper.style.minHeight = height+"px";
        });
        let hideOnSubmit = document.querySelector('.hideOnSubmit');
        const formImgWrap = document.querySelector('.formImgWrap');
        hideOnSubmit.classList.add('hide');
        formImgWrap.classList.add('hide');
    }
});

function anchorScroll() {
    if (window.location.hash) {
        var hash = window.location.hash.substring(1);
        const target = document.getElementById(hash);
        const targetHash = document.getElementById(hash+'_hash');
        // console.log(target,targetHash);
        var offset = -100; // <-- change the value here
        if (target || targetHash) {
            $('body').removeClass('is-mobile-overlay-active');
        }
        if (targetHash) {
            let expanded = targetHash.getAttribute('aria-expanded');
            if (expanded) {
                // console.log(expanded);
                if (expanded == 'false') {
                    targetHash.click();
                } else {
                    setTimeout(function() {
                        window.scrollTo(0,0);
                        $('html, body').animate({
                            scrollTop: targetHash.getBoundingClientRect().top + offset
                        }, 1000);
                    }, 500);
                }
            } else {
                targetHash.click();
            }
        }
        if (target) {
            setTimeout(function() {
                window.scrollTo(0,0);
                $('html, body').animate({
                    scrollTop: target.getBoundingClientRect().top + offset
                }, 1000);
            }, 500);
        }
    }
}