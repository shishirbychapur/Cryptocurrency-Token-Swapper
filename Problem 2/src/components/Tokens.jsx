import { Button, useDisclosure } from "@chakra-ui/react"
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
} from '@chakra-ui/react'

import React from "react";

export default function Tokens() {

  const { isOpen, onOpen, onClose } = useDisclosure()

  const [token, setToken] = React.useState("Ethereum");

  return (
    <>
      <Button onClick={onOpen}>{token}</Button>

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
            <Button>Ethereum</Button>
            <Button>Bitcoin</Button>
            <Button>Litecoin</Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}