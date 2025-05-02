// add <squarespace:script src="compliance.js" combo = "false"/>
$(document).ready(function() {
    
    $('.external').append('<span class="sr-only">External Website</span>');
    $('main.Index').attr('id', 'main-content');
    $('#main-content').attr('tabindex', '0');
    $('.external').attr('onclick', 'focusMethod()');
    $('.external').attr('onkeypress', 'focusMethod()');
    $('.collapsible-header').attr('aria-expanded', 'false');
    $('.Mobile-overlay-nav').attr('role', 'list');
    $('.Mobile-overlay').addClass('notVisible');
    $('.Mobile-overlay').attr('tabindex', '0');
    $('.Mobile-overlay-folder').addClass('notVisible');
    // $('.Mobile-overlay-nav-item--folder').attr('aria-haspopup', 'true');
    $('.notVisible').attr('tabindex', '0');
    $('.is-active-folder').attr('tabindex', '0');
    $('.Mobile-overlay-folder-item--toggle').attr('role', 'button');
    $('i').attr('aria-hidden', 'true');
    $('.adaimages').attr('alt', '');

    $('a.external').click(function() {
        $('a#focusable').removeAttr('id');
        $(this).attr('id', 'focusable'); 
    });

    "use strict";

    focusMethod = function getFocus() {
        $("#omnipop1").focus();
    }
    focusReturn = function getFocus() {
        $('#omnipop1').addClass('resetHide');
        $('#omnipop1').removeClass('modalShow');
        $("#focusable").focus();
    }
    focusMain = function getFocus() {
        $("#main-content").focus();
    }
    shiftFocusBtn = function getFocus() {
        $("#focusBackToBtn").focus();
    }

    $('body').click(function() {
        $('.Header-nav-item').removeClass('active');
    });
    $('input').focus(function() {
        $('.Header-nav-item').removeClass('active');
    });

    $('.collapsible-header').each(function() {
        if ($(this).hasClass('active')) {
            $('.collapsible-header').attr('aria-expanded', 'true');
        } else {
            $(this).attr('aria-expanded', 'false');
        }
    });

    $('.collapsible-header').click(function() {
        $(this).closest('li').siblings('li').removeClass('active').find('.collapsible-header').removeClass('active').attr('aria-expanded', 'false');
        if ($(this).hasClass('active')) {
            $('.collapsible-header').attr('aria-expanded', 'false');
        } else {
            $(this).attr('aria-expanded', 'true');
        }
        // var header = el.find('.collapsible-header');
        var doc = document.documentElement;
        var top = (window.scrollY || doc.scrollTop)  - (doc.clientTop || 0);
        var objectTop = $(this).offset().top;
        console.log(top+",",objectTop);
    
        if(objectTop < top || objectTop > top + window.innerHeight - 100 ){
          $('html, body').animate({
            scrollTop: objectTop - 10
          }, 500);
        }
    });
    $('.collapsible-header').keydown(function(e) {
        if (e.which == 13 || e.which == 32) {
            $(this).closest('li').siblings('li').removeClass('active').find('.collapsible-header').removeClass('active').attr('aria-expanded', 'false');
            if ($(this).hasClass('active')) {
                $('.collapsible-header').attr('aria-expanded', 'false');
            } else {
                $(this).attr('aria-expanded', 'true');
            }
        };
    });

    $('.Mobile-bar-menu').click(function() {
        $('.Mobile-overlay').toggleClass('notVisible');
        $('.Mobile-overlay').focus();

        if ($('.Mobile-overlay').hasClass('notVisible')) {
            $(this).attr('aria-expanded', 'false');
            $('body').removeClass('is-mobile-overlay-active');
        } else {
            $(this).attr('aria-expanded', 'true');
            $('body').addClass('is-mobile-overlay-active');
        }
    });
    $('.Mobile-overlay-close, a.Mobile-overlay-folder-item, .Mobile-overlay-back').click(function() {
        $('.Mobile-overlay').addClass('notVisible');
        $('.Mobile-bar-menu').attr('aria-expanded', 'false');
        $('.Mobile-bar-menu').removeClass('activeNav');
        $('.Mobile-bar-menu').focus();
    });
    /*keydown*/
    // $(".Mobile-overlay-nav-item").keydown(function(e) {
    //     if (e.which == 13 || e.which == 32 || e.which == 9) {
    //         setTimeout(function() {
    //             var el = $(".Mobile-overlay-folder.is-active-folder").children(".Mobile-overlay-folder-item");
    //             $(el)[0].focus();
    //         }, 500);
    //     }
    // });
    /*Click*/
    // $('.Mobile-overlay-nav-item').on('click', function(e) {
    //     setTimeout(function() {
    //         var el = $('.Mobile-overlay-folder.is-active-folder').children('.Mobile-overlay-folder-item');
    //         $(el)[0].focus();
    //     }, 500);
    // });
    $(function() {
        $(".Mobile-overlay-folder-item--toggle").bind("tap", tapHandler);
 
        function tapHandler(event) {
            $(event.target).addClass("notVisible");
        }
    });
    var hamburger = document.getElementsByClassName("Mobile-bar-menu");
    var drawer = document.getElementsByClassName("Mobile-bar");
    var expanded = false;
    var hiddenClass = "hidden";
 
    $('.Mobile-overlay-nav-item--folder').on('click', function() {
        setTimeout(function() {
            if ($('.Mobile-overlay-folder').hasClass('is-active-folder')) {
                $('.Mobile-overlay-folder.is-active-folder').removeClass('notVisible');
            }
        }, 200);
 
    });
    $('.Mobile-overlay-folder-item--toggle').on('click', function() {
        $('.Mobile-overlay-folder').addClass('notVisible');
 
    });
    $('.Mobile-overlay-folder-item--toggle').on('click', function() {
        if ($('.Mobile-overlay-menu').hasClass('has-active-folder')) {
            $('.Mobile-overlay-folder').addClass('notVisible');
        }
    });
    $('.Mobile-overlay-folder-item.Mobile-overlay-folder-item--toggle').keydown(function(e) {
        if (e.which == 13 || e.which == 32) {
            console.log('TTT');
            if ($('.Mobile-overlay-menu').hasClass('has-active-folder')) {
                $('.Mobile-overlay-folder').addClass('notVisible');
            }
        }
    });
    $('.Mobile-overlay-folder-item.Mobile-overlay-folder-item--toggle').keydown(function(e) {
        if (e.which == 13 || e.which == 32) {
            $('a.Mobile-overlay-folder-item').focus();
        }
    });
     $(document).ready(function() {
         $('.Mobile-overlay-folder-item--toggle-label').keypress(function(event) {
             if (event.which == 13) {
                 event.preventDefault();
                 console.log('pressed');
                 $('.Mobile-overlay-folder').addClass('notVisible');
             }
         });
     });
});