function Task1(num1, num2) {
    if (num1 < num2 || num1 > num2) {
        alert(1);
    } else {
        alert(0);
    }    
}
function Task1Runner() {
    Task1(prompt("Enter 1 number"), prompt("Enter 2 number"));
}

///////////////////////////////

function Task2(n){
    if(n < 0){
        return -1
    }
    
    if(n == 0 || n == 1){
        return 1;
    }else{
        return n * Task2(n-1);
    }
}
function Task2Runner() {
    let n = prompt("Enter number");
    alert(Task2(n));
}

//////////////////////////

function Task3(a, b, c) {
    return a + b + c;
}
function Task3Runner() {
    let a = prompt("Enter 1 number");
    let b = prompt("Enter 2 number");
    let c = prompt("Enter 3 number");

    alert(a + b + c);
}

///////////////////////////////

function Task4(...params) {
    if (params.length == 1) {
        return params[0] * params[0];
    } else if (params.length > 1 && params.length <= 2) {
        return params[0] * params[1];
    }
}
function Task4Runner() {
    alert(`Task with only 1 parametr (3) ${Task4(3)}. Task with 2 parametrs (2, 3) ${Task4(2,3)}`);
}

////////////////////////////////////


function Task5(isPerfect) {
    const dividers = [];
    let sumOfDividers = 0;
    for (let i = 0; i < isPerfect; i++) {
        if (isPerfect % i == 0) {
            dividers.push(i);
        }
    }
    for (const iter of dividers) {
        sumOfDividers += iter;
    }

    if (isPerfect == sumOfDividers) {
        return true;
    } else {
        return false;
    }
}
function Task5Runner() {
    if (Task5(prompt("Enter your number")) == true) {
        alert("Is perfect");
    } else {
        alert("Your number isn`t perfect");
    }
}

///////////////////////////////////////////////

function Task6 (startNum, endNum) {
    const arr = [];
    const arrOfPerfect = [];
    for (let i = startNum; i < endNum; i++) {
        arr.push(i);
    }
    for (const iter of arr) {
        if (Task5(iter) == true) {
            arrOfPerfect.push(iter);
        }
    }
    alert(arrOfPerfect);
}
function Task6Runner() {
    Task6(prompt("Enter start num"), prompt("Enter end num"));
}