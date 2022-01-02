//Задание-6
let tasksOne = prompt('Что вам надо сделать?')



//Задание-1
console.log(document.getElementById('string-3').innerText)
console.log(document.getElementById('string-5').innerText)
console.log(document.getElementById('string-2').innerText)
console.log(document.getElementById('string-6').innerText)
console.log(document.getElementById('string-4').innerText)
console.log(document.getElementById('string-1').innerText)

//Задание-2
let red = document.getElementsByClassName('element')
let green = document.getElementsByClassName('element')

for (let i = 0; i < 3; i++) {
    red[i].style.color = "#ff0000"
}

for (let i = 3; i < red.length; i++) {
    green[i].style.color = "#008000"
}

//Задание-3
const tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];
tasks.push(tasksOne)
let ol = document.getElementById('todo-list')

for (let i = 0; i < tasks.length; i++) {
    let li = document.createElement('li')
    li.innerHTML = tasks[i]
    ol.append(li)
}

//Задание-4
document.querySelectorAll('p').forEach((elem) => {
    elem.insertAdjacentHTML('afterend', '<hr/>');
});

//Задание-5

for(let e of document.getElementsByClassName('item')){
    if (e.textContent.startsWith('Cola 1.5 l. ')){
        e.remove();
    }

    if (e.textContent.startsWith("Chocolate bar")){
        let newChild = document.createElement("span");
        newChild.className = "qty";
        newChild.textContent = " x4";
        e.replaceChild(newChild, e.firstElementChild);
        e.replaceChild("Canned Fish", e.firstElementChild);
    }
}


