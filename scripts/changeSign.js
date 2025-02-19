$(document).ready(function() {

    $(".collapsible-header").click(function () {
        var current = this;
        $(".collapsible-header").each(function() {
            if($(this) !== current) {
                $(this).children(".sign").html('<i class="far fa-plus"></i>');
            } 
        });
    
        if($(this).hasClass("active")) {
            $(this).children(".sign").html('<i class="far fa-plus"></i>');
        } else {
            $(this).children(".sign").html('<i class="far fa-minus"></i>');
        }
    });
});