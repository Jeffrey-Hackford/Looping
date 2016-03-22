$(document).ready(function() {
  $("h1").dblclick(function() {
    alert("Header");
  });
  $("h2").click(function() {
    alert("Sub Heading");
  });
  $("img").click(function() {
    alert("Image");
  });

  $("p").click(function() {
    alert("paragraph");
  });

  $(".first-child").dblclick(function() {
    alert("first list item");
  });

  $("h1").hover(function() {
    $("#walwal").fadeIn();
  });
  $("h2").hover(function() {
    $("#walwal").fadeOut();
  });

  $(".third-child").click(function() {
    alert("third list item");
  });

});
