const digitalClock = document.querySelector('.digital-clock');
const date = document.querySelector('.date');
const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};
date.textContent = new Date().toLocaleDateString(undefined, options);

const handleDigitalClock = () => {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  digitalClock.textContent = `${hours}:${minutes}:${seconds}`;
};

const hourHand = document.querySelector('.hour');
const minuteHand = document.querySelector('.minute');
const secondHand = document.querySelector('.second');

const handleAnalogClock = () => {
  const date = new Date();

  const hour = date.getHours().toString().padStart(2, '0');
  const minute = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');

  const secondsRotation = seconds * 6;
  const minuteRotation = minute * 6 + seconds * 0.1;
  const hourRotation = (hour % 12) * 6 + minute * 0.1;

  secondHand.style.transform = `rotate(${secondsRotation}deg)`;
  minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
  secondHand.style.transform = `rotate(${hourRotation}deg)`;
};

handleAnalogClock();
handleDigitalClock();
setInterval(() => {
  handleDigitalClock();
  handleAnalogClock();
}, 1000);
