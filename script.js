
const items = document.querySelector('.items');

let isDown = false;
let startX;
let scrollLeft;

items.addEventListener('mousedown', (e) => {
  isDown = true;
  items.classList.add('active');
  startX = e.clientX;
  scrollLeft = items.scrollLeft;
});

document.addEventListener('mouseup', () => {
  isDown = false;
  items.classList.remove('active');
});

document.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();

  const walk = (e.clientX - startX) * 1.5;
  items.scrollLeft = scrollLeft - walk;
});
