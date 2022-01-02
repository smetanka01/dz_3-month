//Задание-1 | При клике на кнопку, добавляет новый элемент div в контейнер

let btn = document.getElementById('add-item-btn')
let container = document.getElementById('container')
let container1 = document.getElementById('container1')

btn.addEventListener("click", function () {
    let div = document.createElement('div')
    div.className = 'element'
    div.innerHTML = 'Element'
    container1.append(div)
})


//Задание-2 | при клике старт по интерваллу добавляется div, при клике stop интервалл останавливаеться
let myIntervall

const start = document.getElementById('start')
const stop = document.getElementById('stop')

function startItervall (){
    myIntervall = setInterval(function () {
        let div = document.createElement('div')
        div.className = 'element'
        div.innerHTML = Math.floor(Math.random() * 21)
        container.append(div)
    }, 500)
}

start.addEventListener('click',startItervall)
stop.addEventListener('click', () => clearInterval(myIntervall))



const form = document.forms[0],
    btnLogIn = form.lastElementChild;

form.addEventListener("change", form_change);
form.addEventListener("submit", form_submit);

function form_change() {
    btnLogIn.disabled = form.username.value.length < 6
        || form.password.value.length < 6;
}
function form_submit(event) {
    event.preventDefault();
}