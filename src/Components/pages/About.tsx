import { Box, Flex, Text, Link, SimpleGrid, Image, Container, Heading, Icon } from '@chakra-ui/react'
import Header from '../Shared/Header'
import Footer from '../Shared/Footer'
import { FaHome, FaAngleRight } from 'react-icons/fa'
import { SiTicktick } from 'react-icons/si';
import ResultsSection from '../Props/OurResult';
import OurHistorySection from '../Props/OurHistory';
import IndustrialServiceSection from '../Props/Accordion';

const About = () => {
  const services = [
    { title: 'Construction', desc: 'Expert & modern systems.' },
    { title: 'Environmental', desc: 'Waste management' },
    { title: 'Machinery', desc: 'Equipment relocation' },
    { title: 'Electrical Service', desc: 'Electrical supply stores.' },
  ];

  return (
    <Box bg="white">
      <Header />

      <Flex
        gap={3}
        backgroundColor="gray.700"
        p={{ base: 4, md: 3 }}
        px={{ base: 6, md: 10 }}
        alignItems="center"
        color="white"
        justifyContent={"space-between"}
      >
        <Box>
          <Text
            fontSize={20}
          >About</Text>
        </Box>

        <Flex
          alignItems={"center"}
          gap={3}
        >
          <Link href='/' _hover={{ color: "orange.400" }}><FaHome /></Link>
          <FaAngleRight />
          <Text fontSize="15px" fontWeight={700} letterSpacing="wide">About</Text>
        </Flex>
      </Flex>

      <Box py={{ base: 12, md: 20 }}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 12, lg: 16 }} alignItems="center">

            <Box textAlign={{ base: "center", lg: "left" }}>
              <Text
                color="#ff7700"
                fontWeight="light"
                fontSize="xs"
                letterSpacing="widest"
                mb={2}
                textTransform="uppercase"
              >
                ABOUT OUR COMPANY
              </Text>
              <Heading
                as="h2"
                fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                mb={6}
                lineHeight="1.2"
              >
                Our History
              </Heading>
              <Text
                color="gray.600"
                fontSize={{ base: "md", lg: "lg" }}
                mb={10}
                lineHeight="tall"
                mx={{ base: "auto", lg: "0" }}
                maxW="600px"
              >
                A factory, manufacturing plant or a production plant is an industrial site,
                usually a complex consisting of several buildings filled with machinery,
                where workers manufacture items or operate machines.
              </Text>

              <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={8}>
                {services.map((service, index) => (
                  <Flex key={index} align="center" justify={{ base: "center", lg: "flex-start" }}>
                    <Flex
                      bg="#ff7700"
                      color="white"
                      p={3}
                      mr={4}
                      transition="0.3s"
                      _hover={{ background: "black", transform: "scale(1.1)" }}
                      align="center"
                      justify="center"
                      borderRadius="sm"
                    >
                      <Icon as={SiTicktick} />
                    </Flex>
                    <Box textAlign="left">
                      <Text fontWeight="bold" fontSize="md" lineHeight="1.2" mb={1}>
                        {service.title}
                      </Text>
                      <Text color="gray.500" fontSize="xs">
                        {service.desc}
                      </Text>
                    </Box>
                  </Flex>
                ))}
              </SimpleGrid>
            </Box>

            <Box position="relative" px={{ base: 4, lg: 0 }} mt={{ base: 10, lg: 0 }}>
              <Box
                position="absolute"
                right={{ base: "0", md: "-10px", lg: "-20px" }}
                bottom={{ base: "-10px", md: "-20px" }}
                bg="#ff7700"
                w={{ base: "120px", md: "200px" }}
                h={{ base: "180px", md: "250px" }}
                zIndex={0}
                display={{ base: "none", sm: "block" }}
              />
              <Image
                src="/pr3.jpg"
                alt="Factory Interior"
                zIndex={1}
                position="relative"
                boxShadow="2xl"
                w="full"
                objectFit="cover"
                h={{ base: "300px", md: "450px" }}
                borderRadius="sm"
              />
            </Box>
          </SimpleGrid>
        </Container>

        <Box mt={{ base: 20, md: 32 }}>
          <ResultsSection />
        </Box>

        <Box mt={{ base: 20, md: 32 }}>
          <OurHistorySection />
        </Box>

        <Box mt={{ base: 20, md: 32 }}>
          <IndustrialServiceSection />
        </Box>
      </Box>

      <Box>
        <Footer />
      </Box>
    </Box>
  )
}

export default About;
