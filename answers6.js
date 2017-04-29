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

// or could do like the below
function printPositives(arr){
    return arr.forEach(function positiveNum(ele) {
        if (ele > 0) {
            console.log(ele);
        }
    })
}
//console.log(printPositives([-2, -8, 6, 9, 99]))


// 2) Similar to the previous exercise, write a function 
// called getPositives that takes an array and uses the filter 
// method to return a new array with only the positive numbers.
function getPositives(arr) {
    return arr.filter(function positiveNum(num) {
        var array = [];
        if (num >0) {
            array.push(num);
        }
        return array;
    })
}
//console.log(getPositives([5, 9, 99, -6, -5]));

// or could do like the below. 
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

function printPositives(arr){
    return arr.filter(function filtered(num) {
        if (num > 0) {
            return num
        }
    }).forEach(function printNum(num) {
        console.log(num);
    })
}
//printPositives([9, 6, -99, -5, 19])
// or
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
    var split = str.split(' ');
    return split.reduce(function(a, b) {
        if (a.length > b.length) {
            return a
        } 
        else if (a.lenth < b.length) {
            return b
        }
        else {
            console.log("both " + a + " and " + b + "are the longest")
        }
    }, 0)
    
}
//console.log(longestWord("I love you Anna"));
// or
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
function countVowels(str) {
    var split = str.split('');
    var arr = [];
    return split.reduce(function(letter){
        if (letter === "a" || letter === "e" || letter === "i"|| letter === "o" || letter === "u") {
            arr.push(letter)
        }
        return arr.length;
    }, 0)
}
//console.log(countVowels("I love you aeiou"));
// or 
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
function highLow(arr){
    return arr.reduce(function(a, b) {
        if (b > a.highest) {
            a.highest === b;
        }
        if (b < a.lowest) {
            a.lowest === b;
        }
    }, [  // dont know why i can use [] here??
        highest = -Infinity,
        lowest = +Infinity 
    ])
}
//console.log(highLow([-2, -8, 6, 9, 99, 999, -69]))
// the above is what i tried to do by myself to practice, and it works
// or 
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
    var splitStr = str.toLowerCase().replace(" ","").split(""); // also have to replace the space between words. that is why we use 'replace' here.
    return splitStr.reduce(function repeatedLetter(a,b) { // 'a' is like 'counter' and 'b' is like each item in the array that we are checking.
        if (!a[b]) {  // Here we check if that letter already exists, because we don't know yet if that letter exists already or not. This means if there is no 'b', then count 1 because it does not yet exist
            a[b] = 1; // we use [] to make it 'dynamic' because if we use 'dot' like in previous exercises (a.b instead of a[b]), it will mean 'b' is the property of that object 'a'. But here 'a' does not have any property. So we cannot use dot here.
        }
        else {
            a[b] += 1; // this means if 'b' already exists, then count 1 more.
        }
        return a;
    },{})
}
//console.log(countChars("HeLlo World"));


/* 9) Starting on week 3 of the bootcamp, we will be learning 
about databases. Databases are useful for saving data for 
long periods of time.
Contrary to a JavaScript program, where all the data 
disappears when the program terminates, databases keep their 
data "forever".
In this exercise, we’re going to imagine that we are storing 
people information in a database, and that we queried our 
database to retrieve a list of people.
Our database returns to us an array of people objects, and 
each of them has a unique ID that the database uses to refer 
to it.
Here’s what our person data could look like:
[
  {
    "id": "KeXoYg92is",
    "firstName": "John",
    "lastName": "Smith",
    "email": "john@smith.com"
  },
  {
    "id": "NkALmSWtUp",
    "firstName": "Donald",
    "lastName": "Duck",
    "email": "don@disney.com"
  },
  {
    "id": "m7LPbJYSUg",
    "firstName": "John",
    "lastName": "Vader",
    "email": "vader@darkside.com"
  }
]
For this exercise, we want to use Array.prototype.reduce to 
transform our array of people into an object, keyed with the 
unique ID.The end result should look like this:
{
  "KeXoYg92is": {
    "id": "KeXoYg92is",
    "firstName": "John",
    "lastName": "Smith",
    "email": "john@smith.com"
  },
  "NkALmSWtUp": {
    "id": "NkALmSWtUp",
    "firstName": "Donald",
    "lastName": "Duck",
    "email": "don@disney.com"
  },
  "m7LPbJYSUg": {
    "id": "m7LPbJYSUg",
    "firstName": "John",
    "lastName": "Vader",
    "email": "vader@darkside.com"
  }
}
This object could be useful if we are often looking up people 
by their unique ID.
Write a function called peopleById that takes an array of 
people and returns an object where each person is keyed by 
their unique ID.
You have effectively created what we call an index, not unlike 
the one you have in your phonebook.*/
function peopleById (arr) {
    return arr.reduce(function sortedByID(a,b) {
        a[b.id] = b;  // it is like we search for 'b' by ID and put that equals to the whole 'b' in order to display all properties of the object.
        return a;
    },{})
}

var arr = [
  {
    "id": "KeXoYg92is",
    "firstName": "John",
    "lastName": "Smith",
    "email": "john@smith.com"
  },
  {
    "id": "NkALmSWtUp",
    "firstName": "Donald",
    "lastName": "Duck",
    "email": "don@disney.com"
  },
  {
    "id": "m7LPbJYSUg",
    "firstName": "John",
    "lastName": "Vader",
    "email": "vader@darkside.com"
  }
]
//console.log(peopleById (arr));


/* 10) Expanding on the previous exercise, this time we are 
going to create an index on first names. Notice how in the 
previous exercise, each ID was unique. In this case, two 
people have the same first name.
We want to create a function called peopleByFirstName that 
will take an array of people and return something that looks 
like this:
{
  "John": [
    {
      "id": "KeXoYg92is",
      "firstName": "John",
      "lastName": "Smith",
      "email": "john@smith.com"
    },
    {
      "id": "m7LPbJYSUg",
      "firstName": "John",
      "lastName": "Vader",
      "email": "vader@darkside.com"
    }
  ],
  "Donald": [
    {
      "id": "NkALmSWtUp",
      "firstName": "Donald",
      "lastName": "Duck",
      "email": "don@disney.com"
    }
  ]
}
You have effectively created an index on first name. This lets 
you find all people called, say, “John” without having to look
through the whole results. */

function peopleByFirstName(arr) {
    return arr.reduce(function sortedPeople(a,b) {
        if (!a[b.firstName]) {
            a[b.firstName] = []; // because we want the result to be 'firstName' equals an array. That is why we set a[b.firstName] equal an array. And we cannot use dot (a.b.firstName) here. And it has to be a[b.firstName], not just b.firstName because at the end we return a to get the value of a.
            a[b.firstName].push(b);
        }
        else {
            a[b.firstName].push(b);
        }
        return a;
    },{})
}

var arr = [
  {
    "id": "KeXoYg92is",
    "firstName": "John",
    "lastName": "Smith",
    "email": "john@smith.com"
  },
  {
    "id": "NkALmSWtUp",
    "firstName": "Donald",
    "lastName": "Duck",
    "email": "don@disney.com"
  },
  {
    "id": "m7LPbJYSUg",
    "firstName": "John",
    "lastName": "Vader",
    "email": "vader@darkside.com"
  }
]
//console.log(peopleByFirstName(arr));
