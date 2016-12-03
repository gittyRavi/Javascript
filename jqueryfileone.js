$(document).ready(function(){
 $("#t").click(function(){
  $("#y").animate({
       left : '1280px',
       height :'60px' ,
       width :'60px' ,
       opacity :'0.5',
      },2000);
  });
 });
$(document).ready(function(){
  $("#flip").click(function(){
   $("#panel").slideToggle("slow");
  });
 });
