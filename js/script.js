$(function(){
  $(function(){
  /*買取実績:申し込みホバー*/
  var target = $('.pf_grid_item');  

  target.hover(function(){
    var i = target.index(this);

    $('.pf_button').eq(i).css({
      'color': '#8cc63f',
      'background-color': '#fff',
      'border': '1px solid #8cc63f' ,
      'transition':'background-color 0.3s' ,
    });
  },
    function(){
      var i = target.index(this);

      $('.pf_button').eq(i).css({
        'color': '#fff',
        'background-color': '#8cc63f',
        'border': '1px solid #8cc63f' ,
        'transition':'background-color 0.3s' ,
      });
    });
  });/*買取実績:申し込みホバー*/

  /*買取対応エリアボタン　ホバー*/
  $(function(){
    var target_p = $('.b_c_flex2 p');
    var target_span = $('.b_c_flex2 span');

    target_p.hover(function(){
      //ホバーオン
      var i = target_p.index(this);

      target_p.eq(i).css({
        'background-color':'lightblue',
        'color':'#fff'
      });

      target_span.eq(i).css({'color':'#fff'});
    },
    function(){
      //ホバーオフ
      var i = target_p.index(this);

      target_p.eq(i).css({
        'background-color':'#eee',
        'color':'#333'
      });

      target_span.eq(i).css({'color':'initial'});
    });

  })

});