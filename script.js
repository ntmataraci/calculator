
let value = "";
let opr;
let firstValue;
let secondValue = "";
let score;
let oldOpr;
document.querySelector("#screen--text").value = 0
document.querySelector(".keyboard--numbers").addEventListener("click", (e) => {
    if (e.target.localName == "button") {
        if (e.target.innerText == "AC") {
            numberHelpers(e.target.innerText)
        } else {
            if (!firstValue) {
                value += e.target.innerText
                document.querySelector("#screen--text").value = value
            } else {
                document.querySelector("#screen--text").value = ""
                secondValue += (+e.target.innerText)
                document.querySelector("#screen--text").value = secondValue
            }
        }
    }
})



/* keydown listener */
document.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        writeDataToBox("<br>")
    }
    if (e.code == "Space") {
        writeDataToBox("  ")
        console.log("bastım")
    }
})




/*--------------*/


function numberHelpers(e) {
    if (e == "AC") {
        writeDataToBox(`) = ${score} , calculation is finished !<br>`)
        value = "";
        firstValue = "";
        secondValue = "";
        score = "";
        document.querySelector("#screen--text").value = 0
    }
}

document.querySelector(".keyboard--operators").addEventListener("click", (e) => {
    if (secondValue) {
        calculate(opr)
        if (e.target.innerText == "=") {
            writeDataToBox("=" + document.querySelector("#screen--text").value + "<br>")
        }
    }
    if (!firstValue) {
        calculations(e.target.parentElement.className)
    }
    opr = e.target.innerText
    if (!secondValue) {
        if (e.target.innerText == "=") {
            writeDataToBox(`=${firstValue} `)
        }
    }
})

function calculations(e) {
    firstValue = value;
    if (e != "angles") {
        writeDataToBox(firstValue)
    }
    value = "";
}

function calculate(opr) {
    switch (opr) {
        case "+":
            writeDataToBox(opr)
            writeDataToBox(secondValue)
            score = +firstValue + (+secondValue)
            break;
        case "/":
            writeDataToBox(opr)
            writeDataToBox(secondValue)
            score = +firstValue / (+secondValue)
            break;
        case "*":
            writeDataToBox(opr)
            writeDataToBox(secondValue)
            score = +firstValue * (+secondValue)
            break;
        case "-":
            writeDataToBox(opr)
            writeDataToBox(secondValue)
            score = +firstValue - (+secondValue)
            break;
        case "=":
            writeDataToBox(document.querySelector("#screen--text").value)
            break;
    }
    document.querySelector("#screen--text").value = score;
    firstValue = score;
    // writeDataToBox(opr)
    // writeDataToBox(secondValue)
    secondValue = "";
}



/* angles ------------------------------*/

document.querySelector(".angles").addEventListener("click", (e) => {
    if (!firstValue) {
        calculations(e.target.parentElement.className)
    }
    // writeDataToBox(e.target.innerText+"("+firstValue+")")
    let angle = e.target.innerText
    selectionAngle(angle);
})

