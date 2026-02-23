import Header from '../Shared/Header'
import {
    Box,
    Text,
    Flex,
    Button,
} from '@chakra-ui/react'
import type { Variants } from "framer-motion"
// import { chakra } from "@chakra-ui/react"
import { motion } from 'framer-motion'
import AboutCompany from '../Props/AboutCompany'
import OurServices from '../Props/OurServices'
import LatestFeatures from '../Props/LatestFeatures'
import Testimonial from '../Props/Testimonial'
import LatestNews from '../Props/LatestNews'
import OurHistorySection from '../Props/OurHistory'
import Footer from '../Shared/Footer'


const MotionBox = motion(Box)

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.25,
        },
    },
}

const slideUp: Variants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
        },
    },
}

const slideLeft: Variants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
        },
    },
}

const slideRight: Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
        },
    },
}

const fadeScale: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    },
}
const Home = () => {
    return (
        <Box bg="white">
            <Header />

            <Box
                position="relative"
                bgImage='url("/slide1.jpeg")'
                bgSize="cover"
                minH={{ base: "500px", md: "70vh", lg: "90vh" }}
                bgPosition="center"
                w="100%"
                display="flex"
                alignItems="center"
            >
                <Box
                    position="absolute"
                    inset={0}
                    bg="blackAlpha.700"
                />

                <MotionBox
                    position="relative"
                    zIndex={2}
                    px={{ base: 6, md: 16 }}
                    maxW="800px"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <Text color="white" opacity={0.9}>
                        It's who we are. It's what we do
                    </Text>

                    <Text
                        color="white"
                        fontSize={{ base: "3xl", md: "6xl" }}
                        fontWeight="bold"
                        mt={4}
                    >
                        We build Trust,
                        <br />
                        We're Xtra Factory
                    </Text>

                    <Flex gap={4} mt={8}>
                        <Button rounded="none" bg="#4c00ff" color="white">
                            Contact Us
                        </Button>
                        <Button
                            bg="transparent"
                            rounded="none"
                            border="2px solid white"
                            color="white"
                        >
                            See Projects
                        </Button>
                    </Flex>
                </MotionBox>
            </Box>

            <MotionBox
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >

                <MotionBox variants={slideUp}>
                    <AboutCompany />
                </MotionBox>

                <MotionBox variants={slideLeft}>
                    <OurServices />
                </MotionBox>

                <MotionBox variants={slideRight} mt={32}>
                    <LatestFeatures />
                </MotionBox>

                <MotionBox variants={fadeScale} mt={32}>
                    <Testimonial />
                </MotionBox>

                <MotionBox variants={slideUp} mt={32}>
                    <OurHistorySection />
                </MotionBox>

                <MotionBox variants={slideLeft} mt={32}>
                    <LatestNews />
                </MotionBox>

                <MotionBox variants={fadeScale} mt={32}>
                    <Footer />
                </MotionBox>

            </MotionBox>
        </Box>
    )
}

export default Home