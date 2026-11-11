
let sc1 = document.getElementById("s1")
let sc2 = document.getElementById("s2")
let homescore=0
let guestscore=0
function plusone(){
    homescore+=1
    sc1.innerText=homescore
}
function plustwo(){
    homescore+=2
    sc1.innerText=homescore
}
function plusthree(){
    homescore+=3
    sc1.innerText=homescore
}
function gplusone(){
    guestscore+=1
    sc2.innerText=guestscore
}
function gplustwo(){
    guestscore+=2
    sc2.innerText=guestscore
}
function gplusthree(){
    guestscore+=3
    sc2.innerText=guestscore
}
function reset(){
    homescore= 0
    guestscore=0
    sc1.innerText=homescore
    sc2.innerText=guestscore
}


    