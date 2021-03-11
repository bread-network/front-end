import '@/styles/home.module.css'
import Intro from '@/components/intro'
import Header from '@/components/header'
import Talk from '@/components/talk'
import Button from '@/components/button'
import { items } from '@/components/data'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Box, Container, Text, Heading, SimpleGrid, Flex } from '@chakra-ui/layout'

export default function Home() {
  const [swiper, setSwiper] = useState(0)

  useEffect(() => {
    if (swiper) {
      const timer = setTimeout(() => {
        swiper.slideTo(1)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [swiper])

  return (
    <>
      <Header />

      <Intro
        ifButton={true}
        first="Arian Architects"
        second="Redefining your lifestyle."
      />

      <Container maxW='100%' py={10} bg='black' color='white'>
        <Container maxW='container.xl'>
          <SimpleGrid columns={{ base: 1, sm: 2 }} spacing="40px">
            <Box>
              <Heading as="h2" size='2xl' fontWeight='normal' color='gray'>
                Building <Text fontWeight='normal' as='span' color='white'>modest and
                intelligent responses</Text> based buildings.
            </Heading>
            </Box>
            <Box>
              <Heading as='h3' fontSize='x-large' fontWeight='light'>
                {`A leading architecture studio in Delhi which practices making architecture, interiors and furniture focusing on building services, appealing aesthetics & client experience. We are committed to the process of creating spaces which responds to the users, expanding their aura in the form of architecture.`}
              </Heading>
            </Box>
          </SimpleGrid>
        </Container>
      </Container>

      <Container py={5} maxW='container.xl'>
        <Swiper
          breakpoints={{
            1080: {
              slidesPerView: 3,
              spaceBetween: 150,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 100,
            },
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
          onSwiper={(s) => {
            setSwiper(s)
            const wrapper = document.getElementsByClassName('swiper-wrapper')
            if (wrapper && wrapper[0]) {
              wrapper[0].style.display = 'flex'
              wrapper[0].style.flexDirection = 'row'
              wrapper[0].style.alignItems = 'center'
              wrapper[0].classList = 'swipper-wrapper'
            }
          }}
          centeredSlides={true}
        >
          {items &&
            items.map((item, index) => (
              <SwiperSlide key={index}>
                {({ isActive }) => (
                  <div
                    style={{
                      transform: `scale(${isActive ? 1.8 : 1})`,
                      zIndex: isActive ? 10 : -1,
                      backgroundImage: `url('https://cdn.statically.io/gh/Arian-Architects/arian-architects.github.io/gh-pages/${item.project}/Image_01.jpg')`,
                      backgroundSize: 'cover',
                    }}
                    className={isActive ? 'bgWrap' : 'bgWrap2'}
                  />
                )}
              </SwiperSlide>
            ))}
        </Swiper>
      </Container>

      <Flex pb={5} flexDirection='column' alignItems='center' textAlign='center'>
        {`Building <workspace>
                for <requirement>`}
        <Button
          classes="mt-5"
          color={true}
          direction={-1}
          name={'View Projects'}
          route={'/projects'}
        />
      </Flex>

      <Container maxW='container.xl' borderTop='1px' borderTopColor='#dee2e6'>
        <Talk first={'Wanna redefine your lifestyle?'} second={'Let’s talk!'} />
      </Container>
    </>
  )
}
