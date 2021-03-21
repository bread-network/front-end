import { useRouter } from "next/router"
import { useEffect } from "react";
import { Container, Flex, Grid, GridItem, Stack, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react"
import SideBar from "@/components/SideBar";

const OneCard = () => {

    return <Flex cursor='pointer' direction='column'>
        <Image h='100%' w='100%' src='/oneB.svg' />
        <Flex mt={5} justifyContent='space-between' alignItems='center' direction='row'>
            <Flex direction='row'>
                <Image h='20px' src='/usercollection.svg' />
            </Flex>
            <Text maxW='90px' fontSize='10px' color='#EBA300'>
                XX, XXX people toasted this bread
                </Text>
        </Flex>
    </Flex>
}

const TagPage = ({ tag }) => {
    const router = useRouter();

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
                        <Flex pb={3} borderBottom='1px' borderBottomColor='gray.300' direction='row' justifyContent='space-between' alignItems='center'>
                            <Flex cursor='pointer' onClick={() => {
                                router.push('/');
                            }} direction='row' alignItems='center'>
                                <span style={{ color: '#EBA300' }}>
                                    &larr;
                                </span>
                                <Text ml={3} fontSize='20px' color='#EBA300'>
                                    {`#${tag}`}
                                </Text>
                            </Flex>
                            <Flex alignItems='center' direction='row'>
                                <Flex direction='row'>
                                    <Image h='20px' src='/usercollection.svg' />
                                </Flex>
                                <Text ml={5} color='#EBA300'>
                                    XX, XXX people baked this bread
                                </Text>
                            </Flex>
                        </Flex>
                        <Flex direction='column'>
                            <Image w='100%' src='/magaTag.svg' />
                            <Flex mt={10} justifyContent='space-between' direction='row'>
                                <OneCard />
                                <OneCard />
                                <OneCard />
                            </Flex>
                        </Flex>
                        <Flex direction='column'>
                            <Flex mt={10} justifyContent='space-between' direction='row'>
                                <OneCard />
                                <OneCard />
                                <OneCard />
                            </Flex>
                        </Flex>
                        <Flex direction='column'>
                            <Flex mt={10} justifyContent='space-between' direction='row'>
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

const Tag = ({ }) => {
    const router = useRouter();
    const { name } = router.query;

    useEffect(() => {
        const logged = localStorage.getItem('login');
        if (logged != 'true') {
            router.push('/login');
        }
    })

    return <>
        {!name && 'loading'}
        {name && <TagPage tag={name} />}
    </>
}

export default Tag