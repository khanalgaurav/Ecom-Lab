const input = document.querySelector('#input-box');
const search = document.querySelector('#search');
const cross = document.querySelector('#cross');

search.addEventListener('click', ()=>{

    // input.classList.remove('translate-x-12')
    
    input.value = ''
    input.classList.remove('w-9')
    input.classList.add('w-[300px]')
    cross.classList.remove('-translate-x-12')
    if(input.classList.contains('active')){
        // future use
    }
    else{
        //future use
    }
    input.classList.add('active')
    
})
cross.addEventListener('click', ()=>{
    input.classList.remove('active')
    input.value = ''
    input.classList.add('w-9')
    input.classList.remove('w-[300px]')
    cross.classList.add('-translate-x-12')
})
