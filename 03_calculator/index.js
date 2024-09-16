const display = document.getElementById('display')
const buttons = document.querySelectorAll('.btn')

let currValue = '';
let prevValue = '';
let operation = undefined;

const appendNum = (number) => {
    if(number ==='0' && currValue ==='0')return;
    currValue = currValue + number;
    contDisplay()
}

const contDisplay = () => {
    display.textContent = currValue || '0';
}

const clearContent = () =>{
    currValue = ''
    prevValue = ''
    operation = undefined;
    contDisplay()
}

const chooseOperation = (op) => {
    operation = op ;
    prevValue = currValue;
    currValue = '';
    if (currValue == '')return;
    if (prevValue !== ''){
     calculate();
    }
}

const calculate = () => {
    let result;
    const prev = parseFloat(prevValue);
    const curr = parseFloat(currValue);

    if (isNaN(curr) || isNaN(prev))return;
    switch (operation) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '/':
            result = prev / curr;
            break;
        case '*':
            result = prev * curr;
            break;

        default:
            break;
    }
    currValue = result.toString();
    prevValue = ''
    operation = undefined;
}

buttons.forEach(button => {
    button.addEventListener('click', () =>{
        let value = button.textContent;
        console.log(value)
        if(!isNaN(value)){
            appendNum(value)
        }else if(value === 'C'){
            clearContent();
        }
        else if(value === '='){
            calculate()
            contDisplay();
        }else {
            chooseOperation(value)
        }
    })
})


