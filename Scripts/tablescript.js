$(document).ready(function() {
    $('#datatable').dataTable();
    
     $("[data-toggle=tooltip]").tooltip();
    
} );

$('.nav.nav-tabs > li').on('click', function(e) {
    $('.nav.nav-tabs > li').removeClass('active');
    $(this).addClass('active');
});    
