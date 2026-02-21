import { useState, useEffect } from "react";
import {
    Box,
    SimpleGrid,
    Text,
    VStack,
    Heading,
    Container,
    Avatar,
    IconButton,
} from "@chakra-ui/react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const IndustryPage = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [currentIndex, setCurrentIndex] = useState(0);

    const stats = [
        { label: "Years of Experience", value: 23, suffix: "+" },
        { label: "Expert Engineers", value: 150, suffix: "+" },
        { label: "Branches in World", value: 96, suffix: "" },
        { label: "Projects Done", value: 3, suffix: "k" },
    ];

    const testimonials = [
        {
            name: "John Carter",
            role: "Businessman",
            content: "A factory, manufacturing plant or a production plant is an industrial site, usually a complex consisting of several buildings filled with machinery.",
            avatar: "https://bit.ly/dan-abramov"
        },
        {
            name: "Sarah Jenkins",
            role: "CEO, Tech Corp",
            content: "The efficiency and quality of production here are unmatched. Their team is professional and the delivery is always on time.",
            avatar: "https://bit.ly"
        }
    ];

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, []);

    const { name, role, content, avatar } = testimonials[currentIndex];

    return (
        <Box bg="white">
            <Box
                ref={ref}
                bgImage="url('/bg1.jpeg')"
                bgPosition="center"
                bgRepeat="no-repeat"
                bgSize="cover"
                color="white"
                pt={{ base: 16, md: 20 }}
                pb={{ base: 28, md: 40 }}
                position="relative"
                _before={{
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    bg: "blackAlpha.700",
                    zIndex: 1,
                }}
            >
                <Container maxW="container.xl" position="relative" zIndex={2}>
                    <VStack spacing={2} mb={12}>
                        <Text color="#ff7700" textTransform="uppercase" fontSize="sm">
                            Our Results
                        </Text>
                        <Heading as="h2" size={{ base: "lg", md: "2xl" }} textAlign="center">
                            What We Did?
                        </Heading>
                    </VStack>

                    <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={{ base: 8, md: 10 }} color={"#ff7700"}>
                        {stats.map((stat, index) => (
                            <VStack key={index} spacing={2}>
                                <Text fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold" color="orange.600">
                                    {inView ? <CountUp start={0} end={stat.value} duration={2.5} suffix={stat.suffix} /> : `0${stat.suffix}`}
                                </Text>
                                <Text fontSize="md" color={"white"} textAlign="center">
                                    {stat.label}
                                </Text>
                            </VStack>
                        ))}
                    </SimpleGrid>
                </Container>
            </Box>

            <Container
                maxW="container.lg"
                mt={{ base: -16, md: -24 }}
                position="relative"
                zIndex={3}
                px={{ base: 4, md: 0 }}
            >
                <Box bg="white" p={{ base: 6, md: 12 }} shadow="2xl" borderRadius="md" textAlign="center">
                    <Text color="orange.400" fontWeight="bold" textTransform="uppercase" fontSize="xs" mb={2}>
                        Testimonials
                    </Text>

                    <Heading as="h3" size="lg" mb={10}>
                        What Clients Say?
                    </Heading>

                    <Box
                        bg="black"
                        color="white"
                        p={{ base: 8, md: 16 }}
                        position="relative"
                        borderRadius="md"
                        minH={{ base: "320px", md: "300px" }}
                        display="flex"
                        alignItems="center"
                    >
                        <IconButton
                            aria-label="Previous"
                            icon={<ChevronLeftIcon />}
                            position="absolute"
                            left={{ base: 1, md: 4 }}
                            top="50%"
                            transform="translateY(-50%)"
                            colorScheme="orange"
                            size="sm"
                            rounded={0}
                            onClick={prevSlide}
                            zIndex={5}
                        />

                        <IconButton
                            aria-label="Next"
                            icon={<ChevronRightIcon />}
                            position="absolute"
                            right={{ base: 1, md: 4 }}
                            top="50%"
                            transform="translateY(-50%)"
                            colorScheme="orange"
                            size="sm"
                            rounded={0}
                            onClick={nextSlide}
                            zIndex={5}
                        />

                        <VStack spacing={6} pt={6} w="full">
                            <Avatar
                                size="xl"
                                src={avatar}
                                border="4px solid white"
                                position="absolute"
                                top="-30px"
                                left="50%"
                                transform="translateX(-50%)"
                            />

                            <Text
                                fontSize={{ base: "sm", md: "lg" }}
                                fontStyle="italic"
                                lineHeight="tall"
                                transition="all 0.3s"
                            >
                                "{content}"
                            </Text>

                            <Box>
                                <Text fontWeight="bold" fontSize="lg">
                                    {name}
                                </Text>
                                <Text fontSize="sm" color="gray.400">
                                    {role}
                                </Text>
                            </Box>
                        </VStack>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default IndustryPage;
