import React from 'react'
import { Box, Flex, Stack, HStack, VStack, Text, Container, Image, Button, StackDivider, Grid,Input } from '@chakra-ui/react'
import {BlogComponent} from '../SubComponents/BlogComponent'


export const CategoryPosts = ()=>{
  return (
    <>

<Grid minH="300px" w="100%" templateColumns={[
                        "repeat(1,1fr)",
                        "repeat(1,1fr)",
                        "repeat(2,1fr)",
                        "repeat(2,1fr)",
                    ]} gap="4">
                        <BlogComponent showDetails={true} />
                        <BlogComponent showDetails={true}/>
                        <BlogComponent showDetails={true}/>
                        <BlogComponent showDetails={true}/>

                    </Grid>

    </>
  )
}