let baseURL = "https://latest.currency-api.pages.dev/v1/currencies/";

const dropDowns = document.querySelectorAll(".dropDown select");
const fromCurrency = document.querySelector(".from select");
const toCurrency = document.querySelector(".to select");
const btn = document.querySelector("form button");
const msg = document.querySelector(".msg");
const amountInput = document.querySelector("input");

// 1. Populate dropdowns dynamically
for (let select of dropDowns) {
    for (let code in countryList) {
        let newOption = document.createElement("option");
        newOption.value = code;
        newOption.innerText = code;
        select.appendChild(newOption);
    }

    // Set default values
    select.value = select.name === "from" ? "USD" : "INR";
}

// 2. Load flag images
const updateFlag = (element) => {
    let currencyCode = element.value;
    let countryCode = countryList[currencyCode];
    let img = element.parentElement.querySelector("img");
    img.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
};

// Add change event to update flags
dropDowns.forEach((select) => {
    select.addEventListener("change", () => {
        updateFlag(select);
    });
});

// 3. Button click – get exchange rate
btn.addEventListener("click", async (e) => {
    e.preventDefault();

    let amount = parseFloat(amountInput.value);
    if (isNaN(amount) || amount <= 0) {
        msg.innerText = "Please enter a valid amount";
        return;
    }

    let from = fromCurrency.value.toLowerCase();
    let to = toCurrency.value.toLowerCase();

    try {
        const response = await fetch(`${baseURL}${from}.json`);
        const data = await response.json();
        const rate = data[from][to];
        const finalAmount = (amount * rate).toFixed(2);
        msg.innerText = `${amount} ${fromCurrency.value} = ${finalAmount} ${toCurrency.value}`;
    } catch (err) {
        msg.innerText = "Failed to fetch exchange rate.";
        console.error("Error:", err);
    }
});
