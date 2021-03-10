// - создать 5 объектов. В каждом объекте не менее 3х полей.
// Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
// let obj1 = {id: 1, name: "Leanne Graham", username: "Bret"};
// let obj2 = {phone: 1-770-736-8031, website: "hildegard.org", email: "Sincere@april.biz"};
// let obj3 = {street: "Kulas Light", suite: "Apt. 556", city: "Gwenborough"};
// let obj4 = {zipcode: "92998-3874", lat: -37.3159, lng: 81.1496};
// let obj5 = {company: "Romaguera-Crona", catchPhrase: "Multi-layered client-server neural-net", bs: "harness real-time e-markets"};
// console.log(obj1);
// console.log(obj2);
// console.log(obj3);
// console.log(obj4);
// console.log(obj5);

// - создать 5 объектов с полностью разным набором полей.
// В каждом объекте должен присутсвовать массив и внутренний объект.
// Опишите что угодно, машину, картину, болт...
// Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
// let car = {model: 'Tesla', speed: [344, 43434], class: {s: true, e: false}};
// let laptop = {producer: 'HP', year: [2020, 2021], display: {backgorund: 'silver'}};
// let human = {sex: ['man', 'women'], age: {man: 22, woman: 33}, color: 'bright'};
// let bag = {madeIn: 'Ukraine', size: {width: 30, height: 90}, label: ['Harvest', 'HARVEST']};
// let tree = {live: ['Africa', 'Brazil'], shape: {africa: 'oval', brazil: 'round'}, fruits: true};
// console.log(car);
// console.log(laptop);
// console.log(human);
// console.log(bag);
// console.log(tree);

// - При помощи for in вывести все ключи всех объектов из задания 1 и 2
// for (let obj1Keys in obj1) {
//         console.log(obj1Keys);
// }
// for (let obj2Keys in obj2) {
//         console.log(obj2Keys);
// }
// for (let obj3Keys in obj3) {
//         console.log(obj3Keys);
// }
// for (let obj4Keys in obj4) {
//         console.log(obj4Keys);
// }
// for (let obj5Keys in obj5) {
//         console.log(obj5Keys);
// }
// for (let carKeys in car) {
//         console.log(carKeys);
// }
// for (let laptopKeys in laptop) {
//         console.log(laptopKeys);
// }
// for (let humanKeys in human) {
//         console.log(humanKeys);
// }
// for (let bagKeys in bag) {
//         console.log(bagKeys);
// }
// for (let treeKeys in tree) {
//         console.log(treeKeys);
// }

// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
// console.log(Object.keys(obj1));
// console.log(Object.keys(obj2));
// console.log(Object.keys(obj3));
// console.log(Object.keys(obj4));
// console.log(Object.keys(obj5));
// console.log(Object.keys(car));
// console.log(Object.keys(laptop));
// console.log(Object.keys(human));
// console.log(Object.keys(bag));
// console.log(Object.keys(tree));

// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет.
// (Значаения полей могу быть выдуманными)
// let cars = [
//     car1 = {model : 'Toyota', year : 1999, strength : 1000020, color : 'white'},
//     car2 = {model : 'Mazda', year : 3456, strength : 335325, color :'brown'},
//     car3 = {model : 'Lexus', year : 2341, strength : 424523, color :'yellow'},
//     car4 = {model : 'BMW', year : 2135, strength : 352423, color :'red'},
//     car5 = {model : 'Mercedez', year : 1223, strength : 45235234, color :'black'},
//     car6 = {model : 'Opel', year : 1253, strength : 234523, color :'blue'},
//     car7 = {model : 'Nissan', year : 4353, strength : 432523, color :'grey'},
//     car8 = {model : 'Chevrolet', year : 3465, strength : 325432, color :'silver'},
//     car9 = {model : 'Renault', year : 4365, strength : 235423, color :'pink'},
//     car10 = {model : 'Volkswagen', year : 4523, strength : 3523, color :'green'},
// ];
// console.log(cars);

// - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион.
// (Значаения полей могу быть выдуманными)
// let cities = [
//     city1 = {name : 'Rome', population : 12314231, country : 'Italy', region :'Europe'},
//     city2 = {name : 'Lviv', population : 24321, country : 'Ukraine', region : 'Europe'},
//     city3 = {name : 'Los Angeles', population : 324233232, country : 'US', region: 'America'},
// ];
// console.log(cities);

// - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель.
// Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
// let car = [
//     car1 = {model : 'Toyota', year : 1999, strength : 1000020, color : 'white',
//         driver1 : {name: 'Alex', age: 23, sex: 'man', status: 13}},
//     car2 = {model : 'Mazda', year : 3456, strength : 335325, color :'brown',
//         driver2 : {name: 'Susan', age: 53, sex: 'woman', status: 20}},
//     car3 = {model : 'Lexus', year : 2341, strength : 424523, color :'yellow',
//         driver3 : {name: 'Kelly', age: 34, sex: 'man', status: 11}}];
// console.log(car);

// - проитерировать каждый массив из задания 5,6,7 при помощи while.
// let i = 0;
// while (i < cars.length) {
//     console.log(cars[i]);
//     i++
// }
// let j = 0;
// while (j < cities.length) {
//     console.log(cities[j]);
//     j++
// }
// let a = 0;
// while (a < car.length) {
//     console.log(car[a]);
//     a++
// }

// - проитерировать каждый массив из задания 5,6,7 при помощи for .
// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }
// for (let j = 0; j < cities.length; j++) {
//     console.log(cities[j]);
// }
// for (let a = 0; a < car.length; a++) {
//     console.log(car[a]);
// }

// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.
// for (let car1 of cars) {
//     console.log(car1);
// }
// for (let city of cities) {
//     console.log(city);
// }
// for (let car2 of car) {
//     console.log(car2);
// }

// - взять объекты из задания 1 и превратить каждый в json.
// let jsonOBJ1 = JSON.stringify(obj1);
// let jsonOBJ2 = JSON.stringify(obj2);
// let jsonOBJ3 = JSON.stringify(obj3);
// let jsonOBJ4 = JSON.stringify(obj4);
// let jsonOBJ5 = JSON.stringify(obj5);

// - взять json из задания 11 и превратить их обратно в объекты.
// JSON.parse(jsonOBJ1);
// JSON.parse(jsonOBJ2);
// JSON.parse(jsonOBJ3);
// JSON.parse(jsonOBJ4);
// JSON.parse(jsonOBJ5);

// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
// for (let jsonCar of cars) {
//     console.log(JSON.stringify(jsonCar));
// }

// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
// for (let city of cities) {
//     console.log(JSON.stringify(city));
// }

// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
// let jsonCars = [];
// for (let jsonCar of car) {
//     console.log(JSON.stringify(jsonCar));
//     jsonCars.push(jsonCar);
// }
// console.log(jsonCars);

// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом.
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
// let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
//     {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
//     {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
//     {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
//     {name: 'max', age: 30, status: true, skills: ['mysql', 'mongo']}];
// for (let user of users) {
//     for (let skill of user.skills) {
//         console.log(skill);
//     }
//     console.log(user);
// }

// - Создать массив пользователей. У каждого пользователя обязательно должно быть поле skills которое является массивом.
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills.
// Скопировать все skills всех пользователей в отедльный массив
// let usersSkills = [];
// let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
//     {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
//     {name: 'kolya', age: 29, status: true, skills: ['mysql', 'mongo']},
//     {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
//     {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];
// for (let user of users) {
//     for (let skill of user.skills) {
//         usersSkills.push(skill);
//     }
// }
// console.log(usersSkills);

// - За допомогою 2х циклів проітеррувати  даний масив і масив кожного об'єкта.
// let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];
// for (let user of users) {
//     for (let skill of user.skills) {
//         console.log(skill);
//     }
//     console.log(user);
// }

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];
//
// let usersAddress = [];
// for (let user of users) {
//     for (let address in user.address) {
//         console.log(address);
//         usersAddress.push(user.address);
//     }
// }
// console.log(usersAddress);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
// Всі данні в одному блоці.
// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];
// let allUsers = document.createElement('div');
// document.body.appendChild(allUsers);
// for (let user of users) {
//     let userDiv = document.createElement('div');
//     allUsers.appendChild(userDiv)
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам (div>div*4)
// for (let user of users) {
//     let userDiv = document.createElement('div');
//     document.body.appendChild(userDiv);
//     let userName = document.createElement('div');
//     userName.innerText = user.name;
//     userDiv.appendChild(userName);
//     let userAge = document.createElement('div');
//     userAge.innerText = user.age;
//     userDiv.appendChild(userAge);
//     let userStatus = document.createElement('div');
//     userStatus.innerText = user.status;
//     userDiv.appendChild(userStatus);
//     let userAddress = document.createElement('div');
//     userAddress.innerText = user.address.city;
//     userDiv.appendChild(userAddress);
// }

