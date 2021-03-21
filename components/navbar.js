import { Container } from '@chakra-ui/layout'
import { useBreakpointValue } from '@chakra-ui/react'

const Nav = ({ }) => {
  const flexDir = useBreakpointValue({ base: 'column', md: 'row' })

  return (
    <Container maxW="100%" borderBottom="1px" borderBottomColor="#dee2e6">
      <Container
        maxW="container.xl"
        display="flex"
        flexDirection={flexDir}
        alignItems="center"
        justifyContent="space-between"
      ></Container>
    </Container>
  )
}

export default Nav
