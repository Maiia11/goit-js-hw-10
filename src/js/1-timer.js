
import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";


import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";

const startBtn = document.querySelector("[data-start]");

// const span = document.querySelectorAll(".value");




// let intervalId = null;

let userSelectedDate;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
        userSelectedDate = selectedDates[0];
        console.log(userSelectedDate);
      if (userSelectedDate < Date.now()) {
        console.log(Date.now());
      iziToast.error({
        message: 'Please choose a date in the future',
        position: 'topRight',
      });
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
    }
  },
};


flatpickr("#datetime-picker", { options });

 
// startBtn.addEventListener("click", handleSubmit);

// function handleSubmit() {
//     const startTime = Date.now();
//     intervalId = setInterval(() => {
//         const currentTime = Date.now();
//         const delatTime = currentTime - startTime;
//         console.log(delatTime);
//         convertMs(delatTime);
//         updateTimerFace(ms);

//     }, 1000)
// }

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }

// // console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// // console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// // console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

// function updateTimerFace({ days, hours, minutes, seconds }) {
//     span[0].innerHtml = `${days}:`;
//     span[1].innerHtml = `${hours}:`;
//     span[2].innerHtml = `${minutes}:`;
//      span[3].innerHtml = `${seconds}`;


    
// }