import React from 'react'
import { Box, Flex, Stack, HStack, VStack, Text, Container, Image, Button, StackDivider, Grid,Input } from '@chakra-ui/react'
export const NewsLetterComponent = ()=>{
    return (
        <>
        <Box mt="20">
            <Container maxW="container.lg">
                <Stack spacing="4">
                    <Text fontWeight="bold" fontSize={'2xl'}>Subscribe To Newsletter</Text>
                    <Text mt="3" fontSize={["sm","sm","lg","lg"]} maxW="600px"> 
                         Lorem  quas dolores omnis nostrum doloribus 
                         velit quod unde molestias non voluptas enim deleniti iste dicta excepturi, est dolorem ratione tenetur voluptatum!
                    </Text>
<Flex>
    
<Flex borderWidth={2} h="50px" w={["350px","400px","600px","600px"]} borderColor="black">
<Flex alignItems="center" flexBasis="80%">
<Input fontSize={['10','10','md','md']} _placeholder={{fontSize:['10','10','md','md']}} placeholder='Type Your Email Address'/>
</Flex>
<Flex bg="black" alignItems="center" justifyContent={'center'} flexBasis="20%">
    <Text color="white" fontSize={["10","10","md",'md']} textAlign="center">Subscribe</Text>
</Flex>
</Flex>
</Flex>

                </Stack>
            </Container>
        </Box>
        </>
    )
}
