let homeBtn = document.getElementById("open");
let popBtn = document.getElementById("close");
let container = document.getElementById("container");

homeBtn.addEventListener("click",()=>{
    container.style.display= "flex";
});

popBtn.addEventListener("click",()=>{
    container.style.display= "none";
});