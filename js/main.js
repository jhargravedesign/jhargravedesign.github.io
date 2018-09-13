$(document).ready(function(){
    
    var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 15,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },
    });
    
    $('.go-back').click(function(){
        window.history.back();
    }); 

    
    var animation = lottie.loadAnimation({
    container: document.getElementById('icon-target'), // the dom element
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path:"/js/logo-morpher-4.json" // the animation data
    });
    
    function stateChange(newState) {
    setTimeout(function () {
        if (newState == -1) {
            animation.setSpeed(4);
            animation.play();
        }
    }, 800);
}
    
    stateChange(-1);
    

    

$('.logo').mouseenter(function(){
        animation.setDirection(-1);
        animation.play();
    
});
    $('.logo').mouseleave(function(){
        animation.setDirection(1);
        animation.play();
    
});
    
$(window).on( 'resize', function () {
    $('.swiper-container').height( $('.swiper-container').width());
}).resize();
    
    


    
});