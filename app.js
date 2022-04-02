// global from line 56
function toggleNegative() {
    console.log('toggle fn')
    if (!calcDisplay) {
        console.log('no value')
        return;
    }

    if (calculateLastClicked === true) {
        calculateLastClicked = false;
        calcDisplay = storage[0];
    }

    calcDisplay = calcDisplay.toString();

    if (Boolean(calcDisplay.match('[-]'))) {
        calcDisplay = calcDisplay.replace('-', '')
    } else {
        calcDisplay = '-' + calcDisplay;
    }

    display.textContent = calcDisplay;
    storage[0] = calcDisplay;
    previousAction = 'percent';
}

    var calcDisplay = '';
    var storage = [];
    var previousAction;
    var resultSoFar;
    var savedVal;
    var calculateLastClicked = false;

    var table = document.getElementById('table');
    var display = document.getElementById('display-input');

    var one = document.getElementById('one');
    var two = document.getElementById('two');
    var three = document.getElementById('three');
    var four = document.getElementById('four');
    var five = document.getElementById('five');
    var six = document.getElementById('six');
    var seven = document.getElementById('seven');
    var eight = document.getElementById('eight');
    var nine = document.getElementById('nine');
    var zero = document.getElementById('zero');
    var decimal = document.getElementById('decimal');
    var percent = document.getElementById('percent');
    var plusMinusButton = document.getElementById('plus-minus');
    var clearButton = document.getElementById('clear');
    var add = document.getElementById('add');
    var subract = document.getElementById('subtract');
    var multiply = document.getElementById('multiply');
    var divide = document.getElementById('divide');
    var equals = document.getElementById('equals');

    const ENTER_KEY = 13;
        const ESCAPE_KEY = 27;
        const CLEAR_KEY = 12;
        const DECIMAL = 110;
        const ADD = 107;
        const SUBTRACT = 109;
        const MULTIPLY = 106;
        const DIVIDE = 111;
        const ZERO = 48;
        const ONE = 49;
        const TWO = 50;
        const THREE = 51;
        const FOUR = 52;
        const FIVE = 53;
        const SIX = 54;
        const SEVEN = 55;
        const EIGHT = 56;
        const NINE = 57;
        // const keyPressed = event.keyCode;/*KeyboardEvent.code;*/

