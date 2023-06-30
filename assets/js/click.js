$('#text2').on('keyup',function(){
  var $this = $(this),
      val = $this.val();
  
  if(val.length >= 1){
    $('#req2').show(100);
  }else {
    $('#req2').hide(100);
  }
});

$('#text3').on('keyup',function(){
  var $this = $(this),
      val = $this.val();
  
  if(val.length >= 1){
    $('#req3').show(100);
  }else {
    $('#req3').hide(100);
  }
});

s = 1;

$(".menu__button").click(function(){
  console.log("s14 = " + s)
  if (s == 1) {
    console.log("s15 = " + s)
    s = 0;
    console.log("s17 = " + s)
    firstStep();
    console.log("s19 = " + s)
    setTimeout('secondStep()',2000);
    console.log("s21 = " + s)
    setTimeout('s = 1;',2500);
    console.log("s23 = " + s)
  } else {
  }
}); 

function firstStep(){
    $("#copied").animate(
      {
          opacity: 1,
          top: "+=30",
        }, 500
      );
}
function secondStep(){
  $("#copied").animate(
      {
          opacity: 0,
          top: "-=30",
        }, 500
    );
}