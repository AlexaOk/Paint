var clearButton = document.getElementById('clear');

function clearCanvas(){
context.clearRect(0, 0, canvas.width, canvas.height);
}

clearButton.addEventListener('click',clearCanvas);
