import React from 'react'
import { Box, Flex, Stack, HStack, VStack, Text, Container, Image, Button, StackDivider, Grid,Input } from '@chakra-ui/react'

export const CategoriesBoxElement =({value})=>{
    let bool = false
    if(value !=0){
      bool = true
    }
    return (
      <HStack px="2" fontSize={'13'} bg={bool?"blackAlpha.50":""} py="2" justifyContent={'space-between'}>
  
      <Text fontWeight="semibold">Growth</Text>
  
      <Text>12</Text>
     </HStack>
    )
  }
