const arrow = document.querySelectorAll('.arrow');
const accordionButton = Array.from(
  document.querySelectorAll('.accordion-button')
);
const accordionContentArray = Array.from(
  document.querySelectorAll('.accordion-content')
);

// console.log(accordionContentArray);
accordionButton.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    arrow[index].style.transform = `rotate(180deg)`;
    accordionContentArray[index].style.maxHeight = `100px`;
  });
  btn.addEventListener('blur', () => {
    arrow[index].style.transform = `rotate(0deg)`;
    accordionContentArray[index].style.maxHeight = `0px`;
  });
});
