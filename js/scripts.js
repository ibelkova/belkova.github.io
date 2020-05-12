$(document).ready(function () {
    //слайдер1
    $('.slider').slick({

        dots: true,
        adaptiveHeight: true,
        arrows: false,
        autoplay: 0,
        autoplaySpeed: 3000

    });
    if ($(window).width() < 400) {
        $('.slider .slick-dots').css({
            'display': 'none',
        });
    };
    $(window).scroll(function () {
        if ($(window).width() < 400) {
            $('.slider .slick-dots').css({
                'display': 'none',
            });
        } else {
            $('.slider .slick-dots').css({
                'display': 'inline',
            });
        }
    });
    //слайдер2
    $('.slider2').slick({
        autoplay: 1,
        autoplaySpeed: 10000
    });
    $('.slider2__image').on('load', function () {
        let height = $('.slider2__image').height();
        $('.slider2 .slick-arrow').height(height);
    });
    $(window).resize(function () {

        let height = $('.slider2__image').height();
        $('.slider2 .slick-arrow').height(height);
    });
    //Смена темы
    $('.dodic').attr('id', 'ban');
    $('.slider__bi h2').click(function () {

        if ($('.dodic').attr('id') == 'ban') {

            $('.main h2, .main p').css({ 'color': 'white' });
            $('body').css({ 'background': 'black' });
            $('footer').css({ 'background': 'white', 'color': 'black' });
            $('.dodic').attr('id', 'noban');
        } else {

            $('.main h2, .main p').css({ 'color': '#282828' });
            $('body').css({ 'background': 'white' });
            $('footer').css({ 'background': 'black', 'color': 'white' });
            $('.dodic').attr('id', 'ban');
        }
    });

});