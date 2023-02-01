document.getElementById('purple').onclick = partyPurple
document.getElementById('blue').onclick = partyBlue
document.getElementById('green').onclick = partyGreen
document.querySelector('#pumpkin').addEventListener('click', makeZero)
document.querySelector('#dominosPizza').addEventListener('click', jumanji)
document.querySelector('#zebra').addEventListener('click', add9)
document.querySelector('#cantThinkOfAnything').addEventListener('click', Player_1_Turn)
document.querySelector('#hotestChick').addEventListener('click', hide)

let total = 0
let Player_1_Space = 0

function hide(){
    //window.alert(BANG)
    document.querySelector('#Kathy').style.display='none'
    document.querySelector('#Rachel').style.display='none'
}

function partyPurple(){
    document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)'
    document.querySelector('body').style.color = 'white'
}

function partyBlue(){
    document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)'
    document.querySelector('body').style.color = 'white'
}

function partyGreen(){
    document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)'
    document.querySelector('body').style.color = 'white'
}

function makeZero(){
    total = 0
    document.querySelector('#placeToPutResult').innerText = total
}

function jumanji(){
    total = total + 3
    document.querySelector('#placeToPutResult').innerText = total
}

function add9(){
    total = total + 9
    document.querySelector('#placeToPutResult').innerText = total
}

function Player_1_Turn(){
    Player_1_Space = Player_1_Space + Math.floor(Math.random() * 6) + 1
    document.querySelector('#playerSpace').innerText = Player_1_Space
    // cout find"place" in doc make Text with innertext set = total
}