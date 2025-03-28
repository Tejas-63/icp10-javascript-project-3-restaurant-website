const seatsSelect = document.getElementById('seats');
const tableTypeSelect = document.getElementById('table-type');
const priceDisplay = document.getElementById('price-display');
const reserveButton = document.getElementById('reserve-button');
const popup = document.getElementById('popup');
const popupButton = document.getElementById('popup-button');

const pricePerSeat = 100;
const interiorTablePrice = 50;
const exteriorTablePrice = 0;

function updatePrice() {
    const numberOfSeats = parseInt(seatsSelect.value);
    const tableType = tableTypeSelect.value;
    
    if (numberOfSeats && tableType) {
        let tablePrice = 0;

        if (tableType === 'interior') {
            tablePrice = interiorTablePrice;
        } else if (tableType === 'exterior') {
            tablePrice = exteriorTablePrice;
        }
        
        const totalPrice = (numberOfSeats * pricePerSeat) + tablePrice;
        priceDisplay.textContent = `Total Price: ₹${totalPrice}`;
    } else {
        priceDisplay.textContent = '';
    }
}

seatsSelect.addEventListener('change', updatePrice);
tableTypeSelect.addEventListener('change', updatePrice);

document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    popup.style.display = 'flex';
});
popupButton.addEventListener('click', function() {
    window.location.href = './../pages/payment.html';
});

function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }