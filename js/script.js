$(function(){

  // メニューホバー
  $('.menu').hover (
    function() {  //カーソル置いたら
      $('.menu-content').fadeIn();
      $('.menu-content').addClass('on');
    },
    function() {  //外したら
      $('.menu-content').fadeOut();
      $('.menu-content').removeClass('on');
    }
  );

  // スムーススクロール
  $('.menu-content-inner a[href^="#"]').click(function() {
    var target = $($(this).attr("href")).offset().top; //href属性の取得
    target -= 60;

    $("html, body").animate({scrollTop: target}, 400);
    return false;
  });
  
  // ページトップ
  $('#page-top').click(function() {
    $("html, body").animate({scrollTop : 0}, 500); //0.5sでトップに戻る
    return false;
  });
  

  // モーダルオープン
  $(".work-site3").click(function() {
    $('.modal-wrapper').show();
    $(".site3-modal").addClass("modal-open");
  });
  $(".work-site2").click(function() {
    $('.modal-wrapper').show();
    $(".site2-modal").addClass("modal-open");
  });
  $(".work-site1").click(function() {
    $('.modal-wrapper').show();
    $(".site1-modal").addClass("modal-open");
  });
  
  // モーダルクローズ
  $('.close-modal').click(function() {
    $('.modal-wrapper').hide();
    $(".site3-modal").removeClass("modal-open");
    $(".site2-modal").removeClass("modal-open");
    $(".site1-modal").removeClass("modal-open");
  });

  // バリデーション
  $(".alert").css("color", "red");
  $(".alert").hide();
  $("#submitBtn").click(function() {
    var sendFlag = true;

    // 氏名
    if(!$("#name-area").children("input").val()) {
      $("#name-area").children(".alert").show();
      sendFlag = false;
    } else {
      $("#name-area").children(".alert").hide();
    }
    // フリガナ
    if(!$("#furigana-area").children("input").val()) {
      $("#furigana-area").children(".alert").show();
      sendFlag = false;
    } else {
      $("#furigana-area").children(".alert").hide();
    }
    // メール
    if(!$("#mail-area").children("input").val()) {
      $("#mail-area").children(".alert").show();
      sendFlag = false;
    } else {
      $("#mail-area").children(".alert").hide();
    }
  
    // メッセージ
    if(!$("textarea").val()) {
      $("#message-area").children(".alert").show();
      sendFlag = false;
    } else {
      $("#nessage-area").children(".alert").hide();
    }
  
    if(sendFlag == false) {
      return false;
    }
  });
});