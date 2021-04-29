/**
 * Сделайте промис, внутри которого будет задержка setTimeout в 3
 * секунды, после которой промис должен зарезолвится (то есть выполнится успешно).
 * */
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


// function getRandomNumber() {
//       return Math.round(Math.random() * 10); 
// }
// let promise = new Promise((resolve, reject) => {
//       let randomNumber = getRandomNumber();

//        setTimeout(() => {
//             if(randomNumber >= 1 && randomNumber <= 5) {
//                  resolve('WAW!!!Success!!') 
//             } else if(randomNumber >= 6 && randomNumber <= 10) {
//                  reject('Erorr')
//             }
//        }, randomNumber*1000)
// })
// .then(() => {
//     console.log('WAW!!!Success!!')
//   })
// .catch(()=>{console.log('Error');})


/**
 * Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайной задержкой от 1 до 5 секунд.
 * Пусть каждый промис своим результатом возвращает эту задержку.
 * С помощью Promise.all получите массив результатов, найдите его сумму, выведите на экран.
 */



function getNumberRandom() {
    return Math.floor(Math.random()*6)
}

let numberTime=getNumberRandom();
let promiseFirst= new Promise((resolve,reject)=>{
// console.log(numberTime);
setTimeout(() => {
       if(numberTime >= 1 && numberTime <= 5) {
                 resolve() 
            } else if(numberTime >= 6 ) {
                 reject()
}
            }, numberTime*1000);
})
.then(()=>{
console.log(numberTime);
})
.catch(()=>{console.log('Error');})
function getNumberRandom2() {
    return Math.floor(Math.random()*6)
}
let numberSecond=getNumberRandom2()
let promiseSecond= new Promise((resolve,reject)=>{

setTimeout(() => {
       if(numberTime >= 1 && numberSecond <= 5) {
                 resolve() 
            } else if(numberSecond >= 6 ) {
                 reject()
}
            }, numberSecond*1000);
})
.then(()=>{
console.log(numberTime);
})
.catch(()=>{console.log('Error');})
console.log(numberSecond);
function getNumberRandom3() {
    return Math.floor(Math.random()*6)
}
let numberThird=getNumberRandom3()
console.log(numberThird);
Promise.all([
  new Promise(resolve => setTimeout(() => resolve(numberTime), numberTime*1000)),
  new Promise(resolve => setTimeout(() => resolve(numberSecond), numberSecond*1000)), 
  new Promise(resolve => setTimeout(() => resolve(numberThird), numberThird*1000))  
])
.then(result=> {console.log(result);});
console.log(result[0]+result[1]+result[2]);
// Array[i].reduce(function(accumulator, currentValue, index, array) {
//   return accumulator + currentValue;
// }, 10);

// let numberTime2=getNumberRandom2();
// let promiseSecond= new Promise((resolve,reject)=>{
// // console.log(numberTime2);
// setTimeout(() => {
//        if(numberTime2 >= 1 && numberTime2 <= 5) {
//                  resolve() 
//             } else if(numberTime2 >= 6 ) {
//                  reject()
// }
//             }, numberTime2*1000);
// })
// .then(()=>{
// console.log(numberTime2);
// })
// .catch(()=>{console.log('Error');})



// function getNumberRandom3() {
//     return Math.floor(Math.random()*6)
// }
// let numberTime3=getNumberRandom3();
// let promiseThird= new Promise((resolve,reject)=>{
// // console.log(numberTime3);
// setTimeout(() => {
//        if(numberTime3 >= 1 && numberTime3 <= 5) {
//                  resolve() 
//             } else if(numberTime3 >= 6 ) {
//                  reject()
// }
//             }, numberTime3*1000);
// })
// .then(()=>{
// console.log(numberTime3);
// })
// .catch(()=>{console.log('Error');})



/**
 * Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users,
 * Отфильтровать массив пользователей, чтобы остались только пользователи с четными  id.
 */

// fetch('https://jsonplaceholder.typicode.com/users'); 
// .then((value)=>{
// return value.json();
// });
// .then((response)=>{

// })