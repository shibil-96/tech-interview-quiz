document.addEventListener('DOMContentLoaded', () => {
  const checkboxes = document.querySelectorAll('.card input[type="checkbox"]');
  const submitBtn = document.querySelector('.btn-submit');

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      // Check if at least one option is selected
      const isAnyChecked = Array.from(checkboxes).some(cb => cb.checked);

      if (isAnyChecked) {
        submitBtn.classList.add('active');
      } else {
        submitBtn.classList.remove('active');
      }
    });
  });
});