import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from '@chakra-ui/react'

import Common from './modal/common';
import List from './modal/List';
import React from "react";
import Search from './modal/Search';
import { SelectedContext } from "../context/SelectedContext";

export default function Tokens({ tokens, type }) {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data, setData } = React.useContext(SelectedContext);

  const fromSVG = 
  <div className="flex flex-row justify-between w-full">
    <img src={data.fromSVG} />
    <p>{data.fromToken}</p>
  </div>;

  const toSVG = 
  <div className="flex flex-row justify-between w-full">
    <img src={data.toSVG} />
    <p>{data.toToken}</p>
  </div>;

  return (
    <>
      <div className="bg-blue-500 rounded-lg p-2 cursor-pointer"onClick={onOpen}>{type == "from" ? fromSVG : toSVG }</div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select a Token!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Search />
            <Common type={type} close={onClose} />
            <hr />
            <List type={type} close={onClose} filter={data.search} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}