document.addEventListener('DOMContentLoaded', function () {
    const currencyElement = document.getElementById('currency');
    const unitElement = document.getElementById('unit');

    const prices = {
        'month': { 'basic': 10, 'standard': 20, 'premium': 30 },
        'year': { 'basic': 100, 'standard': 200, 'premium': 300 }
    };

    function updatePrices() {
        const currency = currencyElement.value;
        const unit = unitElement.value;

        document.getElementById('basic-price').textContent = currency + prices[unit].basic + '/' + unit;
        document.getElementById('standard-price').textContent = currency + prices[unit].standard + '/' + unit;
        document.getElementById('premium-price').textContent = currency + prices[unit].premium + '/' + unit;
    }

    currencyElement.addEventListener('change', updatePrices);
    unitElement.addEventListener('change', updatePrices);

    // Initial update
    updatePrices();
});
