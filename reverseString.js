function reverseString(str){
    return str.split("").reverse().join("");
}
const reverse = reverseString("hello");
console.log(reverse);