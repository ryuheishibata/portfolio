$(function(){
  'use strict';
  $('[data-toggle="tooltip"]').tooltip();
});
$(function(){
  $('.nav-1').mouseover(function(){
            $('.nav-1').addClass('box1-ext');
        });

      $('.nav-1').mouseout(function(){
      $('.nav-1').removeClass('box1-ext');
    });
  });
  $(function(){
    $('.nav-2').mouseover(function(){
              $('.nav-2').addClass('box1-ext');
          });
  
        $('.nav-2').mouseout(function(){
        $('.nav-2').removeClass('box1-ext');
      });
    });
    $(function(){
      $('.nav-3').mouseover(function(){
                $('.nav-3').addClass('box1-ext');
            });
    
          $('.nav-3').mouseout(function(){
          $('.nav-3').removeClass('box1-ext');
        });
      });
      $(function(){
        $('.nav-4').mouseover(function(){
                  $('.nav-4').addClass('box1-ext');
              });
      
            $('.nav-4').mouseout(function(){
            $('.nav-4').removeClass('box1-ext');
          });
        });
  $(function(){
var effect_pos = 700; // 画面下からどの位置でフェードさせるか(px)
var effect_move = 50; // どのぐらい要素を動かすか(px)
var effect_time = 1000; // エフェクトの時間(ms) 1秒なら1000

// フェードする前のcssを定義
$('.scroll-fade').css({
  opacity: 0,
  transform: 'translateY('+ effect_move +'px)',
  transition: effect_time + 'ms'
});

// スクロールまたはロードするたびに実行
$(window).on('scroll load', function(){
  var scroll_top = $(this).scrollTop();
  var scroll_btm = scroll_top + $(this).height();
  effect_pos = scroll_btm - effect_pos;

  // effect_posがthis_posを超えたとき、エフェクトが発動
  $('.scroll-fade').each( function() {
      var this_pos = $(this).offset().top;
      if ( effect_pos > this_pos ) {
          $(this).css({
              opacity: 1,
              transform: 'translateY(0)'
          });
      }
  });
});
});

$(function(){
$('a[href^="#"]').click(function(){
var speed = 1000;
var href= $(this).attr("href");
var target = $(href == "#" || href == "" ? 'html' : href);
var position = target.offset().top;
$("html, body").animate({scrollTop:position}, speed, "swing");
return false;
});
});