$(window).load(function () {
    $("#preloader").fadeOut("slow");
});

$(document).ready(function () {


    new WOW().init();


    $('#top-nav').onePageNav({
        currentClass: 'current',
        changeHash: true,
        scrollSpeed: 1200
    });


    //animated header class
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        //console.log(scroll);
        if (scroll > 200) {
            //console.log('a');
            $(".navigation").addClass("animated");
            $(".animated img#logoLight").attr("hidden", "true")
            $(".animated img#logoDark").removeAttr("hidden")
        } else {
            //console.log('a');
            $(".navigation").removeClass("animated");
            $("img#logoDark").attr("hidden", "true")
            $("img#logoLight").removeAttr("hidden")
        }
    });

    

    $(".about-slider").owlCarousel({
        singleItem: true,
        pagination: true,
        autoPlay: 5000,
    });

    $year = $('#countdown_dashboard').data('year');
    $month = $('#countdown_dashboard').data('month');
    $day = $('#countdown_dashboard').data('day');
    $('#countdown_dashboard').countDown({
        targetDate: {
            'day': $day,
            'month': $month,
            'year': $year,
            'hour': 23,
            'min': 59,
            'sec': 59,
        },
        omitWeeks: true
    });

});