document.addEventListener('DOMContentLoaded', function () {
  const quantityWrapper = document.querySelector('.product__purchase-quantity');
  if (!quantityWrapper) return;

  const minusBtn = quantityWrapper.querySelector('svg.minus'); // предполагаем, что `minus.liquid` рендерит кнопку с этим классом
  const plusBtn = quantityWrapper.querySelector('svg.plus');
  const valueSpan = quantityWrapper.querySelector('.product__purchase-quantity-value');

  let count = parseInt(valueSpan.textContent);

  plusBtn?.addEventListener('click', () => {
    count++;
    valueSpan.textContent = count;
  });

  minusBtn?.addEventListener('click', () => {
    if (count > 1) {
      count--;
      valueSpan.textContent = count;
    }
  });
});
