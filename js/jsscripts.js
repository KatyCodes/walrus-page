$(document).ready(function(e) {
  $("button").click(function(){
    $(".container").show();
    $("button").hide();
    alert("Click on the seahorse to watch him swim.")
  });
  $(".clickable").click(function() {
    $("#walrus").fadeToggle("slow");
    $("#walrus-hidden").hide();
    $("#walrus-showing").show();
  });
  $("#walrus").click(function(){
    $("#walrus").fadeToggle("slow");
    $("#walrus-showing").hide();
    $("#walrus-hidden").show();
  });
  $(".clickable2").click(function() {
    $("#whale").slideToggle("fast");
    $("#whale-hidden").hide();
    $("#whale-showing").show();
  });
  $("#whale").click(function(){
    $("#whale").slideToggle("fast");
    $("#whale-showing").hide();
    $("#whale-hidden").show();
  });

  $("#seahorse").click(function(){
    var width = "+=" + $(document).width();
   $("#seahorse").animate({
   left: width
 }, 500, function() {
       $("#seahorse").css("display", "none");
    });
  });
});
