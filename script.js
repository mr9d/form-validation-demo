const formElement = document.querySelector('form');

formElement.addEventListener('submit', function(evt) {
    evt.preventDefault();
    alert('Отправка прошла успешно!');
});

const passwordInputField = formElement.querySelector('#pass');
const submitButton = formElement.querySelector('.submit');

passwordInputField.addEventListener('input', function(evt) {
    const value = passwordInputField.value;
    if(!/\d/.exec(value)) {
        submitButton.setAttribute('disabled', 'disabled');
    } else {
        submitButton.removeAttribute('disabled');
    }
});


