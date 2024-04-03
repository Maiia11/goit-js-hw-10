
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
form.addEventListener("submit", handleCreate);

function handleCreate(event) {
    event.preventDefault();
    let delay = event.target.elements.delay.value;
    let state = event.target.elements.state.value;
    const promises = (() => {
        return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === "fulfilled") {
                resolve(delay)
            } else {
                reject(delay)
            }
        }, delay);
        
    })
    })
    promises()
        .then(value => iziToast.info({
            message: `✅ Fulfilled promise in ${value}ms`,
            backgroundColor: '#59a10d',
            messageColor: '#fff',
            timeout: '2000',
            position: 'topRight',
        }))
        .catch(error => iziToast.info({
            message: `❌ Rejected promise in ${error}ms`,
            backgroundColor: '#ef4040',
            messageColor: '#fff',
            timeout: '2000',
            position: 'topRight',
            
        })); 
    
    form.reset();
};





