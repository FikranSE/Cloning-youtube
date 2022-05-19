const toggle = document.getElementById('btn-toggle');
const sizeSidebar = document.querySelector('.sidebar');
const tulisan = document.querySelectorAll('.menu .tulisan');
const menu = document.querySelectorAll('.menu');

toggle.addEventListener('click',function(e){
    sizeSidebar.classList.toggle('size-sidebar');
    menu.forEach(function(a){
        a.classList.toggle('menu-js');
    })
    tulisan.forEach(function(t){
        t.classList.toggle('menu-a');
    })
})