(function(root, undefined) {
    // var calcDisplay = '';
    // var storage = [];
    // var previousAction;
    // var resultSoFar;
    // var savedVal;
    // var calculateLastClicked = false;

    function togglePressed(el) {
        let nums = document.getElementsByClassName('numbers');
        let operators = document.getElementsByClassName('operator')
        for (let i = 0; i < nums.length; i++) {
            let element = nums[i];
            element === el ? element.classList.add('pressed') : element.classList.remove('pressed');
        }
        for (let i = 0; i < operators.length; i++) {
            let element = operators[i];
            element === el ? element.classList.add('pressed') : element.classList.remove('pressed');
        }
    }

    function clearPressed() {
        let nums = document.getElementsByClassName('numbers');
        let operators = document.getElementsByClassName('operator')
        for (let i = 0; i < nums.length; i++) {
            let element = nums[i];
            element.classList.remove('pressed');
        }
        for (let i = 0; i < operators.length; i++) {
            let element = operators[i];
            element.classList.remove('pressed');
        }
    }

    function clearInput() {
        calcDisplay = '';
    }

    function clearEntries() {
        calcDisplay = '';
        storage = [];
        calculateLastClicked = false;
    }

    function clearAll() {
        clearPressed();
        storage = [];
        calcDisplay = '';
        display.textContent = calcDisplay;
    }

    function storeResult(result) {
        storage[0] = result;
        storage.length = 1;
    }

    // function toggleNegative() {
    //     console.log('toggle fn')
    //     if (!calcDisplay) {
    //         console.log('no value')
    //         return;
    //     }

    //     if (calculateLastClicked === true) {
    //         calculateLastClicked = false;
    //         calcDisplay = storage[0];
    //     }

    //     calcDisplay = calcDisplay.toString();

    //     if (Boolean(calcDisplay.match('[-]'))) {
    //         calcDisplay = calcDisplay.replace('-', '')
    //     } else {
    //         calcDisplay = '-' + calcDisplay;
    //     }

    //     display.textContent = calcDisplay;
    //     storage[0] = calcDisplay;
    //     previousAction = 'percent';
    // }

    function calculate(a, b) {

        var result = '';

        if (previousAction === 'add') {
            result = parseFloat(a) + parseFloat(b);
        } else if (previousAction === 'subtract') {
            result = parseFloat(a) - parseFloat(b);
        } else if (previousAction === 'multiply') {
            result = parseFloat(a) * parseFloat(b);
        } else if (previousAction === 'divide') {
            result = parseFloat(a) / parseFloat(b);
        }
        return result;
    }

    // var table = document.getElementById('table');
    // var display = document.getElementById('display-input');

    // var one = document.getElementById('one');
    // var two = document.getElementById('two');
    // var three = document.getElementById('three');
    // var four = document.getElementById('four');
    // var five = document.getElementById('five');
    // var six = document.getElementById('six');
    // var seven = document.getElementById('seven');
    // var eight = document.getElementById('eight');
    // var nine = document.getElementById('nine');
    // var zero = document.getElementById('zero');
    // var decimal = document.getElementById('decimal');
    // var percent = document.getElementById('percent');
    // var plusMinusButton = document.getElementById('plus-minus');
    // var clearButton = document.getElementById('clear');

    table.addEventListener('click', function(event) {
        console.log('table clicked');
        var elementClicked = event.target;
        var action = elementClicked.dataset.action;

        if (isNaN(calcDisplay)) {
            calcDisplay = 0;
        }

        if (elementClicked === clearButton) {
            togglePressed(clearButton)
            clearAll();
            // document.getElementById('clear').focus();
            return;
        }

        if (elementClicked === plusMinusButton) {
            togglePressed(plusMinusButton)
            toggleNegative();
            return;
        }

        if ( (elementClicked === percent) && ( calcDisplay === '' ) ) {
            return;
        } else if (elementClicked === percent) {
            if (calculateLastClicked === true) {
                calcDisplay = storage[0];
                calculateLastClicked = false;
            }
            calcDisplay = parseFloat(calcDisplay) / 100;
            display.textContent = calcDisplay;
            return;
        }

        if (elementClicked === one) {
            togglePressed(one);
            if (calculateLastClicked === true) {
                clearEntries();
            }
            calcDisplay = calcDisplay + 1;
            display.textContent = calcDisplay;

        } else if (elementClicked === two) {
            togglePressed(two);
            if (calculateLastClicked === true) {
                clearEntries();
            }
            calcDisplay = calcDisplay + 2;
            display.textContent = calcDisplay;
        } else if (elementClicked === three) {
            togglePressed(three);
            if (calculateLastClicked === true) {
                clearEntries();
            }
            calcDisplay = calcDisplay + 3;
            display.textContent = calcDisplay;
        } else if (elementClicked === four) {
            togglePressed(four);
            if (calculateLastClicked === true && storage.length > 1) {
                clearEntries();
            } else if (calculateLastClicked === true) {
                clearInput();
            }
            calcDisplay = calcDisplay + 4;
            display.textContent = calcDisplay;
        } else if (elementClicked === five) {
            togglePressed(five);
            if (calculateLastClicked === true) {
                clearEntries();
            }
            calcDisplay = calcDisplay + 5;
            display.textContent = calcDisplay;
        } else if (elementClicked === six) {
            togglePressed(six);
            if (calculateLastClicked === true) {
                clearEntries();
            }
            calcDisplay = calcDisplay + 6;
            display.textContent = calcDisplay;
        } else if (elementClicked === seven) {
            togglePressed(seven);
            if (calculateLastClicked === true) {
                clearEntries();
            }
            calcDisplay = calcDisplay + 7;
            display.textContent = calcDisplay;
        } else if (elementClicked === eight) {
            togglePressed(eight);
            if (calculateLastClicked === true) {
                clearEntries();
            }
            calcDisplay = calcDisplay + 8;
            display.textContent = calcDisplay;
        } else if (elementClicked === nine) {
            togglePressed(nine);
            if (calculateLastClicked === true) {
                clearEntries();
            }
            calcDisplay = calcDisplay + 9;
            display.textContent = calcDisplay;
        } else if (elementClicked === zero) {
            togglePressed(zero);
            if (calculateLastClicked === true) {
                clearEntries();

            }
            calcDisplay = calcDisplay + 0;
            display.textContent = calcDisplay;
        } else if (elementClicked === decimal) {
            togglePressed(decimal);
            if (!calcDisplay) {
                calcDisplay = '0.';
                return display.textContent = calcDisplay;
            } else if ( Boolean(calcDisplay.match('[.]')) ) {
                return;
            }
            calcDisplay = calcDisplay + '.';
            display.textContent = calcDisplay;

        } else if (elementClicked === add) {
            // document.getElementById('add').focus();
            togglePressed(add);
            if (calculateLastClicked === true) {
                clearInput();
                calculateLastClicked = false;
                previousAction = 'add';
                return;
            }

            if (previousAction === 'percent') {
                calcDisplay = storage[0];
                savedVal = calcDisplay;
            } else {
                storage.push(calcDisplay);
                savedVal = calcDisplay;
            }

           if (storage.length > 1) {
                resultSoFar = calculate(storage[0], storage[1]);
                storeResult(resultSoFar);
                clearInput();
                display.textContent = resultSoFar;
                previousAction = 'add';
                calculateLastClicked = false;
            } else {
                clearInput();
            //    display.textContent = savedVal;
                previousAction = 'add';
                calculateLastClicked = false;
            }

        } else if (elementClicked === subtract) {
            // document.getElementById('subtract').focus();
            togglePressed(subtract);
            if (calculateLastClicked === true) {
                clearInput();
                calculateLastClicked = false;
                previousAction = 'subtract';
                return;
            }

            if (previousAction === 'percent') {
                storage[0] = calcDisplay;
                savedVal = calcDisplay;
            } else {
                storage.push(calcDisplay);
                savedVal = calcDisplay;
            }

            if (storage.length > 1) {
                resultSoFar = calculate(storage[0], storage[1]);
                storeResult(resultSoFar);
                clearInput();
                display.textContent = resultSoFar;
                previousAction = 'subtract';
                calculateLastClicked = false;
            } else {
                clearInput();
                // display.textContent = savedVal;
                previousAction = 'subtract';
                calculateLastClicked = false;
            }

        } else if (elementClicked === multiply) {
            togglePressed(multiply);
            // document.getElementById('multiply').focus();
            if (calculateLastClicked === true) {
                clearInput();
                calculateLastClicked = false;
                previousAction = 'multiply';
                return;
            }

            if (previousAction === 'percent') {
                storage[0] = calcDisplay;
                savedVal = calcDisplay;
            } else {
                storage.push(calcDisplay);
                savedVal = calcDisplay;
            }

            if (storage.length > 1) {
                resultSoFar = calculate(storage[0], storage[1]);
                storeResult(resultSoFar);
                clearInput();
                // display.textContent = resultSoFar;
                previousAction = 'multiply';
                calculateLastClicked = false;
            } else {
                clearInput();
                display.textContent = savedVal;
                previousAction = 'multiply';
                calculateLastClicked = false;
            }

        } else if (elementClicked === divide) {
            togglePressed(divide);
            // document.getElementById('divide').focus();
            if (calculateLastClicked === true) {
                clearInput();
                calculateLastClicked = false;
                previousAction = 'divide';
                return;
            }

            if (previousAction === 'percent') {
                storage[0] = calcDisplay;
                savedVal = calcDisplay;
            } else {
                storage.push(calcDisplay);
                savedVal = calcDisplay;
            }

            if (storage.length > 1) {
                resultSoFar = calculate(storage[0], storage[1]);
                storeResult(resultSoFar);
                clearInput();
                display.textContent = resultSoFar;
                previousAction = 'divide';
                calculateLastClicked = false;
            } else {
                clearInput();
                display.textContent = savedVal;
                previousAction = 'divide';
                calculateLastClicked = false;
            }

        } else if (elementClicked === equals) {
            togglePressed(equals)
            if (!calcDisplay) {
                return;
            }
            storage.push(calcDisplay);

            if (calculateLastClicked === true) {
                savedVal = calculate(storage[0], storage[1]);
                display.textContent = savedVal;
                storeResult(savedVal);
                return;
            }

            var result = calculate(storage[0], storage[1]);
            display.textContent = result;
            storeResult(result);
            calculateLastClicked = true;
            // document.getElementById('equals').focus();
        }
    })











    document.addEventListener('keydown', function(e) {
        // const ENTER_KEY = 13;
        // const ESCAPE_KEY = 27;
        // const CLEAR_KEY = 12;
        // const DECIMAL = 110;
        // const ADD = 107;
        // const SUBTRACT = 109;
        // const MULTIPLY = 106;
        // const DIVIDE = 111;
        // const ZERO = 48;
        // const ONE = 49;
        // const TWO = 50;
        // const THREE = 51;
        // const FOUR = 52;
        // const FIVE = 53;
        // const SIX = 54;
        // const SEVEN = 55;
        // const EIGHT = 56;
        // const NINE = 57;
        const keyPressed = event.keyCode;/*KeyboardEvent.code;*/

        if (isNaN(calcDisplay)) {
            calcDisplay = 0;
        }

        if (keyPressed === ESCAPE_KEY || keyPressed === CLEAR_KEY) {
            togglePressed(clearButton)
            clearAll();
            // document.getElementById('clear').focus();
            return;
        }

        if (keyPressed === SUBTRACT && e.shiftKey) {
            togglePressed(plusMinusButton)
            toggleNegative();
            return;
        }

        if ( (keyPressed === FIVE && e.shiftKey) && ( calcDisplay === '' ) ) {
            return;
        } else if (keyPressed === FIVE && e.shiftKey) {
            if (calculateLastClicked === true) {
                calcDisplay = storage[0];
                calculateLastClicked = false;
            }
            calcDisplay = parseFloat(calcDisplay) / 100;
            display.textContent = calcDisplay;
            return;
        }

        if (keyPressed === ONE) {
            togglePressed(one);
            if (calculateLastClicked === true) {
                clearEntries();
            }
            calcDisplay = calcDisplay + 1;
            display.textContent = calcDisplay;

        } else if (keyPressed === TWO) {
            togglePressed(two);
            if (calculateLastClicked === true) {
                clearEntries();
            }
            calcDisplay = calcDisplay + 2;
            display.textContent = calcDisplay;
        } else if (keyPressed === THREE) {
            togglePressed(three);
            if (calculateLastClicked === true) {
                clearEntries();
            }
            calcDisplay = calcDisplay + 3;
            display.textContent = calcDisplay;
        } else if (keyPressed === FOUR) {
            togglePressed(four);
            if (calculateLastClicked === true && storage.length > 1) {
                clearEntries();
            } else if (calculateLastClicked === true) {
                clearInput();
            }
            calcDisplay = calcDisplay + 4;
            display.textContent = calcDisplay;
        } else if (keyPressed === FIVE) {
            togglePressed(five);
            if (calculateLastClicked === true) {
                clearEntries();
            }
            calcDisplay = calcDisplay + 5;
            display.textContent = calcDisplay;
        } else if (keyPressed === SIX) {
            togglePressed(six);
            if (calculateLastClicked === true) {
                clearEntries();
            }
            calcDisplay = calcDisplay + 6;
            display.textContent = calcDisplay;
        } else if (keyPressed === SEVEN) {
            togglePressed(seven);
            if (calculateLastClicked === true) {
                clearEntries();
            }
            calcDisplay = calcDisplay + 7;
            display.textContent = calcDisplay;
        } else if (keyPressed === EIGHT) {
            togglePressed(eight);
            if (calculateLastClicked === true) {
                clearEntries();
            }
            calcDisplay = calcDisplay + 8;
            display.textContent = calcDisplay;
        } else if (keyPressed === NINE) {
            togglePressed(nine);
            if (calculateLastClicked === true) {
                clearEntries();
            }
            calcDisplay = calcDisplay + 9;
            display.textContent = calcDisplay;
        } else if (keyPressed === ZERO) {
            togglePressed(zero);
            if (calculateLastClicked === true) {
                clearEntries();

            }
            calcDisplay = calcDisplay + 0;
            display.textContent = calcDisplay;
        } else if (keyPressed === DECIMAL) {
            togglePressed(decimal);
            if (!calcDisplay) {
                calcDisplay = '0.';
                return display.textContent = calcDisplay;
            } else if ( Boolean(calcDisplay.match('[.]')) ) {
                return;
            }
            calcDisplay = calcDisplay + '.';
            display.textContent = calcDisplay;

        } else if (keyPressed === ADD) {
            // document.getElementById('add').focus();
            togglePressed(add);
            if (calculateLastClicked === true) {
                clearInput();
                calculateLastClicked = false;
                previousAction = 'add';
                return;
            }

            if (previousAction === 'percent') {
                calcDisplay = storage[0];
                savedVal = calcDisplay;
            } else {
                storage.push(calcDisplay);
                savedVal = calcDisplay;
            }

           if (storage.length > 1) {
                resultSoFar = calculate(storage[0], storage[1]);
                storeResult(resultSoFar);
                clearInput();
                display.textContent = resultSoFar;
                previousAction = 'add';
                calculateLastClicked = false;
            } else {
                clearInput();
            //    display.textContent = savedVal;
                previousAction = 'add';
                calculateLastClicked = false;
            }

        } else if (keyPressed === SUBTRACT) {
            // document.getElementById('subtract').focus();
            togglePressed(subtract);
            if (calculateLastClicked === true) {
                clearInput();
                calculateLastClicked = false;
                previousAction = 'subtract';
                return;
            }

            if (previousAction === 'percent') {
                storage[0] = calcDisplay;
                savedVal = calcDisplay;
            } else {
                storage.push(calcDisplay);
                savedVal = calcDisplay;
            }

            if (storage.length > 1) {
                resultSoFar = calculate(storage[0], storage[1]);
                storeResult(resultSoFar);
                clearInput();
                display.textContent = resultSoFar;
                previousAction = 'subtract';
                calculateLastClicked = false;
            } else {
                clearInput();
                // display.textContent = savedVal;
                previousAction = 'subtract';
                calculateLastClicked = false;
            }

        } else if (keyPressed === MULTIPLY) {
            togglePressed(multiply);
            // document.getElementById('multiply').focus();
            if (calculateLastClicked === true) {
                clearInput();
                calculateLastClicked = false;
                previousAction = 'multiply';
                return;
            }

            if (previousAction === 'percent') {
                storage[0] = calcDisplay;
                savedVal = calcDisplay;
            } else {
                storage.push(calcDisplay);
                savedVal = calcDisplay;
            }

            if (storage.length > 1) {
                resultSoFar = calculate(storage[0], storage[1]);
                storeResult(resultSoFar);
                clearInput();
                // display.textContent = resultSoFar;
                previousAction = 'multiply';
                calculateLastClicked = false;
            } else {
                clearInput();
                display.textContent = savedVal;
                previousAction = 'multiply';
                calculateLastClicked = false;
            }

        } else if (keyPressed === DIVIDE) {
            togglePressed(divide);
            // document.getElementById('divide').focus();
            if (calculateLastClicked === true) {
                clearInput();
                calculateLastClicked = false;
                previousAction = 'divide';
                return;
            }

            if (previousAction === 'percent') {
                storage[0] = calcDisplay;
                savedVal = calcDisplay;
            } else {
                storage.push(calcDisplay);
                savedVal = calcDisplay;
            }

            if (storage.length > 1) {
                resultSoFar = calculate(storage[0], storage[1]);
                storeResult(resultSoFar);
                clearInput();
                display.textContent = resultSoFar;
                previousAction = 'divide';
                calculateLastClicked = false;
            } else {
                clearInput();
                display.textContent = savedVal;
                previousAction = 'divide';
                calculateLastClicked = false;
            }

        } else if (keyPressed === ENTER_KEY) {
            togglePressed(equals)
            if (!calcDisplay) {
                return;
            }
            storage.push(calcDisplay);

            if (calculateLastClicked === true) {
                savedVal = calculate(storage[0], storage[1]);
                display.textContent = savedVal;
                storeResult(savedVal);
                return;
            }

            var result = calculate(storage[0], storage[1]);
            display.textContent = result;
            storeResult(result);
            calculateLastClicked = true;
            // document.getElementById('equals').focus();
        }
    });



    // table.addEventListener('click', function(event) {
    //     // debugger;
        // var elementClicked = event.target,
        //     action = elementClicked.dataset.action;

    //     if (isNaN(calcDisplay)) {
    //         calcDisplay = 0;
    //     }

    //     if (elementClicked === clearButton) {
    //         clearAll();
    //         return;
    //     }

    //     if (elementClicked === plusMinusButton) {
    //         toggleNegative();
    //         return;
    //     }

    //     if (elementClicked === percent && calcDisplay === '') {
    //         return;
    //     } else if (elementClicked === percent) {
    //         if (calculateLastClicked === true) {
    //             calcDisplay = storage[0];
    //             calculateLastClicked = false;
    //         }
    //         calcDisplay = parseFloat(calcDisplay/* storage[0] */) / 100;
    //         display.textContent = calcDisplay;
    //         return;
    //     }

    //     if (elementClicked === one) {
    //         if (calculateLastClicked === true) {
    //             clearEntries();
    //         }
    //         calcDisplay = calcDisplay + 1;
    //         display.textContent = calcDisplay;
    //         // elementClicked.blur();
    //     } else if (elementClicked === two) {
    //         if (calculateLastClicked === true) {
    //             clearEntries();
    //         }
    //         calcDisplay = calcDisplay + 2;
    //         display.textContent = calcDisplay;
    //         // elementClicked.blur();
    //     } else if (elementClicked === three) {
    //         if (calculateLastClicked === true) {
    //             clearEntries();
    //         }
    //         calcDisplay = calcDisplay + 3;
    //         display.textContent = calcDisplay;
    //         // elementClicked.blur();
    //     } else if (elementClicked === four) {
    //         if (calculateLastClicked === true && storage.length > 1) {
    //             clearEntries();
    //         } else if (calculateLastClicked === true) {
    //             clearInput();
    //         }
    //         calcDisplay = calcDisplay + 4;
    //         display.textContent = calcDisplay;
    //         // elementClicked.blur();
    //     } else if (elementClicked === five) {
    //         if (calculateLastClicked === true) {
    //             clearEntries();
    //         }
    //         calcDisplay = calcDisplay + 5;
    //         display.textContent = calcDisplay;
    //         // elementClicked.blur();
    //     } else if (elementClicked === six) {
    //         if (calculateLastClicked === true) {
    //             clearEntries();
    //         }
    //         calcDisplay = calcDisplay + 6;
    //         display.textContent = calcDisplay;
    //         // elementClicked.blur();
    //     } else if (elementClicked === seven) {
    //         if (calculateLastClicked === true) {
    //             clearEntries();
    //         }
    //         calcDisplay = calcDisplay + 7;
    //         display.textContent = calcDisplay;
    //         // elementClicked.blur();
    //     } else if (elementClicked === eight) {
    //         if (calculateLastClicked === true) {
    //             clearEntries();
    //         }
    //         calcDisplay = calcDisplay + 8;
    //         display.textContent = calcDisplay;
    //         // elementClicked.blur();
    //     } else if (elementClicked === nine) {
    //         if (calculateLastClicked === true) {
    //             clearEntries();
    //         }
    //         calcDisplay = calcDisplay + 9;
    //         display.textContent = calcDisplay;
    //         // elementClicked.blur();
    //     } else if (elementClicked === zero) {
    //         if (calculateLastClicked === true) {
    //             clearEntries();
    //         }
    //         calcDisplay = calcDisplay + 0;
    //         display.textContent = calcDisplay;
    //         // elementClicked.blur();
    //     } else if (elementClicked === decimal) {
    //         if (!calcDisplay) {
    //             calcDisplay = '0.';
    //             // elementClicked.blur();
    //             return display.textContent = calcDisplay;
    //         } else if ( Boolean(calcDisplay.match('[.]')) ) {
    //             // elementClicked.blur();
    //             return;
    //         }
    //         calcDisplay = calcDisplay + '.';
    //         display.textContent = calcDisplay;
    //         // elementClicked.blur();
    //     } else if (action === 'add') {
    //         if (calculateLastClicked === true) {
    //             clearInput();
    //             calculateLastClicked = false;
    //             previousAction = 'add';
    //             // elementClicked.blur();
    //             return;
    //         }

    //         if (previousAction === 'percent') {
    //             calcDisplay = storage[0];
    //             savedVal = calcDisplay;
    //         } else {
    //             storage.push(calcDisplay);
    //             savedVal = calcDisplay;
    //         }

    //        if (storage.length > 1) {
    //             resultSoFar = calculate(storage[0], storage[1]);
    //             storeResult(resultSoFar);
    //             clearInput();
    //             display.textContent = resultSoFar;
    //             previousAction = 'add';
    //             calculateLastClicked = false;
    //         } else {
    //             clearInput();
    //             previousAction = 'add';
    //             calculateLastClicked = false;
    //         }
    //         // elementClicked.blur();

    //     } else if (action === 'subtract') {

    //         if (calculateLastClicked === true) {
    //             clearInput();
    //             calculateLastClicked = false;
    //             previousAction = 'subtract';
    //             // elementClicked.blur();
    //             return;
    //         }

    //         if (previousAction === 'percent') {
    //             storage[0] = calcDisplay;
    //             savedVal = calcDisplay;
    //         } else {
    //             storage.push(calcDisplay);
    //             savedVal = calcDisplay;
    //         }

    //         if (storage.length > 1) {
    //             resultSoFar = calculate(storage[0], storage[1]);
    //             storeResult(resultSoFar);
    //             clearInput();
    //             display.textContent = resultSoFar;
    //             previousAction = 'subtract';
    //             calculateLastClicked = false;
    //         } else {
    //             clearInput();
    //             previousAction = 'subtract';
    //             calculateLastClicked = false;
    //         }
    //         // elementClicked.blur();

    //     } else if (action === 'multiply') {

    //         if (calculateLastClicked === true) {
    //             clearInput();
    //             calculateLastClicked = false;
    //             previousAction = 'multiply';
    //             // elementClicked.blur();
    //             return;
    //         }

    //         if (previousAction === 'percent') {
    //             storage[0] = calcDisplay;
    //             savedVal = calcDisplay;
    //         } else {
    //             storage.push(calcDisplay);
    //             savedVal = calcDisplay;
    //         }

    //         if (storage.length > 1) {
    //             resultSoFar = calculate(storage[0], storage[1]);
    //             storeResult(resultSoFar);
    //             clearInput();
    //             previousAction = 'multiply';
    //             calculateLastClicked = false;
    //         } else {
    //             clearInput();
    //             display.textContent = savedVal;
    //             previousAction = 'multiply';
    //             calculateLastClicked = false;
    //         }
    //         // elementClicked.blur();

    //     } else if (action === 'divide') {

    //         if (calculateLastClicked === true) {
    //             clearInput();
    //             calculateLastClicked = false;
    //             previousAction = 'divide';
    //             // elementClicked.blur();
    //             return;
    //         }

    //         if (previousAction === 'percent') {
    //             storage[0] = calcDisplay;
    //             savedVal = calcDisplay;
    //         } else {
    //             storage.push(calcDisplay);
    //             savedVal = calcDisplay;
    //         }

    //         if (storage.length > 1) {
    //             resultSoFar = calculate(storage[0], storage[1]);
    //             storeResult(resultSoFar);
    //             clearInput();
    //             display.textContent = resultSoFar;
    //             previousAction = 'divide';
    //             calculateLastClicked = false;
    //         } else {
    //             clearInput();
    //             display.textContent = savedVal;
    //             previousAction = 'divide';
    //             calculateLastClicked = false;
    //         }
    //         // elementClicked.blur();

    //     } else if (action === 'calculate') {
    //         if (!calcDisplay) {
    //             // elementClicked.blur();
    //             return;
    //         }
    //         storage.push(calcDisplay);

    //         if (calculateLastClicked === true) {
    //             savedVal = calculate(storage[0], storage[1]);
    //             display.textContent = savedVal;
    //             storeResult(savedVal);
    //             // elementClicked.blur();
    //             return;
    //         }

    //         var result = calculate(storage[0], storage[1]);
    //         display.textContent = result;
    //         storeResult(result);
    //         calculateLastClicked = true;
    //         // elementClicked.blur();
    //     }

    // });

    root['calculator'] = this;

})(this);


// var divide = document.getElementById('divide'),
// multiply = document.getElementById('multiply'),
// add = document.getElementById('add'),
// subtract = document.getElementById('subtract'),
// equals = document.getElementById('equals'),
// percentage = document.getElementById('percent');