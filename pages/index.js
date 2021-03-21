import { Container, Flex, Grid, GridItem, Stack, Text } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import { useEffect } from "react"
import { Button, Image, Input } from "@chakra-ui/react"
import SideBar from "@/components/SideBar";

const OneCard = () => {

  const router = useRouter();

  return <Flex onClick={() => {
    router.push('/tag/maga');
  }} cursor='pointer' direction='column'>
    <Image h='100%' w='100%' src='/maga.svg' />
    <Flex mt={5} justifyContent='space-between' alignItems='center' direction='row'>
      <Flex direction='row'>
        <Image h='20px' src='/usercollection.svg' />
      </Flex>
      <Text color='#EBA300'>
        XX, XXX people
    </Text>
    </Flex>
  </Flex>
}

const Home = () => {

  const router = useRouter();

  useEffect(() => {
    const logged = localStorage.getItem('login');
    if (logged != 'true') {
      router.push('/login');
    }
  })

  return <Container maxW="100%" py={10}>
    <Container maxW='container.xl'>
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <SideBar />
        <GridItem ml='300px' colSpan={4}>
          <Stack maxW='598px' ml={3} spacing={3}>
            <Flex borderBottom='1px' borderBottomColor='gray.300' direction='row' alignItems='center'>
              <Text fontSize='20px' color='gray.300'>
                Home
              </Text>
            </Flex>
            <Flex borderRadius={5} p={3} shadow='lg' direction='column'>
              <Flex direction='row'>
                <Image h='30px' w='30px' src='/user.svg' />
                <Input ml={5} bg='white' color='gray.300' border={0} placeholder="Toast Something?" fontSize='20px' size="sm" />
              </Flex>
              <Flex mt={20} justifyContent='space-between' direction='row'>
                <Flex pl='40px' ml={5} direction='row'>
                  <Image mr='25px' h='25px' w='25px' src='/image.svg' />
                  <Image mr='25px' h='25px' w='25px' src='/gif.svg' />
                  <Image mr='25px' h='25px' w='25px' src='/chart.svg' />
                  <Image mr='25px' h='25px' w='25px' src='/smiley.svg' />
                </Flex>
                <Button mr={10} mb={3} bg='#EBA30070' color='white' borderRadius={1000} size="lg">
                  Toast
                </Button>
              </Flex>
            </Flex>
            <Flex direction='column'>
              <Text mt={10} fontSize='20px' fontWeight='bold' color='#EBA300'>
                Politics
              </Text>
              <Flex mt={5} justifyContent='space-between' direction='row'>
                <OneCard />
                <OneCard />
                <OneCard />
              </Flex>
            </Flex>
            <Flex direction='column'>
              <Text mt={10} fontSize='20px' fontWeight='bold' color='#EBA300'>
                Technology
              </Text>
              <Flex mt={5} justifyContent='space-between' direction='row'>
                <OneCard />
                <OneCard />
                <OneCard />
              </Flex>
            </Flex>
            <Flex direction='column'>
              <Text mt={10} fontSize='20px' fontWeight='bold' color='#EBA300'>
                Sports
              </Text>
              <Flex mt={5} justifyContent='space-between' direction='row'>
                <OneCard />
                <OneCard />
                <OneCard />
              </Flex>
            </Flex>
          </Stack>
        </GridItem>
      </Grid>
    </Container>
  </Container>
}

export default Home