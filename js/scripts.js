// business logic
var score = 0

// user interface logic
$(document).ready(function() {
  $("#openDoor").click(function() {
    $("#frontDoor").hide();
    $("#foyer").fadeIn();
    score += 1;
  });
  $(".runAway").click(function() {
    $("#frontDoor").hide();
    $("#foyer").hide();
    $("#coward").fadeIn();
    alert("Your score is " + score);
  });
  $("#investigate").click(function() {
    $("#foyer").hide();
    $("#monster").fadeIn();
    score += 1;
  });
  $("#fight").click(function() {
    $("#monster").hide();
    $("#death").fadeIn();
    alert("Your score is " + score);
  });
  $("#befriend").click(function() {
    $("#monster").hide();
    $("#pizzaParty").fadeIn();
    score += 2;
    alert("Your score is " + score);
  });
  $(".tryAgain").click(function() {
    location.reload(true);
  });
});