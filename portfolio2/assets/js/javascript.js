$(document).ready(function () {
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#dismiss, .overlay').click(function () {
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
        $('#sidebar').hide('slow');
    });

    $('#sidebarCollapse').click(function () {
        $('#sidebar').addClass('active');
        $('.overlay').addClass('active');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
        $('#sidebar').show('slow');
    });
});