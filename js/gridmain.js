$(document).ready(function(){  
    
    $('#p-jump-b').click(function () {
        $('#p-jump-l').slideToggle(200);
        $('#p-jump-b').toggleClass('p-jump-active circle-0');
        $('.circle-1').toggle(0);
    });
    
    $('.m-nav').click(function() {
        $(this).toggleClass('m-nav-active');
        $('.m-nav-l').slideToggle(200);
        
    });
    
    $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
        
    });
    
    $('#p-jump-l > li > a').click(function() {
        $('#p-jump-l').slideToggle(200);
        $('#p-jump-b').toggleClass('p-jump-active circle-0');
        $('.circle-1').toggle(0);
    });
});