const generateBtn = document.querySelector(".generate-btn");
const generateInput = document.getElementById("generate-input");
const buttons = document.querySelectorAll(".button");
const inputBox = document.getElementById('input-box');
const submitBtn = document.querySelector(".submit-btn");
generateBtn.addEventListener("click",function(){
    let randomNum = Math.round(1000+Math.random()*9000);
    generateInput.value = randomNum;
    document.getElementById('notify2').style.display = "none";
})
let string = "";
let arr = Array.from(buttons);
arr.forEach(button=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == "C"){
            string = "";
            inputBox.value = string;
        }
        else if(e.target.innerHTML == "&lt;"){
            string = string.substring(0,string.length-1);
            inputBox.value = string;
        }
        else{
            string+=e.target.innerHTML;
            inputBox.value = string;
        }
    })
})
submitBtn.addEventListener('click',function(){

    if(generateInput.value == inputBox.value){
        document.getElementById('notify2').style.display = "block";
        document.getElementById('notify1').style.display = "none";
    }
    else{
        document.getElementById('notify1').style.display = "block";
        document.getElementById('notify2').style.display = "none";
        tryLeft("try");
    }
    string = "";
    inputBox.value = string;
})

function tryLeft(id){
    const tryAgain = document.getElementById(id).innerHTML;
    document.getElementById(id).innerHTML -= 1;
    if(tryAgain == "1"){
        submitBtn.disabled = true;
    }
}