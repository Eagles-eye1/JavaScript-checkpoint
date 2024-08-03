
                  //STRING JS

//NO 1

function reverseString(str) {
    return str.split('').reverse().join('');
}

 let originalString = "Lovely";
 let reversedString = reverseString(originalString)
 console.log(reversedString);

                 //NO 2
 function countAlphabeticCharacters(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (/[a-zA-Z]/.test(str[i])) {
            count++;
        }
    }
    return count;
}

let myString = "Hello, World!";
let alphabeticCharacterCount = countAlphabeticCharacters(myString);
console.log(alphabeticCharacterCount); 




               //NO 3


function capitalizeWords(sentence) {
    return sentence.split(' ').filter(word => word.length > 0).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

let mySentence = "   hello   world! my name is powell.  ";
let capitalizedSentence = capitalizeWords(mySentence);
console.log(capitalizedSentence); 



                         //  ARRAY

                         function findMax(arr) {
                            return Math.max(...arr);
                        }
                        
                        function findMin(arr) {
                            return Math.min(...arr);
                        }
                        
                        let numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
                        let maxNumber = findMax(numbers);
                        let minNumber = findMin(numbers);
                        
                        console.log(`Maximum: ${maxNumber}`); 
                        console.log(`Minimum: ${minNumber}`); 




                        function sumArray(arr) {
                            let sum = 0;
                            for (let i = 0; i < arr.length; i++) {
                                sum += arr[i];
                            }
                            return sum;
                        }
                        
                        let numerals = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
                        let totalSum = sumArray(numerals);
                        console.log(`Sum: ${totalSum}`); 
                        
                        

                        function filterArray(arr, condition) {
                            return arr.filter(condition);
                        }
                        
                        let figures = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
                        let isOdd = num => num % 2 !== 0;
                        let oddNumbers = filterArray(figures, isOdd);
                        console.log(`Odd Numbers: ${oddNumbers}`); 





                        function factorialIterative(n) {
                            if (n < 0) {
                                return "Factorial is not defined for negative numbers";
                            }
                            let result = 1;
                            for (let i = 1; i <= n; i++) {
                                result *= i;
                            }
                            return result;
                        }
                        
                        let number = 5;
                        let fact = factorialIterative(number);
                        console.log(`Factorial of ${number} is ${fact}`); 
                        




                        


                        function isPrime(n) {
                            if (n <= 1) {
                                return false; 
                            }
                            if (n <= 3) {
                                return true; 
                            }
                            if (n % 2 === 0 || n % 3 === 0) {
                                return false; 
                            }
                            for (let i = 5; i * i <= n; i += 6) {
                                if (n % i === 0 || n % (i + 2) === 0) {
                                    return false;
                                }
                            }
                            return true;
                        }
                        
                        
                        console.log(isPrime(2));   
                        console.log(isPrime(3));   
                        console.log(isPrime(4));   
                        console.log(isPrime(5));   
                        console.log(isPrime(29));  
                        console.log(isPrime(30));  
                        console.log(isPrime(97));  
                        console.log(isPrime(100)); 
                        





                        function generateFibonacci(n) {
                            if (n <= 0) {
                                return []; 
                            }
                            if (n === 1) {
                                return [0]; 
                            }
                            let fibonacciSequence = [0, 1]; 
                            for (let i = 2; i < n; i++) {
                                let nextTerm = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
                                fibonacciSequence.push(nextTerm);
                            }
                            return fibonacciSequence;
                        }
                        
                        
                        console.log(generateFibonacci(0));  
                        console.log(generateFibonacci(1));  
                        console.log(generateFibonacci(2));  
                        console.log(generateFibonacci(5));  
                        console.log(generateFibonacci(10)); 
                        