// Select items
let content = document.querySelector(".content");
let paragraph = content.querySelector("p");
let togelBtn = document.querySelector("#toggleButton");

// current state

let isExpended = false;

togelBtn.addEventListener("click", function(){
    if(!isExpended){
     paragraph.style.maxHeight = "none";
     togelBtn.textContent= "show less";

    }
    else{
        paragraph.style.maxHeight = "50px";
        togelBtn.textContent = "show more"
    }
    isExpended = !isExpended
})
