
let welcom = alert('Вы зашли в бесплатный калькулятор от студии UBBA !')
let nameUs = prompt('Как вас зовут ?')
let a = parseFloat(prompt('Назовите число !'));
let c = prompt('( + ) ( - ) ( * ) ( / )');
let b = parseFloat(prompt(`Теперь напишите второе число !`));
let res = 0;
let otv

if (isNaN(a) || (isNaN(b))) {
    alert("Wrong input ! REFRESH THE PAGE  :(")
} else {
    if (c === ' + ' || c === ' плюс ') {
        res = a + b;
    } else if (c === ' - ' || c === ' минус ') {
        res = a - b;
    } else if (c === ' * ' || c === ' умножить ') {
        res = a * b;
    } else if (c === ' / ' || c === ' делить ') {
        res = a / b;
    }

    otv = alert(a + c + b + " = " + res)
}

console.log(`Вход выполнен ${nameUs} `);

