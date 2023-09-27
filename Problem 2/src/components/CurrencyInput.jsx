import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { getPrice, getUSD } from "../util/Calculator";

import React from "react";
import Tokens from "./Tokens";

export default function CurrencyInput({ amount, token, type, setAmount, setToken }) {
  return (
    <div className="relative bg-zinc-600 w-11/12 h-2/3 lg:w-3/4 lg:h-1/3 rounded-xl self-center m-1 bg-white flex flex-col justify-evenly text-left p-2 z-auto">
      <p className="md:w-3/12 text-2xl text-yellow-500 font-semibold ml-3">
        {type === "from" ? "You Pay" : "You Get"}
      </p>
      <div className="flex justify-between lg:justify-start border border-transparent">
        <input className="ml-2 text-4xl font-semibold text-white bg-zinc-600 focus:outline-none w-9/12 lg:w-3/4" value={amount} onChange={setAmount} autoFocus={type == "from"} />
        <Tokens tokens={token} type={type} setTokens={setToken} />
      </div>
      {
        type === "from"
        ? <p className="font-semibold text-lg text-gray-400 ml-3">≈${getPrice(token.name, amount)}</p>
        : <p className="font-semibold text-lg text-gray-400 ml-3">
          {(token.name == "Select Token" ? "Please select a token to begin!" : "1 " + token.name + " = $" + getUSD(token.name))}
        </p>
      }
  </div>
  )
}