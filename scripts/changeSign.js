$(document).ready(function() {

    $(".collapsible-header").click(function () {
        var current = this;
        $(".collapsible-header").each(function() {
            if($(this) !== current) {
                $(this).children(".fa-solid").removeClass('fa-minus').addClass('fa-plus');
            } 
        });
    
        if($(this).hasClass("active")) {
            $(this).children(".fa-solid").removeClass('fa-minus').addClass('fa-plus');
        } else {
            $(this).children(".fa-solid").removeClass('fa-plus').addClass('fa-minus');
        }
    });
});