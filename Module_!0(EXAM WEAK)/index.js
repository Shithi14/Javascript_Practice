// 1. countVowels
function countvowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// 2. sortNumbers
function sortnumbers(arr) {
    return arr.sort((a, b) => a - b);
}

// 3. reverseString
function reversestring(str) {
    return str.split('').reverse().join('');
}

// 4. getLastElement
function getLastelement(arr) {
    return arr[arr.length - 1];
}

// 5. mergeArrays
function mergearrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

// 6. hasSpace
function hasspace(str) {
    return str.includes(' ');
}

// 7. isEmptyString
function isEmptystring(str) {
    return str === '';
}

// 8. removeNegativeNumbers
function removeNegativeNumbers(arr) {
    return arr.filter(num => num >= 0);
}

// Sample Tests
console.log(countvowels(" What is Your Name"));                  
console.log(sortnumbers([4, 1, 8, 3]));                  
console.log(reversestring("hello"));                    
console.log(getLastelement([10, 20, 30, 40]));           
console.log(mergearrays([1, 2], [3, 4]));                
console.log(hasspace("Ostad Limited"));             
console.log(isEmptystring("Hello"));                    
console.log(removeNegativeNumbers([-5, 2, -1, 6, 0]));
