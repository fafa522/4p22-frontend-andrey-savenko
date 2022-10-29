'use strict';

const buttonClick = document.getElementById('button__rast');
const formResult = document.getElementById('form__result');

buttonClick.addEventListener('click', (event) => {
    event.preventDefault();
    const firstNumber = document.getElementById('first__number').value;
    const signOperation = document.getElementById('sign__operation').value;
    const secondNumber = document.getElementById('second__number').value;
    let resultCalculator;

    if (firstNumber === '') {
        formResult.innerText = 'Первое число не указано'
        return console.log('Первое число не указано');
    }
    if (secondNumber === '') {
        formResult.innerText = 'Второе число не указано'
        return console.log('Второе число не указано');
    }
    if (isNaN(firstNumber) === true || isNaN(secondNumber) === true) {
        formResult.innerText = 'Некорректный ввод чисел';
        return console.log('Некорректный ввод чисел');
    }

    switch (signOperation){
        case '':
        formResult.innerText = 'Не введен знак';
        return console.log('не введен знак'); break;

        case '*':
        resultCalculator = Number(firstNumber) * Number(secondNumber); 
        formResult.innerText = resultCalculator;
        break;
        
        case '/':
        resultCalculator = Number(firstNumber) / Number(secondNumber);
        formResult.innerText = resultCalculator;
        break;

        case '-':
        resultCalculator = Number(firstNumber) - Number(secondNumber);
        formResult.innerText = resultCalculator;
        break;

        case '+':
        resultCalculator = Number(firstNumber) + Number(secondNumber);
        formResult.innerText = resultCalculator;
        break;

        default:
        (formResult.innerText = 'Программа не поддерживает такую операцию'),
        console.log('Программа не поддерживает такую операцию');break;
    }
    
        if (resultCalculator === Infinity) {
            formResult.innerText = 'Операция некорректна';
            return console.log('Операция некорректна');
        }
        if (resultCalculator === -Infinity) {
            formResult.innerText = 'Операция некорректна';
            return console.log('Операция некорректна');
        }

        if (resultCalculator === NaN) {
            formResult.innerText ='Операция некорректна';
            return console.log('Операция некорректна');
        }
});
