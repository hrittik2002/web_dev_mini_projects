// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const item = document.querySelector('#product');
const number = document.querySelector('#qty');
const list = document.querySelector('ul');

form.addEventListener("submit" , function(e){
    e.preventDefault();
    const val1 = item.value;
    const val2 = number.value;
    const newli = document.createElement('LI');
    const s = val2 + " " + val1;
    newli.innerText = s;
    list.appendChild(newli);
    item.value = "";
    number.value = "";
});

