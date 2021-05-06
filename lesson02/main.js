/**
 * Сделайте промис, внутри которого будет задержка setTimeout в 3
 * секунды, после которой промис должен зарезолвится (то есть выполнится успешно).
 * */
let promise =new Promise((resolve,reject)=>{
setTimeout(() => {
    resolve("result");
}, 1000);
})


// or can be done like this:
// const delay = (ms) => new Promise(
//   (resolve) => setTimeout(resolve, ms)
// );

// delay(3000)
//   .then(() => {
//     console.log('Resolved 3 seconds')
    
//   })

/**
 * Сделайте промис, внутри которого будет задержка setTimeout в 3 секунды,
 * после которой промис должен зареджектится (то есть выполнится с ошибкой).
 */
let promiseSecond =new Promise((resolve,reject)=>{
setTimeout(() => {
   reject("Error!!!!");
}, 1000);
})


// or can be done like this:
// Promise.reject(new Error).then(function(success) {
//   // не вызывается
// }, function(error) {
//   setTimeout(function(){ console.log('error'); }, 3000);
// ; 
// });
/**
 * Сделайте функцию, которая будет генерировать случайные числа от 1 до 10. Сделайте так,
 * чтобы сгенерированное число было задержкой функции setTimeout в секундах. Оберните все это в промис.
 * Пусть промис выполнится успешно, если сгенерировано число от 1 до 5, и с ошибкой - если от 6 до 10.
 */


function getRandomNumber() {
      return Math.round(Math.random() * 10); 
}
let promiseRandom = new Promise((resolve, reject) => {
      let randomNumber = getRandomNumber();

       setTimeout(() => {
            if(randomNumber >= 1 && randomNumber <= 5) {
                 resolve() 
            } else if(randomNumber >= 6 && randomNumber <= 10) {
                 reject()
            }
       }, randomNumber*1000)
})
.then(() => {
    console.log('WAW!!!Success!!')
  })
.catch(()=>{console.log('Error');})


/**
 * Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайной задержкой от 1 до 5 секунд.
 * Пусть каждый промис своим результатом возвращает эту задержку.
 * С помощью Promise.all получите массив результатов, найдите его сумму, выведите на экран.
 */

function getNumberRandomOne() {
    return Math.floor(Math.random()*6)
}

let numberTimeFirst=getNumberRandomOne();
let numberTimeSecond=getNumberRandomOne();
let numberTimeThird=getNumberRandomOne();
let counter=0;
Promise.all([
  new Promise(resolve => setTimeout(() => resolve(numberTimeFirst), numberTimeFirst*1000)),
  new Promise(resolve => setTimeout(() => resolve(numberTimeSecond), numberTimeSecond*1000)), 
  new Promise(resolve => setTimeout(() => resolve(numberTimeThird), numberTimeThird*1000))  
])
.then((value)=> 
(
	value.reduce((acc, item) => {
		counter++;
		acc += item;
		if (counter === 3) {
			console.log(acc);
		}
		return acc;
	}, 0)
))


/**
 * Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users,
 * Отфильтровать массив пользователей, чтобы остались только пользователи с четными  id.
 */

fetch('https://jsonplaceholder.typicode.com/users')
.then((value) => {
	return value.json();
})
.then((response) => {
	let array = response;
	let arrayNew = array.filter((element) => {
		if(element.id % 2 == 0) {
			return element;
		}
	})
	console.log(arrayNew);
})


/**
 * Написать цикл, который будет итерироватся от 1 до 100.
 * На каждой итерации цикла нужно проверить:
 * если число кратное 3 - то вывести в консоль строку Fizz,
 * если число кратное 5 - то вывести в консоль строку Buzz,
 * если число кратное и 3 и 5 - то вывести FizzBuzz
 */
for (let num = 1; num < 101; num++) {
    if (num % 3 === 0) {
        console.log('Fizz');
    }
    else if (num % 5 === 0) {
        console.log('Buzz');
    }
    else if (num % 3 && num % 5  === 0) {
        console.log('FizzBuzz');
    }
}
/**
 * Нарисовать прямоугольный треугольник с длинной катетов i (любое число больше 1).
 * Для рисования использовать символ *(звездочка) или %(знак процента) и консоль.
 * Пример вывода:
 *
 **
 ***
 ****
 *****
 ******
 */
let count = 15;
let str = ' ';
let star = '*';

for(let i = 0; i < count; i++) {
	str += star;
	console.log(str);
}
/**
 * Необходимо создать массив из 15 элементов. В массиве обязательно должны быть одинаковые значения.
 * Напишите код, который уберет эти дубликаты из созданного массива.
 */
let array=[1,5,29,1,2,29,3,5,9]
function getArrayNew(arr) {
    return arr.filter((element,index,a)=>a.indexOf(element) ===index)
}
console.log(getArrayNew(array));


/**
 * Напишите код, который подсчитает количество повторяющихся элементов в массиве.
 * И вывести это количество в консоль.
 */

var arraySecond = [1, 1,5, 29, 1, 2, 29, 3, 5, 9].map((name) => {
  return {count: 1, name: name}
})
.reduce((a, b) => {
  a[b.name] = (a[b.name] || 0) + b.count
  return a
}, {})
console.log(arraySecond);