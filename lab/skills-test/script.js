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

//House Object//

let house = {
    floors: 2,
    rooms: 5,
    dishes: 30,
    plants: 20,
    color: 'red',
}

let neighborhood = {
    house1: {
        floors: 2,
    rooms: 5,
    dishes: 30,
    plants: 20,
    color: 'red',
    },
    house2: {
        floors: 1,
    rooms: 2,
    dishes: 3,
    plants: 2,
    color: 'orange',
    },

}

//House Console Testing// 

console.log(house);

function changeCircle(){
    console.log('The color of house 2 is '+ neighborhood.house2.color)

     circle.style.backgroundColor = neighborhood.house2.color;
}

console.log('I am the color '+ house.color);
console.log('I have '+ house.rooms + ' rooms');

//(fun) color change//
circle.addEventListener("mouseleave", function(){
    changeCircle();
})