//モーダル背景固定
document.getElementById('btn-open').addEventListener('click', function() {
  document.body.classList.toggle('open');
});


// ローディング画面のdivを取得
var showLoading = document.getElementById('showLoading');
// 画面本体のdivを取得
var contents = document.getElementById('contents');
// 読み込みが完了したら発動
window.addEventListener('load', function () {
// loadingのdivを非表示に
showLoading.style.display = 'none';
// contentsのdivを表示
contents.classList.remove('hidden');
});


// ＃リンクのスムーズスクロール 
$(function(){
  // #で始まるリンクをクリックしたら実行されます
  $('a[href^="#"]').click(function() {
    // スクロールの速度
    var speed = 400; // ミリ秒で記述
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});


//ヘッダーのスライダー
$('#slider').slick({
  autoplay:true,
  autoplaySpeed:5000,
  centerMode: true,
  dots:true,
});


//about フェードイン
$(function(){
  var effect_pos = -100; // 画面下からどの位置でフェードさせるか(px)
  var effect_move = 50; // どのぐらい要素を動かすか(px)
  var effect_time = 800; // エフェクトの時間(ms) 1秒なら1000

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



//タブ切替え
$(function(){
	$('.tab').click(function(){
		$('.is-active').removeClass('is-active');
		$(this).addClass('is-active');
		$('.is-show').removeClass('is-show');
        // クリックしたタブからインデックス番号を取得
		const index = $(this).index();
        // クリックしたタブと同じインデックス番号をもつコンテンツを表示
		$('.panel').eq(index).addClass('is-show');
	});
});


//モーダルウィンドウ
$(function () {
  $('.openModal1').click(function(){
    $('.modalArea1').fadeIn();
  });
  $('.closeModal , .modalBg').click(function(){
    $('.modalArea1').fadeOut();
  });
});
$(function () {
  $('.openModal2').click(function(){
    $('.modalArea2').fadeIn();
  });
  $('.closeModal , .modalBg').click(function(){
    $('.modalArea2').fadeOut();
  });
});
$(function () {
  $('.openModal3').click(function(){
    $('.modalArea3').fadeIn();
  });
  $('.closeModal , .modalBg').click(function(){
    $('.modalArea3').fadeOut();
  });
});
$(function () {
  $('.openModal4').click(function(){
    $('.modalArea4').fadeIn();
  });
  $('.closeModal , .modalBg').click(function(){
    $('.modalArea4').fadeOut();
  });
});

// $(function() {
//   var index = $('.openModal').index($(this));

//   $('.openModal').eq(index).click(function() {
//     $('.modalArea').eq(index).fadeIn();
//   });
//   $('.closeModal , .modalBg').eq(index).click(function(){
//     $('.modalArea').eq(index).fadeOut();
//   });
// });

//モーダル背景固定
$(function() {
  $('.openModal').click(function() {
    $('body').addClass('open');
  })
  $('.closeModal').click(function() {
    $('body').removeClass('open');
  });
});



//メンバーのスライダー
$('#slider2').slick({
  autoplay:true,
  infinite: true, // スライドのループを有効にするか
  autoplaySpeed:5000,
  centerMode: true,
  slidesToShow: 3, //表示するスライドの数
  slidesToScroll: 1, //スクロールで切り替わるスライドの数
  // dots:true,
});

// $('#slider2').slick({
//   autoplay: true, //自動再生
//   autoplaySpeed:5000,
//   infinite: true, //スライドのループ有効化
//   // dots: true, //ドットのナビゲーションを表示
//   slidesToShow: 3, //表示するスライドの数
//   slidesToScroll: 1, //スクロールで切り替わるスライドの数
//   responsive: {
//       breakpoint: 768, //ブレークポイントが768px
//       settings: {
//       slidesToShow: 1, //表示するスライドの数
//       slidesToScroll: 1, //スクロールで切り替わるスライドの数
//     }
//   }
// });


// $(function(){
//   $('#acMenu, dt').on('click', function() {
//     $(this).next().slideToggle();
//   });
// });

$('.toggle_switch').on('click',function(){
  var index = $('.question__lists').index($(this))
  $(this).toggleClass('open');
  $(this).next('.toggle_contents').slideToggle();
  $('.question__lists').eq(index).css('display','flex');
});

// $(function() {
//   $('.question__lists').click(function() {
//     var $answer = $(this).find('.answer');
    
//     if($answer.hasClass('text-open')) {
//       $answer.removeClass('text-open');
//       $answer.slideUp();
//       // $(this).find('span').text('+');
//     } else {
//       $answer.addClass('text-open');
//       $answer.slideDown();
//       // $(this).find('span').text('-');
//     }
//   });
// });

// $('.toggle_switch').on('click',function(){
//   $(this).toggleClass('open');
//   $(this).next('.toggle_contents').slideToggle();

//   if($('.question__lists').hasClass())
// });