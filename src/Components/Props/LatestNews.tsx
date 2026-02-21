import { Box, Flex, Image, Text, SimpleGrid } from "@chakra-ui/react"
import { motion } from "framer-motion"

const MotionBox = motion(Box)

function LatestNews() {
    return (
        <Box px={{ base: 6, md: 12 }} py={16}>
            <Box
                textAlign={"center"}
            >
                <Text
                    color={"#ff7700"}
                    fontSize={20}
                >
                    LATEST NEWS
                </Text>
                <Text
                    fontSize={{ base: 30, lg: 50 }}
                    fontWeight={600}
                    color={"black"}
                >
                    Don't Miss Anything
                </Text>
            </Box>

            <Box>
                <Flex
                    justifyContent={"center"}
                >
                    <SimpleGrid
                        columns={{ base: 1, lg: 3 }}
                        gap={8}
                        color={"white"}
                        mt={20}
                    >
                        <Box
                            bg={"black"}
                        >
                            <MotionBox
                                overflow={"hidden"}
                            >
                                <MotionBox
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <Image src="/pr2.jpg" />
                                </MotionBox>
                            </MotionBox>
                            <Box
                                p={5}
                                fontSize={22}
                                fontWeight={600}
                            >
                                <Text>How to be Ahead of Stock Changes</Text>
                            </Box>
                        </Box>


                        <Box
                            bg={"black"}
                        >
                            <MotionBox
                                overflow={"hidden"}
                            >
                                <MotionBox
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <Image src="/pr1.jpg" />
                                </MotionBox>
                            </MotionBox>
                            <Box
                                p={5}
                                fontSize={22}
                                fontWeight={600}
                            >
                                <Text>Online Reputation and Management</Text>
                            </Box>
                        </Box>
                        <Box
                            bg={"black"}
                        >
                            <MotionBox
                                overflow={"hidden"}
                            >
                                <MotionBox
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <Image src='/pr3.jpg' />
                                </MotionBox>
                            </MotionBox>
                            <Box
                                fontSize={22}
                                fontWeight={600}
                                p={5}
                            >
                                <Text>Tips To Move Your Projects More Forward</Text>
                            </Box>
                        </Box>

                    </SimpleGrid>
                </Flex>
            </Box>


        </Box>
    )
}

export default LatestNews
