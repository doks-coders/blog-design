import React from 'react'
import { Box, Flex, Stack, HStack, VStack, Text, Container, Image, Button, StackDivider, Grid,Input } from '@chakra-ui/react'
import {CategoryPosts} from '../SubComponents/CategoryPosts'
import {SearchBox} from '../SubComponents/SearchBox'
import {LatestBox} from '../SubComponents/LatestBox'
import {CategoriesBox} from '../SubComponents/CategoriesBox'
import {TagsBox} from '../SubComponents/TagsBox'
const Blog = () => {
  return (
    <>
    <Container maxW="container.lg">
    <Flex flexDir={['column','column','row','row']}>
    <Flex flexBasis="70%" mr={["0","0","8","8"]}>
  <CategoryPosts/>
    </Flex>
    <Flex  flexBasis="30%">
      <Stack w="100%">
      <SearchBox/>
      <LatestBox/>
      <CategoriesBox/>
      <TagsBox/>
      </Stack>
     
      </Flex>
    </Flex>
    </Container>
    </>
  
  )
}

export default Blog






















/**
 *      <Grid mt="10" minH="300px" w="100%" templateColumns={[
                        "repeat(2,1fr)",
                    ]} gap="4">
                        <BlogComponent />
                        <BlogComponent />
                        <BlogComponent />

                    </Grid>
 */