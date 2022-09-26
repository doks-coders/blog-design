import React from 'react'
import { Box, Flex, Stack, HStack, VStack, Text, Container, Image, Button, StackDivider, Grid,Input } from '@chakra-ui/react'

export const BlogComponent = ({showDetails}) => {
    return (
        <Stack mb="3">
            <Image src="Img/post-2.jpg" objectFit="cover" height={200} w="100%" />
            <HStack color="gray.500" fontSize={["10","10","12","12"]} justifyContent={'space-between'}>
                <Text>
                    20 May | 2020 
                </Text>
                <Text fontWeight="semibold">
                    ADVICE
                </Text>
            </HStack>
            <Text fontWeight="bold" fontSize={["md","md","xl","xl"]}>Top 10 things to consider when dating</Text>
            <Text color="gray.600" fontSize={["12","12","sm","sm"]}noOfLines={2}>Lorem , quos adipisci voluptate cumque sit cum eos fugiat fugit aspernatur at rerum reprehenderit laboriosam exercitationem cupiditate.</Text>
{
    showDetails &&
    <HStack fontSize={["10","10","sm","sm"]} color="gray.500">
    <Image borderRadius="full" src="Img/post-2.jpg" objectFit="cover" boxSize="30px" />
    <Text>Samuel Ita</Text>
    <Box h="3" w="0.5" bg="gray.500" />
    <Box className="pi pi-clock"></Box>
    <Text>2 Months Ago</Text>
    <Box h="3" w="0.5" bg="gray.500" />
    <Box className="pi pi-comments"></Box>
    <Text>12</Text>
</HStack>
}
          
        </Stack>

    )
}

