// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

const { tsConstructSignatureDeclaration } = require("@babel/types")
const { pseudoRandomBytes } = require("crypto")

// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

// --->TEST 
 def("original")("original1"), () => {
      it("takes in an array, removes the first item from the array and shuffles the remaining content."), () => {
          expect(original("colors1").toEqual(["yellow", "blue", "pink", "green"]))
      }
  }

 const colors1 = ["purple", "blue", "green", "yellow", "pink"]
//  Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
 const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
//  Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]


//  b) Create the function that makes the test pass.

// -->Psuedo
// Create two variables (Original, original1) attached too the two const colors1 and colors2.
// Create a third variable (copy) that ties the first two variables and merges them together using concat.
// Sort the result using .sort and randomize the resutls using Math.random 
// console log the third variable (copy)

  var original = colors2;
  var original1 = colors1;
  var copy = [].concat(original, original1);
  copy.sort(function(){
    return 0.5 - Math.random();
  });
  console.log(copy);
    
// --->Returned
// [
//     'periwinkle', 'chartreuse',
//     'saffron',    'pink',
//     'blue',       'aquamarine',
//     'purple',     'indigo',
//     'yellow',     'ochre',
//     'green'
//   ]

// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

// -->TEST 
def("arr"), () => {
     it("takes an array of numbers and returns an array of the minimum and maximum numbers in that order."), () => {
         expect(arr("nums2").toEqual([5, 109]))
     }
 }

const nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
const nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]


// b) Create the function that makes the test pass.

// -->pseudo 
// Create a new variable called arr and tie it to the given const (nums2, nums1)
// Creat a var for max and min value that arrange the arrays based on greater than or less than.
// console log for MAX and MIN

 var arr = nums2; nums1
  var max = arr.reduce(function(x,y){
     return (x > y) ? x : y;
  });
  var min = arr.reduce(function(x,y){
     return (x < y) ? x : y;
  });
  console.log('Max: '+ max);
  console.log('Min: '+ min);

//  -->Returned
// Max: 90
// Min: -8

//  -->Returned
// Max: 109
// Min: 5

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

// -->TEST 
 def("a,b,c,d"), () => {
     it("takes in two arrays as arguments and returns one array with no duplicate values."), () => {
         expect(a("testArray1"),b(testArray2).toEqual([3, 7, 10, 5, 4, 8, 2, 1]))
     }
 }

 const testArray1 = [3, 7, 10, 5, 4, 3, 3]
 const testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]


//  b) Create the function that makes the test pass.

// -->pseudo 
// Create a Varible a for const testArray1 and b for testArray2
// Create a third variable c that combines variable a and b using concact 
// create a third variable d that filters variable c by item and positions
// console log the variable d

  var a = testArray1, b = testArray2
  var c = a.concat(b)
  var d = c.filter((item, pos) => c.indexOf(item) === pos)

  console.log(d)

//   Returned
// [
//     3, 7, 10, 5,
//     4, 8,  2, 1
//   ]