const username = document.querySelector('#name')
const email = document.querySelector('#email')
const phone = document.querySelector('#phone')
const submitBtn = document.querySelector('#submit')


let validUsername = false;
let validEmail = false;
let validPhone = false;


// Hiding alerts using JQUERY to freespace at the top
$('#error').hide();
$('#success').hide();


// Username Validation

username.addEventListener("blur", () => {

    let regex = /^[a-zA-Z]([0-9a-zA-Z]{5,20})$/;
    let str = username.value;

    if (regex.test(str)) {
        validUsername = true;
        username.classList.remove('is-invalid')
    }
    else {
        username.classList.add('is-invalid')
        validUsername = false;

    }
})


// Email Validation

email.addEventListener("blur", () => {
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;

    if (regex.test(str)) {
        email.classList.remove('is-invalid')
        validEmail = true;

    }
    else {
        email.classList.add('is-invalid');
        validEmail = false;

    }
})


// Phone Number Validation
phone.addEventListener("blur", () => {
    let regex = /^(98)([0-9]){8}$/;
    let str = phone.value;

    if (regex.test(str)) {
        phone.classList.remove('is-invalid')
        validPhone = true;

    }
    else {
        phone.classList.add('is-invalid')
        validPhone = false;

    }
})


let success = document.querySelector('.alert-success');
let error = document.querySelector('.alert-danger');


// Submit button Functionality

submitBtn.addEventListener('click', (e) => {
    // Preventing Default Behaviour of submit button
    e.preventDefault()

    // if all inputs and valid then
    if (validEmail && validUsername && validPhone) {
        success.classList.add('show');
        $('#error').hide();
        $('#success').show();
    }
    else {
        error.classList.add('show');
        $('#success').hide(); 
        $('#error').show();
    }
})