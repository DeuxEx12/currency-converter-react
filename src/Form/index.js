import { useState } from "react";
import "./style.css"
import currencies from "../currencies";

const Form = ({ result, calculateResult}) => {
    const [currency, setCurrency] = useState(currencies[0])
    const [amount, setAmount] = useState("");
    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(amount, currency);
    };

    const onChangeCurrency = ({ target }) => {
        const selectCurrency = currencies.find(currency => currency.name === target.value);
        setCurrency(selectCurrency);
    };

    return (
        <form onSubmit={onFormSubmit}>
            <label>
                <span className="form__legend">
                    Kalkulator walut
                </span>
                <select
                    value={currency.name}
                    className="form__field"
                    onChange={onChangeCurrency}
                >
                    {currencies.map(currency => (<option key={currency.id}>{currency.name}</option>)
                    )};
                </select>
            </label>
            <label>
                <span className="form__result">podaj PLN:</span>
                <input
                    value={amount}
                    onChange={({ target }) => setAmount(target.value)}
                    className="form__fiield"
                    type="number"
                    name="amount"
                    step="any"
                    min="1"
                    required
                />
            </label>
            <button
                onClick={() => calculateResult(amount, currency)}
                className="form__button"
                type="submit">
                Przelicz
            </button>
            <p className="form__result">
                {result
                    ? `za ${result.sourceAmount.toFixed(2)}zł otrzymamy ${result.targetAmount.toFixed(2)} ${result.currency.id}` 
                    : "Wydaj"
                }
            </p>
            <p>
            Kurs walut z dnia 22.03.2023
            </p>
        </form >
    );
};

export default Form;