jQuery(document).ready(function($) {
    $('.counter-number').counterUp({
        delay: 20,
        time: 1000,
    });
    $('.about-counter-number').counterUp({
        delay: 50,
        time: 2000,
    });
    var menu = $('.web-header-section');
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0 && menu.hasClass('web-header-section')) {
            menu.addClass('web-header-fixed');
        } else if ($(this).scrollTop() <= 0 && menu.hasClass('web-header-fixed')) {
            menu.removeClass('web-header-fixed');
        }
    });


});