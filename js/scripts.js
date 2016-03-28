$(document).ready(function() {
  $("h1").hover(function() {
    $("#walwal").fadeIn();
  });

  $("button#blue").click(function() {
    $("body").removeClass();
    $("body").addClass("blue-background");
  });

  var array = ["h1", "h2", "p", "img"];

    array.forEach(function(loop) {
    $(loop).click(function() {
      alert(loop);
    });
  });
});
