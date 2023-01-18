const btn_elem = document.querySelector('.btn');
const p_elem = document.querySelectorAll('.text');


btn_elem.addEventLisrener('click', ()=>console.log('privet'));
p_elem.addEventListener('click', ()=>console.log('privet iz paragraf'));


function random_color(){
    const r = Math.round(Math.random()*255);
    const g = Math.round(Math.random()*255);
    const b = Math.round(Math.random()*255);

    return `rgb(${r}, ${g}, ${b})`
}

btn_elem.addEventListener('click',
() => btn_elem.style.backgroundColor = random_color()
);


function get_random(){
    return Math.round(Math.random() * 5);

}

btn_elem.addEventListener('click', ()=>{
    p_elem.innerText = `${get_random()} ${get_random()}`
});

const add_form = document.querySelectorAll('.add_form');

add_form.addEventListener('submit', () =>{
    console.log('privet')
})