$(function(){
  $('.menu-trigger').on('click',function(event){
   $(this).toggleClass('active');
   //toggleClass()は、指定されているclass（ここではactive）をトグル処理するメソッド
   //アイコンがクリックされたときにactiveクラスが追加され、もう一度クリックすると削除される
   $('#sp-menu').fadeToggle();
   //要素のフェードイン・フェードアウトを切り替えるメソッド
   event.preventDefault();
  });
});