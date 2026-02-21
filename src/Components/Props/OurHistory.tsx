import {
    Box,
    Flex,
    Text,
    IconButton,
    Heading,
    Container,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { useState } from "react";

const MotionBox = motion(Box);

const slides = [
    {
        title: "Founding of Xtra Factory",
        description:
            "A factory, manufacturing plant or a production plant is an industrial site, usually a complex consisting of several buildings filled with machinery, where workers manufacture items or operate machines which process each item into another.",
    },
    {
        title: "Growth & Expansion",
        description:
            "Over the years, Xtra Factory expanded its operations globally, building advanced facilities and improving manufacturing processes through innovation.",
    },
    {
        title: "Modern Innovation",
        description:
            "Today, Xtra Factory integrates automation and smart technologies to enhance production efficiency and sustainability.",
    },
];

function OurHistorySection() {
    const [index, setIndex] = useState(0);

    const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <Box bg="#0f0f0f" color="white" py={{ base: 12, md: 24 }} overflow="hidden">
            <Container maxW="1200px" px={{ base: 6, md: 10 }}>
                <Flex
                    direction={{ base: "column", lg: "row" }}
                    align={{ base: "flex-start", lg: "center" }}
                    gap={{ base: 16, lg: 20 }}
                >
                    {/* Left Side: Image & Stats */}
                    <Box position="relative" w="full" flex="1">
                        {/* Decorative Orange Box - Hidden or shrunken on small mobile */}
                        <Box
                            bg="orange.500"
                            w={{ base: "60px", md: "120px" }}
                            h={{ base: "60px", md: "120px" }}
                            position="absolute"
                            top={{ base: "-10px", md: "-20px" }}
                            left={{ base: "-10px", md: "-20px" }}
                            zIndex={0}
                        />

                        <Box
                            bgImage='url("/pr3.jpg")'
                            bgSize="cover"
                            bgPosition="center"
                            h={{ base: "250px", sm: "350px", md: "450px" }}
                            w="full"
                            position="relative"
                            zIndex={1}
                            borderRadius="sm"
                        />

                        {/* Projects Badge - Responsive sizing */}
                        <Box
                            position="absolute"
                            bottom={{ base: "-20px", md: "-30px" }}
                            right={{ base: "10px", md: "40px" }}
                            bg="orange.500"
                            px={{ base: 4, md: 8 }}
                            py={{ base: 3, md: 6 }}
                            textAlign="center"
                            zIndex={2}
                            shadow="2xl"
                        >
                            <Text fontSize={{ base: "xl", md: "3xl" }} fontWeight="bold" lineHeight="1">
                                2434
                            </Text>
                            <Text fontSize={{ base: "xs", md: "sm" }} textTransform="uppercase" fontWeight="600">
                                Projects Done
                            </Text>
                        </Box>
                    </Box>

                    {/* Right Side: Content */}
                    <Box flex="1.2" w="full">
                        <Text
                            color="orange.400"
                            mb={2}
                            fontWeight="bold"
                            fontSize="sm"
                            letterSpacing="widest"
                            textAlign={{ base: "center", lg: "left" }}
                        >
                            OUR HISTORY
                        </Text>

                        {/* Content Wrapper with minH to prevent layout shift */}
                        <Box position="relative" minH={{ base: "220px", md: "250px" }}>
                            <AnimatePresence mode="wait">
                                <MotionBox
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <Heading
                                        as="h2"
                                        fontSize={{ base: "2xl", md: "3xl", xl: "4xl" }}
                                        fontWeight="bold"
                                        mb={6}
                                        textAlign={{ base: "center", lg: "left" }}
                                    >
                                        {slides[index].title}
                                    </Heading>

                                    <Text
                                        color="gray.400"
                                        lineHeight="1.8"
                                        fontSize={{ base: "md", md: "lg" }}
                                        textAlign={{ base: "center", lg: "left" }}
                                    >
                                        {slides[index].description}
                                    </Text>
                                </MotionBox>
                            </AnimatePresence>
                        </Box>

                        {/* Navigation Buttons */}
                        <Flex
                            mt={{ base: 8, md: 10 }}
                            gap={4}
                            justify={{ base: "center", lg: "flex-start" }}
                        >
                            <IconButton
                                aria-label="Previous"
                                icon={<ArrowBackIcon />}
                                onClick={prevSlide}
                                variant="outline"
                                borderColor="whiteAlpha.400"
                                color="white"
                                rounded="full"
                                _hover={{ bg: "orange.500", borderColor: "orange.500" }}
                                size="lg"
                            />

                            <IconButton
                                aria-label="Next"
                                icon={<ArrowForwardIcon />}
                                onClick={nextSlide}
                                variant="outline"
                                color="white"
                                borderColor="whiteAlpha.400"
                                rounded="full"
                                _hover={{ bg: "orange.500", borderColor: "orange.500" }}
                                size="lg"
                            />
                        </Flex>
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
}

export default OurHistorySection;
