import { useDisclosure,Modal,ModalOverlay,ModalContent ,Button,Input,FormControl,FormLabel,ModalFooter,ModalHeader,ModalCloseButton,ModalBody} from '@chakra-ui/react'
import * as React from 'react'


function Signin() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      <>
        <button
					onClick={onOpen}
						className='dropdown-item'
		
						>
						Signin
					</button>
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Login Your account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
            <FormControl>
                <FormLabel>Email Id</FormLabel>
                <Input ref={initialRef} placeholder='Email' />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input placeholder='Password' />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default Signin;