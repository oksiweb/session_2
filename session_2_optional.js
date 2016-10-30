/*
    1. Create a function that will take any number of arguments and return their sum.
    2. Make this function be able to take array as argument.
*/

function sumAllArguments(){
  var result = 0;
  [].forEach.call(arguments, (item) =>{ 
    if(Array.isArray(item)){
       return result += item.reduce((sum, current) => {
          return sum + current;
       });    
    } else {
       return result += item;
    }
  });
  return result;
}
console.log(sumAllArguments(1,2,3));

console.log(sumAllArguments([1,2,3]));

console.log(sumAllArguments([1,2,3],3,[1,2,3]));


//2

//1. Declare a private variable using IIFE.

(function() {
  var myVar = { key: 'value' };
  return myVar ;
})();

//2. Is there any other ways how to declare private variables in JavaScript ?

//constructor
function PrivateBuild() {
    var myVar = {
        key: 'value'
    };
    this.showVariavle = function () {
        console.log(myVar);
    }
}
var obj = new PrivateBuild();


obj.showVariavle(); // {key: "value"}

// private by closure
function privateVariable() {
    var myVar = {
        key: 'value'
    };

    return function () {
        return myVar;
    }
}

var variable = privateVariable();

console.log(variable()); // {key: "value"}

/*
    1. Create a function called celsiusToFahrenheit:
              Store a celsius temperature into a variable.
              Convert it to fahrenheit and output "NN°C is NN°F".

    2. Create a function called fahrenheitToCelsius:
              Now store a fahrenheit temperature into a variable.
       Convert it to celsius and output "NN°F is NN°C."


    F = C * 1.8 + 32
*/

function fahrenheitToCelsius(celsius){
  var fahrenheit = celsius * 1.8 + 32;
  return  fahrenheit +'°F is '+celsius+'°C';
}

function celsiusToFahrenheit(fahrenheit){
  var celsius = Math.round((fahrenheit-32)/1.8);
  return celsius+'°C is '+fahrenheit+'°F';
}

console.log(fahrenheitToCelsius(20));

console.log(celsiusToFahrenheit(68));

/*
    Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
    Example string : 'Hello, GlobalLogic!'
    Expected Output : 'GlobalLogic'
*/

function findLongestWord(data){
  var re = /[^A-Za-z]/;
  var arr = data.split(re);
  var max="";
  arr.forEach(function(item){
     if(item.length>max.length){
       max=item;
     }
  });
  return max;
}

console.log(findLongestWord('Hello, GlobalLogic!'));

/*
    1. Write a function that can print entity details based on next model:
    {
      name: String,
      type: String,
      age: Number
    }
    Expected output: "%NAME%(%TYPE%) - %AGE%."
    2. Rewrite that function to use this instead of argument (use apply, call and
    bind to print the details of different entities).
*/

var obj = {
  name: "Oak",
  type: "tree",
  age: 300
}

function getParamsFirst(obj){
   return console.log(obj.name+"("+obj.type+") - "+obj.age);
}

getParamsFirst(obj);

function getParams(){
   return console.log(this.name+"("+this.type+") - "+this.age);
}

getParams.call(obj);

getParams.apply(obj);

var bound = getParams.bind(obj);

bound(obj)












