import { Card, Input } from "@chakra-ui/react";

import React from "react";
import { SelectedContext } from "../context/SelectedContext";
import Tokens from "./Tokens";

export default function To() {

  const { data, setData } = React.useContext(SelectedContext);

  const changeAmount = e => setData({...data, toAmount: e.target.value});

  return (
    <Card className="self-center m-1 bg-red-500 flex flex-col justify-evenly text-left p-2" size="lg" backgroundColor="#378ca1" color="white">
      <label>You recieve</label>
      <div className="flex justify-between">
        <div className="flex flex-col w-1/2">
          <Input placeholder="0" onChange={changeAmount} />
          <p>${data.toAmount}</p>
        </div>
        <div className="flex flex-col w-1/3">
          <Tokens tokens={data.toToken} type="to" />
        </div>
      </div>
    </Card>
  );
}