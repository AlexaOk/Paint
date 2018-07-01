var text = document.getElementById("text");

function startText(){
  context.font = "30px Arial";
  context.fillText("Hello World",400,200);
  {
    startClone();
  }
}

text.addEventListener('click', function(e){
  toolsFalse();
  fText = true;
  startText();

})
