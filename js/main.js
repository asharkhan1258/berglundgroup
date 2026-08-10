document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

document.querySelectorAll('.demo-form').forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();
    event.stopPropagation();
    form.classList.add('was-validated');
    const feedback = form.querySelector('.form-feedback');
    if (form.checkValidity() && feedback) {
      feedback.textContent = 'Thanks — this demo form is ready to connect to your backend or email service.';
      form.reset();
      form.classList.remove('was-validated');
    }
  });
});
