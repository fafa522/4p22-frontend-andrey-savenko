'use strict';

const passwordError = document.getElementById('password__error');
const passwordErrorWrap = document.getElementById('password');
const passwordConfError = document.getElementById('passwordconf__error');
const passwordConfWrap = document.getElementById('password-confirm');
const mailError = document.getElementById('mail__error');
const mailErrorWrap = document.getElementById('email');
const errorColor = '#EE2424'
const correctColor = '#787878'

const buttonClick = document.getElementById('button__input');
buttonClick.addEventListener('click', (event) => {
event.preventDefault();

    function validateEmail(mailErrorWrap) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email.value).toLowerCase());
    };
if (validateEmail(mailErrorWrap.value) !== true) {
    mailErrorWrap.style.borderColor = errorColor;
    mailError.innerText = 'Email введен некороектно';
}
else {
    mailErrorWrap.style.borderColor = correctColor;
    mailError.innerText = '';
}
const mailErrorOperation = document.getElementById('email').value;
switch (mailErrorOperation){
    case '':
        mailErrorWrap.style.borderColor = errorColor;
        mailError.innerText = 'Поле обязательно для заполнения';
};

const passwordOperation = document.getElementById('password').value;
switch (passwordOperation){
    case '':
        passwordErrorWrap.style.borderColor = errorColor;
        passwordError.innerText = 'Поле обязательно для заполнения';
        return;
};
if (passwordOperation.length < 8){
    passwordErrorWrap.style.borderColor = errorColor;
    passwordError.innerText = 'Пароль должен содержать не менее 8 символов';
}
else {
    passwordErrorWrap.style.borderColor = correctColor;
    passwordError.innerText = '';
};

const passwordConfOperation = document.getElementById('password-confirm').value;
switch (passwordConfOperation){
    case '':
        passwordConfWrap.style.borderColor = errorColor;
        passwordConfError.innerText = 'Поле обязательно для заполнения';
        return;
};
if (passwordOperation != passwordConfOperation ) {
    passwordConfWrap.style.borderColor = errorColor;
    passwordConfError.innerText = 'Пароли не совпадают'
}
else {
    passwordConfWrap.style.borderColor = correctColor;
    passwordConfError.innerText = ''
};

let aboutMe = document.getElementById('comment').value;
let checkBox = document.getElementById('checkbox').checked;

let radioButton = document.querySelectorAll('input[name="gender"]');
let dataRadioButton = false;
for (let i = 0 ; i < radioButton.length; i++) {
    if(radioButton[i].checked) {
        dataRadioButton = radioButton[i].value;
        break;
    };
};

let formObject = true;
if (formObject = []) {
    formObject.subscription = checkBox;
    formObject.AboutMe = aboutMe;
    formObject.Email = mailErrorOperation;
    formObject.Password = passwordOperation;
    formObject.Sex = dataRadioButton;
    console.log(formObject);
};
});

