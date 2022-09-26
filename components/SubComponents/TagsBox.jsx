import React from 'react'
import { Box, Flex, Stack, HStack, VStack, Text, Container, Image, Button, StackDivider, Grid,Input } from '@chakra-ui/react'
import {TagBoxComponent} from './TagBoxComponent'
export const TagsBox = ()=>{
  return(
    <>
      <Box   color="gray.600" py="8" px="6" borderWidth="0.5px" borderColor="gray.200">
      <Text fontWeight="bold">Tags</Text>
<Flex mt="5" flexWrap="wrap">
{
  [1,2,3,4,5].map((val,index)=>(
<TagBoxComponent/>
  ))
}

</Flex>
    </Box>
    </>
  )
}
