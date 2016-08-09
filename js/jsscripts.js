$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });
  $("#header1").click(function() {
    $(".koo").fadeToggle("slow");
  });
  $(".clickable2").click(function() {
    $("#whale-showing").slideToggle("slow");
    $("#whale-hidden").slideToggle("slow");
  });
});
