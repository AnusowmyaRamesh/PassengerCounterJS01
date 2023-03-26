console.log('I am Anu and I am the best SDET');
let add= document.getElementById("inc")
let count=0
function increment(){
    count +=1
    console.log(count)
    add.textContent=count 
}

function displaySave(){
    seat=document.getElementById("pass-seat")
    seat.innerText += " - "
    console.log(seat.innerText += count)
}

function reset(){
    
    count=0
    add.textContent=0
    seat.textContent =0
}  
    
function decrement(){
    count -=1
    console.log(count)
    add.textContent=count 
}