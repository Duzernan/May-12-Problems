// Problem 1

const string = "I am a string";

if (string) {
    console.log(true)
}

const falsy = false;

if(falsy == false) {
    console.log("The boolean value false is falsy")

} else {
    console.log(true)

}


const nulled = null;

if(nulled == null) {
    console.log("The null value is falsy")

} else {
    console.log(true)

}

const def = undefined;

if(def == undefined) {
    console.log("undefined is falsy")

} else {
    console.log(true)

}

const num = 0;

if(num == 0) {
    console.log("The number 0 is falsy (the only falsy number)")

} else {
    console.log(true)

}

const empty ='';

if(empty == false) {
    console.log("The empty string is falsy (the only falsy string)")

} else {
    console.log(true)

}