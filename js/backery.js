$(function () {
    window.onscroll = function () {
        scrollFunction();
    };
    
    $("#btn-top").click(function() {
        topFunction();
    });

    $('.contact-us').parallax({
        imageSrc: 'images/b7.png'
    });

    $('[data-toggle="popover"]').popover({
        placement: "top",
        trigger: "hover"
    })
    $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 10000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
    customCSSDomElement();
});

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("btn-top").style.display = "block";
    } else {
        document.getElementById("btn-top").style.display = "none";
    }
}

function customCSSDomElement() {
    if (navigator.appVersion.indexOf("Chrome/") != -1 && navigator.appVersion.indexOf("Edge") === -1) {
        $('.menu-wrapper').css("margin-top", "-15vh");
    }
}