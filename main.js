
let inputNumber = document.getElementById('inputdata');
const gueesingBtn = document.getElementById('guesbtn')
let ul = document.querySelector('ul.notification');

let invalidSignal = document.querySelector('p.invalid-signal');

let resetBtn = document.getElementById('resetbtn');

// console.log(resetBtn);


gueesingBtn.addEventListener('click', () => {
    let guessNumber = Math.ceil(Math.random() * 5);

    if(!inputNumber.value || inputNumber.value < 1 || inputNumber.value > 5){
        invalidSignal.textContent = 'Please enter a valid number';
        invalidSignal.classList.add("bg-warning");
        setTimeout(function(){ 
            invalidSignal.textContent = "";
            invalidSignal.classList = "invalid-signal";
         }, 1000);
        return;
    }

    if(guessNumber === Number(inputNumber.value)){
        let li = document.createElement('li');
        li.classList.add("bg-success")
        li.style.color = "white"
        li.innerText = `Great!! You are All Rounder`;
        ul.appendChild(li);
        inputNumber.value = "";
    }else{
        let li = document.createElement('li');
        li.classList.add("bg-warning")
        li.style.color = "red"
        li.innerText = `Sorry It's wrong!! It was ${guessNumber}`;
        ul.appendChild(li);
        inputNumber.value = "";
       
    }

    if(ul.childElementCount === 5){
        gueesingBtn.setAttribute('disabled', 'disabled')
        invalidSignal.textContent = "You over your gaming limit, see your final score";
        invalidSignal.classList.add("bg-warning");
    } 
});

resetBtn.addEventListener('click', () => {
    gueesingBtn.removeAttribute('disabled', 'disabled')
    invalidSignal.textContent = "";
    invalidSignal.classList = "invalid-signal";
    ul.innerHTML = "";

})


