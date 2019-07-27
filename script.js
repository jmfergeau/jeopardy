if (theSpan.innerHTML == "") {
  theSpan.innerHTML = "This generator is used to create Jeopardy answers like this.";
};

function putTheText() {
  var textToGet = document.getElementById('msg');
  var textToPut = textToGet.value;

  textToPut = textToPut.toUpperCase();

  var theSpan = document.getElementById('toGenerate');

  return theSpan.innerHTML = textToPut;
}
