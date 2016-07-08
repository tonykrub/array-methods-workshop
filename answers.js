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
    return array.reduce(function(a,b){
        if (a.highest < b) {
            a.highest = b;
        } 
        if (a.lowest > b) {
            a.lowest = b;
        }
        return a;
        },{highest: -Infinity, lowest: Infinity}); // this is the starting value 
}
console.log(highLow([-99,89,65,-927,9999,879,-15]));



