const form = document.getElementById('donation-form');

form.addEventListener('submit', e => {
	e.preventDefault();

	const amount = document.getElementById('donation-amount').value;
	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const creditCard = document.getElementById('credit-card').value;
	const expiryDate = document.getElementById('expiry-date').value;
	const cvv = document.getElementById('cvv').value;

	// TODO: Process the donation using a payment gateway API

	// Show a thank you message to the donor
	alert(`Thank you for your donation of $${amount}!`);
});
