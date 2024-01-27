// Waits for the DOM to load
window.addEventListener('DOMContentLoaded', () => {

  // Selecting inputs from index.html
  const range_1 = document.getElementById("range_1");
  const range_2 = document.getElementById("range_2");
  const number_1 = document.getElementById("range_1_number");
  const number_2 = document.getElementById("range_2_number");

  // Updating the value on input events

  range_1.oninput = () => number_1.value = range_1.value
  range_2.oninput = () => number_2.value = range_2.value
  number_1.oninput = () => range_1.value = number_1.value
  number_2.oninput = () => range_2.value = number_2.value


})