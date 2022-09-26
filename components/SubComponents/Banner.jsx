import React from 'react'
import { Box, Flex, Stack, HStack, VStack, Text, Container, Image, Button, StackDivider, Grid,Input } from '@chakra-ui/react'

export const Banner = ({ height, src, text, fontSize }) => {
    return (
        <>
            <Box position="relative" height={height} bg="pink">
                <Image src={src} w="100%" h="100%" objectFit="cover" />
                <Box position='absolute' top="0" bg="blackAlpha.700" w="100%" h="100%" />
                <Box position='absolute' top="0" w="100%" h="100%">
                    <Container h="100%" maxW="container.lg">
                        <Stack color="white" spacing="5" justifyContent={'center'} w="100%" h="100%">
                            <Text fontSize={fontSize} fontWeight="bold" maxW={'600'} >{text}</Text>
                            <Flex>
                                <Stack fontSize={['10','10','md','md']}>
                                    <Text>DISCOVER MORE</Text>
                                    <Box mt="2" w="100%" height="0.5" bg="white"></Box>
                                </Stack>
                            </Flex>
                        </Stack>
                    </Container>
                </Box>

            </Box>
        </>
    )
}