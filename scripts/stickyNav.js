var stickyNav = $(".aside > .row > .col"),
    stickyTop = stickyNav.offset().top - 20

$(document).on("scroll", function() {
    var scrollTop = $(this).scrollTop();

    if (scrollTop > stickyTop) {
        stickyNav.addClass("stickyNav");
    } else if (scrollTop <= stickyTop) {
        stickyNav.removeClass("stickyNav");
    }
    $('.stickyNav').css('width', $('.aside').width())
});
