
const inputNumber = document.getElementById('inputdata');
const gueesingBtn = document.getElementById('guesbtn')
const ul = document.querySelector('ul.notification');
const invalidSignal = document.querySelector('p.invalid-signal');
const resetBtn = document.getElementById('resetbtn');
const progressBar = document.querySelector('.progress-bar');
    progressBar.innerText = 0 + '%';
    progressBar.style.width = 5 + '%';
const wining = document.querySelector('img.wining');
const loss = document.querySelector('img.loss')


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
        wining.style.display = "block";
        loss.style.display = "none";
    }else{
        let li = document.createElement('li');
        li.classList.add("bg-warning")
        li.style.color = "red"
        li.innerText = `Sorry It's wrong!! It was ${guessNumber}`;
        ul.appendChild(li);
        inputNumber.value = "";
        loss.style.display = "block";
        wining.style.display = "none";
       
    }

    if(ul.childElementCount === 5){
        gueesingBtn.setAttribute('disabled', 'disabled')
        invalidSignal.textContent = "You over your gaming limit, see your final score";
        invalidSignal.classList.add("bg-warning");
    } 

    let progressBarPersentage = ul.childElementCount * (100 / 5);
    progressBar.innerText = progressBarPersentage + '%';
    progressBar.style.width = progressBarPersentage + '%';
});

resetBtn.addEventListener('click', () => {
    gueesingBtn.removeAttribute('disabled', 'disabled')
    invalidSignal.textContent = "";
    invalidSignal.classList = "invalid-signal";
    ul.innerHTML = "";
    inputNumber.value = "";
    progressBar.innerText = 0 + '%';
    progressBar.style.width = 5 + '%';
    wining.style.display = "none";
    loss.style.display = "none";

})
