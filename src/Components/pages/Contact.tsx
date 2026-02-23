import {
    Box,
    Flex,
    Text,
    Heading,
    VStack,
    SimpleGrid,
    Icon,
    Input,
    Textarea,
    Button,
    Container,
    Select,
    Link
} from '@chakra-ui/react';
import {
    MdLocationOn,
    MdPhone,
    MdEmail,
    MdAccessTime
} from 'react-icons/md';
import { FaAngleRight } from 'react-icons/fa6';
import { FaHome } from 'react-icons/fa';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';
const Contact = () => {
    const contactInfo = [
        { icon: MdLocationOn, title: "Our Location", detail: "121 King Street, New York, USA" },
        { icon: MdPhone, title: "Phone Number", detail: "+1 (800) 123 456" },
        { icon: MdEmail, title: "Email Address", detail: "info@inco.industrial" },
        { icon: MdAccessTime, title: "Working Hours", detail: "Mon - Sat: 9:00 - 18:00" },
    ];

    return (
        <Box>
            <Header />
            <Flex

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
                    >Contact Us</Text>
                </Box>
                <Flex
                    gap={3}
                    alignItems={"center"}
                >
                    <Link href='/' _hover={{ color: "orange.400" }}><FaHome /></Link>
                    <FaAngleRight />
                    <Text fontSize="15px" fontWeight={700} letterSpacing="wide">About</Text>
                </Flex>
            </Flex>
            <Box
                bgImage="url('/bg1.jpeg')"
                bgSize="cover" bgPos="center" py={32} textAlign="center" color="white" position="relative"
                _before={{ content: '""', position: 'absolute', inset: 0, bg: 'blackAlpha.600' }}
            >
                <VStack position="relative" zIndex={1} spacing={4}>
                    <Heading as="h1" size="2xl">Contact Us</Heading>
                    <Text fontSize="lg">Get in touch with our expert team for any industrial inquiries.</Text>
                </VStack>
            </Box>

            <Container maxW="container.xl" py={20}>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} mb={20}>
                    {contactInfo.map((item, index) => (
                        <VStack key={index} p={8} boxShadow="xl" borderRadius="md" align="center" textAlign="center" bg="white">
                            <Icon as={item.icon} w={10} h={10} color="orange.500" mb={4} />
                            <Heading size="md" mb={2}>{item.title}</Heading>
                            <Text color="gray.600">{item.detail}</Text>
                        </VStack>
                    ))}
                </SimpleGrid>

                <SimpleGrid columns={{ base: 1, md: 2 }} gap={12}>
                    <Box>
                        <Text
                            color={"#ff7700"}
                            fontWeight="light"
                        >GET IN TOUCH
                        </Text>
                        <Text
                            fontSize={32}
                            fontWeight={600}
                        >CONTACT US</Text>
                        <Text>
                            Factories arose with the introduction of machinery during the Industrial Revolution when the capital and space requirements became too great for cottage industry or workshops
                        </Text>
                    </Box>
                    <VStack flex="1" align="flex-start" spacing={6}>
                        <Heading size="lg">Send Us a Message</Heading>
                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="full">
                            <Input placeholder="Your Full Name" variant="filled" focusBorderColor="orange.500" />
                            <Input placeholder="Your Email" variant="filled" focusBorderColor="orange.500" />
                        </SimpleGrid>
                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="full">
                            <Input placeholder="Subject" variant="filled" focusBorderColor="orange.500" />
                            <Select placeholder='Business Department' _focusVisible={{ outlineColor: "none" }}>
                                <option value="">Personal Department</option>
                                <option value="">Support Department</option>
                                <option value="">Others</option>
                            </Select>
                        </SimpleGrid>
                        <Textarea placeholder="Your Message" variant="filled" focusBorderColor="orange.500" h="150px" />
                        <Button colorScheme="orange" size="lg" w={{ base: 'full', md: 'auto' }} px={10}>
                            Send Message
                        </Button>
                    </VStack>


                </SimpleGrid>
            </Container>
            <Footer />
        </Box>
    );
};

export default Contact;
