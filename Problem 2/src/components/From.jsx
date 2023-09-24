import { Card, Input } from "@chakra-ui/react";

import React from "react";
import Tokens from "./Tokens";

export default function From() {

  const [fromToken, setFromToken] = React.useState("Select Token");
  const [fromAmount, setFromAmount] = React.useState("");
  const [toggle, setToggle] = React.useState(false);

  const changeToken = e => setFromToken(e.target.value);
  const changeAmount = e => setFromAmount(e.target.value);
  const toggleTokens = () => setToggle(!toggle);

  return (
    <Card className="rounded-xl self-center m-1 bg-gray-500 flex flex-col justify-evenly text-left p-2" size="lg">
      <label>You pay</label>
      <div className="flex justify-between">
        <div className="flex flex-col w-1/2">
          <Input variant="filled" placeholder="0" onChange={changeAmount} />
          <p>${fromAmount}</p>
        </div>
        <div className="flex flex-col w-1/3">
          <Tokens tokens={fromToken} />
        </div>
      </div>
    </Card>
  );
}