import React from 'react'
import { Box, Flex, Stack, HStack, VStack, Text, Container, Image, Button, StackDivider, Grid,Input } from '@chakra-ui/react'
import Link from 'next/link'
import SimpleDrawer from '../Drawer/SimpleDrawer'
export const Header = () => {
    return (
        <>
            <Box py={["4","4","8","8"]} bg="white">
                <Container maxW="container.lg">
                    <HStack justifyContent={'space-between'}>
                        <HStack>
                            <Text fontWeight="semibold">Blog Design</Text>
                        </HStack>

                       <SimpleDrawer/>

                        
                        <HStack display={['none','none','flex','flex']} spacing="4">
                        <Link href={'/'}>
                        <Text cursor="pointer">Home</Text>
                            </Link>
                            
                            <Link href={'/blog'}>
                            <Text cursor="pointer">Blog</Text>
                            </Link>
                            
                            <Link href={'/info'}>
                            <Text cursor="pointer">Post</Text>
                            </Link>
                            <Text>Contact</Text>
                            <Box px="3" fontWeight="bold" borderRightWidth={1} borderLeftWidth={1} className="pi pi-search" borderColor="blackAlpha.500"> </Box>
                            <Text>EN</Text>
                        </HStack>

                    </HStack>
                </Container>
            </Box>
        </>
    )
}
