import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";

import React from "react";
import { SelectedContext } from "../../context/SelectedContext";

export default function Search() {

  const { data, setData } = React.useContext(SelectedContext);

  const changeWord = event => {
    setData({...data, search: event.target.value});
  };

  return (
    <InputGroup>
      <InputLeftAddon children='🔍' />
      <Input type='tel' placeholder='Search for the name of the token' onChange={changeWord} />
    </InputGroup>
  );
}