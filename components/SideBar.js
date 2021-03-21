import { SearchIcon } from "@chakra-ui/icons";
import { Image, Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { Flex, GridItem, Stack, Text } from "@chakra-ui/layout";

const SideBar = () => {
    return <GridItem position='fixed' rowSpan={2} colSpan={1}>
        <Flex alignItems='center' justifyContent='space-between'>
            <Image h='50px' w='50px' src='/logo.svg' />
            <Image h='30px' w='30px' src='/settings.svg' />
        </Flex>
        <Stack pt={5} spacing={3}>
            <InputGroup alignItems='center'>
                <InputLeftElement
                    pointerEvents="none"
                    children={<SearchIcon color="gray.400" />}
                />
                <Input bg='#E7ECF0' placeholder="What's up?" size="lg" />
            </InputGroup>
            <Flex pt={5} direction='row' alignItems='center'>
                <Image h='30px' w='30px' src='/home.svg' />
                <Text fontWeight='bold' ml={5} fontSize='20px' color='#EBA300'>
                    Home
</Text>
            </Flex>
            <Flex pt={5} direction='row' alignItems='center'>
                <Image h='30px' w='30px' src='/explore.svg' />
                <Text ml={5} fontSize='20px' color='gray.300'>
                    Explore
</Text>
            </Flex>
            <Flex pt={5} direction='row' alignItems='center'>
                <Image h='30px' w='30px' src='/notifs.svg' />
                <Text ml={5} fontSize='20px' color='gray.300'>
                    Notifications
</Text>
            </Flex>
            <Flex pt={5} direction='row' alignItems='center'>
                <Image h='30px' w='30px' src='/lists.svg' />
                <Text ml={5} fontSize='20px' color='gray.300'>
                    Topics
</Text>
            </Flex>
            <Flex pt={5} direction='row' alignItems='center'>
                <Image h='30px' w='30px' src='/user.svg' />
                <Text ml={5} fontSize='20px' color='gray.300'>
                    Profile
</Text>
            </Flex>
        </Stack>
    </GridItem>
}

export default SideBar