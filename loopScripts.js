$(function() {

  var ninetyNine = "bottles of beer on the wall. Take one down and pass it around...";
  var ending = "No more. I am plastered!";

  for (var index = 99; index >= 0; index -= 1) {
    if (index > 0) {
      $("#aboveZero").append("<p>" + index + " " + ninetyNine + "</p>");
    }
    else {
      $("#zero").append("<p>" + ending + "</p>");
    }
  }
  event.preventDefault();
});
