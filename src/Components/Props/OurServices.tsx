import { Box, Text, SimpleGrid, Image, Flex } from "@chakra-ui/react";

function OurServices() {
  const services = [
    {
      img: "/icon1.png",
      imgHover: "/icon1h.png",
      title: "Building Materials",
      description:
        "A factory, manufacturing plant or a production plant is an industrial site.",
    },
    {
      img: "/icon2.png",
      imgHover: "/icon2h.png",
      title: "Top Specialist",
      description:
        "A factory, manufacturing plant or a production plant is an industrial site.",
    },
    {
      img: "/icon3.png",
      imgHover: "/icon3h.png",
      title: "Accurate Planning Materials",
      description:
        "A factory, manufacturing plant or a production plant is an industrial site.",
    },
    {
      img: "/icon4.png",
      imgHover: "/icon4h.png",
      title: "Building Materials",
      description:
        "A factory, manufacturing plant or a production plant is an industrial site.",
    },
  ];

  return (
    <Box
      minH={"100vh"}
    >
    <Box
      bgImage={"/bg1.jpeg"}
      textAlign={"center"}
      pt={20}
      mt={36}

    >
      <Text
        color={"#ff7700"}
        fontSize={20}
      >
        Our Services
      </Text>

      <Text
        fontSize={40}
        fontWeight={700}
        color={"white"}
      >
        What We Offer & <br /> What We Do.
      </Text>
      <Text
        color={"white"}
      >
        A factory, manufacturing plant or  production plant is an industrial site
      </Text>
      <Box
        px={{ base: 6, lg: 20 }}
        py={20}
      >
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
          {services.map((item) => (
            <Flex
              key={item.title}
              direction="column"
              align="center"
              textAlign="center"
              bg="white"
              p={8}
              borderRadius="xl"
              boxShadow="lg"
              role="group"
              cursor="pointer"
              transition="all 0.3s ease"
              _hover={{
                bg: "#ff7700",
                transform: "translateY(-8px)",
              }}
            >
              <Box position="relative" boxSize="60px" mb={4}>
                <Image
                  src={item.img}
                  position="absolute"
                  top="0"
                  left="0"
                  boxSize="60px"
                  objectFit="contain"
                  transition="opacity 0.3s ease"
                  _groupHover={{ opacity: 0 }}
                />

                <Image
                  src={item.imgHover}
                  position="absolute"
                  top="0"
                  left="0"
                  boxSize="60px"
                  objectFit="contain"
                  opacity={0}
                  transition="opacity 0.3s ease"
                  _groupHover={{ opacity: 1 }}
                />
              </Box>

              <Text
                fontWeight="600"
                fontSize="lg"
                mb={2}
                transition="color 0.3s ease"
                _groupHover={{ color: "white" }}
              >
                {item.title}
              </Text>

              <Text
                fontSize="sm"
                color="gray.600"
                transition="color 0.3s ease"
                _groupHover={{ color: "whiteAlpha.900" }}
              >
                {item.description}
              </Text>
            </Flex>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
    </Box>
  );
}

export default OurServices;
