// Add Two Number

function add(x,y){
    let result = x + y             
    return result

}
 let Allresult=add(100,200)+add(200,300)+add(300,400)
 console.log("Sum Of Numbers : "+Allresult);


//  Multiply two number

function multipy(x,y){
    if (typeof(x)=="Number")
    {
        return "1st Number is not a Number";}

        else if (typeof(y)!="number"){
            return "2nd Number is not a number";
        }

        else{
            return x*y;
        }

       
} 

 console.log("Multipy : "+ multipy(7,"a"))
  console.log("Multipy : "+ multipy(7,9))

//  Even or odd checker
function isEven(num){
//     if(num%2==0){
//         return "Even"
// }
//     else{
//         return "Odd"
//     }

return num%2 == 0 ? "Even": "Odd"

}

console.log("Even or Odd : "+isEven(4));

// Convert celsius to Fahrenheit 

function celsiusToFahrenheit(celsius)
{

  return (celsius * 9/5) + 32

}

console.log("Convert C To F: "+celsiusToFahrenheit(2));

// Square of number

function squarenumber(num){
    return num * num
}

console.log("Squarenum : "+squarenumber(5));

// Get First Character of a String

function FirstCharacter(str){
    return str.charAt(1)

}
console.log("character : "+FirstCharacter("Shithi"));

// Number to positive or Negative

function checknum(num){
//     if (num>=0){
//         return "Positive"
// }   else{
//     return "Negative"
// }

return num>=0 ? "positive" : "Negative";
 


}

console.log("Checknum : "+checknum(-5));


// Convert Minutes to Seconds
function minuteTosecond(minute){
    return minute * 60;
}
console.log("MinuteToSecond : "+minuteTosecond(60));

//COncatenate Two String
 function Concatenate(a,b){
    return a + " "+ b;
 }

 console.log("Concatenate : "+Concatenate("Hello" ,"World"));


//  Check of a String Contain a word

function checkStr(sentence,word) 
{

    return sentence.includes(word);

    // it return true or false
    

  }

console.log(checkStr("I love c++ Language","love"));