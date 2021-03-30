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


});