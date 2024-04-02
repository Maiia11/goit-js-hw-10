
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
                resolve(`✅ Fulfilled promise in ${delay}ms`)
            } else {
                reject(`❌ Rejected promise in ${delay}ms`)
            }
        }, delay);
        
    })
    })
    promises()
        .then(value => iziToast.info({
            message: value,
            backgroundColor: '#59a10d',
            messageColor: '#fff',
            timeout: '2000',
            position: 'topRight',
        }))
        .catch(error => iziToast.info({
            message: error,
            backgroundColor: '#ef4040',
            messageColor: '#fff',
            timeout: '2000',
            position: 'topRight',
            
        })); 
    
    form.reset();
};





