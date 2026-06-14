// Dynamic Prefix Generator

function prefixGenerator(prefix){
    return function(name){
        return prefix + name
    }
}

let prefix  = "Mr. "
let newPrefix = "Mrs. "

let mrPrefix = prefixGenerator(prefix)
console.log(mrPrefix("Gagan"))

let mrsShona = prefixGenerator(newPrefix)
console.log(mrsShona("Shona"))