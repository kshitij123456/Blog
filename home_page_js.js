$("#arrow").click(function() {
    $('html, body').animate({
        scrollTop: $("#seg_two").offset().top - 60
    }, 500);
});