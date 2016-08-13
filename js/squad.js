$(document).ready(function () {

    /*drop-down-menu*/
    var dropdownMenu = $('.dropdown-menu');
    dropdownMenu.hide();

    $('a[href^=#dropdown]').toggle(function () {
        dropdownMenu.show();
    }, function () {
        dropdownMenu.hide();
    }); 

    /*nav*/
    var idNav = $('#nav-site');
    $('.button').toggle(function () {
        idNav.slideDown();
        idNav.addClass('active');
    }, function () {
        idNav.slideUp();
        idNav.removeClass('active');
    });

    $(window).resize(function () {
        var theClass = idNav.attr('class');
        if ($(window).width() >= '765') {
            idNav.show();
        }
        else if (theClass != 'active' && $(window).width() <= '765') {
            idNav.hide();
        }
    });

    jQuery(document).ready(function () {
        var theClass = idNav.attr('class');
        if (theClass != 'active' && $(window).width() <= '765') {
            idNav.hide();
        }
    });

    /*scroll*/
    $('a[href^="#"]').click(function (eventObject) {
        eventObject.preventDefault();
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top - 100}, 500);
        }
        return false;
    });

    /*arrow*/
    $('.top').click(function () {
        $('html, body').animate({ scrollTop: $('#service').offset().top - 100}, 500);
    });

    $('.bottom').click(function () {
        $('html, body').animate({ scrollTop: $('#logo').offset().top - 100}, 500);
    });
});
