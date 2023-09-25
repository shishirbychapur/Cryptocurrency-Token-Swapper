import { Card, Input } from "@chakra-ui/react";

import React from "react";
import { SelectedContext } from "../context/SelectedContext";
import Tokens from "./Tokens";

export default function From() {

  const { data, setData } = React.useContext(SelectedContext);

  const changeAmount = event => setData({...data, fromAmount: event.target.value});

  return (
    <Card className="rounded-xl self-center m-1 bg-gray-500 flex flex-col justify-evenly text-left p-2" size="lg" backgroundColor="#378ca1" color="white">
      <label>You pay</label>
      <div className="flex justify-between">
        <div className="flex flex-col w-1/2">
          <Input placeholder="0" onChange={changeAmount} />
          <p>${data.fromAmount}</p>
        </div>
        <div className="flex flex-col w-1/3">
          <Tokens tokens={data.fromToken} type="from" />
        </div>
      </div>
    </Card>
  );
}