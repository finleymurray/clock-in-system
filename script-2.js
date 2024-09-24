
const staffMembers = {
    '1234': 'John Doe',
    '5678': 'Jane Smith',
    '9101': 'Alex Johnson'
};

let enteredPin = '';

function enterPin(number) {
    if (enteredPin.length < 4) { // Limit the PIN length to 4 digits
        enteredPin += number;
        document.getElementById('pin-display').innerText = 'Enter PIN: ' + enteredPin;
    }
}

function clearPin() {
    enteredPin = '';
    document.getElementById('pin-display').innerText = 'Enter PIN: ';
}

function submitPin() {
    if (staffMembers[enteredPin]) {
        const staffName = staffMembers[enteredPin];
        const clockInTime = new Date().toLocaleString(); // Get current time and date

        document.getElementById('result').innerText = `Welcome ${staffName}, you clocked in at ${clockInTime}.`;

        setTimeout(() => {
            clearPin();
            document.getElementById('result').innerText = '';
        }, 5000);

        console.log('Log saved:', { staff: staffName, time: clockInTime });
    } else {
        document.getElementById('result').innerText = 'Invalid PIN. Please try again.';
        setTimeout(() => {
            document.getElementById('result').innerText = '';
        }, 3000);
    }

    enteredPin = ''; // Clear PIN after submission
    document.getElementById('pin-display').innerText = 'Enter PIN: ';
}
