import { Container } from '@chakra-ui/layout'

const Footer = ({}) => {
  return (
    <Container pb={4} maxW="100%" bg="black">
      <Container
        py={3}
        maxW="container.xl"
        borderBottom="1px"
        borderBottomColor="#dee2e6"
        alignItems="center"
        display="flex"
        flexDirection="row"
      ></Container>
    </Container>
  )
}

export default Footer
