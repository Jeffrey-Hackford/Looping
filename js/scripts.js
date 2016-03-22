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

  $("h1").hover(function() {
    $("#walwal").fadeIn();
  });

  $(".clickable").click(function() {
    
    $(".closed").toggle();
  });

});
