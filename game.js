const car= document.getElementById("car");
const object=document.getElementById("object")

document.addEventListener ("keydown", function (event) {
    moveLeft ();
});
function moveLeft() {
    if (car.classList != "moveLeft") {
        car.classList.add("moveLeft")
    }
    setTimeout (function() {
        car.classList.remove("moveLeft")
    },600)
}
