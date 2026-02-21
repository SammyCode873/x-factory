import { Box, Text, Flex, Button, Image, useBreakpointValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const MotionBox = motion(Box);

const LatestFeatures = () => {
  const projects = [
    { title: "CNC Machinery", type: "Industrial", img: "/pr6.jpg" },
    { title: "Machinery and Gear", type: "Commercial", img: "/pr2.jpg" },
    { title: "Factory is Safe & Secure", type: "Factory", img: "/pr1.jpg" },
    { title: "Petrochemical Industry", type: "Industrial", img: "/pr8.jpg" },
    { title: "Welding & Laser Cut", type: "Commercial", img: "/pr2.jpg" },
    { title: "Aircraft Jet Turbine", type: "Factory", img: "/img6.jpg" }
  ];

  const cardsToShow = useBreakpointValue({ base: 1, md: 2, lg: 4 });

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <Box px={6} overflow="hidden">
      <Flex justifyContent="space-between" mb={6}>
        <Box>
          <Text fontSize={16} color="#ff7700">Latest Project</Text>
          <Text fontSize={40} fontWeight={700}>Featured Project</Text>
        </Box>
        <Button bg="#ff7700" color="white" rounded={0} _hover={{ bg: "#000" }}>
          See Project
        </Button>
      </Flex>

      <Flex gap={4} position="relative">
        <Flex
          w="100%"
          overflow="hidden"
        >
          <Flex
            as={motion.div}
            animate={{ x: `-${(currentIndex * 100) / cardsToShow}%` }}
            gap={4}
            width={`${(projects.length * 100) / cardsToShow}%`}
          >
            {projects.map((project, idx) => (
              <MotionBox
                key={idx}
                flex={`0 0 ${100 / cardsToShow}%`}
                borderRadius="md"
                overflow="hidden"
                bg="black"
                shadow="md"
                cursor="pointer"
              >
                {project.img && (
                  <MotionBox
                    overflow="hidden"
                    height="300px"
                  >
                    <MotionBox
                      as={Image}
                      src={project.img}
                      alt={project.title}
                      w="100%"
                      h="100%"
                      objectFit="cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </MotionBox>
                )}
                <Box
                  p={4}
                >
                  <Text
                    fontWeight={700}
                    color={"white"}
                    fontSize={20}
                  >
                    {project.title}
                  </Text>
                  <Text
                    fontSize={14}
                    color="#ff7700"
                    fontWeight={600}
                  >
                    {project.type}
                  </Text>
                </Box>
              </MotionBox>
            ))}
          </Flex>
        </Flex>
      </Flex>

      <Flex
        justifyContent={"center"}
        gap={7}
        mt={10}
      >
        <Button
          h={2}
          w={10}
          onClick={next}
          rounded={0}
          bg={"gray.400"}
        ></Button>

        <Button
          h={2}
          w={10}
          rounded={0}
          onClick={prev}
          bg={"gray.400"}
        ></Button>
      </Flex>
    </Box>
  );
};

export default LatestFeatures;
