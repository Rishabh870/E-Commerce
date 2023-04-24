// Get all the plus and minus buttons
const plusButtons = document.querySelectorAll('.plus');
const minusButtons = document.querySelectorAll('.minus');

// Add event listeners to each plus button
plusButtons.forEach(function (plusButton) {
  plusButton.addEventListener('click', function () {
    // Get the input element in the same div as the clicked plus button
    const quantityInput = plusButton.parentElement.querySelector('.cartInput');
    // Get the current quantity from the input element
    let quantity = parseInt(quantityInput.value);
    // Increase the quantity by 1 if it's less than 10
    if (quantity < 10) {
      quantity++;
      quantityInput.value = quantity;
    }
  });
});

// Add event listeners to each minus button
minusButtons.forEach(function (minusButton) {
  minusButton.addEventListener('click', function () {
    // Get the input element in the same div as the clicked minus button
    const quantityInput = minusButton.parentElement.querySelector('.cartInput');
    // Get the current quantity from the input element
    let quantity = parseInt(quantityInput.value);
    // Decrease the quantity by 1 if it's greater than 0
    if (quantity > 0) {
      quantity--;
      quantityInput.value = quantity;
    }
  });
});
