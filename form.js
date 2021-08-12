const text = document.querySelector('#text')
const textError = document.querySelector('.text-error')
text.addEventListener('input', function() {
    let nameRegEx = RegExp('^[A-Z][a-zA-z]{2,}$')
    if(nameRegEx.test(text.value))
        textError.textContent = ""
    else
        textError.textContent = "Incorrect Name"
});

const email = document.querySelector('#email')
const emailError = document.querySelector('.email-error')
email.addEventListener('input', function() {
    let emailRegEx = RegExp('^[\\w+_-]+(?:\\.[\\w+_-]+)*[@][\\w]{1,}([.]{1}[a-z]{2,}){1,2}$')
    if(emailRegEx.test(email.value))
        emailError.textContent = ""
    else
        emailError.textContent = "Incorrect Email"
});

const phone = document.querySelector('#phone')
const phoneError = document.querySelector('.phone-error')
phone.addEventListener('input', function() {
    let phoneRegEx = RegExp('^[0-9]{10,}$')
    if(phoneRegEx.test(phone.value))
        phoneError.textContent = ""
    else
        phoneError.textContent = "Incorrect phone number"
});

const password = document.querySelector('#password')
const passwordError = document.querySelector('.password-error')
password.addEventListener('input', function() {
    let passwordRegEx = RegExp('^(?=.*[A-Z])(?=.*[a-z])(?=[^!@#$%^&+=]*[!@#$%^&+=][^!@#$%^&+=]*$)(?=.*[0-9]).{8,}$')
    if(passwordRegEx.test(password.value))
        passwordError.textContent = ""
    else
        passwordError.textContent = "Incorrect input"
});



