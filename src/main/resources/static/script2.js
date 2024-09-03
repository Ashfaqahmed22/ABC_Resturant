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

// Handle reservation form submission
document.getElementById("reserveForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    var name = document.getElementById("reserveName").value;
    var email = document.getElementById("reserveEmail").value;
    var date = document.getElementById("reserveDate").value;
    var time = document.getElementById("reserveTime").value;
    var guests = document.getElementById("reserveGuests").value;

    var reservation = {
        customerName: name,
        email: email,
        reservationDate: date,
        reservationTime: time,
        numberOfPeople: parseInt(guests, 10) // Ensure it's an integer
    };

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
            document.getElementById("reserveModal").style.display = "none";
        }
    })
    .catch(error => console.error("Error:", error));
});
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
document.getElementById('logoutBtn').addEventListener('click', function() {
    // Clear any session data or perform logout actions here
    // For example:
    // sessionStorage.clear();
    // localStorage.clear();
    // Redirect to index.html
    window.location.href = 'index.html';
});