// -За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
//     for (let user of users) {
//         let userDiv = document.createElement('div');
//         let userName = document.createElement('h3');
//         let userAge = document.createElement('h4');
//         let userStatus = document.createElement('div');
//         let userAddress = document.createElement('div');
//         for (const item in user.address) {
//             let el = document.createElement('div');
//             el.innerText = user.address[item];
//             userAddress.appendChild(el);
//         }
//         userName.innerText = user.name;
//         userAge.innerText = user.age;
//         userStatus.innerText = user.status;
//         userDiv.appendChild(userName);
//         userDiv.appendChild(userAge);
//         userDiv.appendChild(userStatus);
//         userDiv.appendChild(userAddress);
//         document.body.appendChild(userDiv);
//     }

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Частковий приклад реультату:
//     let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]
// let userWithCity = [];
// usersWithId.address = null;
// for (let usersWithIdElement of usersWithId) {
//     for (let citiesWithIdElement of citiesWithId) {
//         if (citiesWithIdElement.user_id === usersWithIdElement.id) {
//             usersWithIdElement.address = citiesWithIdElement
//             userWithCity.push(usersWithIdElement);
//         }
//     }
// }
// console.log(userWithCity);

// -створити розмітці блок з id, class та текстом всередині. Считати окремо цей текст з селекторів по id , class та тегу
// let wrap = document.getElementById('wrap');
// console.log(wrap.innerText);
// let rule = document.getElementsByClassName('rule1');
// for (const ruleElement of rule) {
//     console.log(ruleElement.innerText);
// }
// let p = document.getElementsByTagName('p');
// for (const pElement of p) {
//     console.log(pElement.innerText);
// }

// - змінити цей текст використовуючи селектори id, class,  tag
// let wrap = document.getElementById('hi');
// wrap.innerText = 'blablabla';
// let rule = document.getElementsByClassName('rule2');
// for (const ruleElement of rule) {
//     ruleElement.innerText = 'chickichikichiki'
// }
// let p = document.getElementsByTagName('p');
// for (const pElement of p) {
//     pElement.innerText = 'hello baby'
// }

// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag
// let wrap = document.getElementById('hi');
// wrap.style.width = '100px';
// wrap.style.height = '100px';
// let rule = document.getElementsByClassName('rule1');
// for (const ruleElement of rule) {
//     ruleElement.style.width = '100px';
//     ruleElement.style.height = '100px';
// }
// let p = document.getElementsByTagName('p');
// for (const pElement of p) {
//     pElement.style.width = '100px';
//     pElement.style.height = '100px';
// }

// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
// let table = document.createElement('table');
// document.body.appendChild(table);
// let tr = document.createElement('tr');
// table.appendChild(tr);
// let td1 = document.createElement('td');
// let td2 = document.createElement('td');
// let td3 = document.createElement('td');
// tr.appendChild(td1);
// tr.appendChild(td2);
// tr.appendChild(td3);

// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
// let table = document.createElement('table');
// document.body.appendChild(table);
// for (let i = 0; i < 10; i++) {
//     let tr = document.createElement('tr');
//     table.appendChild(tr);
//         let td1 = document.createElement('td');
//         let td2 = document.createElement('td');
//         let td3 = document.createElement('td');
//         tr.appendChild(td1);
//         tr.appendChild(td2);
//         tr.appendChild(td3);
// }

// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
// let table = document.createElement('table');
// document.body.appendChild(table);
// for (let i = 0; i < 10; i++) {
//    let tr = document.createElement('tr');
//    table.appendChild(tr);
//     for (let j = 0; j < 5; j++) {
//         let td = document.createElement('td');
//         tr.appendChild(td)
//     }
// }

// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені.
// n та m отримати з prompt
// let table = document.createElement('table');
// document.body.appendChild(table);
// let n = +prompt('Enter tr number');
// let m = +prompt('Enter td number');
// for (let i = 0; i < n; i++) {
//     let tr = document.createElement('tr');
//     table.appendChild(tr);
//     for (let j = 0; j < m; j++) {
//         let td = document.createElement('td');
//         tr.appendChild(td)
//     }
// }

// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
// - знайти всі елементі, які мають class
// let classes = document.getElementsByClassName('rules');
// console.log(classes);
// // - знайти всі параграфи ,та змінити текст на hello oktenweb!
// let changeP = document.getElementsByTagName('p');
// for (const changePElement of changeP) {
//     changePElement.innerText = 'hello okten';
// }
// // - знайти всі div та змінити ім колір на червоний
// let divs = document.getElementsByTagName('div');
// for (const div of divs) {
//     div.style.color = 'darkred';
// }

// ============
// ====class===
// ============

// -є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту
// яка вказана в параграфі.
// створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде
// змістом того, що знаходиться на сторінці.
// Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
// let allH2 = document.getElementsByTagName('h2');
// let blockWithId = document.getElementById('content');
// let ul = document.createElement("ul");
// let li = document.createElement("li");
// ul.appendChild(li);
// blockWithId.appendChild(ul);
// for (const h2 of allH2) {
//     let li = document.createElement("li");
//     li.innerText = `${h2.innerText}`;
//     ul.appendChild(li);
// }

// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },
// ];
// let wrap = document.createElement('div');
// document.body.appendChild(wrap);
// for (let i = 0; i < rules.length; i++) {
//     let rule = rules[i];
//     let block = document.createElement('div');
//     block.innerText = rule.title;
//     wrap.appendChild(block);
//     let num = document.createElement('div');
//     num.innerText = i;
//         block.appendChild(num);
//         let txt = document.createElement('div');
//         txt.innerText = rule.body;
//         block.appendChild(txt);
// }

// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users.
// За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому
// кожен внутрішній об'єкт в свій блок (блок в блоці)
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(value => value.json())
//     .then(users => {
//         for (const user of users) {
//             let userBlock = document.createElement('div');
//             document.body.appendChild(userBlock);
//             for (const userElement in user) {
//                 let userValues = document.createElement('div');
//                 userValues.innerText = user[userElement];
//                 userBlock.appendChild(userValues);
//                 // for (const addressEl in userValues.address) {
//                 //     let addressElement = document.createElement('div');
//                 //     addressElement.innerText = userValues.address[addressEl];
//                 //     userValues.appendChild(addressElement)
//                 // }
//             }
//         }
//     });

// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts.
// За допомогою document.createElement вивести їх в браузер.
// Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(value => value.json())
//     .then(posts => {
//
//         for (const post of posts) {
//             let postBlock = document.createElement('div');
//             document.body.appendChild(postBlock);
//             for (const postKey in post) {
//                 let postElement = document.createElement('div');
//                 postElement.innerText = post[postKey];
//                 postBlock.appendChild(postElement);
//             }
//         }
//
//     });

// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments.
// За допомогою document.createElement вивести їх в браузер.
// Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(value => value.json())
//     .then(comments => {
//
//         for (const comment of comments) {
//             let commentBlock = document.createElement('div');
//             document.body.appendChild(commentBlock);
//             for (const commentKey in comment) {
//                 let commentElement = document.createElement('div');
//                 commentElement.innerText = comment[commentKey];
//                 commentBlock.appendChild(commentElement)
//             }
//         }
//
//     });

// ****** при помощи fetch (как в примере) получить от jsonplaceholder все posts.
// Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments.
// Объеденить соответсвующий post с соответсвующими comment и вывести в браузер.
//  Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(value => value.json())
//     .then(posts => {
//         for (const post of posts) {
//             post.comment = [];
//             let postBlock = document.createElement('div');
//             document.body.appendChild(postBlock);
//             for (const postKey in post) {
//                 let postElement = document.createElement('div');
//                 postElement.innerText = post[postKey];
//                 postBlock.appendChild(postElement);
//             }
//             fetch('https://jsonplaceholder.typicode.com/comments')
//                 .then(value => value.json())
//                 .then(comments => {
//                     for (const comment of comments) {
//                         if (comment.postId === post.id) {
//                             post.comment.push(comment);
//                             let commentBlock = document.createElement('div');
//                             postBlock.appendChild(commentBlock);
//                             for (const commentKey in comment) {
//                                 let commentElement = document.createElement('div');
//                                 commentElement.innerText = comment[commentKey];
//                                 commentBlock.appendChild(commentElement);
//                             }
//                         }
//                     }
//                 })
//         }
//         console.log(posts);
//     });