function selectionAngle(angle) {
    const deg_to_rad = Math.PI / 180
    const rad_to_deg = 180 / Math.PI
    switch (angle) {
        case "sin(x)":
            writeDataToBox(`sin(${firstValue})`)
            firstValue = Math.floor(Math.sin(firstValue * deg_to_rad) * 1000) / 1000
            break;
        case "cos(x)":
            writeDataToBox(`cos(${firstValue})`)
            firstValue = Math.floor(Math.cos(firstValue * deg_to_rad) * 1000) / 1000
            break;
        case "tan(x)":
            writeDataToBox(`tan(${firstValue})`)
            firstValue = Math.floor(Math.tan(firstValue * deg_to_rad) * 1000) / 1000
            break;
        case "cot(x)":
            writeDataToBox(`cot(${firstValue})`)
            firstValue = Math.floor(1 / Math.tan(firstValue * deg_to_rad) * 1000) / 1000
            break;
        case "asin(x)":
            writeDataToBox(`asin(${firstValue})`)
            firstValue = Math.floor(Math.asin(firstValue) * rad_to_deg * 1000) / 1000
            break;
        case "acos(x)":
            writeDataToBox(`acos(${firstValue})`)
            firstValue = Math.floor(Math.acos(firstValue) * rad_to_deg * 1000) / 1000
            break;
        case "atan(x)":
            writeDataToBox(`atan(${firstValue})`)
            firstValue = Math.floor(Math.atan(firstValue) * rad_to_deg * 1000) / 1000
            break;
        case "acot(x)":
            writeDataToBox(`acot(${firstValue})`)
            firstValue = Math.floor(Math.atan(1 / firstValue) * rad_to_deg / 2 * 1000) / 1000
            break;
        case "logY":
            showNewscreen()
            log("logY")
            break;
        case "lnY":
            firstValue = ln(firstValue)
            break;
        case "fac!":
            firstValue = fact(firstValue)
            break;
        case "Perm(x,y)":
            showNewscreen()
            permScreen("Perm")
            break;
        case "Comb(x,y)":
            showNewscreen()
            permScreen("Comb")
            break;
        case "x^y":
            showNewscreen()
            permScreen("Power", "Number", "Power")
            break;
        case 'sqr':
            showNewscreen()
            permScreen("sqr", "Number", "Root")
            break;
        case 'Pyramid':
            showNewscreen()
            threeScreen("pyramid", "height", "X", "Y")
            canvasPyramid()
            break;
        case "Cube":
            showNewscreen()
            singleScreen("cube", "width")
            canvasNone()
            break;
        case "Sphere":
            showNewscreen()
            singleScreen("sphere", "Diameter")
            canvasNone()
            break;

        case "Ball Pin Metem":
            showNewscreen()
            fourthScreen("ballpin", "Sphere Diameter", "Total Length", "Body Diaemeter", "Top Area of Sphere Diameter")
            canvasBallpin()
            break;

    }
    document.querySelector("#screen--text").value = firstValue;
}



/* volumes */
document.querySelector(".volumes").addEventListener("click", (e) => {
    if (!firstValue) {
        calculations(e.target.parentElement.className)
    }
    let angle = e.target.innerText
    selectionAngle(angle);
})



/*-----------new screen------------*/
const newScreen = document.querySelector(".newScreen")
const newScreenMsg = document.querySelector(".newScreen--message")
const newScreenCont = document.querySelector(".newScreen--content")
let newScreenVal = document.querySelector("#val")

function showNewscreen() {
    newScreen.style.display = "flex"
}


function closeNewscreen() {
    document.querySelector(".newScreen").style.display = "none"
    // newScreenCont.innerHTML = '<div class="newScreen--value"><input type="text" name="" class="val"></div>'
    newScreenCont.innerHTML = ""
    canvasNone()
}



function screenHelper(m, deger) {
    document.querySelector(".newScreen--submit").addEventListener("click", (e) => {
        // let deger = [...document.querySelectorAll(".val")]
        this.deger = deger
        console.log(m)
        console.log(deger)
        switch (m) {
            case "logY":
                firstValue = logFromBase(+deger[0].value, +deger[1].value)
                firstValue = Math.floor(firstValue * 1000) / 1000
                writeDataToBox(`log<sub>${deger[0].value}</sub>${deger[1].value}=${firstValue}; `)
                break;
            case "Perm":
                firstValue = perm(+deger[0].value, +deger[1].value)
                firstValue = Math.floor(firstValue * 1000) / 1000
                writeDataToBox(`Perm(${deger[0].value},${deger[1].value})=${firstValue}; `)
                break;
            case "Comb":
                firstValue = comb(+deger[0].value, +deger[1].value)
                firstValue = Math.floor(firstValue * 1000) / 1000
                writeDataToBox(`Comb(${deger[0].value},${deger[1].value})=${firstValue}; `)
                break;
            case "Power":
                firstValue = power(+deger[0].value, +deger[1].value)
                firstValue = Math.floor(firstValue * 1000) / 1000
                writeDataToBox(`Power(${deger[0].value},${deger[1].value})=${firstValue}; `)
                break;
            case "sqr":
                firstValue = reversePower(+deger[0].value, +deger[1].value)
                firstValue = Math.floor(firstValue * 1000) / 1000
                writeDataToBox(`(${deger[1].value}&#8730;${deger[0].value})=${firstValue};=${firstValue}; `)
                break;
            case "pyramid":
                firstValue = pyramid(+deger[0].value, +deger[1].value, +deger[2].value)
                firstValue = Math.floor(firstValue * 1000) / 1000
                writeDataToBox(`&#9651;	(h${deger[0].value},${deger[1].value},${deger[2].value})=${firstValue}; `)
                break;
            case "cube":
                firstValue = cube(+deger[0].value)
                firstValue = Math.floor(firstValue * 1000) / 1000
                writeDataToBox(`&#9634 ${deger[0].value}=${firstValue}; `)
                break;
            case "sphere":
                firstValue = sphere(+deger[0].value)
                firstValue = Math.floor(firstValue * 1000) / 1000
                writeDataToBox(`Ø ${deger[0].value}=${firstValue}; `)
                break;
            case "ballpin":
                firstValue = ballpin(+deger[0].value, +deger[1].value, +deger[2].value, +deger[3].value)
                writeDataToBox(`BallPin DAM- ${deger[0].value}-${deger[2].value}-${deger[1].value}=${firstValue}; `)
                break;
        }
        document.querySelector("#screen--text").value = firstValue
        // listenButton()
        closeNewscreen()
        m = ""


    }
    )
}



