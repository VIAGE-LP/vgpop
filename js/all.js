$(document).ready(function () {
//navbar menu 收合
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').removeClass('show');
    $('.navbar-toggler').addClass('collapsed');
    $('.navbar-light .navbar-toggler ').attr("aria-expanded","false");
});
//navbar menu動態
// $('.navbar-nav>li>a[href="#"], .logo-router>h1>a').on('click', function () {
//     $('html,body').animate({
//         scrollTop: 0,
//      }, 500);
// });
// $('.navbar-nav>li>a[href="#support"]').on('click', function () {
//     $('html,body').animate({
//         scrollTop: $('#support').offset().top,
//      }, 500);
// });
// $('.navbar-nav>li>a[href="#introduction"]').on('click', function () {
//     $('html,body').animate({
//         scrollTop: $('#introduction').offset().top,
//      }, 500);
// });
});
