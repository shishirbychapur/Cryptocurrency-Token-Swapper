import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";

import React from "react";

export default function Search({ word, setWord }) {

  const changeWord = event => setWord(event.target.value);

  return (
    <InputGroup>
      <InputLeftAddon children='🔍' />
      <Input type='tel' placeholder='Search for the name of the token' onChange={changeWord} value={word} />
    </InputGroup>
  );
}