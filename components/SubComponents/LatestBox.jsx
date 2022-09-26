import React from 'react'
import { Box, Flex, Stack, HStack, VStack, Text, Container, Image, Button, StackDivider, Grid,Input } from '@chakra-ui/react'
import {LatestBoxElement} from './LatestBoxElement'
export const LatestBox = ()=>{
  return (
    <>
       <Box py="8" px="6" borderWidth="0.5px" borderColor="gray.200">
      <Text fontWeight="bold">Latest Posts</Text>

     <Stack spacing="3" mt="4">
      <LatestBoxElement/>
      <LatestBoxElement/>
      <LatestBoxElement/>
     </Stack>
    </Box>
    </>
  )
}


