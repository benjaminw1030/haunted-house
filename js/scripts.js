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
    $("#score").fadeIn();
    $("#score").text("Your score is " + score);
  });
  $("#investigate").click(function() {
    $("#foyer").hide();
    $("#monster").fadeIn();
    score += 1;
  });
  $("#fight").click(function() {
    $("#monster").hide();
    if (Math.ceil(Math.random()*4) > 3) {
      $("#victory").fadeIn();
      score += 3;
    } else {
      $("#death").fadeIn();
      $("#score").fadeIn();
      $("#score").text("Your score is " + score);
    };
  });
  $("#befriend").click(function() {
    $("#monster").hide();
    $("#pizzaParty").fadeIn();
    score += 2;
    $("#score").fadeIn();
    $("#score").text("Your score is " + score);
  });
  $(".tryAgain").click(function() {
    location.reload(true);
  });
});