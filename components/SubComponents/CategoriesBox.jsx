import React from 'react'
import { Box, Flex, Stack, HStack, VStack, Text, Container, Image, Button, StackDivider, Grid,Input } from '@chakra-ui/react'
import {CategoriesBoxElement} from './CategoriesBoxElement'
export const CategoriesBox=()=>{
    return(
      <>
      <Box py="8" px="6" borderWidth="0.5px" borderColor="gray.200">
        <Text fontWeight="bold">Categories</Text>
  
       <Stack spacing="0" mt="4">
  {
   [1,2,3,4,5].map((val,index)=>(
  
    <CategoriesBoxElement value={(index%2)}/>
  
    ))
  }     </Stack>
      </Box>
      </>
    )
  }
  
