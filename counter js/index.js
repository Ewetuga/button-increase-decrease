// initial decleration of count

let count = 0;

//get the Dom for manipulation

const mains=document.querySelector(".main");
const action=document.querySelectorAll(".btn");


action.forEach(function (btn){
btn.addEventListener("click",function(b){
const valus = b.currentTarget.classList;
if(valus.contains("increase")){
    count++;
}else if(valus.contains("decrease")){
    count--;
} else{
    count = 0;
}
if(count > 0){
    mains.style.color ="green"
} if(count < 0){
    mains.style.color = "red"
} if(count === 0){
    mains.style.color ="black"
}
console.log(count);

mains.textContent = count;
})

})