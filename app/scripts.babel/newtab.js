import { quotes, hello } from './quotes';

const userName = 'Scott';
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const dates = {
  drinks: {
    date: new Date('09/26/2016 12:00 AM'),
    id: 'drinks'
  },
  coffee: {
    date: new Date('03/09/2017 12:01 AM'),
    id: 'coffee'
  },
  meat: {
    date: new Date('03/18/2017 01:00 AM'),
    id: 'meat'
  },
  age: {
    date: new Date('05/27/1973 12:00 PM'),
    id: 'age'
  },
}

const newQuote = () => {
  const randomQuote = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quotate').innerHTML = quotes[randomQuote];
}

const newGreet = () => {
  const randomGreet = Math.floor(Math.random() * (hello.length));
  document.getElementById('hi').innerHTML = hello[randomGreet];
}

const newUser = () => {
  localStorage.setItem('userName', JSON.stringify(userName));
  const retrievedObject = localStorage.getItem('userName');
  document.getElementById('user').innerHTML = JSON.parse(retrievedObject);
}

const calcTime = startDate => () => {
  const now = new Date();
  const distance = now - startDate;
  const days = Math.floor(distance / day);
  const hours = Math.floor((distance % day) / hour);
  const minutes = Math.floor((distance % hour) / minute);
  const seconds = Math.floor((distance % minute) / second);
  return [now, distance, days, hours, minutes, seconds];
}

const displayTime = (calcFn, id) => {
  const [now, distance, days, hours, minutes, seconds] = calcFn();

  document.getElementById(`days-${id}`).innerHTML = days + ' Days';
  document.getElementById(`hours-${id}`).innerHTML = hours + 'h ';
  document.getElementById(`minutes-${id}`).innerHTML = minutes + 'm ';
  document.getElementById(`seconds-${id}`).innerHTML = seconds + 's ';
}

newUser();
newGreet();
newQuote();

const list = [dates.drinks, dates.coffee, dates.meat, dates.age];

list.forEach(date => {
  const calcFn = calcTime(date.date);

  setInterval(() => {
    displayTime(calcFn, date.id);
  }, 50);
});
