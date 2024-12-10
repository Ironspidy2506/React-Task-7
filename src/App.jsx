import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-gray-900 bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/839351/pexels-photo-839351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}
    >
      <div className="flex flex-col md:flex-row items-center gap-10 px-4">
        {/* Left Section */}
        <div className="text-white text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Currency Converter
          </h1>
          <p className="text-lg md:text-xl font-light mb-6">
            Convert currencies quickly and easily with up-to-date exchange rates.
            Trusted by users worldwide.
          </p>
        </div>

        {/* Conversion Card */}
        <div className="w-full max-w-md p-6 border border-gray-700 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg backdrop-blur-lg">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <h2 className="text-center text-white text-3xl font-bold mb-6">
              Convert Currencies
            </h2>
            <div className="mb-5">
              <InputBox
                label={
                  <span className="text-sm text-gray-400 font-medium">
                    From Currency
                  </span>
                }
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5 mb-5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-600 rounded-md bg-blue-600 text-white px-3 py-1 shadow-md font-medium hover:bg-blue-700 transition"
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <div className="mb-5">
              <InputBox
                label={
                  <span className="text-sm text-gray-400 font-medium">
                    To Currency
                  </span>
                }
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white text-lg font-semibold px-5 py-3 rounded-lg hover:bg-blue-700 transition shadow-md"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
