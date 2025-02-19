$( document ).ready(function() {
    $('.modalPopUp').click(function(event){
        console.log('Modal Click');
        event.preventDefault();
        theLink = $(this).attr("data-link"); 
        $('.popbutton').attr('href', theLink);
        $('.popoverlay').addClass('modalShow');
        $('.popoverlay').removeClass('modalHide');
        $('.popoverlay').removeClass('resetModal');
        $('.popoverlay').addClass('Absolute-Center');
        $("#omnipop1").focus();
    });
    $('#modalPopUp > img').click(function(event){
        event.preventDefault();
        theLink = $(this).parent().attr("data-link"); 
        $('.popbutton').attr('href', theLink);
    });
    $('#modalPopUp > img').click(function(event){
        event.preventDefault();
        theLink = $(this).attr("data-link"); 
        $('.popbutton').attr('href', theLink); 
    });

    $('#modalPopUp > img').click(function() {
        $('.popoverlay').addClass('modalShow');
        $('.popoverlay').removeClass('modalHide');
        $('.popoverlay').removeClass('resetModal');
        $('.popoverlay').addClass('Absolute-Center');
    });
    $('.closepop, .returnToSite').click(function() {
        $('.popoverlay').addClass('modalHide');
        $('.popoverlay').removeClass('modalShow');
        $('.popoverlay').removeClass('Absolute-Center');
        $('.popoverlay').addClass('resetModal');
    });
    $('.popbutton').click(function() {
        $('.popoverlay').addClass('modalHide');
        $('.popoverlay').removeClass('modalShow');
        $('.popoverlay').removeClass('Absolute-Center');
        $('.popoverlay').addClass('resetModal');
    });
});