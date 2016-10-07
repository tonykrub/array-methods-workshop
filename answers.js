// 1) Write a function called printPositives that takes an array 
// and uses the forEach method to print only the positive numbers.
function printPositives(arr){
    return arr.forEach(function positiveNums(num) {
        if (num > 0) {
            console.log(num);
        }
    })
}
//printPositives([1, -8, 999, 45, -35, 9]);


// 2) Similar to the previous exercise, write a function 
// called getPositives that takes an array and uses the filter 
// method to return a new array with only the positive numbers.
function getPositives(arr) {
    return arr.filter(function filtered(num) {
        if (num > 0) {
            return num;
        }
    })
}
//console.log(getPositives([5, 9, 49, 39, -3, 9, -77, -2, 999]));


// 2B) Re-do exercise 1 by first filtering the input array, and 
// then printing the numbers from the filtered array. Your code
// will look something like: `return arr.filter(…).forEach(…)
function positiveNum(arr) {
    return arr.filter(function filteredNum(num) {
        if (num > 0) {
            return num;
        }
    })
    .forEach(function printNum(num) {
        console.log(num);
    })
}
//positiveNum([1, -8, 999, 45, -35, 9]);


// 3) Write a function called filterArray that takes an array 
// AND a function as arguments. Your filter function should 
// return a new array that contains only the elements where the 
// passed function returns a truthy value.
// NOTE: You are allowed to use Array.prototype.filter to answer 
// this question.
// NOTE 2: This is a bit of a trick question, the answer is a 
// one-liner :)
function filterArray(arr, func) {
    return arr.filter(function truthyVal(element) {
        if (element) {
            return element;
        }
    })
}
//filterArray([5, 9, "", undefined, 99, null, 999, 0, 99999]);


// 4) Write a function called longestWord that takes a string as
// argument, and returns the longest word in the string. You 
// should use Array.prototype.reduce to do your work.
// Hint: You can use String.prototype.split to split the string 
// into an array of words.
function longestWord(str) {
    var spl = str.split(" ");
    return spl.reduce(function(a, b) {
        if (a.length > b.length) {
            return a;
        }
        else if (a.length < b.length) {
            return b;
        }
        else {
            return "Both " + a.toUpperCase() + " and " +  b.toUpperCase() + " are the longest!";
        }
    })  // dont need to put 'zero' here because we dont want to start at the number zero but we want to start at the first word!
}
//console.log(longestWord("Love me like you do"))


// 5) Write a function called countVowels that takes a string and
// returns the number of vowels in the string. You should use 
// Array.prototype.reduce to do your work.
// Hint: You can use String.prototype.split again. There is a way
// to use it to split a string by character. Try to Google it :)
// Hint 2: You can create an array of vowels and use 
// Array.prototype.indexOf to check if the current letter is a vowel.
function countVowels(str){
    var splitedStr = str.toLowerCase().split('');
    return splitedStr.reduce(function(accumulator, currentValue) { 
        if (currentValue === 'a' ||
            currentValue === 'e' ||
            currentValue === 'i' ||
            currentValue === 'o' ||
            currentValue === 'u') {
                return accumulator + 1;
            }
            else {
                return accumulator + 0;
            }
    }, 0)
    return accumulator;
}
//or could do it like the below by using 'a' and 'b' instead of 
//'accumulator' and 'currentValue' respectively.

// function countVowels(str){
//     var splitedStr = str.toLowerCase().split('');
//     return splitedStr.reduce(function(a, b) { // 'a' here is like accumulator and 'b' is the current value(according to the document)
//         if (b === 'a' ||
//             b === 'e' ||
//             b === 'i' ||
//             b === 'o' ||
//             b === 'u') {
//                 return a + 1;
//             }
//             else {
//                 return a + 0;
//             }
//     }, 0)
//     return a;
// }

//console.log(countVowels("Fifty shades of grey"));


// 6) Write a function called highLow that takes an array of 
// numbers, and returns an object with a property highest 
// containing the highest number, and a property lowest 
// containing the lowest number, using Array.prototype.reduce.
// For example, starting with [1, -10, 20, 40, 5], your function 
// should return {highest: 40, lowest: -10}.
// Hint: Javascript has a special value called Infinity, which is
// higher than any other number. See if you can initialize your 
// reduce accumulator with Infinity and -Infinity :)
function highLow(arr) {
    return arr.reduce(function(counterVal,curVal) {
        if (counterVal.highest < curVal) {
            counterVal.highest = curVal;
        } 
        if (counterVal.lowest > curVal) {
            counterVal.lowest = curVal;
        }
        return counterVal
    },{ // below is where we put the variable 'counterVal' (the starting value) that we use it to compare with the values in the array. it has 2 values: highest and lowest.
        highest: -Infinity, // here is 'counterVal' or initial value that we use to compare with current value
        lowest: +Infinity  // here is 'counterVal' or initial value that we use to compare with current value
    })
}
//console.log(highLow([1, 79, 99999, -8, , 100009999, -999, -109, 89, -68]));


// 7) Expanding on exercise 6, write a function called 
// highLowTwo that takes an array of numbers, and returns the 
// higest, second highest, lowest, and second lowest numbers.
// For example, starting with [1, -10, 20, 40, 5], your function
// should return:
// {
//   "highest": 40,
//   "secondHighest": 20,
//   "lowest": -10,
//   "secondLowest": 5
// }
function highLowTwo(arr) {
    return arr.reduce(function compareNum(counterValue, currentValue) {
        if (counterValue.highest < currentValue) {
            counterValue.secondHighest = counterValue.highest;
            counterValue.highest = currentValue;
        }
        
        if (currentValue > counterValue.secondHighest && currentValue < counterValue.highest) {
            counterValue.secondHighest = currentValue;
        }
        
        if (currentValue < counterValue.lowest) {
            counterValue.secondLowest = counterValue.lowest;
            counterValue.lowest = currentValue;
        }
        
        if (currentValue < counterValue.secondLowest && currentValue > counterValue.Lowest) {
            counterValue.secondLowest = currentValue;
        }
        
        return counterValue;
    },{ // the 4 lines below are the counterValue
        highest: -Infinity,
        secondHighest: - Infinity, 
        lowest: +Infinity,
        secondLowest: +Infinity
    })
}
//console.log(highLowTwo([1, -2, -10, 20, 40, 5]));


// 8) Write a function called countChars that takes a string, 
// and returns an object where the keys are letters, and the 
// value is the number of times that letter appears.
// For example, with input "hello world", the output should be:
// {
//   "h": 1,
//   "e": 1,
//   "l": 3,
//   "o": 2,
//   "w": 1,
//   "r": 1,
//   "d": 1
// }
// NOTE: Unlike arrays, objects don’t have any ordering on them.
// When you print your object on the console, your keys may be 
// displayed in a different order, and it does not matter.
function countChars(str) {
    var splitStr = str.toLowerCase().split("");
    return splitStr.reduce(function repeatedltr(a,b) {
        if (a = b) {
            count = count + 1;
        }
    },0)
}

