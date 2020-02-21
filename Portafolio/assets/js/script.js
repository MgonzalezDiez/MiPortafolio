$(document).ready(function () {
    $('a[href^="#"]').on('click', function (event) {

        var target = $(this.hash);

        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - 100
            }, 1000);
        }

    });
})
