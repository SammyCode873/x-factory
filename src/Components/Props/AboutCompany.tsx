import { Box, Flex, Text, Image, Button, Heading, Container } from '@chakra-ui/react'
import { FaCircleCheck } from 'react-icons/fa6'

function AboutCompany() {
    return (
        <Container maxW="container.xl" px={{ base: 6, md: 10 }}>
            <Flex
                direction={{ base: "column", lg: 'row' }}
                textAlign={{ base: "center", lg: "start" }}
                justifyContent="space-between"
                alignItems="center"
                minH={{ base: "auto", md: "80vh", lg: "100vh" }}
                py={{ base: 16, lg: 10 }}
                gap={{ base: 12, lg: 10 }}
            >
                <Box flex="1" w="full">
                    <Text
                        color="#ff7700"
                        fontWeight={700}
                        fontSize={{ base: "xs", md: "sm" }}
                        letterSpacing="widest"
                        textTransform="uppercase"
                        mb={2}
                    >
                        ABOUT OUR COMPANY
                    </Text>

                    <Heading
                        as="h2"
                        fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                        fontWeight="bold"
                        lineHeight="1.2"
                        mb={6}
                    >
                        We Build Trust, <br /> We're X Factory
                    </Heading>

                    <Text
                        mx={{ base: "auto", lg: "0" }}
                        maxW={{ base: "full", lg: "650px" }}
                        fontSize={{ base: "md", lg: "lg" }}
                        color="gray.600"
                        lineHeight="tall"
                    >
                        A factory, manufacturing plant or a production plant is an industrial site,
                        usually a complex consisting of several buildings filled with machinery,
                        where workers manufacture items or operate machines which process each item into another.
                    </Text>

                    <Flex
                        direction={{ base: "column", sm: "row" }}
                        wrap="wrap"
                        alignItems="center"
                        justifyContent={{ base: "center", lg: "start" }}
                        gap={{ base: 4, md: 8 }}
                        fontWeight={600}
                        fontSize={{ base: "md", lg: "lg" }}
                        mt={8}
                    >
                        {["Best Quality", "Pro Expert", "Fast Delivery"].map((text) => (
                            <Flex key={text} gap={2} alignItems="center">
                                <FaCircleCheck color="#ff7700" size="18px" />
                                <Text whiteSpace="nowrap">{text}</Text>
                            </Flex>
                        ))}
                    </Flex>

                    <Button
                        color="white"
                        bg="#ff7700"
                        rounded="none"
                        size="lg"
                        px={10}
                        py={7}
                        _hover={{ bg: 'orange.600', transform: 'translateY(-2px)' }}
                        _active={{ bg: 'orange.700' }}
                        transition="all 0.2s"
                        mt={10}
                    >
                        About Us
                    </Button>
                </Box>

                <Flex
                    flex="1"
                    justifyContent="center"
                    alignItems="center"
                    w="full"
                    position="relative"
                >
                    <Image
                        src='/img2.png'
                        alt='Industrial Factory Scene'
                        w="full"
                        maxW={{ base: "500px", lg: "600px" }}
                        h={{ base: "auto", md: "400px", lg: "500px" }}
                        objectFit="cover"
                        rounded="lg"
                        shadow="2xl"
                    />
                </Flex>
            </Flex>
        </Container>
    )
}

export default AboutCompany;
