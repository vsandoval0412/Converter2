/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let placeholder = document.getElementById("input-number").getAttribute("placeholder")
document.getElementById("input-number").value = placeholder

let inputNumber = document.getElementById("input-number").value
let convertBtn = document.getElementById("convert-btn")
let resetBtn = document.getElementById("reset-btn")
let inputField = document.getElementById("input-number")

function convertUnit(firstUnit, secUnit, ratio) {
    return `${value} ${firstUnit} = ${(value * ratio).toFixed(3)} ${secUnit} | ${value} ${secUnit} = ${(value / ratio).toFixed(3)} ${firstUnit}`
}

function convertAll(){
    value = document.getElementById("input-number").value;
    document.getElementById("length-calcs").innerHTML = convertUnit("meters", "feet", 3.281)    
    document.getElementById("volume-calcs").innerHTML = convertUnit("liters", "gallons", .264)
    document.getElementById("mass-calcs").innerHTML = convertUnit("kilos", "pounds", 2.204)
}

convertAll();
convertBtn.addEventListener("click", convertAll)


resetBtn.addEventListener("click", function(){
    
    inputField.value = ""
    document.getElementById("length-calcs").innerHTML =  ""
    document.getElementById("volume-calcs").innerHTML = ""
    document.getElementById("mass-calcs").innerHTML = ""
    
})