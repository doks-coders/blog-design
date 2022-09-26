import React from 'react'
import { Box, Flex, Stack, HStack, VStack, Text, Container, Image, Button, StackDivider, Grid,Input } from '@chakra-ui/react'


export const Footer = ()=>{
    return (
        <>
        <Box fontSize={['11','11','md','md']} bg="blackAlpha.900" color="white"  mt="20">
        <Stack spacing="0">
              
        <Container py="10" maxW="container.lg">
        <Flex flexDir={['column','column','row','row']}>

<Stack mb="5" flexBasis="50%">
<Text fontWeight="bold">Bootstrap Blog</Text>
<Text>Stays In China</Text>
<Text>Phone: +123244</Text>
<Text>Email: samuelita@gmail.com</Text>
<HStack py="2" maxW="150" justifyContent={'space-between'} >
    <Box className="pi pi-facebook"/>
    <Box className="pi pi-twitter"/>
    <Box className="pi pi-instagram"/>
</HStack>
    </Stack>  
    <Stack mb="5" flexBasis="40%">
    <Text>Our Partners</Text>
<Text>FAQ</Text>
<Text>Privacy {'&'} Policy</Text>

    </Stack>    
   
    <Stack mb="5" flexBasis="40%">
    <Text>Our Partners</Text>
<Text>FAQ</Text>
<Text>Privacy {'&'} Policy</Text>
    </Stack>  
    </Flex> 
            </Container>

{/******/}
<Flex py="5" bg="black">
    <Container h="100%" maxW="container.lg">
    <Flex  h="100%" justifyContent={'space-between'}>

<Flex>
@ 2017. All Rights Reserved
</Flex>

<Flex>
Designed By Daventy Web Agency
</Flex>
</Flex>                

    </Container>
</Flex>
  
            </Stack>
          

        </Box>
        </>
    )
}

