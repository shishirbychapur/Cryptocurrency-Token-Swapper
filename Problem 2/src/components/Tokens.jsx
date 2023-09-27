import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from '@chakra-ui/react'

import Common from './modal/Common';
import List from './modal/List';
import React from "react";
import Search from './modal/Search';

export default function Tokens({ tokens, type, setTokens }) {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [search, setSearch] = React.useState("");

  const fromSVG = 
  <div className="flex flex-row justify-evenly w-full">
    <img src={tokens.svg} />
    <p>{tokens.name}</p>
  </div>;

  const toSVG = 
  <div className="flex flex-row justify-evenly w-full">
    <img src={tokens.svg} />
    <p>{tokens.name}</p>
  </div>;

  return (
    <>
      <div className="lg:ml-1 h-12 w-32 lg:h-12 py-2 bg-yellow-500 rounded-lg lg:p-2 cursor-pointer lg:text-md text-white font-bold w-1/4" onClick={onOpen}>
        {type == "from" ? fromSVG : toSVG }
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select a Token!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Search word={search} setWord={setSearch} />
            <Common setToken={setTokens} close={onClose} />
            <hr />
            <List close={onClose} keyword={search} setToken={setTokens} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}