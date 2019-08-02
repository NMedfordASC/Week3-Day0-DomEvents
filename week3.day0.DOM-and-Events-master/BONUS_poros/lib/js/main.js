document.addEventListener("click", putPoro)
function putPoro(){
    const poroIMG = document.createElement("img");
    poroIMG.src = "./assets/poro1.png"
    poroIMG.style.position = "absolute"
    const posX = event.clientX - 50;
    const posY = event.clientY - 50;
    poroIMG.style.top = posY + "px"
    poroIMG.style.left = posX + "px"
document.body.appendChild(poroIMG)
console.log(poroIMG)
}