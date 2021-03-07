
const calculate = (n1, operator, n2) => {
    const firstNum = parseFloat(n1)
    const secondNum = parseFloat(n2)
    if (operator === 'add') {
        return firstNum + secondNum
    } if(operator === 'subtract') {
        return firstNum - secondNum
    } if (operator === 'multiply') {
        return firstNum * secondNum
    } if (operator === 'divide') {
        return firstNum / secondNum
    }
   
}

const calculator = document.querySelector('.calc');
const display = document.querySelector('.calc-display');
const keys = document.querySelector('.calc-keys');

keys.addEventListener('click', e => {
        if (e.target.matches('button')) {

            const key = e.target; // The key clicked
            const action = key.dataset.action; // The action
            const keyContent = key.textContent // The key content/number
            const displayedNum = display.textContent // The display - contenr
            const previousKeyType = calculator.dataset.previousKeyType

            Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'))


            // If not action its a number key
            if (!action) {
                console.log('number key1');
                
                // IF display number is 0 we replace it with the textContent of the clicked key
                if(displayedNum === '0' || previousKeyType === 'operator') {
                    display.textContent = keyContent
                } else {
                    display.textContent = displayedNum + keyContent
                }
                calculator.dataset.previousKeyType = 'number'
            }

            // If action === it's a operator key
            if (action === 'add' ||
                action === 'subtract' ||
                action === 'multiply' ||
                action === 'divide') {

                const firstValue = calculator.dataset.firstValue
                const operator = calculator.dataset.operator
                const secondValue = displayedNum
                
                
                console.log('operator key!');

                if(firstValue && operator && previousKeyType !== 'operator' && previousKeyType !== 'calculate') {
                    const calcValue = calculate(firstValue,operator,secondValue)
                    display.textContent = calcValue

                    // Update calculated value as firstValue
                    calculator.dataset.firstValue = calcValue

                } else {
                    calculator.dataset.firstValue = displayedNum
                }

                key.classList.add('is-depressed')
                //Add custom attribute
                calculator.dataset.previousKeyType = 'operator'
                calculator.dataset.firstValue = displayedNum
                calculator.dataset.operator = action
            }

            if (action === 'decimal') {
                console.log('decimal key!');
                if(!displayedNum.includes('.')) {
                     display.textContent = displayedNum + '.'
                } else if (previousKeyType === 'operator' || previousKeyType === 'calculate' ) {
                    display.textContent = '0.'
                }

                calculator.dataset.previousKeyType = 'decimal'
            }

            if (action === 'clear') {
                console.log('clear key!');
                if(key.textContent === 'AC') {
                    calculator.dataset.firstValue = ''
                    calculator.dataset.modValue = ''
                    calculator.dataset.operator = ''
                    calculator.dataset.previousKeyType = ''
                } else {
                    key.textContent = 'AC'
                }
                display.textContent = 0
                calculator.dataset.previousKeyType = 'clear'
            }

            if (action !== 'clear') {
                const clearButton = calculator.querySelector('[data-action=clear]')
                clearButton.textContent = 'CE'
            }

            if (action === 'calculate') {
                console.log('equal key');
                let firstValue = calculator.dataset.firstValue
                const operator = calculator.dataset.operator
                let secondValue = displayedNum

                if(firstValue) {
                    if(previousKeyType === 'calculate') {
                        firstValue = displayedNum
                        secondValue = calculator.dataset.modValue
                    }
                    display.textContent = calculate(firstValue,operator,secondValue)
                }
                calculator.dataset.modValue = secondValue
                calculator.dataset.previousKeyType = 'calculate'
            }

        }
    })