$(function(){

  //ページ内リンクスムーススクロール
  $('.menu-content-inner a[href^="#"]').on('click', function () {
    var href = $(this).attr("href"); //href属性の取得
    var target = $(href == "#" || href == "" ? 'html' : href);  //移動先のhref #,空ならtop
    var position = target.offset().top; // 移動先の場所を決める
    $("html, body").animate({scrollTop: position}, 400, "swing");
    return false;
  });

  // メニューホバー
  $('.menu').hover(
    function() {  //カーソル置いたら
      $('.menu-content').fadeIn();
      $('.menu-content').addClass('on');
    },
    function() {  //外したら
      $('.menu-content').fadeOut();
      $('.menu-content').removeClass('on');
    }
  );
  
  // ページトップ
  $('#page-top').click(function() {
    $("html, body").animate({scrollTop:0}, 500);  //0.5sでトップに戻る
    return false;
  });

  // モーダルオープン
  $('.work-site2').click(function() {  //work-site2クリックしたら
    $('.modal-wrapper').addClass('modal-open');
  });
  $('.close-modal').click(function() {
    $('.modal-wrapper').removeClass('modal-open');
  });
});