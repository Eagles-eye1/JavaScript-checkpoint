/*let Item = " pawpaw"


if (Item === "Cucumber" ){
    console.log ("this is a fruit")
}
else {
    console.log("this isn't a fruit")
}

li>declare a variable fruit and assign it any fruit of your
            choice, then write an if statement to check if fruit= "your fruit value"
            then log it out to the console
        </li>
        <li>write a switch statement to check for a day of the week that'll be 6
            cases as each day of the week and the default being the last day of the week 
        </li>

        <li>write a function using FUNCTION EXPRESSION, you have three parameters x, y,z
            and return x plus y minus z. Log your answer to the console.
        </li>
    </ul>

let fruit = 'apple'


if (fruit = 'apple') {
    console.log('this is a fruit');
    
}


function getDayOfWeek(dayNumber) {
    let dayName;

    switch (dayNumber) {
        case 0:
            dayName = "Sunday";
            break;
            
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
        default:
            dayName = "Invalid day";
    }

    return dayName

}


console.log(getDayOfWeek(89));


let = console.log();

const garden = { 
    flower: "rose",
    color: "red"
} 
console.log(garden +"red");



const calculateExpression = function(x, y, z) {
    return x + y - z;
};

let result = calculateExpression(10, 5, 3);
console.log(result);



/let about = document.getElementsByClassName ("about")
let textContent =
console.log(textContent);*/

/*console.log(typeof(true)) // prints boolean
console.log(typeof(9000)) // prints number
console.log(typeof("Übermensch")) // prints string
console.log(typeof(anUndefinedVar)) // prints undefined
console.log(typeof(null)) // prints object
console.log(typeof(Number));*/
//console.log(typeof nikfnfjfo (94040939));

// let person = {
//     name: "Powell",
//     age: 12,
//     isStudent: true
// }

// // NaN
// console.log(0 / 0);
// console.log('Some random string' * 2);

// // Infinity 
// console.log(1 / 0);
// console.log(Infinity * Infinity);
// console.log(1e+309);
 
// let num = 5
// num--
// console.log(num);

// var num
// var num5 = 6
// num++
// num5--
// var sum = num + num5
// var result = sum ** 2
// console.log(result)

// var a = 3;
// a += 2;
// a -= 1;
// a **= 2;
// a /= 4;
// a %= 3;
// var result = a;

//console.log(4%3);
// document.addEventListener('DOMContentLoaded', () => {
//     const container = document.getElementById('container');
//     const redButton = document.getElementById('redButton');
//     const blueButton = document.getElementById('blueButton');

//     redButton.addEventListener("click",function changecolor(){
//         container.style.backgroundColor = "gray"
//     } )

//     blueButton.addEventListener("click",function changeimage (){
//         container.style.backgroundColor = "white"
//     })
// });
//var x

// console.log(Boolean(x));
// console.log(Boolean(null));
// console.log(Boolean(NaN));
// console.log(Boolean(""));
// console.log(Boolean(0));
// console.log(Boolean(false));
//console.log(null === true)
// var x = 0;
// var y = 10;
// var z = 5;

// console.log(z > x && z < y) // prints true
// console.log(z > x && z <= y) // prints true
// console.log(z > x && z !== y) // prints true

// var x = 1 // x is truthy
// var y = 0 // y is falsey
// var z = null // z is falsey
// console.log(x && y) // prints 0
// console.log(z && y) // prints null
// console.log(z || x) // prints 1
// console.log(y || z) // prints null

// var fname = "Lucy";
// console.log(`Yo, ${fname}!`) // prints “Yo, Lucy!”

/*We can also define functions without placing the name between the function keyword and the argument list. This structure is great if you want to create a reference to it using a variable*/

// var x = "Hello"
// var y = "World"
// console.log(x +" "+ y)

// function joiner(a,b,c,d) {
//         return a*b*c*d;
// }
// console.log(joiner(5,5,5,5));


// let subtract = function( a, b ) {
//     return 5 - 2;
// }
// console.log(subtract(5,2));

// // Example 1: (Classic Function Declaration)
// function cube(n){    
//     return n*n*n; 
//     }
    
//     // Example 2: (Function Expression)
//     var cube = function(n){    
//     return n*n*n; 
//     }
    


// values if no value or undefined is passed.

// var add = function( a, b ) {
//     return a + b;
// }

// console.log(add(0,1)) // prints 1
// console.log(add()) // prints NaN

// var add = function( a = 0, b = 1 ) {
//     return a + b;
// }

// console.log(add()) 
// /* prints 1 even though no arguments were given to this function call */


//const greet = name => `Hello ${name.toUpperCase("powell")}`;

// // 1_Defining the function

// function checkIfNumber( x ) {
//     if (typeof x === "number" ) {
//         console.log(x + " is a number" );
        
//     }
    
// }
// // 2_Calling the function

// checkIfNumber(5) // prints “5 is a number.

// checkIfNumber(“5”) // doesn't do anything, “5” was passed here as a string (non-numeric value).

// checkIfNumber() // doesn’t do anything, no argument was passed to the function


// function checkIfNumber(x){
//     if (typeof x === "number") {
//     console.log(x + " is a butcher");
//     } else {
//         console.log("oops thats not a number");
//     }

// }

// checkIfNumber(879)

// // 1_Defining the function

// function decodeColor( code ) {
//     if ( code === 1 ) {
//         console.log( 'Red' );
//     } else if ( code === 2 ) {
//         console.log( 'Yellow' );
//     } else if ( code === 3 ) {
//         console.log( 'Green' );
//     } else {
//         console.log( 'Unknown code' );
//     }
// }

// // 2_Calling the function

// decodeColor(1) // prints Red

// decodeColor(2) // prints Yellow

