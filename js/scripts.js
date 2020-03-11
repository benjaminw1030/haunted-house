// business logic
var score = 0

// user interface logic
$(document).ready(function() {
  $("#openDoor").click(function() {
    $("#frontDoor").hide();
    $("#foyer").show();
    score += 1;
  });
  $(".runAway").click(function() {
    $("#frontDoor").hide();
    $("#foyer").hide();
    $("#coward").show();
    alert("Your score is " + score);
  });
  $("#investigate").click(function() {
    $("#foyer").hide();
    $("#monster").show();
    score += 1;
  });
  $("#fight").click(function() {
    $("#monster").hide();
    $("#death").show();
    alert("Your score is " + score);
  });
  $("#befriend").click(function() {
    $("#monster").hide();
    $("#pizzaParty").show();
    score += 2;
    alert("Your score is " + score);
  });
  $(".tryAgain").click(function() {
    location.reload(true);
  });
});