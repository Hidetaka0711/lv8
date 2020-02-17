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
// $(function() {
//   $('ul.delay-show li').css({opacity: 0}).each(function(i){
//     $(this).delay(850 * i).animate({opacity:1}, 3000);
//   });
// });

//about フェードイン
$(function(){
  $('ul.delay-show li').css("opacity","0");  
    $(window).scroll(function (){
    $('ul.delay-show li').each(function(){

        var elemPos = $(this).offset().top;      /*画面上部からの距離*/
        var scroll = $(window).scrollTop();      /*スクロールした量*/
        var windowHeight = $(window).height();       /*画面の高さ*/

    /*発動条件：画面の高さが1/4までスクロールしたら順番に表示*/
    if (scroll > elemPos - windowHeight + windowHeight/4){
    $(function(){
    $('ul.delay-show li')
        .each(function(i){
          $(this).delay(850*i).animate({opacity:1}, 1500);
        });
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
// $('#slider2').slick({
//   autoplay:true,
//   // infinite: true, // スライドのループを有効にするか
//   // autoplaySpeed:5000,
//   // centerMode: true,
//   // slidesToShow: 1, //表示するスライドの数
//   // slidesToScroll: 1, //スクロールで切り替わるスライドの数
//   // // dots:true,
// });

  $('#slider2').slick({
    // autoplay: true, //自動再生
    infinite: true, //スライドのループ有効化
    // centerMode: true,
    // centerPadding: '0px',
    slidesToShow: 3, //表示するスライドの数
    slidesToScroll: 1, //スクロールで切り替わるスライドの数
    responsive:[
      {
        breakpoint: 768, //ブレークポイントが768px
        settings:{
          slidesToShow: 1, //表示するスライドの数
          slidesToScroll: 1, //スクロールで切り替わるスライドの数
        }
      }
    ]
  });


//アコーディオン
$('.toggle_switch').on('click',function(){
  $(this).toggleClass('open');
  $(this).find('.question__lists-list-icon').toggleClass('active');
  $(this).next('.toggle_contents').slideToggle();
});

