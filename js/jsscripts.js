$(document).ready(function() {
  $("p").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });
  $("body").click(function() {
    $(".koo").fadeToggle("slow");
  });
});
