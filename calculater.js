function clearDisplay() {
        document.getElementById("display").value = "none";
    }
    
    function deleteLast() {
        let currentValue = document.getElementById("display").value;
        document.getElementById("display").value = currentValue.slice(0, -1);
    }
    
    function appendCharacter(character) {
        document.getElementById("display").value += character;
    }
    
    function calculate() {
        let expression = document.getElementById("display").value;
        try {
            document.getElementById("display").value = eval(expression);
        } catch (error) {
            document.getElementById("display").value = "Error";
        }
    }
    