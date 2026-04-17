$(document).ready(function() {

  // Задание 1
  $("#animateBtn1").click(function(){
    $("#box1").animate({
      left: "300px",
      width: "200px",
      height: "200px"
    }, 1000);
  });

  // Задание 2
  $("#hideBtn").click(function(){
    $("#box2").animate({opacity: 0}, 1000);
  });
  $("#showBtn").click(function(){
    $("#box2").animate({opacity: 1}, 1000);
  });

  // Задание 3
  $("#startChain").click(function(){
    $("#circle").animate({left: "200px"}, 1000)
                .animate({width: "200px", height: "200px"}, 1000)
                .animate({left: "0px", width: "100px", height: "100px"}, 1000);
  });

  // Задание 4
  $(".dropdown h3").click(function(){
    var content = $(this).next(".content");
    $(".dropdown .content").not(content).slideUp();
    content.slideToggle();
  });

  // Задание 5
  $("#revealBtn").click(function(){
    $("#box5").slideDown(500, function(){
      $(this).css("color", "green" ,500 );
     
    });
  });

  // Задание 6
  $(".card").mouseenter(function(){
    $(this).stop().animate({
      padding: "20px",
      
    }, 300);
  })
  
  .mouseleave(function(){
    $(this).stop().animate({
      padding: "10px",
      
    }, 300);
  });

});