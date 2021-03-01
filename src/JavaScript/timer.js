


const  countTimeDown = () => {
  let currentDate = new Date();
  let eventDate = new Date('2021/03/15');
  console.log(eventDate.getTime(),currentDate.getTime());
  let remainingTime = eventDate.getTime() - currentDate.getTime();
  console.log(remainingTime);
  let seconds =Math.floor(remainingTime / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);
  seconds = seconds %= 60;
  minutes = minutes %= 60;
  hours = hours %= 24;
  seconds = (seconds < 10 ) ? "0" + seconds: seconds;
  minutes = (minutes < 10 ) ? "0" + minutes: minutes;
  hours = (hours < 10 ) ? "0" + hours : hours;
  let setSeconds = document.querySelector('.seconds span');
  let setMinutes = document.querySelector('.minutes span');
  let setHours = document.querySelector('.hours span');
  let setDays = document.querySelector('.days span');
  setSeconds.innerText = seconds;
  setMinutes.innerText = minutes;
  setHours.innerText = hours;
  setDays.innerText = days;
  setTimeout( countTimeDown, 1000);
}

export default countTimeDown;
