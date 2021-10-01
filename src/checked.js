/* eslint-disable import/no-cycle */
import removeLocalTodos, { completeLocalTodos, editLocal } from './index.js';

function checkTodos(e) {
  const item = e.target;
  const todo = item.parentElement;
  // eslint-disable-next-line prefer-destructuring
  const id = todo.id;

  // Delete todo
  if (item.classList.contains('delete')) {
    console.log(id, 'lll');
    todo.style.display = 'none';
    removeLocalTodos(id);
  }
  if (item.checked && !item.classList.contains('delete')) {
    todo.classList.add('completed');
    completeLocalTodos(item);
  }
  if (!item.checked && !item.classList.contains('delete')) {
    todo.classList.remove('completed');
    completeLocalTodos(item);
  }

  if (item.classList.contains('icon')) {
    item.classList.add('edited');
    console.log(item);
    editLocal(id);
  }
}

// const editTask= () => {
//   var listItem=this.parentNode;

//   var editInput=listItem.querySelector('input[type=text]');
//   var label=listItem.querySelector("label");
//   var containsClass=listItem.classList.contains("editMode");
//       //If class of the parent is .editmode
//       if(containsClass){

//       //switch to .editmode
//       //label becomes the inputs value.
//         label.innerText=editInput.value;
//       }else{
//         editInput.value=label.innerText;
//       }

//       //toggle .editmode on the parent.
//       listItem.classList.toggle("editMode");
//   }
export default checkTodos;
// export default checked;