document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.dropdown').forEach(function (dropdown) {
    const content = dropdown.querySelector('.dropdown__content');
    const arrow = dropdown.querySelector('.dropdown__toggle-img');
    let hideTimeout;

    dropdown.addEventListener('mouseenter', function () {
      clearTimeout(hideTimeout);
      content.classList.add('active');
      if (arrow) arrow.classList.add('active');
    });

    dropdown.addEventListener('mouseleave', function () {
      hideTimeout = setTimeout(() => {
        content.classList.remove('active');
        if (arrow) arrow.classList.remove('active');
      }, 200);
    });
  });
});

function resetDropdown(event) {
  event.preventDefault();
  const form = event.target.closest('form');
  form.querySelectorAll('input[type="checkbox"]').forEach((input) => (input.checked = false));
  form.submit();
}