/* screens*/
function log(m) {
    newScreenCont.innerHTML = " <div class='newScreen--message'>Please enter your base</div><div class='newScreen--value'><input type='text'  class='val'></div>"
    newScreenCont.innerHTML += '<div class="newScreen--message">Please enter your number' +
        '</div> <div class="newScreen--value"><input type="text" name="one" class="val"></div>'
    let deger = [...document.querySelectorAll(".val")]
    screenHelper(m, deger)
}

function permScreen(m, wordOne = "first value", wordTwo = "second value") {
    newScreenCont.innerHTML = `  <div class="newScreen--message">Please enter ${wordOne}</div><div class='newScreen--value'><input type='text'  class='val'></div>`
    newScreenCont.innerHTML += `<div class="newScreen--message">Please enter ${wordTwo}` +
        '</div> <div class="newScreen--value"><input type="text" name="" class="val"></div></div>'
    let deger = [...document.querySelectorAll(".val")]
    screenHelper(m, deger)
}

function threeScreen(m, wordOne = "first value", wordTwo = "second value", wordThree = "three value") {
    newScreenCont.innerHTML = `  <div class="newScreen--message">Please enter ${wordOne}</div><div class='newScreen--value'><input type='text'  class='val'></div>`
    newScreenCont.innerHTML += `<div class="newScreen--message">Please enter ${wordTwo}` +
        '</div> <div class="newScreen--value"><input type="text" name="" class="val"></div></div>'
    newScreenCont.innerHTML += `<div class="newScreen--message">Please enter ${wordThree}` +
        '</div> <div class="newScreen--value"><input type="text" name="" class="val"></div>'
    let deger = [...document.querySelectorAll(".val")]
    screenHelper(m, deger)
}

function singleScreen(m, wordOne = "first value") {
    newScreenCont.innerHTML = `<div class='newScreen--message'>Please enter your ${wordOne} </div><div class='newScreen--value'><input type='text'  class='val'></div>`
    // newScreenCont.innerHTML += '<div class="newScreen--message">Please enter your number' +
    //     '</div> <div class="newScreen--value"><input type="text" name="" class="val"></div>'
    let deger = [...document.querySelectorAll(".val")]
    screenHelper(m, deger)
}

function fourthScreen(m, wordOne = "first value", wordTwo = "second value", wordThree = "three value", wordFourth = "fourth value") {
    newScreenCont.innerHTML = `   <div class="newScreen--message">Please enter ${wordOne}</div><div class='newScreen--value'><input type='text'  class='val'></div>`
    newScreenCont.innerHTML += `<div class="newScreen--message">Please enter ${wordTwo}` +
        '</div> <div class="newScreen--value"><input type="text" name="" class="val"></div></div>'
    newScreenCont.innerHTML += `<div class="newScreen--message">Please enter ${wordThree}` +
        '</div> <div class="newScreen--value"><input type="text" name="" class="val"></div>'
    newScreenCont.innerHTML += `<div class="newScreen--message">Please enter ${wordFourth}` +
        '</div> <div class="newScreen--value"><input type="text" name="" class="val"></div>'
    let deger = [...document.querySelectorAll(".val")]
    screenHelper(m, deger)
}



