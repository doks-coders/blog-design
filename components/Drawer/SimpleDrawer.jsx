import {Drawer,DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter,useDisclosure,DrawerCloseButton,List,ListItem,Divider,Flex,Button} from '@chakra-ui/react'
import React from 'react'
import {Link} from 'next/link'
import DrawerLink from './DrawerLink'






const SimpleDrawer = ({})=> {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>

            <Button  ref={btnRef} onClick={onOpen}  className='pi pi-bars' display={['block','block','none','none']} ></Button>

     
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
  
            <DrawerBody>
  
              <List  >
              <DrawerLink
              onClose={onClose}
               links = { [{name:'Home',link:'/'},
               {name:'Categories',link:'/blog'},
               {name:'Information',link:'/info'},
             
              ] }
  
              />
              </List>
  
  
  
            </DrawerBody>
  
          
          </DrawerContent>
        </Drawer>
      </>
    )
  }
  

  export default SimpleDrawer

  //   <DrawerLink/>