import { refs } from './refs';

const handleSubmit = e => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const surname = document.getElementById('surname').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();

  if (!name || !surname || !phone || !email) {
    alert('Будь ласка, заповніть всі поля форми.');
    return;
  }

  const phoneRegex =
    /^(\+?380|\+?38|\(?0)\d{2}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;
  if (!phoneRegex.test(phone)) {
    alert(
      'Будь ласка, введіть коректний номер телефону. Наприклад, +380501234567 або +38(050)123-45-67'
    );
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Будь ласка, введіть коректну адресу електронної пошти');
    return;
  }

  const formData = {
    name,
    surname,
    phone,
    email,
  };

  console.log(formData);
  alert('Дані успішно відправлені.');
};

refs.form.addEventListener('submit', handleSubmit);
