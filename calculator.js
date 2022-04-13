//selectors
const output = document.querySelector(".output");
const result = document.querySelector(".result");
const keys = document.querySelectorAll("button");

//event listner
keys.forEach(key => {
    key.addEventListener("click", calculate);
});
function calculate(){
    // console.log("working");
    let buttonText = this.innerText;
    // console.log(buttonText);
    if ( buttonText == "AC"){
        output.innerText = "";
        result.innerText = "0";
        return;
    }
    if (buttonText == "DEL"){
        output.textContent = output.textContent.substring(0,out.textContent.length-1);
        return;
    }
    if ( buttonText === "="){
        result.innerText = eval(output.innerText);
       
    }
    else{
        output.textContent += buttonText;
        return;
    }
}