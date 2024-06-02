document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Fetching form values
    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;
    const cardHolder = document.getElementById('card-holder').value;
    const amount = document.getElementById('amount').value;

    // Basic validation (can be extended)
    if (!cardNumber || !expiryDate || !cvv || !cardHolder || !amount) {
        alert('Please fill in all fields');
        return;
    }

    // Simulate payment processing
    alert(`Payment of $${amount} is being processed for ${cardHolder}`);
    
    // Reset form after submission
    document.getElementById('payment-form').reset();
});