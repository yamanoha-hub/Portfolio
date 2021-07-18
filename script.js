$(function(){
  $('.nav-btn').on('click', function() {
    $(this).toggleClass('active');
    $('.open-menu').toggleClass('open');
    return false;
  });

  $('.menu').hover(
    function() {
      $('.menu-content').addClass('menu-slide');
    },
    function() {
      $('.menu-content').removeClass('menu-slide');
    }
  )
  

  $('#page-top').click(function() {
    $("html, body").animate({scrollTop:0}, 500);
    return false;
  });
});