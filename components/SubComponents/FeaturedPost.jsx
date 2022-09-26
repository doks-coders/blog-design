import React from 'react'
import { Box, Flex, Stack, HStack, VStack, Text, Container, Image, Button, StackDivider, Grid,Input } from '@chakra-ui/react'
export const FeaturedPost = ({ inverse }) => {

    return (
        <>
            <Container mt="10" maxW="container.lg" >
                <Flex bg="blackAlpha.50" flexDirection={inverse ? ["column-reverse","column-reverse","row-reverse","row-reverse"] : ['column-reverse','column-reverse','row','row']}>
                    <Flex  flexDirection="column" spacing="3" justifyContent="center" p={[5,5,10,10]} flexBasis="50%">
                        <Text fontSize={["12","12","md","md"]}>LIFESTYLE</Text>
                        <Text mb="3" fontWeight={'semibold'} fontSize={["lg","lg","3xl","3xl"]}>How work on yourself without consequences</Text>
                        <Text mb="3" fontSize={["12","12","sm","sm"]} color="gray.600">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrude consectetur adipisicing elit, sed do eiusmod tempor incididunt.
                        </Text>
                        <HStack fontSize={["10","10","12","sm"]} color="gray.500">
                            <Image borderRadius="full" src="Img/post-2.jpg" objectFit="cover" boxSize="30px" />
                            <Text>Samuel Ita</Text>
                            <Box h="3" w="0.5" bg="gray.500" />
                            <Box className="pi pi-clock"></Box>
                            <Text>2 Months Ago</Text>
                            <Box h="3" w="0.5" bg="gray.500" />
                            <Box className="pi pi-comments"></Box>
                            <Text>12</Text>


                        </HStack>
                    </Flex>
                    <Flex flexBasis={'50%'}>
                    <Image my="auto" w="100%"  objectFit="cover" h={[250,250,350,350]} src="Img/post-2.jpg" />
                    </Flex>
                    
                </Flex>

            </Container>
        </>
    )
}