
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const startBtn = document.querySelector("[data-start]");
const input = document.querySelector("#datetime-picker");
const daysData = document.querySelector("[data-days]");
const hoursData = document.querySelector("[data-hours]");
const minutesData = document.querySelector("[data-minutes]");
const secondData = document.querySelector("[data-seconds]");


let intervalId = null;
let userSelectedDate;
startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        userSelectedDate = selectedDates[0];
        console.log(userSelectedDate);
      if (userSelectedDate < Date.now()) {
        iziToast.error({
        message: 'Please choose a date in the future',
        position: 'topRight',
        color: '#ef4040',
        messageColor: '#fff',
        timeout: '2000',
      }); 
    } else {
      startBtn.disabled = false;
    }
  },
};

 startBtn.addEventListener("click", handleSubmit);

function handleSubmit() {
  if (userSelectedDate) {
    intervalId = setInterval(() => {
      const currentTime = new Date();
      const delatTime = userSelectedDate - currentTime;
      if (delatTime <= 0) {
        stopTimer();
        return;
      }
      const time = convertMs(delatTime);
      updateTimerFace(time);

    }, 1000)
    
    input.disabled = true;
    startBtn.disabled = true;

  }   
  }
   
    
function pad (value) {
  return String(value).padStart(2, "0");
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = pad(Math.floor(ms / day));
  const hours = pad(Math.floor((ms % day) / hour));
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function stopTimer() {
  clearInterval(intervalId);
  const time = convertMs(0);
  updateTimerFace(time);
  intervalId = null;
  input.disabled = false;
  startBtn.disabled = false;

}


function updateTimerFace({ days, hours, minutes, seconds }) {
    daysData.textContent = `${days}`;
    hoursData.textContent = `${hours}`;
    minutesData.textContent = `${minutes}`;
     secondData.textContent = `${seconds}`;

}

flatpickr(input, options);