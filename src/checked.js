const checked = () => {
  const labelList = document.querySelectorAll('.label');
  const checkBoxes = document.querySelectorAll('.checkbox');
  for (let i = 0; i < checkBoxes.length; i += 1) {
    checkBoxes[i].addEventListener('change', () => {
      // const taskIndex = e.target.getAttribute('data-id');
      // alert(taskIndex);
      if (checkBoxes[i].checked) {
        console.log(checkBoxes[i], 'mm');
        labelList[i].style.textDecoration = 'line-through';
      } else {
        labelList[i].style.textDecoration = 'none';
      }
    });
  }
};
checked();

export default checked;