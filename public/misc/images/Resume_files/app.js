/**
 * Created by prathamesh on 3/14/17.
 */
$(window).scroll(function() {
    if ($(".navbar").offset().top > 10) {
        $('#navbar-properties').addClass('affix');
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $('#navbar-properties').removeClass('affix');
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});
