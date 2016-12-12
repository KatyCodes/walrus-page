$(document).ready(function() {
  $("button").click(function(){
    $(".well").show();
    $("button").hide();
  });
  $(".clickable").click(function() {
    $("#walrus-showing").fadeToggle("fast");
    $("#walrus-hidden").fadeToggle("fast");
  });
  $(".clickable2").click(function() {
    $("#whale-showing").slideToggle("slow");
    $("#whale-hidden").slideToggle("slow");
  });
});
