var clearButton = document.getElementById('clear');

clearButton.addEventListener('click',function()
{
  context.clearRect(0, 0, canvas.width, canvas.height);
  ctx.clearRect(0, 0, canvas2.width, canvas2.height);
});
