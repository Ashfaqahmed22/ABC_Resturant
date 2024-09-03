function showUsers() {
    fetch('/api/users')
        .then(response => response.json())
        .then(users => {
            const usersTableBody = document.querySelector('#usersTable tbody');
            usersTableBody.innerHTML = ''; // Clear existing data

            users.forEach(user => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${user.username}</td>
                    <td>${user.email}</td>
                    <td>${new Date(user.registrationDate).toLocaleDateString()}</td>
                    <td><button class="delete-btn" onclick="deleteUser('${user.username}')">Delete</button></td>
                `;
                usersTableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching users:', error));
}

function deleteUser(username) {
    if (confirm('Are you sure you want to delete this user?')) {
        fetch(`/api/users/${username}`, {
            method: 'DELETE',
        })
        .then(response => response.text())
        .then(data => {
            alert(data);
            showUsers(); // Refresh the user list
        })
        .catch(error => console.error('Error deleting user:', error));
    }
}

function showReservations() {
    fetch('/api/reservations')
        .then(response => response.json())
        .then(reservations => {
            const reservationsTableBody = document.querySelector('#reservationsTable tbody');
            reservationsTableBody.innerHTML = ''; // Clear existing data

            reservations.forEach(reservation => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${reservation.customerName}</td>
                    <td>${reservation.email}</td>
                    <td>${new Date(reservation.reservationDate).toLocaleDateString()}</td>
                    <td>${reservation.reservationTime}</td>
                    <td>${reservation.numberOfPeople}</td>
                    <td><button class="delete-btn" onclick="deleteReservation('${reservation.id}')">Delete</button></td>
                `;
                reservationsTableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching reservations:', error));
}

function deleteReservation(reservationId) {
    if (confirm('Are you sure you want to delete this reservation?')) {
        fetch(`/api/reservations/${reservationId}`, {
            method: 'DELETE',
        })
        .then(response => response.text())
        .then(data => {
            alert(data);
            showReservations(); // Refresh the reservation list
        })
        .catch(error => console.error('Error deleting reservation:', error));
    }
}
