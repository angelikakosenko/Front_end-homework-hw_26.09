//1)
//Создать две кнопки - одна из них блокирует input с помощью атрибута disabled, а другая разблокирует.
// Заблокировать Разблокировать - 
// Какой-то текст! - input


const lockedBtn = document.querySelector('.locked');
const unlockedBtn = document.querySelector('.unlocked');
const variableInput = document.querySelector('.variableInput'); 

lockedBtn.addEventListener('click', toggleDisabled);

function toggleDisabled(event) {
    variableInput.setAttribute('disabled', true);
    
}

unlockedBtn.addEventListener('click', toggleDisabled);

function toggleDisabled(event) {
    variableInput.removeAttribute('disabled');
    
}



