import React from "react";

export default function To() {
  
  const [toToken, setToToken] = React.useState("");
  const [toAmount, setToAmount] = React.useState("");

  const changeToken = e => setToToken(e.target.value);
  const changeAmount = e => setToAmount(e.target.value);

  return (
    <div className="rounded-xl h-1/3 w-11/12 self-center m-1 bg-red-500 flex flex-col justify-evenly text-left p-2">
      <label for="toAmount">You Pay</label>
      <div className="flex justify-between">
        <div className="flex flex-col w-2/3">
          <input name="toAmount" type="text" value={toAmount} placeholder="0" className="w-11/12 h-10" onChange={changeAmount}/>
          <p>${toAmount}</p>
        </div>
        <div className="flex flex-col w-1/3">
          <input className="h-10" type="text" value={toToken} onChange={changeToken}/>
        </div>
      </div>
    </div>
  );
}