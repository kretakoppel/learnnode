let button = document.querySelector('button');
button.addEventListener('click', function (event) {
    console.log(event);
    let heading = document.querySelector('h1');
    heading.innerHTML = 'Hello VM23';
});

let input = document.querySelector('input');
input.addEventListener('input', function(event){
    let text = document.querySelector('h1#text');
    text.innerHTML = input.value.split('').reverse().join('');
});

