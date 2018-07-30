$(document).ready(function () {
    $('#m-menu').click(function () {
        $(this).toggleClass('m-menu-active');
        $('#m-nav').slideToggle(100); 
        $('header').toggleClass('no-shadow');
    });
});
