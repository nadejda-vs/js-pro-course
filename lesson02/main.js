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
// function foo(){
//     // что-то, выполняющееся одну секунду
//     setTimeout(foo, 100);
// }
// foo();

function getRandomNumber() {
      return Math.round(Math.random() * 10); 
}

let randomNumber = getRandomNumber();
console.log(randomNumber);
let promise = new Promise((resolve, reject) => {
      let randomNumber = getRandomNumber();

       setTimeout(() => {
            if(randomNumber >= 1 && randomNumber <= 5) {
                 resolve('WAW!!!Success!!') 
            } else if(randomNumber >= 6 && randomNumber <= 10) {
                 reject('Erorr')
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


/**
 * Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users,
 * Отфильтровать массив пользователей, чтобы остались только пользователи с четными  id.
 */

// let response = await fetch('https://jsonplaceholder.typicode.com/users'); 

// (async () => {
// let url = 'https://jsonplaceholder.typicode.com/users';
// let response = await fetch(url);

// let commits = await response.json(); // читаем ответ в формате JSON

// alert(id);
// })()

// {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json;charset=utf-8'
//   },
//   body: JSON.stringify(user)
// });

// let result = await response.json();
// alert(result.message);