import {
  Input,
  InputGroup,
  InputLeftAddon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from '@chakra-ui/react'

import { Button } from "@chakra-ui/react"
import Common from './search/common';
import List from './search/List';
import React from "react";

export default function Tokens({ tokens }) {

  const [token, setToken] = React.useState("Ethereum");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>{tokens}</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select a token</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <InputGroup>
              <InputLeftAddon children='🔍' />
              <Input type='tel' placeholder='Search for the name of the token' />
            </InputGroup>
            <Common />
            <hr />
            <List />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}