import React from 'react'
import { Box, Flex, Stack, HStack, VStack, Text, Container, Image, Button, StackDivider, Grid,Input } from '@chakra-ui/react'
import {Banner} from '../SubComponents/Banner' 
import {Intro} from '../SubComponents/Intro' 
import {FeaturedPost} from '../SubComponents/FeaturedPost' 
import {LatestBlog} from '../SubComponents/LatestBlog' 
import {NewsLetterComponent} from '../SubComponents/NewsLetterComponent' 

const Homepage = () => {
    return (
        <>
          

            <Banner height="500px" fontSize={["2xl","2xl","4xl","5xl"]} src="Img/post-2.jpg" text={'Get Inspired, Get Out There!'} />
            <Intro />

            <FeaturedPost />
            <FeaturedPost inverse={true} />
            <FeaturedPost />
            <Box mt="10">
                <Banner fontSize={["md","md","2xl","2xl"]}  height="250px" src="Img/post-5.jpg" text={`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`} />
            </Box>
            <LatestBlog />
            <NewsLetterComponent/>



        </>
    )
}

export default Homepage












