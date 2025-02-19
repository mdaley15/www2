$( document ).ready(function() {
    var PDFObjects = [];
    Array.from( document.querySelectorAll( 'a' ) ).forEach( a => {    
        a.classList.add( location.hostname === a.hostname || !a.hostname.length ? 'local' : 'external' );
    });
    $('.external').each(function(){
    theLink = $( this ).attr('href');
        
    fileType = theLink.split('.').pop();
    // console.log(fileType);
    if(fileType == 'pdf')
    {
        $(this).addClass('highlightLink');
        PDFObjects.push($(this).text());
    }
    for(var i = 0;i<PDFObjects.length;i++)
    {
    //    console.log(PDFObjects[i]+'<<---------------------------------------------- Foriegn PDF');
    }
    

    });
});
