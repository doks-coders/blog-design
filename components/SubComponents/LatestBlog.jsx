import React from 'react'
import { Box, Flex, Stack, HStack, VStack, Text, Container, Image, Button, StackDivider, Grid,Input } from '@chakra-ui/react'
import { BlogComponent } from './BlogComponent'

export const LatestBlog = () => {
    return (
        <>
            <Flex mt="20">
                <Container maxW="container.lg">
                    <Box>
                        <Text fontSize={["xl","xl","4xl","4xl"]} fontWeight="bold">Latest From Blog</Text>
                        <Text maxW="600px" fontSize={["12","12","md","md"]} fontWeight="semibold">
                            Dipisci fugiat laboriosam voluptate dolore dolorem eum eius, soluta tempore distinctio dicta reiciendis.
                        </Text>
                    </Box>
                    <Grid mt="10" minH="300px" w="100%" templateColumns={[
                        "repeat(1,1fr)",
                          "repeat(1,1fr)",
                          "repeat(3,1fr)",
                        "repeat(3,1fr)",
                    ]} gap="4">
                        <BlogComponent />
                        <BlogComponent />
                        <BlogComponent />

                    </Grid>
                </Container>
            </Flex>
        </>
    )
}
