// First level:     1)
//         Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
 let camelize = str => str.split('-').join('').replaceAll('s', 5);

 console.log(camelize
    ('my-short-string'));




//     То есть дефисы удаляются, а все слова после них получают заглавную букву.

//     Примеры:

    // camelize("background-color") == 'backgroundColor';
    // camelize("list-style-image") == 'listStyleImage';
    // camelize("-webkit-transition") == 'WebkitTransition';


//     P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.


