/*
  1. Напишите функцию, которая будет возвращать набор уникальных символов,
  которые были переданы в эту функцию, как аргумент. Сортировка - не нужна,
  строчные и заглавные буквы - 1 символ.
*/

function extractCharacters(str){
    var obj = {};
	return str.toLowerCase().split('').filter(function(key){
		if(!(key in obj)){
			obj[key] = true;
			return key;
		}
	});
}

console.log(extractCharacters('abcd'));
    //['a', 'b', 'c', 'd']
console.log(extractCharacters('aaaabc'));
    //['a', 'b', 'c']
console.log(extractCharacters('Hello,hi     world      '));
   //[ 'h', 'e', 'l', 'o', ',', ' ', 'w', 'r', 'd' ];

/*
   Напишите функцию, которая будет возвращать новую функцию,
   с помощью которой можно будет выводить в консоль текстовую информацию.
   Задача на 5+: сделать так, чтобы кастомный логгер не "ломал" коллстек.
*/

//first variant

function createLogger(prefix){
  return function(data) {
    console.log(new Date().toISOString() + ' ' + prefix + ': ' + data);
  }
}

var myLogger = createLogger('My Logger');
myLogger('some data');

//second variant

function createLogger(prefix){
    var data = new Date().toISOString() + ' ' + prefix + ': ' ;
    return console.log.bind(console, data);
}

var myLogger = createLogger('My Logger');
myLogger('some data');


