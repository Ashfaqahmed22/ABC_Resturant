// Get the modal elements
var signInModal = document.getElementById("signInModal");
var registerModal = document.getElementById("registerModal");
var reserveModal = document.getElementById("reserveModal");

// Get the button elements
var signInBtn = document.getElementById("signInBtn");
var registerBtn = document.getElementById("registerBtn");
var reserveBtn = document.getElementById("reserveBtn");

// Get the <span> elements that close the modals
var closeBtns = document.getElementsByClassName("close");

// When the user clicks the "Sign In" button, open the sign-in modal
signInBtn.onclick = function() {
    signInModal.style.display = "block";
}

// When the user clicks the "Register" button, open the register modal
registerBtn.onclick = function() {
    registerModal.style.display = "block";
}

// When the user clicks the "Make Reservation" button, open the reservation modal
reserveBtn.onclick = function() {
    reserveModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < closeBtns.length; i++) {
    closeBtns[i].onclick = function() {
        signInModal.style.display = "none";
        registerModal.style.display = "none";
        reserveModal.style.display = "none";
    }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == signInModal) {
        signInModal.style.display = "none";
    } else if (event.target == registerModal) {
        registerModal.style.display = "none";
    } else if (event.target == reserveModal) {
        reserveModal.style.display = "none";
    }
}

// Handle registration form submission
document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    var username = document.getElementById("regUsername").value;
    var email = document.getElementById("regEmail").value;
    var password = document.getElementById("regPassword").value;

    var user = {
        username: username,
        email: email,
        password: password
    };

    fetch("/api/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        // Close the modal if registration is successful
        if (data === "User registered successfully!") {
            document.getElementById("registerModal").style.display = "none";
        }
    })
    .catch(error => console.error("Error:", error));
});

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

// Handle sign-in form submission
document.getElementById("signInForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if it's the admin login
    if (username === "Admin1" && password === "Admin112") {
        // Redirect to admin page
        window.location.href = "/admin"; // 
    } 
    // Check if it's the worker login
    else if (username === "Worker1" && password === "Worker112") {
        // Redirect to worker's interface
        window.location.href = "/worker"; // 
    } 
    else {
        // Validate user credentials with the database
        var loginDetails = {
            username: username,
            password: password
        };

        fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginDetails)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Redirect to homepage
                window.location.href = "homepage.html";
            } else {
                // Display error message
                alert("Invalid username or password");
            }
        })
        .catch(error => console.error("Error:", error));
    }
});
document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true,
    });
});
