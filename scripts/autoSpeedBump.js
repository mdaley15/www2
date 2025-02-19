
$( document ).ready(function() {

    $( 'a' ).each(function() {
        theLink = this.hostname+'';
        if( location.hostname === this.hostname || !this.hostname.length) {
            $(this).addClass('local');
        } else {
            console.log(this.hostname);
            console.log('----------------------');
            $(this).addClass('external');
        }

        // Add any exceptions here
        switch(theLink) {
            case 'www.financial-net.com' :
                $(this).addClass('local');
                $(this).removeClass('external');
            break;
            case 'www.ea.financial-net.com' :
                $(this).addClass('local'); 
                $(this).removeClass('external');
            break;
            default:
                $(this).addClass('local');
        }
    });
    $('.external').each(function(){
    theLink = $( this ).attr('href');
    $( this ).attr('data-link',theLink );
    $( this ).attr('href','#' );
    $( this ).addClass('modalPopUp');
    });
});