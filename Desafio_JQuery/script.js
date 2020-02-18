$(document).ready(function () {

    $("li").each(function (index) {
        console.log(index + ": " + $(this).text());
    });

    $(function () {
        $('.socialnetworks li a').each(function (index) {
            $(this).attr("target", "_blank");
            // var i = index;
            // console.log(i)
            //if ($("a:first-child")) {
            var texto = $(this).text()
            if (texto === "Facebook") {
                $(this).prepend('<i class="fab fa-facebook-f"></i>' + " ")
            }
            if (texto === "Instagram") {
                $(this).prepend('<i class="fab fa-instagram"></i>' + " ")
            }
            if (texto === "Twitter") {
                $(this).prepend('<i class="fab fa-twitter"></i>' + " ")
            }
            if (texto === "Snapchat") {
                $(this).prepend('<i class="fab fa-pinterest"></i>' + " ")
            }
        });
    });

    $("h2").each(function () {
        var texto = $(this).text();
        if (texto.trim() === "Segunda sección") {
            $('h2 ul.socialnetworks li').each(function () {
                var texto1 = $(this).text();
                console.log(texto1)
            })
            $("ul.socialnetworks").children("ul li:eq(7)").append("<ul><li><a href='#'>link 4.a</a></li ></ul>");

            $('ul li:eq(7)').after("<li><a href='#'>link 5</a></li>")

        }
    })

    $("h2").click(function () {
        $(this).css("color", "red");
    });
});