/* calculations */

function logFromBase(x, y) {
    return Math.log(y) / Math.log(x)
}

function ln(x) {
    return Math.log(x)
}

function fact(x) {
    let i = 1;
    while (x > 0) {
        i = i * x
        x--
    }
    return i
}

function perm(x, y) {
    return fact(x) / fact(x - y)
}

function comb(x, y) {
    return perm(x, y) * (1 / fact(y))
}

function power(x, y) {
    return (x ** y)
}

function reversePower(x, y) {
    return (x ** (1 / y))
}

function cube(x) {
    return x ** 3
}

function sphere(r) {
    return 4 * Math.PI * cube(r / 2) / 3
}

function pyramid(h, x, y) {
    return h * x * y / 3
}

function cuttedSphere(R, cD) {
    let helperH = reversePower(((R / 2) ** 2 - (cD / 2) ** 2), 2)
    let heightH = R / 2 - helperH
    let cutPinVolume = Math.PI * (heightH ** 2) * (3 * R / 2 - heightH) / 3
    return [cutPinVolume, heightH]
}


function ballpin(R, h, D, cD) {
    let cutTop = cuttedSphere(R, cD)
    let CutBottom = cuttedSphere(R, D)
    let ballpinVolume = sphere(R) - cutTop[0] - CutBottom[0] + Math.PI * (D ** 2) * (h - R + CutBottom[1] + cutTop[1]) / 4
    console.log(ballpinVolume)
    return Math.floor(ballpinVolume * 1000) / 1000

}


/* canvas */

function canvasPyramid() {
    let c = document.querySelector("#myCanvas")
    let ctx = c.getContext('2d');
    ctx.translate(0.5, 0.5)
    ctx.moveTo(0, 100);
    ctx.lineTo(50, 30);
    ctx.lineTo(100, 100);
    ctx.lineTo(0, 100);
    ctx.lineTo(20, 50);
    ctx.lineTo(80, 50);
    ctx.lineTo(100, 100);
    ctx.moveTo(20, 50);
    ctx.lineTo(50, 30);
    ctx.lineTo(80, 50);
    ctx.strokeStyle = "white";
    ctx.strokeText("X", 0, 70);
    ctx.strokeText("Y", 50, 110);
    ctx.stroke();
}

function canvasNone() {
    let ctx = document.querySelector("#myCanvas").getContext("2d")
    ctx.beginPath()
    ctx.clearRect(0, 0, 120, 120)
    ctx.stroke();
}

function canvasBallpin() {
    let c = document.querySelector("#myCanvas");
    let ctx = c.getContext('2d');
    ctx.moveTo(0, 80);
    ctx.lineTo(0, 50);
    ctx.arc(15, 65, 21, Math.PI, 1.8 * Math.PI)
    ctx.lineTo(90, 53);
    ctx.lineTo(90, 73);
    ctx.lineTo(35, 73);
    ctx.arc(15, 65, 21, 0.2 * Math.PI, Math.PI)
    ctx.strokeStyle = "white";
    ctx.lineWidth = "2"
    ctx.stroke()
}


/* data box */

let boxMessage = document.querySelector(".dataBox__row")


function writeDataToBox(x) {
    boxMessage.innerHTML = boxMessage.innerHTML.replace("|", "")
    boxMessage.innerHTML += x
}

let a = 0
setInterval(() => {
    if (a == 0) {
        boxMessage.innerHTML += "|"
        a = 1
    } else {
        boxMessage.innerHTML = boxMessage.innerHTML.replace("|", "")
        a = 0
    }
}, 600);

/* Save and Insert Text functions */
const insertText = document.getElementById("insertText")
const saveOne = document.getElementById("saveOne")
const saveTwo = document.getElementById("saveTwo")
const resetOne = document.getElementById("resetOne")
const resetTwo = document.getElementById("resetTwo")
document.querySelector(".saves").addEventListener("click", (e) => {
    let myTarget = e.target.id
    switch (myTarget) {
        case "insertText":
            insertTextFunc();
            break;
        case "saveOne":
            saveOneFunc(document.querySelector("#screen--text").value);
            break;
        case "saveTwo":
            saveTwoFunc(document.querySelector("#screen--text").value);
            break;
        case "resetOne":
            resetOneFunc();
            break;
        case "resetTwo":
            resetTwoFunc();
            break;
    }
}
)

