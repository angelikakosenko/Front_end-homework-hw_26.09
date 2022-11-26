// First level: 31.10.2022


// 1)
// Подсчёт количества свойств объекта
// Напишите функцию count(obj), которая возвращает количество свойств объекта:


let user = {
   name: 'John',
   age: 30
};


const count = obj => Object.keys(obj).length;
console.log(count(user));



