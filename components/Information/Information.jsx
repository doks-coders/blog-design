import React from 'react'
import { Box, Flex, Stack, HStack, VStack, Text, Container, Image, Button, StackDivider, Grid,Input,Divider, Textarea } from '@chakra-ui/react'
import {SearchBox} from '../SubComponents/SearchBox'
import {LatestBox} from '../SubComponents/LatestBox'
import {CategoriesBox} from '../SubComponents/CategoriesBox'
import {TagsBox} from '../SubComponents/TagsBox'
import { TagBoxComponent } from '../SubComponents/TagBoxComponent'
let borderConstant = {borderWidth:"0.5px",p:"3",borderColor:"gray.400",fontSize:['11','11','md','md']}
let fontSize = ["10","10","sm","sm"]
const Information = () => {
  return (
    <>
    <Container maxW="container.lg">
    <Flex flexDir={['column','column','row','row']}>
    <Flex flexBasis="70%" mr={["0","0","8","8"]}>
  <Stack w="100%">
    <Image
    w="100%"
    src="Img/property-2.jpg"
    objectFit="cover"
    height={["250px","250px","400px","400px"]}/>
    <Text fontSize={['11','11','md','md']} >RELATIONSHIPS</Text>
    <Text fontSize={['xl','xl','4xl','4xl']} fontWeight="bold">Diversity in Relationships</Text>

    <HStack fontSize={fontSize}  color="gray.500">
    <Image borderRadius="full" src="Img/post-2.jpg" objectFit="cover" boxSize={["20px","20px","30px","30px"]} />
    <Text>Samuel Ita</Text>
    <Box h="3" w="0.5" bg="gray.500" />
    <Box  fontSize={fontSize}  className="pi pi-clock"></Box>
    <Text>2 Months Ago</Text>
 
    <Box h="3" w="0.5" bg="gray.500" />
    <Box  fontSize={fontSize}  className="pi pi-comments"></Box>
    <Text>12</Text>
</HStack>

<Stack spacing="4">
<Text fontSize={['md','md','xl','xl']} fontWeight="semibold">
    Lorem ipsum d labore qui cum? Nesciunt fugiat earum tenetur consequuntur quos omnis.
</Text>


<Text fontSize={['12','12','md','md']}  fontWeight="normal">
    Lorem ipsum d labore qui cum? Nesciunt fugiat earum tenetur consequuntur quos omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae in, veritatis culpa eius odit modi, dolor adipisci ipsa, fuga illo ratione doloremque minus reiciendis dolores nihil eaque sint tenetur vel!
</Text>

<Image
    w="100%"
    src="Img/property-5.jpg"
    objectFit="cover"
    height={["230px","230px","350px","350px"]}/>

<Text fontSize={['lg','lg','2xl','2xl']} fontWeight="bold">
    Lorem ipsum d la
</Text>


<Box  fontSize={['sm','sm','md','md']}  p="4" borderColor="gray.200" borderLeftWidth={10} borderTopWidth={1} borderBottomWidth={1} borderRightWidth={1}>
    <Text>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex sapiente placeat officia quod et velit consequatur impedit cum labore minima mollitia qui expedita illum, corrupti ut sed adipisci veritatis delectus.
    </Text>
<Text fontSize={["10","10","13","13"]} mt="3">
-Someone Famous
</Text>
   
</Box>


</Stack>

<Flex flexWrap={'wrap'}>
    <TagBoxComponent/>
    <TagBoxComponent/>
    <TagBoxComponent/>
    <TagBoxComponent/>
</Flex>

<Flex flexDir={['column','column','row','row']}>
  <HStack {...borderConstant} mr={['0','0','5','5']} flexBasis="50%">
<Box   {...borderConstant} borderRadius={'full'} className="pi pi-chevron-left"></Box>
<Stack spacing="0">
  <Text>Previous Post</Text>
  <Text fontWeight={'bold'}>I have a dream</Text>
</Stack>
  </HStack>
  <HStack justifyContent={'flex-end'} {...borderConstant} flexBasis="50%">
  <Stack spacing="0">
  <Text textAlign="right">Next Post</Text>
  <Text fontWeight={'bold'}>I have a dream</Text>
</Stack>
  <Box {...borderConstant} borderRadius={'full'}  className="pi pi-chevron-right"></Box>
    </HStack>
</Flex>


<Box pt="6">
<Text fontWeight="bold">Post Comments <Box as="span" fontWeight="normal">(3)</Box></Text>
<Stack pt="4">
  {
    [1,2,4].map((val,index)=>(
      <Flex >
      <Flex mr="4">
      <Box>
      <Box borderRadius="full" fontSize={[9,9,'md','md']} className="pi pi-user" color="white" bg="gray.400" p={["3","3","4","4"]}></Box>
     
      </Box>
     </Flex>
      <Flex>
    <Stack spacing="1">
      <Text fontWeight="bold">Jabi Hernandex</Text>
      <Text color="gray.500" fontSize="sm"  >May 2016</Text>
      <Text fontSize={["10","10","sm","sm"]}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure ducimus suscipit 
        quia sit deleniti a! Quibusdam eius reprehenderit dignissimos,
         eos in possimus est voluptas distinctio itaque consectetur laudantium rem aliquam.
      </Text>
      <Divider pt="4"/>
    </Stack>
    </Flex>
      </Flex> 
    ))
 
  }

</Stack>
</Box>


<Box pt="10">
  <Text fontWeight="bold">Leave a Reply</Text>

  <Flex w="100%" flexDir={['column','column','row','row']} mt="5" >
    <Flex mb="5" mr={["0","0","5","5"]} flexBasis="48.5%">
      <Input placeholder="Name"/>
    </Flex>
    <Flex mb="5" flexBasis="48.5%">
    <Input  placeholder="Email"/>
    </Flex>
    
  </Flex>
  <Flex  
      flexBasis="100%">
      <Textarea placeholder="Type Your Comment"/>
    </Flex>
  <Button my="5" size="sm" bg="gray.500" _hover={{}} color="white" >Submit Your Comment</Button>
</Box>


  </Stack>
    </Flex>
    <Flex flexBasis="30%">
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

export default Information