const lists = document.querySelector('.navbar');
const tags = lists.querySelectorAll('a');
let current = document.getElementsByClassName('active');

for(let i = 0; i < tags.length; i++){
    tags[i].addEventListener('click', function(e){
          current[0].className = current[0].className.replace('active', '');
          tags[i].classList.add('active');
    })
}
