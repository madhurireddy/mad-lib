
var static_words1 = 'I think';
var static_words2 = 'are having fun. I think our';
var static_words3 = 'really';

var static_words4 = 'our';
var static_words5 = '. And we are ';
var static_words6 = 'trying to do better';

function someFunction(evt){
  evt.preventDefault(evt);
  
  var selectValue1 = document.getElementById('form1').elements.item(0).value;
  var selectValue2 = document.getElementById('form1').elements.item(1).value;
  var selectValue3 = document.getElementById('form1').elements.item(2).value;
  var selectValue4 = document.getElementById('form1').elements.item(3).value;
  var selectValue5 = document.getElementById('form1').elements.item(4).value;
  
  console.log(static_words1 + " " + selectValue1 + " " + static_words2 + " " + selectValue2 + " " + static_words3 + " " + selectValue3 + " " + static_words4 + " " + selectValue4 + static_words5 + " " + selectValue5 + " " + static_words6);
}

var submitButton = document.getElementById("submit");

submitButton.addEventListener("click", someFunction, false);




