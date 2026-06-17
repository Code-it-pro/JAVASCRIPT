// Define an object representing a student with properties
let Student = {
    name: "Gagandeep Singh",
    age: 22,
    isEnrolled: true,
};

// Output the entire object
console.log(Student)

// Use a variable as a dynamic key to access object properties
let key = 'age'
console.log(Student[key])


// Define a nested object with a coordinates sub-object
const locations = {
    city: 'Lucknow',
    coordinates:{
        lat: 53.3,
        lng: 32.5,
    }
}

// Access nested object properties using dot notation
let a = locations.coordinates.lat
console.log(a)


// Another object example with a differently named nested property
const locations12 = {
    city: 'Lucknow',
    coordinates1:{
        late: 53.3,
        lng: 32.5,
    }
}

// Use optional chaining to safely access nested properties
let b = locations?.coordinates?.lat
console.log(b)


// Destructure object properties into variables
let {city} = locations;
let {lng} = locations.coordinates;

// Output destructured values
console.log(city)
console.log(lng)

// Create an object with a property name that includes a dash
let Name = {
    "first-name" : "Gagan"
}

// Destructure the property with a quoted key into a new variable
let {"first-name" : firstname} = Name

// Output the destructured value
console.log(firstname)

// Explanation:
// When an object property name is not a valid identifier (such as "first-name"),
// you must quote the key in destructuring and provide a local variable name.
// The syntax {"first-name" : firstname} means:
//   read the property "first-name" from Name,
//   then assign its value to the variable firstname.
// This lets you extract values from objects with special-character keys.


// Loop over the keys in the locations object
for(let key in locations){
    console.log(key)
}


let obj = {
    title : "Something",
    class : "Whatever"
}

// Convert object to an array of [key, value] pairs, then log each pair
Object.entries(obj).forEach(val => {
    console.log(`${val[0]} : ${val[1]}`)
})


let objectSomething = {
    Name:"gagan",
    age:"22",
    locations:{
        city: "Lucknow",
        near: "Somewhere"
    },
};

// Create a deep copy of the object by serializing and deserializing it
let copy = JSON.parse(JSON.stringify(objectSomething))

console.log(objectSomething)

// Modify the copied object only; original stays unchanged
copy.Name = "Gagan"
console.log(copy)



const person = {}
// Example object with no nested profile property
// console.log(person.profile.name)     // would throw an error if uncommented
// Optional chaining safely returns undefined instead of throwing
console.log(person?.profile?.name)


const key = "role"
let obj53 = {
    name: "Gagan",
    [key]:"admin"
}

// Computed property name: the value of key becomes the property name
// This creates obj53.role with the value "admin"


// Description

/* Short explanations — what these operators/methods do and what they return

 - Object literal `{ ... }` : creates a new object. Returns the created object.
 - `console.log(value)` : prints `value` to the console; returns undefined.
 - Dot notation `obj.prop` : access or set a property using an identifier.
 - Bracket notation `obj[expr]` : access or set a property using a string or variable; useful for dynamic keys.
 - Computed property `[expr]: value` : uses the result of `expr` as the property name when creating an object.
 - Optional chaining `obj?.prop?.sub` : safely access nested properties; evaluates to `undefined` if a reference is null/undefined.
 - Destructuring `let {a, b} = obj` : extracts properties into local variables; you can rename (`let {x: localName}`).
 - `for...in` : iterates the enumerable property names (keys) of an object (use with caution; includes inherited enumerable keys).
 - `Object.entries(obj)` : returns an array of `[key, value]` pairs for the object's own enumerable properties.
 - `Array.prototype.forEach(callback)` : invokes `callback` for each array element; returns undefined.
 - Template literal `` `text ${expr}` `` : builds a string with embedded expressions; returns a string.
 - `JSON.stringify(obj)` : converts a value to a JSON string (loses functions/symbols/undefined in objects).
 - `JSON.parse(str)` : parses a JSON string back into a JavaScript value; when combined with `stringify` it produces a deep clone for JSON-serializable data.

*/