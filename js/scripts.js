$(document).ready(function() {
  $(".card").click(function() {
    $(this).find(".definition").toggleClass("hide-definition");
    $(this).find(".word").toggleClass("hide-word");
  });
});