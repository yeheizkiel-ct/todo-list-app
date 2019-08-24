var removeSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 48 48" xml:space="preserve" width="48" height="48"><g class="nc-icon-wrapper" fill="#c0cecb"><path class="fill" fill="#c0cecb" d="M7,13v32c0,1.105,0.895,2,2,2h30c1.105,0,2-0.895,2-2V13H7z M17,38c0,0.552-0.447,1-1,1s-1-0.448-1-1V22 c0-0.552,0.447-1,1-1s1,0.448,1,1V38z M25,38c0,0.552-0.447,1-1,1s-1-0.448-1-1V22c0-0.552,0.447-1,1-1s1,0.448,1,1V38z M33,38 c0,0.552-0.447,1-1,1s-1-0.448-1-1V22c0-0.552,0.447-1,1-1s1,0.448,1,1V38z"></path> <path class="fill" data-color="color-2" fill="#c0cecb" d="M46,9H33V2c0-0.552-0.447-1-1-1H16c-0.553,0-1,0.448-1,1v7H2c-0.553,0-1,0.448-1,1 s0.447,1,1,1h44c0.553,0,1-0.448,1-1S46.553,9,46,9z M31,9H17V3h14V9z"></path></g></svg>';

var completeSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 64 64" xml:space="preserve" width="64" height="64"><g class="nc-icon-wrapper" fill="#c0cecb"><path class="fill" data-color="color-2" fill="#c0cecb" d="M53.511,25.503C54.473,28.157,55,31.018,55,34c0,13.785-11.215,25-25,25S5,47.785,5,34 S16.215,9,30,9c5.683,0,10.927,1.91,15.131,5.117l1.526-1.343C42.065,9.162,36.282,7,30,7C15.112,7,3,19.112,3,34s12.112,27,27,27 s27-12.112,27-27c0-3.562-0.7-6.963-1.959-10.08L53.511,25.503z"></path> <polygon class="fill" fill="#c0cecb" points="57,9 32,31 21,23 17,27 32,42 61,12 "></polygon></g></svg>';

document.getElementById('add').addEventListener('click', function () {
  var value = document.getElementById('item').value;
  if (value) { 
      addItemTodo(value); 
      document.getElementById('item').value = '';
  }
});

function removeItem() {
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;
  parent.removeChild(item);
}

function completeItem() {
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;
  var id = parent.id;
  
  var target = (id === 'todo') ? document.getElementById('completed'):document.getElementById('todo');
  
  parent.removeChild(item);
  target.insertBefore(item, target.childNodes[0]);
  
}

function addItemTodo(text) {
  var list = document.getElementById('todo');
  
  var item = document.createElement('li');
  item.innerText = text;
  
  var buttons = document.createElement('div');
  buttons.classList.add('buttons');
  
  var remove = document.createElement('button');
  remove.classList.add('remove');
  remove.innerHTML = removeSVG;
  remove.addEventListener('click', removeItem);
  
  var complete = document.createElement('button');
  complete.classList.add('complete');
  complete.innerHTML = completeSVG;
  complete.addEventListener('click', completeItem);
  
  buttons.appendChild(remove);
  buttons.appendChild(complete);
  item.appendChild(buttons);
  list.insertBefore(item, list.childNodes[0]);
}