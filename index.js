
const inputElem = document.getElementById("kijelzo")
const szamGombElemek = document.getElementsByClassName("szam")
const muveletGombElemek = document.getElementsByClassName("muvelet")
const torlesElem = document.getElementsByClassName("torles")[0]
const egyenloElem = document.getElementsByClassName("egyenlo")[0]
const kifejezesElem = document.getElementById("kifejezes")

let elsoSzam = ""
let masodikSzam = ""
let muveletiJel = ""

szamGombElemek[0].addEventListener("click", szamKatt)
szamGombElemek[1].addEventListener("click", szamKatt)
szamGombElemek[2].addEventListener("click", szamKatt)
szamGombElemek[3].addEventListener("click", szamKatt)
szamGombElemek[4].addEventListener("click", szamKatt)
szamGombElemek[5].addEventListener("click", szamKatt)
szamGombElemek[6].addEventListener("click", szamKatt)
szamGombElemek[7].addEventListener("click", szamKatt)
szamGombElemek[8].addEventListener("click", szamKatt)
szamGombElemek[9].addEventListener("click", szamKatt)

function szamKatt(event) {
    console.log(event.target.id)
    inputElem.value += event.target.id
    kifejezesElem.textContent += event.target.id
}
