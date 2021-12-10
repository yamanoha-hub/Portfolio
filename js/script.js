$(function(){
  // メニュークリック
  $('.header__menu').click(function() {
    // もし.onがついていたら
    if( $('.header__menu__content').hasClass('on') ) {
      $('.header__menu__content').fadeOut();
      $('.header__menu__content').removeClass('on');
    } else {
      $('.header__menu__content').fadeIn();
      $('.header__menu__content').addClass('on');
    }
  });

  // スムーススクロール
  $('.menu__inner a[href^="#"]').click(function() {
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
  $(".work__contents__site").click(function() {
    $('.modal').addClass('modal__open');
    var IDhref = $(this).children('a').attr('href');

    console.log(IDhref);

    if(IDhref == '#site5') {
      $('#site5').addClass('modal__open');
    } else if(IDhref == '#site4') {
      $('#site4').addClass('modal__open');
    } else if(IDhref == '#site3') {
      $('#site3').addClass('modal__open');
    } else if(IDhref == '#site2') {
      $('#site2').addClass('modal__open');
    } else if(IDhref == '#site1') {
      $('#site1').addClass('modal__open');
    } else {
      $('.modal').hide();
      $('.modal').removeClass('modal__open');
    }
  });
  // モーダルクローズ
  $('.close-modal').click(function() {
    $('.modal').removeClass('modal__open');
    $('.modal').children('.modal__site').removeClass('modal__open');
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