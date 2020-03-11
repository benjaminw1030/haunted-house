// business logic
var score = 0

// user interface logic
$(document).ready(function() {
  $("#openDoor").click(function() {
    $("#frontDoor").fadeOut();
    $("#foyer").fadeIn();
    score += 1;
  });
  $(".runAway").click(function() {
    $("#frontDoor").fadeOut();
    $("#coward").fadeIn();
    alert("Your score is " + score);
  });
  $("#investigate").click(function() {
    $("#foyer").fadeOut();
    $("#monster").fadeIn();
    score += 1;
  });
  $("#fight").click(function() {
    $("#monster").fadeOut();
    $("#death").fadeIn();
    alert("Your score is " + score);
  });
  $("#befriend").click(function() {
    $("#monster").fadeOut();
    $("#pizzaParty").fadeIn();
    score += 2;
    alert("Your score is " + score);
  });
  $(".tryAgain").click(function() {
    location.reload(true);
  });
});