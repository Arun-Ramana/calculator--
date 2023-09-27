function addNumbers() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    }
    var sum = num1 + num2;
    document.getElementById("result").value = sum;
}

function subtractNumbers() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    }

    var difference = num1 - num2;
    document.getElementById("result").value = difference;
}

function multiplyNumbers() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    }

    var product = num1 * num2;
    document.getElementById("result").value = product;
}

function divideNumbers() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    }

    if (num2 === 0) {
        alert("Infinity!!!.");
        return;
    }

    var quotient = num1 / num2;
    document.getElementById("result").value = quotient;
}

function modulosNumbers(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    if(isNaN(num1)|| isNaN(num2)){
        alert("Please enter valid numbers");
        return;
    }

    if (num2 >= num1){
        alert("Can't be done!.")
    }

    var modulo = num1%num2;
    document.getElementById("result").value = modulo;


}
