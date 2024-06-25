const typingEmail = document.getElementById('email');
const submit = document.querySelector('.container__btn--request');
const error = document.getElementById('error');
const emailFormat =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

submit.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the form from submitting
    if (typingEmail.value === '') {
        error.innerHTML = 'Oops! Please add your email';
        error.style.color = 'red';
    } else if (!emailFormat.test(typingEmail.value)) {
        error.innerHTML = 'Oops! Please check your email'; // Clear any previous error message
        error.style.color = 'red';
    } else {
        error.innerHTML = 'Successfully Access';
        error.style.color = '#54e6af';
    }
});
