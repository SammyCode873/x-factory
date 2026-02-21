import { Box, Text, Image, Button, Flex, useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
interface TestimonialType {
    img: string;
    text: string;
    name: string;
    occ: string;
}

const MotionBox = motion(Box);

const Testimonial: React.FC = () => {
    const testimonials: TestimonialType[] = [
        {
            img: "/Ellipse-4-100x100.png",
            text: "A factory, manufacturing plant or a production plant is an industrial site, usually a complex consisting of several buildings filled with machinery, where workers manufacture items or operate machines which process each item into another.",
            name: "John Carter",
            occ: "Businessman",
        },
        {
            img: "/Ellipse-4-100x100.png",
            text: "A factory, manufacturing plant or a production plant is an industrial site, usually a complex consisting of several buildings filled with machinery, where workers manufacture items or operate machines which process each item into another.",
            name: "Jane Doe",
            occ: "Entrepreneur",
        },
        {
            img: "/Ellipse-4-100x100.png",
            text: "A factory, manufacturing plant or a production plant is an industrial site, usually a complex consisting of several buildings filled with machinery, where workers manufacture items or operate machines which process each item into another.",
            name: "Michael Smith",
            occ: "Engineer",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [direction, setDirection] = useState<number>(0);

    const next = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const visibleTestimonial = testimonials[currentIndex];

    const cardWidth = useBreakpointValue({ base: "90%", md: "70%", lg: "80%" }) || "90%";

    const variants = {
        enter: (dir: number) => ({
            x: dir > 0 ? "100%" : "-100%",
            opacity: 0,
            position: "absolute" as const,
            width: "100%",
        }),
        center: {
            x: 0,
            opacity: 1,
            position: "relative" as const,
        },
        exit: (dir: number) => ({
            x: dir > 0 ? "-100%" : "100%",
            opacity: 0,
            position: "absolute" as const,
            width: "100%",
        }),
    };


    return (
        <Box px={6} py={8} position="relative" overflow="hidden">
            <Text textTransform="uppercase" color="#ff7700" fontWeight={400} textAlign="center">
                Testimonials
            </Text>

            <Text fontSize={40} fontWeight={700} textAlign="center" mb={8}>
                What Clients Say?
            </Text>

            <Flex justify="center" align="center" position="relative">
                <Button
                    onClick={prev}
                    position="absolute"
                    left={0}
                    top="50%"
                    _hover={{ backgroundColor:"black" }}
                    bg={"#ff7700"}
                    color={"white"}
                    p={3}
                    transform="translateY(-50%)"
                    zIndex={1}
                >
                    <FaArrowLeft />
                </Button>


                <Box w={cardWidth}>
                    <AnimatePresence custom={direction} initial={false}>
                        <MotionBox
                            key={currentIndex}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.5 }}
                            border="1px solid #eee"
                            borderRadius="md"
                            bg="black"
                            overflow="hidden"
                            p={6}
                            textAlign="center"
                            cursor="pointer"
                            _hover={{ transform: "scale(1.02)", transition: "0.3s" }}
                        >
                            <Image
                                src={visibleTestimonial.img}
                                alt={visibleTestimonial.name}
                                w="100px"
                                h="100px"
                                borderRadius="full"
                                mx="auto"
                                mb={4}
                            />
                            <Text fontSize={16} mb={4} color="white">
                                {visibleTestimonial.text}
                            </Text>
                            <Text fontWeight={700}>{visibleTestimonial.name}</Text>
                            <Text fontSize={14} color="gray.500">
                                {visibleTestimonial.occ}
                            </Text>
                        </MotionBox>
                    </AnimatePresence>
                </Box>

                <Button
                    onClick={next}
                    position="absolute"
                    right={0}
                    top="50%"
                    transform="translateY(-50%)"
                    zIndex={1}
                    _hover={{ backgroundColor:"black" }}
                    p={3}
                    bg={"#ff7700"}
                    color={"white"}
                >
                    <FaArrowRight />
                </Button>
            </Flex>
        </Box>
    );
};

export default Testimonial;
