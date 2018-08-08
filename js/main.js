$(document).ready(function () {
    $('#m-menu').click(function () {
        $(this).toggleClass('m-menu-active');
        $('#m-nav').slideToggle(100); 
        $('header').toggleClass('no-shadow');
    });
    
    $('.product-img').click(function () {
        var bg = $(this).css('background-image');
        $('.lightbox-wrap').toggleClass('lightbox-active');
        $('.lightbox').css("background-image", bg);
    });
    
    $('.lightbox-wrap').click(function () {
       $('.lightbox-wrap').toggleClass('lightbox-active'); 
        
    });


});


