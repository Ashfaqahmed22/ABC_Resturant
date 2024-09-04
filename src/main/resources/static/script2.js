// Get the modal elements
var reserveModal = document.getElementById("reserveModal");

// Get the button elements
var reserveBtn = document.getElementById("reserveBtn");

// Get the <span> elements that close the modals
var closeBtns = document.getElementsByClassName("close");

// When the user clicks the "Make Reservation" button, open the reservation modal
reserveBtn.onclick = function() {
    reserveModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < closeBtns.length; i++) {
    closeBtns[i].onclick = function() {
        reserveModal.style.display = "none";
    }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == reserveModal) {
        reserveModal.style.display = "none";
    }
}

// JavaScript to handle form behavior based on reservation type
document.getElementById('reservationType').addEventListener('change', function() {
    let type = this.value;
    document.querySelectorAll('.reservation-section').forEach(section => section.style.display = 'none');
    if (type === 'dineIn') {
        document.getElementById('dineInSection').style.display = 'block';
    } else if (type === 'bookRoom') {
        document.getElementById('roomBookingSection').style.display = 'block';
    } else if (type === 'delivery') {
        document.getElementById('deliverySection').style.display = 'block';
    }
});

// JavaScript to calculate the total price for room booking
document.getElementById('roomNights').addEventListener('input', function() {
    let nights = this.value;
    let roomType = document.getElementById('roomType').value;
    let price = roomType === 'suite' ? 250 : roomType === 'deluxe' ? 150 : 100;
    document.getElementById('totalPrice').textContent = 'Total Price: $' + (nights * price);
});

// Handle reservation form submission
document.getElementById("reserveForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    var name = document.getElementById("reserveName").value;
    var email = document.getElementById("reserveEmail").value;
    var reservationType = document.getElementById("reservationType").value;
    var reservation = {
        customerName: name,
        email: email,
        reservationType: reservationType
    };

    if (reservationType === 'dineIn') {
        reservation.reservationDate = document.getElementById("reserveDate").value;
        reservation.reservationTime = document.getElementById("reserveTime").value;
        reservation.numberOfPeople = parseInt(document.getElementById("reserveGuests").value, 10);
    } else if (reservationType === 'bookRoom') {
        reservation.roomType = document.getElementById("roomType").value;
        reservation.reservationDate = document.getElementById("reserveRoomDate").value;
        reservation.reservationTime = document.getElementById("reserveRoomTime").value;
        reservation.numberOfPeople = parseInt(document.getElementById("reserveRoomGuests").value, 10);
        reservation.numberOfNights = parseInt(document.getElementById("roomNights").value, 10);
        reservation.totalPrice = document.getElementById("totalPrice").textContent.split('$')[1];
    } else if (reservationType === 'delivery') {
        let selectedItems = Array.from(document.getElementById("menuItems").selectedOptions).map(option => option.value);
        reservation.selectedMenuItems = selectedItems;
        reservation.deliveryAddress = document.getElementById("deliveryAddress").value;
    }

    fetch("/api/reserve", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(reservation)
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        if (data === "Reservation made successfully!") {
            reserveModal.style.display = "none";
        }
    })
    .catch(error => console.error("Error:", error));
});

// Script to handle header visibility on scroll
let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down - Hide header
        header.style.top = "-60px"; // Adjust based on your header height
    } else {
        // Scrolling up - Show header
        header.style.top = "0";
    }

    lastScrollTop = scrollTop;
});

// Script for handling logout button
document.getElementById('logoutBtn').addEventListener('click', function() {
    // Clear any session data or perform logout actions here
    // Example:
    // sessionStorage.clear();
    // localStorage.clear();
    // Redirect to index.html
    window.location.href = 'index.html';
});
