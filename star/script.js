/* const quantity = document.querySelector('.goods__quantity').value;
const price = document.querySelector('.goods__price').value;
const button = document.querySelector('.button');

button.addEventListener('click', () => {
    function calculateTotalPrice(quantity = 2, price = 15000000) {
        const totalPrice = quantity * price;
        alert('Стоимость покупки: ' + totalPrice.toLocaleString("ru-RU", { style: "currency", currency: "RUB" }));
    }
});
 */


//Стоимость покупки в модальном окне

/* function calculateTotalPrice(quantity = 2, price = 15000000) {
    const totalPrice = quantity * price;
    alert('Стоимость покупки: ' + totalPrice.toLocaleString("ru-RU", { style: "currency", currency: "RUB" }));
}
 */


const total = document.querySelector('.total');

function calculateTotalPrice(quantity = 2, price = 15000000) {
    const totalPrice = quantity * price;
    const message = 'Стоимость покупки: ' + totalPrice.toLocaleString("ru-RU", { style: "currency", currency: "RUB" })
    total.textContent = (message);
}