import CurrencyInput from "./CurrencyInput";
import React from "react";
import { computeExchangeRate } from "../util/Calculator";
import swap from "../assets/swap.svg";

export default function Exchange() {

  const [fromAmount, setFromAmount] = React.useState("");
  const [toAmount, setToAmount] = React.useState("");
  const [fromToken, setFromToken] = React.useState({name: "Select Token", svg: ""});
  const [toToken, setToToken] = React.useState({name: "Select Token", svg: ""});
  const [recentChange, setRecentChange] = React.useState("");

  const handleFromChange = (event) => {
    setFromAmount(event.target.value);
    setRecentChange("from");
  }

  const handleToChange = (event) => {
    setToAmount(event.target.value);
    setRecentChange("to");
  }

  const handleFromTokenChange = (token) => {
    setFromToken(token);
    if (fromAmount == "" || fromAmount == 0) {
      setRecentChange("to");
    } else {
      setRecentChange("from");
    }
  }

  const handleToTokenChange = (token) => {
    setToToken(token);
    if (toAmount == "" || toAmount == 0) {
      setRecentChange("from");
    } else {
      setRecentChange("to");
    }
  }

  const swapTokens = () => {
    setFromToken(toToken);
    setToToken(fromToken);
    setFromAmount(toAmount);
    setToAmount(fromAmount);
    setRecentChange("from");
  }

  React.useEffect(() => {
    if (recentChange === "from") {
      setToAmount(computeExchangeRate(fromToken.name, toToken.name, fromAmount));
    } else if (recentChange === "to") {
      setFromAmount(computeExchangeRate(toToken.name, fromToken.name, toAmount));
    }
  }, [fromAmount, toAmount, fromToken, toToken]);



  return (
    <div className="bg-zinc-800 w-11/12 h-3/4 lg:w-2/4 lg:h-3/4 rounded-xl text-center flex flex-col justify-center p-4">
        <p className="font-bold text-white text-2xl lg:text-3xl mb-4">Coin Swap 🟡</p>
        <CurrencyInput
          amount={fromAmount}
          setAmount={handleFromChange}
          type="from"
          token={fromToken}
          setToken={handleFromTokenChange}
        />
        <div className="z-50 relative -my-4 self-center cursor-pointer bg-yellow-500 p-1 rounded-xl">
          <img src={swap} onClick={swapTokens} className="h-8" />
        </div>
        <CurrencyInput 
          amount={toAmount}
          setAmount={handleToChange}
          type="to"
          token={toToken}
          setToken={handleToTokenChange} 
        />
    </div>
  );
}