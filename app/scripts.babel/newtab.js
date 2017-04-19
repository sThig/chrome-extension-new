'use strict';

let quotes = [
  '\"Is it nice is it\'s necessary is it true?\"',
  '\"Fail Better.\"',
  '\"When life happens, you can be either the author of your life or the victim of it.\"',
  '\"In my walks, every man I meet is my superior in some way, and in that I learn from him.\"',
  '\"Today I will do what others won\'t, so tomorrow I can accomplish what others can\'t.\"',
  '\"What\'s the ONE thing I can do such that by doing it everything else will be easier or unnecessary\"',
  '\"10% of life is 90% of what you make of it\"',
  '\"Find the lead domino and whack away at it until it falls\"',
  '\"I believe that financially wealthy people are those who have enough money coming in without having to work to finance their purpose in life. Now, please realize that this definition presents a challenge to anyone who accepts it. To be financially wealthy you must have a purpose for your life.\"',
];

const hello = [
  'Bonjour', 'Hola', 'Guten Tag', 'Ciao', 'Namaste', 'Salaam', 'Konnichiwa', 'Merhaba', 'Szia', 'Marhaba', 'Sannu', 'Jambo', 'Ni Hau', 'Halo',
];

const drinks = new Date('09/26/2016 06:1 AM');
const coffee = new Date('03/09/2017 06:1 AM');
const meat = new Date('03/18/2017 06:1 AM');
const age = new Date('05/27/1973 06:1 AM');
const _second = 1000;
let _minute = _second * 60;
let _hour = _minute * 60;
let _day = _hour * 24;
let timer;
const items = [drinks, coffee, meat, age];

function newQuote() {
  const randomQuote = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quotate').innerHTML = quotes[randomQuote];
}

function newGreeting() {
  const randomGreet = Math.floor(Math.random() * (hello.length));
  document.getElementById('hi').innerHTML = hello[randomGreet];
}

function newUser() {
  const userName = 'Scott';
  localStorage.setItem('userName', JSON.stringify(userName));
  const retrievedObject = localStorage.getItem('userName');
  console.log('retrievedObject: ', JSON.parse(retrievedObject));
  document.getElementById('user').innerHTML = JSON.parse(retrievedObject);
};

function deployDates() {
  const now = new Date();
  const distance = now - items[0];
  const days = Math.floor(distance / _day);
  const hours = Math.floor((distance % _day) / _hour);
  const minutes = Math.floor((distance % _hour) / _minute);
  const seconds = Math.floor((distance % _minute) / _second);
  return [now, distance, days, hours, minutes, seconds];
};

function displayDrinks() {
  const [now, distance, days, hours, minutes, seconds] = deployDates();
  document.getElementById('days').innerHTML = days + ' Days ';
  document.getElementById('hours').innerHTML = hours + 'h ';
  document.getElementById('mins').innerHTML = minutes + 'm ';
  document.getElementById('secs').innerHTML = seconds + 's ';
};

function deployCoffee() {
  const now = new Date();
  const distance = now - items[1];
  const days = Math.floor(distance / _day);
  const hours = Math.floor((distance % _day) / _hour);
  const minutes = Math.floor((distance % _hour) / _minute);
  const seconds = Math.floor((distance % _minute) / _second);
  return [now, distance, days, hours, minutes, seconds];
};

function displayCoffee() {
  const [now, distance, days, hours, minutes, seconds] = deployCoffee();
  document.getElementById('days-java').innerHTML = days + ' Days ';
  document.getElementById('hours-java').innerHTML = hours + 'h ';
  document.getElementById('mins-java').innerHTML = minutes + 'm ';
  document.getElementById('secs-java').innerHTML = seconds + 's ';
}

function deployMeat() {
  const now = new Date();
  const distance = now - items[2];
  const days = Math.floor(distance / _day);
  const hours = Math.floor((distance % _day) / _hour);
  const minutes = Math.floor((distance % _hour) / _minute);
  const seconds = Math.floor((distance % _minute) / _second);
  return [now, distance, days, hours, minutes, seconds];
};

function displayMeat() {
  const [now, distance, days, hours, minutes, seconds] = deployMeat();
  document.getElementById('days-meat').innerHTML = days + ' Days ';
  document.getElementById('hours-meat').innerHTML = hours + 'h ';
  document.getElementById('mins-meat').innerHTML = minutes + 'm ';
  document.getElementById('secs-meat').innerHTML = seconds + 's ';
}

function deployAge() {
  const now = new Date();
  const distance = now - items[3];
  const days = Math.floor(distance / _day);
  const hours = Math.floor((distance % _day) / _hour);
  const minutes = Math.floor((distance % _hour) / _minute);
  const seconds = Math.floor((distance % _minute) / _second);
  return [now, distance, days, hours, minutes, seconds];
};

function displayAge() {
  const [now, distance, days, hours, minutes, seconds] = deployAge();
  document.getElementById('days-age').innerHTML = days + ' Days ';
  document.getElementById('hours-age').innerHTML = hours + 'h ';
  document.getElementById('mins-age').innerHTML = minutes + 'm ';
  document.getElementById('secs-age').innerHTML = seconds + 's ';
}


newUser();
newGreeting();
newQuote();
displayDrinks()
timer = setInterval(displayDrinks, 50);
displayCoffee()
timer = setInterval(displayCoffee, 50);
displayMeat()
timer = setInterval(displayMeat, 50);
displayAge()
timer = setInterval(displayAge, 50);
