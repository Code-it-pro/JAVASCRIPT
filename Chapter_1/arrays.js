// Create an array of fruit names
let arr = ["Grapes", "Apple", "banana"];

// Log the second item in the array (index 1)
console.log(arr[1]);

// Add a new item to the end of the array
arr.push("Mango")

// Add a new item to the beginning of the array
arr.unshift("Pineapple")

// Output the updated array
console.log(arr);

// Create another array and modify it
let Newarr = ["Apple", "Banana"]

// Remove the last item from the array
Newarr.pop()

// Add a new item to the end of the array
Newarr.push("Kiwi")

// Output the modified array
console.log(Newarr);


// Create an array of colors
let colors = [ "Green", "Yellow"]

// Insert "Red" and "Blue" at index 1 without removing any items
colors.splice(1,0,"Red","Blue")
console.log(colors)

// Create a numeric array and take a subset of items from index 2 to 4
let arr12 = [1,2,3,4,5,6,7]
let cr = arr12.slice(2,5)
console.log(cr)

// Sort the color array and then reverse the sorted order
// (same as descending alphabetical order)
colors.sort().reverse()

console.log(colors)

// Create a numeric array and print it
let arr676  = [1,2,3,4,5]
console.log(arr676)

// Create a new array by squaring each value in arr676
let Newarr23 = arr676.map(function(val){
    return val * val
})

// Output the mapped array of squared values
console.log(Newarr23)


// Create an array and keep only values greater than 10
let arr3453 = [5,12,8,20,3]

let exist = arr3453.filter(function(val){
    return val > 10;
})

// Output the filtered result
console.log(exist)

// Create an array and sum all values using reduce
let arr4574 = [10,20,30]

let sum = arr4574.reduce((accumilator,val)=>{
    return accumilator + val
},0);
console.log(sum)

// Find the first item greater than 10
let arr12415363 = [12,15,8,3,20]

let ans = arr12415363.find((val)=>{
    return val > 10
})
console.log(ans)

// Check whether any value is less than 30
let trr = [45,60,28,90]

console.log(trr.some(function(val){
    return val < 30
}))

// Create an array of even numbers and check whether every item is even
let Even = [2,4,6,8,10]
let isEven = Even.every(function(val){
    return val % 2 === 0
})

// Output true if all array elements are even
console.log(isEven)

// Create an array with first and last name values
let naming = ["Gagandeep" , "Singh"]

// Destructure the array into two separate variables
let [First_name , Last_name] = naming

// Output the destructured values
console.log(First_name, Last_name)


// Create two separate arrays
let firsarray = [1,3]
let secondarray = [2,4]

// Spread both arrays into separate arrays, then + converts them to strings
let mergedarray = [...firsarray] + [...secondarray]

// Spread both arrays into one new array
let mergedarray2 = [...firsarray,...secondarray]

console.log(mergedarray)
console.log(mergedarray2)



// Create an array of countries and prepend a new country using spread
let countries = ["USA","CHINA"]
countries = ["INDIA", ...countries]

// Output the new array with INDIA prepended
console.log(countries)


// Create an array of numbers
let Somearray = [1,2,3]
console.log(Somearray)

// Create a shallow copy of Somearray using spread operator
let copyed = [...Somearray]

console.log(copyed)

// Add new numbers to the copied array
copyed.push(4,5)
console.log(copyed)

// Original array is unchanged (shallow copy works for primitive values)
console.log(Somearray)




// Descriptions

/* ============================================
   ARRAY METHODS REFERENCE & DEFINITIONS
   ============================================ */

// 1. PUSH() - Adds one or more elements to the END of an array
//    Why: To append items to an array
//    Accepts: One or more values of any type
//    Returns: The new length of the array
//    Modifies original: YES

// 2. UNSHIFT() - Adds one or more elements to the BEGINNING of an array
//    Why: To prepend items to an array
//    Accepts: One or more values of any type
//    Returns: The new length of the array
//    Modifies original: YES

// 3. POP() - Removes and returns the LAST element from an array
//    Why: To remove and get the last item
//    Accepts: No parameters
//    Returns: The removed element (or undefined if array is empty)
//    Modifies original: YES

// 4. SPLICE(start, deleteCount, items...) - Removes/Adds elements at any position
//    Why: To insert or delete items at specific index
//    Accepts: start index, number of items to delete, items to insert
//    Returns: Array of deleted elements
//    Modifies original: YES

// 5. SLICE(start, end) - Extracts a SHALLOW copy of a portion of an array
//    Why: To get a subset without modifying original
//    Accepts: start index (inclusive), end index (exclusive)
//    Returns: New array with extracted elements
//    Modifies original: NO

// 6. SORT() - Sorts array elements (as strings by default)
//    Why: To arrange elements in order
//    Accepts: Optional comparison function
//    Returns: The sorted array (reference to same array)
//    Modifies original: YES

// 7. REVERSE() - Reverses the order of array elements
//    Why: To flip the array order
//    Accepts: No parameters
//    Returns: The reversed array (reference to same array)
//    Modifies original: YES

// 8. MAP(callback) - Creates a NEW array by applying function to each element
//    Why: To transform each element and get a new array
//    Accepts: Callback function with (element, index, array)
//    Returns: New array with transformed elements
//    Modifies original: NO

// 9. FILTER(callback) - Creates a NEW array with elements that pass the test
//    Why: To keep only elements matching a condition
//    Accepts: Callback function returning true/false
//    Returns: New array with filtered elements
//    Modifies original: NO

// 10. REDUCE(callback, initialValue) - Reduces array to a SINGLE value
//     Why: To accumulate values into one result (sum, product, count, etc)
//     Accepts: Callback(accumulator, currentValue), initial value
//     Returns: Final accumulated value
//     Modifies original: NO

// 11. FIND(callback) - Returns the FIRST element that passes the test
//     Why: To locate first matching item
//     Accepts: Callback function returning true/false
//     Returns: First matching element (or undefined if none found)
//     Modifies original: NO

// 12. SOME(callback) - Tests whether AT LEAST ONE element passes the test
//     Why: To check if any element meets a condition
//     Accepts: Callback function returning true/false
//     Returns: Boolean (true if any element passes, false otherwise)
//     Modifies original: NO

// 13. EVERY(callback) - Tests whether ALL elements pass the test
//     Why: To verify all elements meet a condition
//     Accepts: Callback function returning true/false
//     Returns: Boolean (true if all pass, false if any fail)
//     Modifies original: NO

// 14. SPREAD OPERATOR (...) - Spreads array elements individually
//     Why: To copy arrays, merge arrays, or pass elements as arguments
//     Accepts: Array to spread
//     Returns: Individual elements (context dependent)
//     Creates shallow copy: YES

// 15. DESTRUCTURING - Extracts values from arrays into variables
//     Why: To unpack array elements into distinct variables
//     Accepts: Array on right side, variable names on left
//     Returns: Assigns values to specified variables
//     Example: let [a, b] = [1, 2] assigns a=1, b=2
