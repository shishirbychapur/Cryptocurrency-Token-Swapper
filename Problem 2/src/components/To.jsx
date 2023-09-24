import { Button, Card, Input } from "@chakra-ui/react";

import React from "react";
import Tokens from "./Tokens";

export default function To() {
  
  const [toToken, setToToken] = React.useState("Select Token");
  const [toAmount, setToAmount] = React.useState("");



  const changeToken = e => setToToken(e.target.value);
  const changeAmount = e => setToAmount(e.target.value);

  return (
    <Card className="self-center m-1 bg-red-500 flex flex-col justify-evenly text-left p-2" size="lg">
      <label>You recieve</label>
      <div className="flex justify-between">
        <div className="flex flex-col w-1/2">
          <Input variant="filled" placeholder="0" value={toAmount} onChange={changeAmount} />
          <p>${toAmount}</p>
        </div>
        <div className="flex flex-col w-1/3">
          <Tokens tokens={toToken} />
        </div>
      </div>
    </Card>
  );
}