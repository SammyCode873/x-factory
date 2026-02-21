import {
  Box,
  Container,
  Text,
  Flex,
  Input,
  Button,
  Divider,
  SimpleGrid,
  Image,
  IconButton,
  Link
} from "@chakra-ui/react"
import { FaFacebookF, FaInstagram } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

const Footer = () => {
  return (
    <Box bg="#0c0c0c" color="white">

      <Container maxW="7xl" py={16}>
        <Flex
          direction={{ base: "column", lg: "row" }}
          align="center"
          justify="space-between"
          gap={6}
        >
          <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="600">
            Get Your Free Quote Right Now
          </Text>

          <Flex w={{ base: "100%", lg: "450px" }}>
            <Input
              placeholder="Enter your email..."
              bg="#1a1a1a"
              border="none"
              rounded="none"
              _focus={{ boxShadow: "none" }}
              h="50px"
            />
            <Button
              bg="#ff7a00"
              color="white"
              rounded="none"
              px={8}
              h="50px"
              _hover={{ bg: "#e96d00" }}
            >
              GET FREE QUOTE
            </Button>
          </Flex>
        </Flex>

        <Divider my={14} borderColor="whiteAlpha.300" />

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box>
            <Text fontSize="xl" fontWeight="600">
              London
            </Text>
            <Text mt={2} color="gray.400">
              1102 Stuart St. Pittsburgh
            </Text>
          </Box>

          <Box borderLeft={{ md: "1px solid #2a2a2a" }} pl={{ md: 10 }}>
            <Text fontSize="xl" fontWeight="600">
              New York
            </Text>
            <Text mt={2} color="gray.400">
              #5 King St. Free Highway NY
            </Text>
          </Box>

          <Box borderLeft={{ md: "1px solid #2a2a2a" }} pl={{ md: 10 }}>
            <Text fontSize="xl" fontWeight="600">
              Amsterdam
            </Text>
            <Text mt={2} color="gray.400">
              1523 Stuart St. Some Ave.
            </Text>
          </Box>
        </SimpleGrid>
      </Container>

      <Divider borderColor="whiteAlpha.200" />

      <Container maxW="7xl" py={12}>
        <Flex
          direction={{ base: "column", lg: "row" }}
          align="center"
          justify="space-between"
          gap={8}
        >
          <Box>
            <Box
              
            >
              <Image src='/logo.png'/>
            </Box>
  
          </Box>

          <Flex gap={8} fontSize="sm" fontWeight="500">
            <Link href="/"  cursor="pointer">HOME</Link>
            <Link href="/about" cursor="pointer">ABOUT</Link>
            <Link href="/service" cursor="pointer">SERVICES</Link>
            <Link href="/project" cursor="pointer">PROJECTS</Link>
            <Link href="/contact"  cursor="pointer">CONTACT</Link>
          </Flex>

          <Flex gap={4}>
            <IconButton
              aria-label="facebook"
              icon={<FaFacebookF />}
              variant="outline"
              borderColor="#ff7a00"
              color="#ff7a00"
              rounded="none"
              _hover={{ bg: "#ff7a00", color: "white" }}
            />
            <IconButton
              aria-label="twitter"
              icon={<FaXTwitter />}
              variant="outline"
              borderColor="#ff7a00"
              color="#ff7a00"
              rounded="none"
              _hover={{ bg: "#ff7a00", color: "white" }}
            />
            <IconButton
              aria-label="instagram"
              icon={<FaInstagram />}
              variant="outline"
              borderColor="#ff7a00"
              color="#ff7a00"
              rounded="none"
              _hover={{ bg: "#ff7a00", color: "white" }}
            />
          </Flex>
        </Flex>
      </Container>

      <Box bg="#111111" py={6}>
        <Container
          maxW="7xl"
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          gap={4}
          fontSize="sm"
          color="gray.400"
        >
          <Text>© 2026 Xtra Theme. All rights reserved.</Text>

          <Flex gap={6}>
            <Text cursor="pointer">Terms & Conditions</Text>
            <Text cursor="pointer">Privacy Policy</Text>
          </Flex>
        </Container>
      </Box>
    </Box>
  )
}

export default Footer
