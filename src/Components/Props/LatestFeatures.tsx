import { Box, Text, Flex, Button, Image, useBreakpointValue } from '@chakra-ui/react';
import { useState } from 'react';
import { chakra, shouldForwardProp } from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';

const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop: string) =>
    isValidMotionProp(prop) || (prop !== 'transition' && shouldForwardProp(prop)),
});

interface Project {
  title: string;
  type: string;
  img: string;
}

const LatestFeatures = () => {
  const projects: Project[] = [
    { title: "CNC Machinery", type: "Industrial", img: "/pr6.jpg" },
    { title: "Machinery and Gear", type: "Commercial", img: "/pr2.jpg" },
    { title: "Factory is Safe & Secure", type: "Factory", img: "/pr1.jpg" },
    { title: "Petrochemical Industry", type: "Industrial", img: "/pr8.jpg" },
    { title: "Welding & Laser Cut", type: "Commercial", img: "/pr2.jpg" },
    { title: "Aircraft Jet Turbine", type: "Factory", img: "/img6.jpg" }
  ];

  const cardsToShow = useBreakpointValue({ base: 1, md: 2, lg: 4 }) ?? 1;

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
        <Flex w="100%" overflow="hidden">
          <MotionBox
            display="flex"
            animate={{ x: `-${(currentIndex * 100) / cardsToShow}%` }}
            {...({ transition: { type: "spring", stiffness: 300, damping: 30 } } as object)}
            gap={4}
            width={`${(projects.length * 100) / cardsToShow}%`}
          >
            {projects.map((project, idx) => (
              <MotionBox
                key={idx}
                flex={`0 0 calc(${100 / cardsToShow}% - 1rem)`}
                borderRadius="md"
                overflow="hidden"
                bg="black"
                shadow="md"
                cursor="pointer"
              >
                <Box overflow="hidden" height="300px">
                  <MotionBox
                    as={Image}
                    src={project.img}
                    alt={project.title}
                    w="100%"
                    h="100%"
                    objectFit="cover"
                    whileHover={{ scale: 1.1 }}
                    {...({ transition: { duration: 0.6 } } as object)}
                  />
                </Box>
                <Box p={4}>
                  <Text fontWeight={700} color="white" fontSize={20}>
                    {project.title}
                  </Text>
                  <Text fontSize={14} color="#ff7700" fontWeight={600}>
                    {project.type}
                  </Text>
                </Box>
              </MotionBox>
            ))}
          </MotionBox>
        </Flex>
      </Flex>

      <Flex justifyContent="center" gap={7} mt={10}>
        <Button h={2} w={10} onClick={prev} rounded={0} bg="gray.400" />
        <Button h={2} w={10} onClick={next} rounded={0} bg="gray.400" />
      </Flex>
    </Box>
  );
};

export default LatestFeatures;
