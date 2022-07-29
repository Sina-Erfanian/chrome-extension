let inputElem = document.querySelector("#name")
let h2Elem = document.querySelector("#greet")

inputElem.addEventListener("keyup",(e)=> {
    let name = e.target.value
    h2Elem.innerHTML = `Hello Dear ${name}`
})