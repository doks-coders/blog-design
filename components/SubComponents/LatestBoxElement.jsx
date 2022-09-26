import React from 'react'
import { Box, Flex, Stack, HStack, VStack, Text, Container, Image, Button, StackDivider, Grid,Input } from '@chakra-ui/react'

export const LatestBoxElement = ()=>{

  return (
    <HStack fontSize="sm" spacing="3">
    <Image boxSize="50px" src="Img/post-2.jpg" objectFit="cover" />
<Stack spacing="1">
<Text noOfLines={2} fontWeight="semibold" fontSize={['10','10','sm','sm']}>Alberto Synergy can go to many places</Text>
<HStack fontSize="12" color="gray.500">
<Box  fontSize="12" className="pi pi-eye"></Box>  
<Text>22</Text>
<Box h="3" w="0.5" bg="gray.500" />
<Box  fontSize="12" className="pi pi-comments"></Box>
<Text>12</Text>
</HStack>

</Stack>
   
  </HStack>
  )
}
