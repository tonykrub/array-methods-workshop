//Exercise 1: Write a function called printPositives that takes an array and uses the forEach 
//method to print only the positive numbers
var array = [5, 9, 99, -8, 90, -19, -89, 98];
var printPositives = function (array){
array.forEach(function(number){
        if (number > 0){
            console.log(number);
        }
});
};
//printPositives(array);


//Exercise 2
//Similar to the previous exercise, write a function called getPositives that takes an array and 
//uses the filter method to return a new array with only the positive numbers.
var array = [1, 5, 9, 10, 15, 99, -8, 19, -59];
function getPositives (array) {
    var a =  array.filter(function(number){ 
        if (number > 0){
            return number;  // when we use "filter", we have to "return" later (but for 'forEach', we don't need to return)
        }
    });
    return a;
}
//console.log(getPositives(array));



//Exercise 2B
//Re-do exercise 1 by first filtering the input array, and then printing the numbers from the 
//filtered array. Your code will look something like: `return arr.filter(…).forEach(…)
var arr = [5, 9, 99, -8, 90, -19, -89];
function positiveNumbers (arr){
    arr.filter(function(number){
        if (number > 0){
            return true;
        }
    }).forEach(function(item){
        console.log(item);
    });
}
//positiveNumbers(arr);



//Exercise 3
//Write a function called filterArray that takes an array AND a function as arguments. Your 
//filter function should return a new array that contains only the elements where the passed 
//function returns a truthy value.
//NOTE: You are allowed to use Array.prototype.filter to answer this question.
//NOTE 2: This is a bit of a trick question, the answer is a one-liner :)
var newArray = [0, 5, '', 9, undefined, "Tony", null, "Amazing", false];
function filterArray (newArray, func){
    return newArray.filter(function(element){
            if (element){
                return element; //JavaScript will not return anyway if it is not truthy.. so if we have an element, it will be returned if it is truthy. the ones that are not truthy won't be returned
            }
    });
}
//console.log(filterArray(newArray));



//Exercise 4
//Write a function called longestWord that takes a string as argument, and returns the longest 
//word in the string. You should use Array.prototype.reduce to do your work.
//Hint: You can use String.prototype.split to split the string into an array of words.
function longestWord (string){
    var split = string.split(' ');
          console.log(split);  // this is not really necessary. can also omit this line. 
     return split.reduce(function(a,b){
         if (a.length > b.length){
            return a;
         } else {       // still need to have 'else' here to have something to compare. what if a.length is not > b.length? what to do? that is why we have to add 'else' here
            return b;   
         }
     });
}
//console.log(longestWord("I love you"));



//Exercise 5
//Write a function called countVowels that takes a string and returns the number of vowels in 
//the string. You should use Array.prototype.reduce to do your work.
//Hint: You can use String.prototype.split again. There is a way to use it to split a string by 
//character. Try to Google it :)
//Hint 2: You can create an array of vowels and use Array.prototype.indexOf to check if the 
//current letter is a vowel.
function countVowels (string){
    var stringSplit = string.toLowerCase().split(""); // have to change every character to lowercase because in the if statement below, we set up all vowels in lowercase
    return stringSplit.reduce(function (a,b){ // 'a' here is like 'counter'. a starts at zero (as we can see that we set 'counter' = 0 on line 102). 'b' is each character in the string.
        if (b === "a" || 
            b === "e" ||
            b === "i" ||
            b === "o" ||
            b === "u") {
        a = a + 1;    // this means if we find one vowel, we add up by 1 when we find the next one in the string (starting at zero as we set here). 
        } 
        return a;
    }, 0);  // 0 here is the value of 'a' at the beginning. and this is where we put 0, not at any other locations, as per the information on how to use 'reduce'. read more on MDN
}
//console.log(countVowels("Ocean"));



//Exercise 6
//Write a function called highLow that takes an array of numbers, and returns an object with a 
//property highest containing the highest number, and a property lowest containing the lowest 
//number, using Array.prototype.reduce.
//For example, starting with [1, -10, 20, 40, 5], your function should return {highest: 40, 
//lowest: -10}.
//Hint: Javascript has a special value called Infinity, which is higher than any other number. 
//See if you can initialize your reduce accumulator with Infinity and -Infinity :)
function highLow(array){
    return array.reduce(function(a,b){ // reduce will compare 2 at a time. 
        if (a.highest < b) {  // first 'reduce' will compare the first item in the array (99) with the highest value that we set ( -Infinity). So we get a.highest = 99. This 99 will be used to compare with the next number in the array to find the highest number. 
            a.highest = b;
        } 
        if (a.lowest > b) {
            a.lowest = b;
        }
        return a; // need to have 'a' here so that 'reduce' knows what will be the next value it will use to compare with the next number in the array
        },{highest: -Infinity, lowest: Infinity // this is the object part of the code. (Object is always inside a curly bracket.) this is the starting value that we set
        });
}
//console.log(highLow([-99,89,65,-927,9999,879,-15]));



/*Exercise 7
Expanding on exercise 6, write a function called highLowTwo that takes an array of numbers, and 
returns the higest, second highest, lowest, and second lowest numbers.
For example, starting with [1, -10, 20, 40, 5], your function should return:
{
  "highest": 40,
  "secondHighest": 20,
  "lowest": -10,
  "secondLowest": 5
} */
function highLowTwo (array) {
    return array.reduce(function(a,b) {
            if (b > a.highest) {
                a.secondHighest = a.highest;
                a.highest = b;
            }
            
            if (b > a.secondHighest && b < a.highest){
                a.secondHighest = b;
            }
            
            if (b < a.lowest) {
                a.secondLowest = a.lowest;
                a.lowest = b;
            }
            
            if (b < a.secondLowest && b > a.lowest){
                a.secondLowest = b;
            }
            
            return a;
    },{
        highest: - Infinity, 
        secondHighest: -Infinity,
        lowest: Infinity,
        secondLowest: Infinity
    });
}
console.log(highLowTwo([-99,99,65,-999,9999,999,-15]));



/*Exercise 8
Write a function called countChars that takes a string, and returns an object where the keys are
letters, and the value is the number of times that letter appears.
For example, with input "hello world", the output should be:
{
  "h": 1,
  "e": 1,
  "l": 3,
  "o": 2,
  "w": 1,
  "r": 1,
  "d": 1
}
NOTE: Unlike arrays, objects don’t have any ordering on them. When you print your object on the 
console, your keys may be displayed in a different order, and it does not matter.
*/
function countChars (string) {
    return 
}
    