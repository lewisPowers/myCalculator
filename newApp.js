 (function() {

    var calcDisplay = '',
        previousAction,
        // a = storage[0],
        // b = storage[1],
        resultSoFar,
        savedVal,
        storage = [];
        calculateLastClicked = false;
       
    

        
    

    var calculator = {
        
        
        
        setupEventListeners: function() {
            var main = document.querySelector('div-table'),
            table = document.querySelector('table'), 
            display = document.getElementById('display-input'),
            
            one = document.getElementById('one'),
            two = document.getElementById('two'),
            three = document.getElementById('three'),
            four = document.getElementById('four'),
            five = document.getElementById('five'),
            six = document.getElementById('six'),
            seven = document.getElementById('seven'),
            eight = document.getElementById('eight'),
            nine = document.getElementById('nine'),
            zero = document.getElementById('zero'),
            decimal = document.getElementById('decimal'),
            percent = document.getElementById('percent'),

            plusMinusButton = document.getElementById('plus-minus'),
            clearButton = document.getElementById('clear'); 
            
            // divide = document.getElementById('divide'),
            // multiply = document.getElementById('multiply'),
            // add = document.getElementById('add'),
            // subtract = document.getElementById('subtract'),
            // equals = document.getElementById('equals'), 
            // percentage = document.getElementById('percent');

            table.addEventListener('click', function(event) {
                // debugger;
                var elementClicked = event.target,
                action = elementClicked.dataset.action;
        
            if (isNaN(calcDisplay)) {
                calcDisplay = 0;
            }
    
            if (elementClicked === clearButton) {
                app.clearAll();
            }
    
            if (elementClicked === plusMinusButton) {
                app.toggleNegative();
                return;
            }
        
            if (elementClicked === percent && calcDisplay === '') {
                return;
            } else if (elementClicked === percent) { 
                if (calculateLastClicked === true) {
                    calcDisplay = storage[0];
                    calculateLastClicked = false;
                }
                // storage.push(calcDisplay);  
                calcDisplay = parseFloat(calcDisplay/* storage[0] */) / 100;
                display.textContent = calcDisplay;
                // storage[0] = calcDisplay;
                return;
            }
    // press = then +   : 
    // press = then num :
            if (elementClicked === one) {
                if (calculateLastClicked === true) {
                    clearEntries();
                }
            //    savedVal = null;
                calcDisplay = calcDisplay + 1;
                display.textContent = calcDisplay;
            } else if (elementClicked === two) {
                if (calculateLastClicked === true) {
                    clearEntries();
                }
                calcDisplay = calcDisplay + 2;
                display.textContent = calcDisplay;
            } else if (elementClicked === three) {
                if (calculateLastClicked === true) {
                    clearEntries();
                }
                calcDisplay = calcDisplay + 3;
                display.textContent = calcDisplay;
            } else if (elementClicked === four) {
                if (calculateLastClicked === true && storage.length > 1) {
                    clearEntries();
                } else if (calculateLastClicked === true) {
                    app.clearInput();
                }
                calcDisplay = calcDisplay + 4;
                display.textContent = calcDisplay;
            } else if (elementClicked === five) {
                if (calculateLastClicked === true) {
                    clearEntries();
                }
                calcDisplay = calcDisplay + 5;
                display.textContent = calcDisplay;
            } else if (elementClicked === six) {
                if (calculateLastClicked === true) {
                    clearEntries();
                }
                calcDisplay = calcDisplay + 6;
                display.textContent = calcDisplay;
            } else if (elementClicked === seven) {
                if (calculateLastClicked === true) {
                    clearEntries();
                }
                calcDisplay = calcDisplay + 7;
                display.textContent = calcDisplay;
            } else if (elementClicked === eight) {
                if (calculateLastClicked === true) {
                    clearEntries();
                }
                calcDisplay = calcDisplay + 8;
                display.textContent = calcDisplay;
            } else if (elementClicked === nine) {
                if (calculateLastClicked === true) {
                    clearEntries();
                }
                calcDisplay = calcDisplay + 9;
                display.textContent = calcDisplay;
            } else if (elementClicked === zero) {
                if (calculateLastClicked === true) {
                    clearEntries();
    
                }
                calcDisplay = calcDisplay + 0;
                display.textContent = calcDisplay;
            } else if (elementClicked === decimal) {
                if (!calcDisplay) {
                    calcDisplay = '0.';
                    return display.textContent = calcDisplay;
                } else if ( Boolean(calcDisplay.match('[.]')) ) {
                    return;
                }
                calcDisplay = calcDisplay + '.';
                display.textContent = calcDisplay;   
        
            } else if (action === 'add') {
    // debugger;
                if (calculateLastClicked === true) {
                    // if (previousAction === 'percent') {
                    //     calcDisplay = storage[0];
                    // }
                    app.clearInput();
                    calculateLastClicked = false;
                    previousAction = 'add';
                    return;
                }
    
                if (previousAction === 'percent') {
                    // storage[0] = calcDisplay;
                    calcDisplay = storage[0];
                    savedVal = calcDisplay;
                } else {
                    storage.push(calcDisplay);
                    savedVal = calcDisplay;
                }
        
               if (storage.length > 1) {
                    resultSoFar = app.calculate(storage[0], storage[1]);
                    storage[0] = resultSoFar;
                    storage.length = 1;
                    app.clearInput();
                    display.textContent = resultSoFar;
                    previousAction = 'add';
                    calculateLastClicked = false;
                } else {
                    app.clearInput();
                //    display.textContent = savedVal;
                    previousAction = 'add';
                //    calculateLastClicked = false;
                }
        
            } else if (action === 'subtract') {
    
                if (calculateLastClicked === true) {
                    app.clearInput();
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
                    resultSoFar = app.calculate(storage[0], storage[1]);
                    storage[0] = resultSoFar;
                     storage.length = 1;
                    app.clearInput();
                    display.textContent = resultSoFar;
                    previousAction = 'subtract';
                    calculateLastClicked = false;
                } else {
                    app.clearInput();
                    // display.textContent = savedVal;
                    previousAction = 'subtract';
                    calculateLastClicked = false;
                }
        
            } else if (action === 'multiply') {
    
                if (calculateLastClicked === true) {
                    app.clearInput();
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
                    resultSoFar = app.calculate(storage[0], storage[1]);
                    storage[0] = resultSoFar;
                     storage.length = 1;
                    app.clearInput();
                    // display.textContent = resultSoFar;
                    previousAction = 'multiply';
                    calculateLastClicked = false;
                } else {
                    app.clearInput();
                    display.textContent = savedVal;
                    previousAction = 'multiply';
                    calculateLastClicked = false;
                }
        
            } else if (action === 'divide') {
    
                if (calculateLastClicked === true) {
                    app.clearInput();
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
                    resultSoFar = app.calculate(storage[0], storage[1]);
                    storage[0] = resultSoFar;
                     storage.length = 1;
                    app.clearInput();
                    display.textContent = resultSoFar;
                    previousAction = 'divide';
                    calculateLastClicked = false;
                } else {
                    app.clearInput();
                    display.textContent = savedVal;
                    previousAction = 'divide';
                    calculateLastClicked = false;
                }
        
            } else if (action === 'calculate') {
                storage.push(calcDisplay);
                //savedVal = storage[1];
        
                if (storage.length === 0) {
    
                    return storage[0];
                }
                if (calculateLastClicked === true) {
                    savedVal = app.calculate(storage[0], storage[1]);
                    display.textContent = savedVal;
                    storage[0] = savedVal;
                    storage.length = 1;
                    return;
                }
                
                var result = app.calculate(storage[0], storage[1]);
                display.textContent = result;
                storage[0] = result;
                // // save value in case calculate button is next key pressed
                // calcDisplay = storage[1];
                // clean up storage
                storage.length = 1;
                calculateLastClicked = true;
            }
               
            })

        } 
        
    }
    var app = {
 
        
        clearInput: function() {
            calcDisplay = '';
            display.textContent = calcDisplay;
        },
        
        clearStorage: function() {
            storage = [];
        },
        
        toggleNegative: function() {
            if (Boolean(calcDisplay.match('[-]'))) {
                calcDisplay = calcDisplay.replace('-', '')
            } else {
                calcDisplay = '-' + calcDisplay;
            }
            
            display.textContent = calcDisplay;
            console.log(calcDisplay);
        },
        
        calculate: function(a, b) {
        
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
        },
    }
    calculator.setupEventListeners();
    root.calculator.setupEventListeners.table = calculator;

 })();





