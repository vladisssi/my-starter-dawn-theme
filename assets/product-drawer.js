document.addEventListener('DOMContentLoaded', () => {
  const toggleButtons = document.querySelectorAll('.metafields__toggle');

  toggleButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const item = button.closest('.metafields__item');
      item.classList.toggle('active');
    });
  });
});
