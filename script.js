let button = document.querySelector('button');
let input = document.querySelector('input');
let list = document.querySelector('ul');

let add = () => {
    if(input.value.trim()){
        let listItem = document.createElement('li');
        listItem.innerHTML = input.value.trim();
        list.append(listItem);   
    }
    input.value = '';
}

button.addEventListener('click', add);
input.addEventListener('keydown', event => {
    if(event.code === 'Enter'){
        add();
    }
});

