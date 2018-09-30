 const currencies = (amount) => {
            const rates = {
                USD: amount * 0.77,
                AUD: amount * 0.65,
                GBP: amount * 1.75,
                MEX: amount * 10
            }
            return rates;
        }

console.log(currencies(100));
const { USD, GBP } = currencies(110);
