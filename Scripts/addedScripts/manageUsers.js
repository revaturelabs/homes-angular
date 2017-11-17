$('.nav.nav-tabs > li').on('click', function(e) {
    $('.nav.nav-tabs > li').removeClass('active');
    $(this).addClass('active');
});  