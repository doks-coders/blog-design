import React from 'react'
import { Box, Flex, Stack, HStack, VStack, Text, Container, Image, Button, StackDivider, Grid,Input } from '@chakra-ui/react'

export const SearchBox = ()=>{
  return (
    <>
    <Box py="8" px="6" borderWidth="0.5px" borderColor="gray.200">
      <Text fontWeight="bold">Search the blog</Text>
      <HStack mt="3">
      <Input fontSize={['10','10','15','15']} _placeholder={{fontSize:['10','10','15','15']}}   placeholder='What are you looking for?'/>
      <Box className="pi pi-search"></Box>
      </HStack>
     
    </Box>
    </>
  )
}