function insertTextFunc(x) {
    let myText = prompt("please enter your text")
    writeDataToBox(myText + "<br>" + document.querySelector("#screen--text").value)
}


function saveOneFunc(x) {
    if (saveOne.innerText != "Save 1") {
        secondValue = +saveOne.innerText
    } else {
        saveOne.innerText = x
    }
}

function saveTwoFunc(x) {
    if (saveTwo.innerText != "Save 2") {
        secondValue = +saveTwo.innerText
    } else {
        saveTwo.innerText = x
    }
}

function resetOneFunc(x) {
    document.getElementById("saveOne").innerText = "Save 1"
}

function resetTwoFunc(x) {
    document.getElementById("saveTwo").innerText = "Save 2"
}


/* saving and loading box */
// const dataSave=document.getElementById("databoxSave")
// const dataLoad=document.getElementById("databoxLoad")
// const dataCopy=document.getElementById("databoxCopy")

document.querySelector(".dataBox__buttons").addEventListener("click", (e) => {
    let dataTarget = e.target.id
    switch (dataTarget) {
        case "databoxSave":
            dataSave();
            break;
        case "databoxLoad":
            dataLoad();
            break;
        case "databoxCopy":
            dataCopy();
            break;
    }
})


let dataArr=[]

function dataSave(){
    let savings=prompt("Please name your saved file")
    let dataObj={"name":savings,"value":boxMessage.innerHTML}
    dataArr.push(dataObj)  
    localStorage.setItem("Calculator",JSON.stringify(dataArr))
}


function dataLoad(){
    
    let loaddiv=document.createElement('div')
    loaddiv.className="dataLoadScreen"
    let storageJson=JSON.parse(localStorage.getItem("Calculator"))
    dataLoadButtons()
    function dataLoadButtons(){
    for (i=0;i<storageJson.length;i++){
        loaddiv.innerHTML+=`<div class="dataBoxRow"><button id="${storageJson[i]["name"]}" data-idx="${i}">${storageJson[i]["name"]}</button><div class="cross">X</div><br></div>`
    }
    loaddiv.innerHTML+="<button class='closeButton'>close</button>"
    document.body.appendChild(loaddiv)
       

    document.querySelector(".dataLoadScreen").addEventListener("click",(e)=>{
    //    if (e.target.closest("button").id==null){
    //       return
    // }else{
        writeDataToBox(storageJson[e.target.dataset.idx]["value"])
        // }
    })
}    
    cross()
    function cross(){
    let crosses=document.querySelectorAll(".cross")
    crosses.forEach( (x,y)=> {
        x.addEventListener("click",(e)=>{
            let lastQuestion=prompt("are you sure for delete ? (Y/N").toLocaleUpperCase()
            if (lastQuestion=="Y"){
                storageJson.splice(y,1)
                localStorage.setItem("Calculator",JSON.stringify(storageJson))
            }else{
                return
            }
            loaddiv.innerHTML=""
            dataLoadButtons()
            closeButton()
            cross()
           
        })
        
    });
}
closeButton()
function closeButton(){
document.querySelector(".closeButton").addEventListener("click",()=>{
    loaddiv.remove()
})
}
}


function dataCopy(){
    navigator.clipboard.writeText(boxMessage.innerText)
    document.getElementById("databoxCopy").innerText="copied"
    setTimeout(()=>{document.getElementById("databoxCopy").innerText="Copy"},5000)
}




// /*direk keyboard */
// let activeScore;
// document.querySelector("#screen--text").addEventListener("keyup",()=>{
//     activeScore=document.querySelector("#screen--text").value
// })

// document.querySelector(".keyboard--operators").addEventListener("click",(e)=>{
//     {
//        if(e.target.innerText=="="){
//         document.querySelector("#screen--text").value=eval(activeScore)}
//        }
// })
// document.body.addEventListener("keydown",activator)

// function activator(e){
//     if ( e.keyCode===13)
//     {document.querySelector("#screen--text").value=eval(activeScore)}
// }