$(document).ready(function () {
    $('a[href^="#"]').on('click', function (event) {

        var target = $(this.hash);

        if (target.length) {
            event.preventDefault();
            if ($(window).width() < 400) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 100
                }, 1000);
            }
            else {
                $('html, body').animate({
                    scrollTop: target.offset().top - 100
                }, 1000);
            }
        }
    });

    $(".nav-link").click(
        function () {
            $('.navbar-collapse').collapse('hide');
        }
    );
})
