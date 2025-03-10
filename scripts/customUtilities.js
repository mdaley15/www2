$( document ).ready(function() {

    var pathName = window.location.pathname;
    if (pathName.includes("search") || pathName.includes("events/")) {
        // $(".loginBox").remove();
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
        console.log('Is IE');
    } else {
        console.log('Is NOT IE');
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
        console.log(ariaLabel);
    });

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

    $('.sqs-block-button-element, .sqs-system-button').addClass('lift allBtns');

    $('a.previous').append('<i class="fas fa-chevron-left"></i>');
    $('a.next').append('<i class="fas fa-chevron-right"></i>');

    $('.sqs-block-button-element, .sqs-system-button, .meta a').addClass('lift allBtns');
    

    let accordionDescs = document.querySelectorAll('div.accordion-item__description');
    let newBlock = document.createElement("div");
    newBlock.classList.add("sqs-block", "image-block", "sqs-block-image");
    newBlock.attr("data-block-type", "5");

    for (let i = 0; i < accordionDescs.length; i++) {
        let accordionDesc = accordionDescs[i]
        console.log(i);
        accordionDesc.append(newBlock);
    }
});