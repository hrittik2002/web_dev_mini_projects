const input = document.querySelector('#username');
const h1 = document.querySelector('h1');
input.addEventListener('input' , function(e){
    const k = input.value
    if(k.length === 0){
        h1.innerText =  "Enter Your Username";
        
    }
    else{
        const s = "Welcome, " + k;
        h1.innerText =  s;
    }
    
    
});