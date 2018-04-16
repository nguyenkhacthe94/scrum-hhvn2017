$(function(){
    // Check the initial Poistion of the Sticky Header
    var stickyHeaderTop = $('#menu-content').offset().top;

    $(window).scroll(function(){
        if( $(window).scrollTop() > stickyHeaderTop ) {
            $('#menu-content').css({position: 'fixed', top: '0px'});
            $('#news-body').css('display', 'block');
            $('#sponsor-content').css('display', 'block');

        } else {
            $('#menu-content').css({position: 'static', top: '0px'});
            $('#footer-content').css('display', 'none');
        }
    });
});