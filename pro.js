const panels=document.querySelectorAll('.panal');
panels.forEach(panal =>{
    panal.addEventListener('click',()=>{
        removeactive();
        panal.classList.add('active');
    })
})
function removeactive(){
    panels.forEach(panal=>{
        panal.classList.remove('active');
    })
}