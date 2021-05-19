/**
 * Задание 1
 * Создать объект счетчика, который будет иметь поле count - значение счетчика. Объект будет иметь следующие методы:
 * метод для инкремента(+1) счетчика, метод для декремента(-1) счетчика, метод который будет возвращать (return) значение счетчика.
 * (использовать this)
 */
// let counter = {
//     count: 1,
//     inkrement: function () {
//        return this.count++;
//     },
//     dikrement: function () {
//         return --this.count;
//     }
// }

/**
 * Задание 2
 * Создать объект работника в него должны быть следующие свойства: имя, фамилия, стаж, email.
 * Плюс у него должны быть методы: sayHello - функция, которая принимает имя и
 * будет выводить в alert сообщение 'Привет, ИМЯ! Меня зовут ИМЯ_РАБОТНИКА' (использовать this)
 */
// let worker = {
//     name: 'Nadya',
//     surname: 'Yakatsuk',
//     experience: 5,
//     email: 'avd@MediaList.ru',
//     sayHello(name){alert(`Привет, ИМЯ! Меня зовут ${this.name}`)}
// }
/**
 * Задание 3
 * Добавить в объект работника поле количество выполненных деталей. Добавить метод,
 * который будет увеличивать количество деталей на 1. Добавить метод, который будет делать ресет(reset() – обнулить счётчик) этого количества в 0. (использовать this)
//  */
// class Worker2 {
//     constructor(name, surname, experience, counter) {
//         this.name = name;
//         this.surname = surname;
//         this.experience = experience;
//         this.counter = counter;
//         this.inkrementCounter = function () {
//             this.counter++;
//             console.log(this.counter);
//         };
//         this.reset = function () {
//             this.counter = 0;
//             console.log(this.counter);
//         };
//     }
// }
// let person2 = new Worker2('Nadya', 'Yakatsuk', 5, 4)




/**
 * Задание 4
 * Реализуйте функцию конструктор Worker (Работник), который будет создавать объект и иметь следующие свойства: name (имя),
 * secondName (фамилия),
 * rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(),
 * который будет выводить зарплату работника.
 * Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
 */
// function Worker4(name, secondname, rate, days) {
//     this.name = name;
//     this.secondname = secondname;
//     this.rate = rate;
//     this.days = days;
//     this.getSalary = function () {
//         let salary = this.rate * this.days;
//         console.log(salary);
//     }
// }

// let person4= new Worker4('John','Smith',2,3)
/**
 * Задание 5
 * Модифицируйте функцию конструктор Worker из предыдущей задачи следующим образом:
 * У каждого объекта класса Worker должны быть доступны методы getName, getSecondName, getRate, getDays,
 * каждый из которых будет возвращать соответствующее поле в объекте.
 * И также методы setRate, setDays, которые будут устанавливать новые значения для соответственно свойств rate и days.
 */
// function Worker5(name, secondname, rate, days) {
//    this.name = name;
//     this.secondname = secondname;
//     this.rate = rate;
//     this.days = days;
//     this.getName = function () {
//         return this.name;
//     };
//     this.getSecondName = function () {
//         return this.secondname;
//     };
//     this.getRate = function () {
//         return this.rate;
//     };

// this.getDays = function () {

//         return this.days;
//     };
//     this.setRate = function () {
//         let Rates = prompt(' Введите ставку за день работы');
//         this.rate = Rates;
//         return Rates;
//     };
// this.setDays = function () {
//         let Day = prompt(' Введите количество отработанных дней');
//         this.days = Day;
//         return Day;
//     };
//  }
// let person4= new Worker5('Jessica','Jaguar')
/**
 * Задание 6
 * Сделать задание 4-5 с использованием классов.
 */
// class worker6A {
//     constructor(name, secondName, rate, days) {
//         this.name = name;
//         this.secondName = secondName;
//         this.rate = rate;
//         this.days = days;
//     }
//         getSalary() {
//             let salary=this.rate * this.days;
//             console.log( salary);
//         }
//     }
// let person6A= new worker6A('John','Smith',2,2)

// Task 6b
//  class Worker6B {
//      constructor(name, secondname, rate, days) {
//          this.name = name;
//          this.secondname = secondname;
//          this.rate = rate;
//          this.days = days;
//      }
//         getName  () {
//             return this.name;
//         };
//         getSecondName  () {
//             return this.secondname;
//         };
//         getRate () {
//             return this.rate;
//         };

//        getDays () {

//             return this.days;
//         };
//         setRate () {
//             let Rates = prompt(' Введите ставку за день работы');
//             this.rate = Rates;
//             return Rates;
//         };
//        setDays  () {
//             let Day = prompt(' Введите количество отработанных дней');
//             this.days = Day;
//             return Day;
//         };
//     }

// let person6B= new Worker6B('Jessica','Jaguar')


/**
 * Задание 7
 * Реализуйте функцию конструктор MyString, объект которого будет иметь следующие методы: 
  *  метод reverse(),
 * который параметром принимает строку, а возвращает ее в перевернутом виде,
 * метод ucFirst(),
 * который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной
 * и метод ucWords,
 * который принимает строку и делает заглавной первую букву каждого слова этой строки.
 */
// class MyString{
// constructor(str){
//     this.str = str;
//     };
//     reverse() {
//     return this.str.split("").reverse().join("");
//     };
//     ucFirst() {
//         let strNew=this.str[0].toUpperCase() + this.str.slice(1);
//         return strNew;
//     }

// ucWords() {
//     let strNew = this.str.replace(/(^|\s)\S/g, function (a) { return a.toUpperCase() });
//         return strNew;
//     }

// }

// let Object1=new MyString('hi my name')




/**
 * Задание 8
 * Сделать задание 7 с использованием классов.
 */

/**
 * Задание 9
 * Реализуйте класс User, который будет иметь следующие свойства: имя, фамилия, email; следующие методы:
 * getFullName, getEmail.
 */

/**
 * Задание 10
 * Реализуйте класс Student, который будет наследовать класс User.
 * Этот класс должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User),
 * year (год поступления в вуз). Класс должен иметь метод getFullName() (наследуется от User),
 * с помощью которого можно вывести одновременно имя и фамилию студента. Также класс должен иметь метод getCourse(),
 * который будет выводить текущий курс студента (от 1 до 5). Курс вычисляется так: нужно от текущего года отнять год
 * поступления в вуз. Текущий год получить программно, используя объект Date (https://learn.javascript.ru/datetime).
 */