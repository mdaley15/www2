$(document).ready(function() {

    $(".collapsible-header").click(function () {
        var current = this;
        $(".collapsible-header").each(function() {
            if($(this) !== current) {
                $(this).children(".sign").html('<i class="fa-solid fa-plus"></i>');
            } 
        });
    
        if($(this).hasClass("active")) {
            console.log('Active');
            $(this).children(".sign").html('<i class="fa-solid fa-minus"></i>');
        } else {
            $(this).children(".sign").html('<i class="fa-solid fa-plus"></i>');
        }
    });
});