// decodeColor(3) // prints Green

// decodeColor('blah') // prints Unknown code

// 1_Defining the function

// function decodeColor( code ) {
//     switch( code) {
// 	case 1:
// 		console.log( 'Red' );
// 		break;
// 	case 2:
// 		console.log( 'Yellow' );
// 		break;
// 	case "x":
// 		console.log( 'Green' );
// 		break;
// 	default:
// 		console.log( 'Unknown code' );
// 	}
// }



// // Let’s sum the values of a small array
// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1]; 

// var sum = 0;
// var i = 0;
// while ( i < numbers.length ) {
//     sum += numbers[i];
//     i += 1;
// }
// console.log( 'The loop was executed ' + i + ' times' );
// // prints The loop was executed 10 times

//console.log(sum);
// prints 46

// while loop
//let age = 1
// while (age < 4 ) {
//     console.log("not 4");
//     age++
// }
//console.log(age);

/*do-while loop
//let age = 1
do { console.log("not 4");
        age++
} while (age < 4);*/

//for-loop
// for (var i = 0; i < 5; i++) {
//     console.log(i);
// } 



//https://www.youtube.com/playlist?list=PL4cUxeGkcC9i9Ae2D9Ee1RvylH38dKuET

//https://www.youtube.com/watch?v=YeFzkC2awTM&t=506s

/*https://www.youtube.com/playlist?list=PLZPZq0r_RZOMRMjHB_IEBjOW_ufr00yG1

https://www.youtube.com/watch?v=y17RuWkWdn8&t=7s

https://www.youtube.com/playlist?list=PL4cUxeGkcC9gfoKa5la9dsdCNpuey2s-V

https://www.youtube.com/watch?v=NCwa_xi0Uuc

https://www.youtube.com/watch?v=nZ1DMMsyVyI

https://www.youtube.com/playlist?list=PL4cUxeGkcC9gKfw25slm4CUDUcM_sXdml

https://www.youtube.com/watch?v=Kn06785pkJg*/

//FOR IN LOOPS
// // Let’s sum the values of a small array
// var numbers = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1]; 
// var sum = 0;

// // Using the for… in loop
// for ( var i in numbers) {
//     sum += numbers[i];
// }

// console.log(sum)
// // prints 115
// // Let’s sum the values of a small array
// var numbers = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1]; 
// var sum = 0;


// FOR... OF LOOPS

// // Using the for… of loop
// for ( var value of numbers) {
//     sum += value;
// }
// console.log(sum)
// // prints 115


// // Let’s sum every second element of the numbers array:
// var numbers = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1]; 
// var sum = 0;
// for ( var i in numbers ) {
//         if ( i % 2 == 0 ) continue;
//         sum += numbers[i]
// }

// console.log(sum);
// // prints 78
// /* 
// PS: Notice that we could've written i += 2 in a simple for loop to jump to every second value. 
// We’re using continue here just for the sake of the example.
//  Whenever i is even, continue moves execution back to the next iteration of i in numbers.
//  */

// /*
// You already know what a break statement looks like, because we learned it when dealing with the switch statement. 
// It is doing the same thing in loops. Suppose we want to break out from the loop whenever the sum exceeds 100:
// */
// var numbers = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1];
// var sum = 0;

// for ( var i in numbers) {
// 	sum += numbers[i];
// 	if ( sum >= 100 ) {
//             break;
//         }
//     }
// console.log(sum)
// // prints 103



// //  Initializing a Powell object
// const Powell = {
//     name: "Powell",
//     race: "Negro",
//     weapon: "axe and sword",
//     greet: function() {
//         return `Hi, my name is ${this.Powell}!`;
//     },
// };
// console.log(Powell)
// // prints {name:"Powell", race:"Negro", weapon:"axe and sword", greet:f greet {...}}
// // PS: This output may render differently depending on what console you are using, 
// //but you should notice that all of the values passed to the object are shown in the output.


// // Initializing a gimli object
// var Powell = {
//     name: "Powell",
//     race: "dwarf",
//     weapon: "axe",
//     greet: function() {
//         return `Hi, my name is ${this.weapon}!`;
//     },
// };

// //Calling an object method using the dot notation
// console.log(Powell.greet()); 
// // prints "Hi, my name is Gimli!"





// // Initializing a gimli object
// var gimli = {
//     name: "Gimli",
//     race: "dwarf",
//     weapon: "axe",
//     greet: function() {
//         return `Hi, my name is ${this.name}!`;
//     },
// };

// // Adding a new age property to gimli using the dot notation
// gimli.age = 139;

// // Adding new age property to gimli using the dot notation
// gimli["age"] = 139;
// // Adding a new fight method to gimli
// gimli.fight = function() {
//     return `Gimli attacks with an ${this.weapon}.`;
// }

// console.log(gimli)
// // prints {name: "Gimli", race: "dwarf", weapon: "axe", age: 139, greet: ƒ, fight: ƒ}

// // Calling the newly created method fight
// console.log(gimli.fight());
// // prints "Gimli attacks with an axe."



// // Updating weapon from axe to battle axe
// gimli.weapon = "epic battle axe";

// // Calling the previously created method fight AGAIN
// console.log(gimli.fight());
// // prints "Gimli attacks with an epic battle axe."



// //  Initializing a gimli object
// const gimli = {
//     name: "Gimli",
//     race: "dwarf",
//     weapon: "axe",
//     greet: function() {
//         return `Hi, my name is ${this.name}!`;
//     },
// };

// // Removing weapon from gimli
// delete gimli.weapon; // Output: true
// // We can test the output of gimli to see if it succeeded.
// console.log(gimli);
// // prints {name: "Gimli", race: "dwarf", greet: ƒ }