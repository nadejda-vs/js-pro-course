
// Функции

/**
 * Написать функцию, которая принимает любое количество чисел(не массив)и возвращает их сумму.
 */
// function calcSum() {
//     let result = 0;
//     if (arguments.length == 0) return 0;
//     for (let i = 0; i < arguments.length; i++){
//         result += arguments[i];
//     }
//     return result;
// }
// console.log(calcSum());


/**
 * Написать функцию, которая принимает первым аргументом массив,
 * а вторым любое значение, функция должна вернуть индекс если такое значение есть в массиве и -1 если его нет.
 * (indexOf, findIndex не использовать)
 */
// let array = [];
// let number;
// function getIndex(arr, number) {
  
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] === number) {
//         return i;
//         }
//     }
//     return -1;
// }
// console.log(getIndex([1, 2, 3], 5));

/**
 * Написать функцию, которая будет возвращать количество вызовов этой функции в квадрате.
 * (Использовать замыкание)
//  */
// function addCounter() {
//   function counter() {
//     return counter.currentCount++;
//   };
//   counter.currentCount = 1;

//   return counter;
// }

// let counter = addCounter();
// console.log(counter());
// console.log(counter());


/**
 * Напишите функцию, которая разделит массив на части заданного размера и
 * вернет массив элементами которого являются эти части.
 * Пример функции: splitArray([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]
//  */
// function chunkArrayInGroups(arr, size) {
//     var newArr=[];

//     for (var i=0; i < arr.length; i+= size){
//     newArr.push(arr.slice(i,i+size));
//     }
//     return newArr;

// }

// console.log( chunkArrayInGroups([1, 2, 3, 4, 5], 2));
/**
 * Создайте замыкание: функция makePassword получает пароль в аргументе и возвращает
 * внутреннюю функцию, которая принимает введенную строку и возвращает булево значение true,
 * если введенная строка совпадает с паролем и false – если не совпадает.
 * Пример выполнения функции:
 * let checkPassword = makePassword('somePassword'); //задаем пороль
 *
 * checkPassword('password') // возвращает false
 * checkPassword('somePassword')
 */

// const makePassword = (password) => {
//     let passwordItem = password;
//     // console.log(typeof(passwordItem));
//     return (password) => passwordItem == password ? true : false;
// }
// let checkPassword = makePassword('12345');
// console.log(checkPassword(+prompt('Your password')));


/**
 * Написать функцию, которая приобразуем любую строку в строку написанную кебаб кейсом (все буквы с маленькой буквы и на месте пробелов - тире)
 * Например:
 * 'Hello World' -> 'hello-world';
 * 'Hello dear hell' -> 'hello-dear-hell'
 */
// function strToLower (str) {
//     let NewStringToLover = String(str).toLowerCase();       
//      return str.replace(/\s+/g, '-');;  
// }
// console.log(strToLower('Hello dear hell'));



// Массивы
/**
 * Создать массив из 10 чисел. Необходимо создать новый массив, в котором числа будут возведены в квадрат.
 * Например: [1,2,3] -> [1,4,9].
 */
// let arr = [1, 2, 3];

// let result = arr.map(x => x ** 2);
// console.log(result);

/**
 * Создать массив из 20 чисел. Необходимо высчитать сумму всех элементов.(Используем reduce)
 */
// let array = [1, 5, 9, 2,1,15,25,9,6,70,1,25,4,9,36,2,1,4,95,23];
// let result = array.reduce((sum, current) => sum + current, 0)
// console.log(result);
/**
 * Напишите код, который добавит символ двоеточие(':') между нечетными числами.
 * Например, число 556 результат должен быть '5:56', 566 -> 566, 655 -> 65:5
 */

// function addTwist (num) {
//   let str = num.toString();
//   let result = [str[0]];
//   for(var i=1; i<str.length; i++) {
//       if((str[i-1]%2 !== 0)&&(str[i]%2 !== 0)) {
//         result.push(':', str[i]);
//        }
//       else {
//         result.push(str[i]);
//       }
//   }
//   return result.join('');  
// }
// console.log(addTwist(655));

/**
 * Создайте 2 массива с разной длинной.
 * Необходимо написать код,который создаёт массив элементов представляющих собой разность
 * соответствующих элементов заданных массивов.
 */
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [4, 5, 6];
// let arr3 = [];
// let count;
//   if (arr1.length > arr2.length) {
//      count = arr1.length;
//   } else {
//     count = arr2.length;
//   }
//       for (let i = 0; i < count; i++) {
//         if (arr2[i] === undefined) {
//             arr2.push(0);
//         } else {
//             if (arr1[i] === undefined) {
//               arr1.push(0);
//             }
//         }
//         arr3.push(arr1[i]- arr2[i]);
//       }
// console.log(arr3);  
// /**
//  * Создайте 2 массива с разной длинной.
//  * Необходимо написать код,который создаёт массив элементов представляющих собой сумму
//  * соответствующих элементов заданных массивов.
//  */
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [4, 5, 6];
// let  arr3 = [];
// let count;
//   if (arr1.length > arr2.length) {
//     count = arr1.length;
//   } else {
//     count = arr2.length;
//   }
//       for (let i = 0; i < count; i++) {
//         if (arr2[i] === undefined) {
//             arr2.push(0);
//         } else {
//             if (arr1[i] === undefined) {
//               arr1.push(0);
//             }
//         }
//         arr3.push(arr1[i] + arr2[i]);
//       }
// console.log(arr3); // [5,7,9,4,5]  
// 
/**
 * Напишите код, который разворачивает исходный массив и сохраняет это в новую переменную.
 * Например: исходный массив - [1, 2, 3], результирующий массив - [3, 2, 1]
 */
// let arrayReverse = [1, 2, 3, 4, 5, 6];
// let newArrayReverse = arrayReverse.reverse();
// console.log(newArrayReverse );