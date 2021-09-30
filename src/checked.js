const checked = () => {
  const labelList = document.querySelectorAll('.label');
  const checkBoxes = document.querySelectorAll('.checkbox');
  for (let i = 0; i < checkBoxes.length; i += 1) {
    checkBoxes[i].addEventListener('change', () => {
      if (checkBoxes[i].checked) {
        labelList[i].style.textDecoration = 'line-through';
      } else {
        labelList[i].style.textDecoration = 'none';
      }
    });
  }
};
checked();

export default checked;