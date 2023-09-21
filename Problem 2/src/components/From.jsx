import React from "react";

export default function From() {

  const [fromToken, setFromToken] = React.useState("");
  const [fromAmount, setFromAmount] = React.useState("");

  const changeToken = e => setFromToken(e.target.value);
  const changeAmount = e => setFromAmount(e.target.value);

  return (
    <div className="rounded-xl h-1/3 w-11/12 self-center m-1 bg-gray-500 flex flex-col justify-evenly text-left p-2">
      <label for="fromAmount">You Pay</label>
      <div className="flex justify-between">
        <div className="flex flex-col w-2/3">
          <input name="fromAmount" type="text" value={fromAmount} placeholder="0" className="w-11/12 h-10" onChange={changeAmount}/>
          <p>${fromAmount}</p>
        </div>
        <div className="flex flex-col w-1/3">
          <input className="h-10" type="text" value={fromToken} onChange={changeToken} />
        </div>
      </div>
    </div>
  );
}