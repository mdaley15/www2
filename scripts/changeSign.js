$(document).ready(function() {

    $(".collapsible-header").click(function () {
        var current = this;
        $(".collapsible-header").each(function() {
            if($(this) !== current) {
                $(this).children(".fa-solid").removeClass('fa-plus');
            } 
        });
    
        if($(this).hasClass("active")) {
            $(this).children(".fa-solid").html('<i class="fa-solid fa-plus"></i>');
        } else {
            $(this).children(".fa-solid").html('<i class="fa-solid fa-minus"></i>');
        }
    });
});