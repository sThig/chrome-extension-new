import { quotes, hello, dates, links, morning, funFacts, puns, starWarsTrivia } from './database';

let userName = 'Scott';
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const newQuote = () => {
  const randomQuote = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quotate').innerHTML = quotes[randomQuote];
}

const differentMorningGreeting = () => {
  const randomMorning = Math.floor(Math.random() * (morning.length));
  return (morning[randomMorning]);
}

const createFunFact = () => {
  const randomFact = Math.floor(Math.random() * (funFacts.length));
  return (funFacts[randomFact]);
}

const createPun = () => {
  const randomPun = Math.floor(Math.random() * (puns.length));
  return (puns[randomPun]);
}

const createStarWarsTrivia = () => {
  const randomSW = Math.floor(Math.random() * (starWarsTrivia.length));
  return (starWarsTrivia[randomSW]);
}

const newGreet = () => {
  const randomGreet = Math.floor(Math.random() * (hello.length));
  document.getElementById('hi').innerHTML = hello[randomGreet];
}

//in production
const enterUserName = () => {
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

const displayGraphic = (id) => {
  document.getElementById(`graphic-${id}`).innerHTML = '<img class=\'link-image\' src= \'/static/' + `${id}.svg` + '\'>';
}


const displayTime = (calcFn, id) => {
  const [now, distance, days, hours, minutes, seconds] = calcFn();
  document.getElementById(`days-${id}`).innerHTML = days + ' Days';
  document.getElementById(`hours-${id}`).innerHTML = hours + 'h ';
  document.getElementById(`minutes-${id}`).innerHTML = minutes + 'm ';
  document.getElementById(`seconds-${id}`).innerHTML = seconds + 's ';
}


function displayVoice() {
  const newday = new Date();
  const hr = newday.getHours();
  if (hr == 1) {
  document.getElementById('personal-message').innerHTML = 'Good morning bud! It’s 1 AM and you’re still up! ';
 }
  if (hr == 2) {
  document.getElementById('personal-message').innerHTML = 'Hey, it is past 2 AM! Seriously, stop coding';
 }
  if (hr == 3) {
  document.getElementById('personal-message').innerHTML = 'Hey, it is almost 3 AM! Insomnia or are you a vampire or what?';
 }
  if (hr == 4) {
  document.getElementById('personal-message').innerHTML = 'Dude! It’s 4 AM! Get up and get your ass to the gym!';
 }
  if (hr == 5) {
  document.getElementById('personal-message').innerHTML = 'GO TO THE GYM!!!';
 }
  if (hr == 6) {
  document.getElementById('personal-message').innerHTML = 'If you see this, you need to be coding;'
 }
  if ((hr == 6) || (hr == 7) || (hr == 8) || (hr == 9) || (hr == 10)) {
  document.getElementById('personal-message').innerHTML = 'Fun fact, "' + differentMorningGreeting(morning) + '" ' + 'is good morning in Non-American!';
 }
  if (hr ==10) {
     document.getElementById('personal-message').innerHTML = createStarWarsTrivia(starWarsTrivia);
 }
  if (hr == 11) {
  document.getElementById('personal-message').innerHTML = createPun(puns);
 }
  if (hr == 12) {
  document.getElementById('personal-message').innerHTML = createFunFact(funFacts);
 }
  if (hr == 14) {
  document.getElementById('personal-message').innerHTML = createStarWarsTrivia(starWarsTrivia);
 }
  if ((hr == 15) || (hr == 13)) {
  document.getElementById('personal-message').innerHTML = createFunFact(funFacts);
 }
 if (hr == 16) {
 document.getElementById('personal-message').innerHTML =  createPun(puns);
}
  if ((hr == 17) || (hr == 18) || (hr == 19) || (hr == 20) || (hr == 21) || (hr == 22)) {
  document.getElementById('personal-message').innerHTML = createFunFact(funFacts);
 }
  if (hr == 23) {
  document.getElementById('personal-message').innerHTML = 'It\'s almost midnight. Aren\'t you sleepy yet?';
 }
  if (hr==0) {
    document.getElementById('personal-message').innerHTML = 'Stop Coding!';
 }
};


const list = [dates.drinks, dates.coffee, dates.meat, dates.age];
// const linkList = [linkCreator.Lifehacker, linkCreator.Reddit];
const linkList = [links.lifehacker, links.reddit, links.goodreads, links.fontawesome, links.googlemusic, links.markdown, links.fontpair, links.patreon];

function createLinks(link, site) {
  document.getElementById(`site-${site}`).innerHTML = '<a href=\'' + `${link}` + '\' >' + '<img class=\'link-image\' src= \'/static/link.svg\'>' + `${site}` + '</a>';
}

// var timeleft = new Date();
// var downloadTimer = setInterval(function(){
//   document.getElementById('progressBar').value = new Date() - --timeleft;
//   if(timeleft <= 0)
//     clearInterval(downloadTimer);
// },1000);


displayVoice();
newGreet();
newQuote();

linkList.forEach(link => {
  link.link;
  link.site;
  console.log(link.link, link.site);
  createLinks(link.link, link.site);
});

list.forEach(date => {
  const calcFn = calcTime(date.date);

  setInterval(() => {
    displayGraphic(date.id);
    displayTime(calcFn, date.id);
  }, 1000);
});
