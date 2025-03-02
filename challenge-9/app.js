const toggleBtn = document.querySelector('.toggle-btn');
const closeBtn = document.querySelector('.close-btn');
const menuItems = document.querySelectorAll('.menu-item');

toggleBtn.addEventListener('click', () => {
  document.querySelector('.panel').classList.toggle('active');
  toggleBtn.classList.toggle('active');
  toggleBtn.textContent =
    toggleBtn.textContent === 'Open Menu' ? 'Close Menu' : 'Open Menu';
});

closeBtn.addEventListener('click', () => {
  document.querySelector('.panel').classList.remove('active');
  toggleBtn.classList.toggle('active');
  toggleBtn.textContent =
    toggleBtn.textContent === 'Open Menu' ? 'Close Menu' : 'Open Menu';
});

menuItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    alert(`You clicked on ${item.textContent}`);
  });
});
