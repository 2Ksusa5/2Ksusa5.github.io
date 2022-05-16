$( document ).ready(function() {

function ScrollHeadPLeft() {
    var ScrollPos = $(window).scrollTop();
    $('.Main-Block--Header-p2').css('margin-left', '' + (155+ScrollPos/3) + 'px');
    console.log(ScrollPos);
}

function ScrollHeadPRight() {
    var ScrollPos = $(window).scrollTop();
    $('.Main-Block--Header-p3').css('margin-right', '' + (155+ScrollPos/3) + 'px');
    console.log(ScrollPos);
}

  $(window).scroll(function() {
    ScrollHeadPLeft();
    ScrollHeadPRight();
  });

  $('#Back').click(function() {
    document.location.href='https://2vlad5.github.io';
  });

  scrollingDress = 1;
  function ScrollImgDress(){
    if(scrollingDress == 1){
      $('.--Dress-Main-Img--span1').show();
      $('.--Dress-Main-Img--span2').hide();
      scrollingDress = 2
    }else{
      $('.--Dress-Main-Img--span1').hide();
      $('.--Dress-Main-Img--span2').show();
      scrollingDress = 1;
    }
  }

  setInterval(ScrollImgDress, 5000);

});
