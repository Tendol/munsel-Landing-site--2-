
// Smooth Scroll
$(".learn-more").click(function() {
    $('html,body').animate({
        scrollTop: $(".our-story").offset().top},
        'slow');
});
// Responsive menu js
$(document).ready(function(){
    var topSpace = $('.site-header').height() -2;
  });
  var siteToggle = $('.navbar-toggler'),
      layer=$('.bg-dark-overlay'),
      siteMenu= $('.navbar-collapse');
  siteToggle.on('click', function(){
    layer.toggleClass('active');
    $('body').toggleClass('overflow-hidden');
  });
  layer.on('click', function(){
    $(this).removeClass('active');
    siteMenu.removeClass('show');
    siteToggle.addClass('collapsed');
    $('body').removeClass('overflow-hidden');

  });
