//Add Function//

function add(x,y){
    let number1= x;
    let number2= y;
    let sum= x+y;
    return sum
}

//Test for Add Function//

console.log(add(1, 2));
console.log(add(10, 10));
console.log(add(100, -100));

//Change circle color to Green//

let circle= document.querySelector(".circle");
let amIGreen = false;

//Switch color from green to blue on click//

circle.addEventListener("click", function(){
    if(!amIGreen){
        makeItGreen();
        amIGreen = true;
    } else if (amIGreen){
        makeItBlue();
        amIGreen = false;
    }
});

function makeItGreen(){
    circle.style.backgroundColor="green";
}
function makeItBlue(){
    circle.style.backgroundColor="blue";
}

