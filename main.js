let quotes_array = [
    "Push yourself, because no one else is going to do it for you.",
    "Failure is the condiment that gives success its flavor.",
    "Wake up with determination. Go to bed with satisfaction.",
    "It's going to be hard, but hard does not mean impossible.",
    "Learning never exhausts the mind.",
    "The only way to do great work is to love what you do."
];


let seconds_left = 10;
let index = 0
document.getElementById('text_div').innerHTML = quotes_array[index];

let interval = setInterval(timer, 1000);

let prevError=0
document.getElementById('text_input').addEventListener('keyup',() => {
    let word = quotes_array[index]
    let elementById = document.getElementById('text_input').value;

    let error3 = 0

    if(elementById.length===0){
        document.getElementById('error_div').innerHTML="Error: " +prevError
        return
    }
    let flag = false
    for (let x = 0; x < elementById.length; x++) {
        if (elementById.charAt(x) !== word.charAt(x)) {
            flag = true
            document.getElementById('error_div').innerHTML ="Error: " + (++error3);
            console.log(error3)
        }
    }

    if(!flag){
        error3=0
        document.getElementById('error_div').innerHTML ="Error: " + prevError;
    }

    if(elementById.length === word.length){
        prevError +=error3
        document.getElementById('text_div').innerHTML = quotes_array[++index];
        document.getElementById('text_input').value = "";
        document.getElementById("score").innerText ="Score: " + index
        document.getElementById('error_div').innerHTML ="Error: " + prevError;
    }
});

function timer() {
        document.getElementById('timer').innerHTML = --seconds_left;

        if (seconds_left <= 0) {
            document.getElementById('timer_div').innerHTML = "Timed Out";
            clearInterval(interval);
            document.getElementById('text_input').disabled = true
        }
}

function restart() {
    index=0
    prevError = 0

    document.getElementById('text_div').innerHTML = quotes_array[index];
    document.getElementById('text_input').value = "";
    document.getElementById("score").innerText ="Score:" + index
    document.getElementById('error_div').innerHTML = "Error:" + 0;
    document.getElementById('text_input').disabled = false
    document.getElementById('timer_div').innerHTML = "";

    clearInterval(interval);
    seconds_left = 11;
    interval = setInterval(timer, 1000);
}

document.getElementById("restart").addEventListener("click",() => restart());



