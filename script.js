// Save color preference to localStorage
const colorPicker = document.getElementById('colorPicker');
const box = document.getElementById('box');
const animateBtn = document.getElementById('animateBtn');

// Load stored color if available
window.addEventListener('load', () => {
  const storedColor = localStorage.getItem('boxColor');
  if (storedColor) {
    box.style.backgroundColor = storedColor;
    colorPicker.value = storedColor;
  }
});

// Listen for color changes
colorPicker.addEventListener('input', () => {
  const selectedColor = colorPicker.value;
  box.style.backgroundColor = selectedColor;
  localStorage.setItem('boxColor', selectedColor);
});

// Trigger animation with button
animateBtn.addEventListener('click', () => {
  box.classList.remove('animate'); // reset animation
  void box.offsetWidth; // force reflow
  box.classList.add('animate');
});
