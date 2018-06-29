var input = document.getElementById('colors');
var color = input.value;

context.fillStyle = color;

context.strokeStyle = color;

input.onclick = function() {

  function change(e){
    color = this.value;
    context.fillStyle = color;
    context.strokeStyle = color;
  }
  document.getElementById("colors").onchange = change;
}
