import React from 'react'
import { Box, Flex, Stack, HStack, VStack, Text, Container, Image, Button, StackDivider, Grid,Input } from '@chakra-ui/react'


export const Intro = () => {
    return (
        <>
            <Container mt="10" maxW="container.lg" >
                <Stack maxW='600'>
                    <Text fontSize="xl" fontWeight="bold">What To Expect?</Text>
                    <Text fontSize={["sm","sm","lg","lg"]}>Place a nice introduction here to catch reader's attention. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderi.</Text>
                </Stack>
            </Container>
        </>
    )
}
