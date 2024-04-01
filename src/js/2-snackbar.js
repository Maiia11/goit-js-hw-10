
import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");

form.addEventListener("submit", handleCreate);
 
const delay = form.elements.delay.value;
console.dir(delay);

function handleCreate(event) {
    event.preventDefault();
    const promises = (() => {
        return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (form.elements.state.value === "fulfilled") {
                resolve(`✅ Fulfilled promise in ${delay}ms`)
            } else {
                reject(`❌ Rejected promise in ${delay}ms`)
            }
        }, delay);
        
    })
    })
    promises()
        .then(value => iziToast.info({
            message: value
        }))
        .catch(error => iziToast.info({
            message: error
        })); 
    
     
};





