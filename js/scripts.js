// business logic
var score = 0

// user interface logic
$(document).ready(function() {
  $("#frontDoorOpen").click(function() {
    $("#frontDoor").hide();
    $("#parlor").show();
    score += 1
  });

});