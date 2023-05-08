//1
const list1 = document.querySelector('li')
console.log(list1.textContent);

//2
const list2 = document.querySelectorAll('li')
console.log(list2);

//3
const list3 = document.querySelectorAll('.list-item')
console.log(list3);

//4
const list4 = document.querySelectorAll('.list-item')
for(let i = 0; i > list4.length; i++) {
    console.log(list4[i].textContent);
}

//5
const list5 = document.querySelectorAll("[data-test-id]")
let arr = []
for (let i = 0; i < list5.length; i++) {
    arr.push(list5[i].getAttribute('data-test-id'))
}
console.log(arr);

//6
const lists = document.querySelectorAll('li');

for(let i = 0; i < lists.length; i++) {
    lists[i].className.includes(lists[i].textContent) === false ? console.log(lists[i]) : ''
}

//7
const list7 = document.querySelectorAll(".list-item")
let array = []
for (let i = 0; i < list5.length; i++) {
    arr.push(list5[i].getAttribute('data-test-id'))
    list7[i].textContent = arr[i] + " " + list7[i].textContent
}

//8
let inputField = document.querySelector('#secret-login');
inputField.value = 'You were hacked';