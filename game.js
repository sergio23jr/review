$(document).ready(function () {

    var word = "the quick brown fox jumps over the calm kitten quietly";
    word = "this hat is the greatest!"
    word = "what a wonderful day it has been!"


    // create function that will find first non-repeating letter (word = str)
    function find_FirstNotRepeatedChar(str) {
        // initialize a variable to split our word up by letter to create array 
        var arra1 = str.split('');
        // initialze result variable so we can later reassign it to our first non-repeating letter
        var result = '';

        var ctr = 0;

        // for loop to go through each letter in our array
        for (var x = 0; x < arra1.length; x++) {

            ctr = 0;

            for (var y = 0; y < arra1.length; y++) {
                if (arra1[x] === arra1[y]) {
                    ctr += 1;
                }
            }

            if (ctr < 2) {
                result = arra1[x];
                break;
            }
        }
        return result;
    }
    // console.log(find_FirstNotRepeatedChar('abacddbec'));








    // create function that will find first non-repeating letter (word = str)
    function firstUnique(str) {
        // for to loop through each letter in our string 
        for (var i = 0; i < str.length; i++) {
            // variable to keep track of what letter were working with
            var actual = str.charAt(i)

            // .indexOf() returns first occurence     .lastIndexOf() returns last occurence
            // so if there is only one occurence in our string both .indexof & .lastIndexOf will both return same value
            // example aardvark.indexOf("d") = 3  aardvark.lastIndexOf("d") = 3
            if (str.indexOf(actual) == str.lastIndexOf(actual)) {
                // if condition is satisfied return letter because it is the first non repeating letter
                return actual;
            }
        }
    }

    // target my input field
    var input = document.querySelector("#input");
    // target my result h1
    var result = document.querySelector("#result");

    // add onkeyup event listener to update our result html
    input.addEventListener('keyup', function () {
        // everytime there is a key up run our function and update text with result
        result.innerText = firstUnique(input.value);
    })



















})