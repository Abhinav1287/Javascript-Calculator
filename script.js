let lastInputWasOperator = false;
        let lastInputWasEqual = false;

        function clearDisplay() {
            document.getElementById('display').innerText = '0';
            lastInputWasOperator = false;
            lastInputWasEqual = false;
        }
        
        function appendToDisplay(value) {
            let display = document.getElementById('display');
            
            if (lastInputWasEqual && !isNaN(value)) {
                
                display.innerText = value;
            } else {
                
                if (isOperator(value) && lastInputWasOperator) {
                    return;
                }
                
                display.innerText = display.innerText === '0' ? value : display.innerText + value;
            }
            
            lastInputWasOperator = isOperator(value);
            lastInputWasEqual = false;
        }

        function calculate() {
            let display = document.getElementById('display');
            try {
                display.innerText = new Function('return ' + display.innerText)();
                lastInputWasEqual = true;
            } catch {
                display.innerText = 'Error';
            }
            lastInputWasOperator = false;
        }

        function isOperator(value) {
            return ['+', '-', '*', '/'].includes(value);
        }