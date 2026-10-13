const display = document.getElementById("display")
display.textContent = ''
const buttons = document.getElementsByClassName("btn")
let equalToUsed = false;
const deleteBtn =  document.getElementById("delete")

const handleBtnPress = function (event) {
    event.stopPropagation();
    const content = event.target.textContent;

    if (content.includes("=")) {
        console.log("equal to")
        display.textContent = eval(display.textContent)
        equalToUsed = true
    } else if (content.includes("C")) {
        display.textContent = ''
    }
    
    else {
        if (equalToUsed) {
            if (Number(content)) {
                display.textContent = content;
            } else display.textContent += content;
            equalToUsed = false;
        } else {
            display.textContent += content;
        }
    } 
}



Array.from(buttons).forEach((btn) => {
    btn.addEventListener('click', handleBtnPress)
})

deleteBtn.addEventListener('click', function(){
    console.log("delete button")
    const content = display.textContent
    // Array.from(display.textContent)
    console.log(content.substring(0, content.length -1))
    display.textContent = content.substring(0, content.length -1)
})