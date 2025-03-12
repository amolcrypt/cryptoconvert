// Mock conversion rates (Replace with real API in the future)
const conversionRates = {
    BTC: { ETH: 15.2, LUSD: 40000, USDT: 39000 },
    ETH: { BTC: 0.065, LUSD: 2500, USDT: 2400 },
    LUSD: { BTC: 0.000025, ETH: 0.0004, USDT: 1 },
    USDT: { BTC: 0.000026, ETH: 0.00042, LUSD: 1 },
};

// Perform conversion
function convert() {
    let from = document.getElementById("from-crypto").value;
    let to = document.getElementById("to-crypto").value;
    let amount = parseFloat(document.getElementById("from-amount").value) || 0;

    if (from !== to && conversionRates[from] && conversionRates[from][to]) {
        let rate = conversionRates[from][to];
        document.getElementById("to-amount").value = (amount * rate).toFixed(6);
        document.getElementById("conversion-rate-text").innerText = `Rate: 1 ${from} = ${rate} ${to}`;
    }
}

// Swap currencies
function swapCoins() {
    let fromSelect = document.getElementById("from-crypto");
    let toSelect = document.getElementById("to-crypto");
    [fromSelect.value, toSelect.value] = [toSelect.value, fromSelect.value];
    convert();
}

// Listen for changes
document.getElementById("from-crypto").addEventListener("change", convert);
document.getElementById("to-crypto").addEventListener("change", convert);
document.getElementById("from-amount").addEventListener("input", convert);
/* Error Page Styling */
.error-container {
    max-width: 400px;
    background: #1e1e1e;
    padding: 20px;
    margin: 50px auto;
    border-radius: 12px;
    box-shadow: 4px 4px 10px rgba(255, 0, 0, 0.3);
    text-align: center;
}

h2 {
    color: #ff4444;
}

.error-message {
    font-size: 16px;
    color: #ccc;
    margin-bottom: 20px;
}

.error-buttons button {
    width: 120px;
    padding: 10px;
    margin: 10px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 16px;
}

.error-buttons button:first-child {
    background: #444;
    color: white;
}

.error-buttons button:last-child {
    background: #ff4444;
    color: white;
}

.error-buttons button:hover {
    opacity: 0.8;
}

/* Hidden Insurance Message */
.hidden {
    display: none;
}

#insurance-message {
    color: #ffcc00;
    font-weight: bold;
    margin-top: 15px;
}
