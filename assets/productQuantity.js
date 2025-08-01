document.addEventListener('DOMContentLoaded', function () {
  const quantityWrapper = document.querySelector('.product__purchase-quantity');
  if (!quantityWrapper) return;

  const minusBtn = quantityWrapper.querySelector('svg.minus');
  const plusBtn = quantityWrapper.querySelector('svg.plus');
  const valueSpan = quantityWrapper.querySelector('.product__purchase-quantity-value');

  let count = parseInt(valueSpan.textContent);

  const updateClass = () => {
    if (count === 1) {
      minusBtn.classList.add('inactive');
    } else {
      minusBtn.classList.remove('inactive');
    }
  };

  updateClass();

  plusBtn?.addEventListener('click', () => {
    count++;
    valueSpan.textContent = count;
    updateClass();
  });

  minusBtn?.addEventListener('click', () => {
    if (count > 1) {
      count--;
      valueSpan.textContent = count;
      updateClass();
    }
  });
});
