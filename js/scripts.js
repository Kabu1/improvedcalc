
// Business (or back-end) logic:
  var add = function(number1, number2) {
    return number1 + number2;
  };
  var subtract = function(number1, number2) {
    return number1 - number2;
  };
  var multiply = function(number1, number2) {
    return number1 * number2;
  };
  var divide = function(number1, number2) {
    return number1 / number2;
  };
//everything above this line is business (or back-end) logic:
//everything below this line is user interface logic(front end)
$(document).ready(function(){
$("form#add").submit(function(event){
    event.preventDefault();

var number1 = parseInt($("#add1").val());
var number2 = parseInt($("#add2").val());
var result = add(number1, number2);
$("#output").text(result);
});
});