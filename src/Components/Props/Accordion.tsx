import {
    Box,
    Flex,
    Image,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Text,
    Container,
} from "@chakra-ui/react";

const IndustrialServiceSection = () => {
    const services = [
        {
            title: "Entire Production Line Installation",
            content:
                "We can assist you in the modernization of your facility, the installation and repair of your equipment, and general and preventive plant maintenance.",
        },
        {
            title: "Small & Large Component Fabrication",
            content: "Details about fabrication services...",
        },
        {
            title: "Hard Facing & Corrosion Resistant Overlay",
            content: "Details about corrosion protection...",
        },
        {
            title: "Pipe Fitting & Complete Piping Systems",
            content: "Details about piping systems...",
        },
    ];

    return (
        <Container maxW="container.xl" py={{ base: 12, md: 20 }}>
            <Flex
                direction={{ base: "column", lg: "row" }}
                align="stretch"
                gap={{ base: 10, md: 14 }}
            >
                    <Box flex="1">
                    <Accordion allowToggle defaultIndex={[0]}>
                        {services.map((service, index) => (
                            <AccordionItem
                                key={index}
                                border="1px solid"
                                borderColor="gray.200"
                                mb={3}
                            >
                                {({ isExpanded }) => (
                                    <>
                                        <AccordionButton
                                            px={5}
                                            py={4}
                                            bg={isExpanded ? "orange.500" : "white"}
                                            color={isExpanded ? "white" : "gray.800"}
                                            _hover={{
                                                bg: isExpanded ? "orange.500" : "gray.100",
                                            }}
                                            transition="background-color 0.15s linear"
                                        >
                                            <Box flex="1" textAlign="left" fontWeight="600">
                                                {service.title}
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>

                                        <AccordionPanel
                                            bg="gray.900"
                                            color="gray.100"
                                            px={5}
                                            py={6}
                                            borderTop="1px solid"
                                            borderColor="gray.700"
                                        >
                                            <Text fontSize="sm" lineHeight="tall">
                                                {service.content}
                                            </Text>
                                        </AccordionPanel>
                                    </>
                                )}
                            </AccordionItem>
                        ))}
                    </Accordion>
                </Box>

                <Box flex="1" position="relative">
                    
                    <Box
                        position="absolute"
                        bottom={{ base: "-12px", md: "-20px" }}
                        right={{ base: "-12px", md: "-20px" }}
                        bg="orange.500"
                        w={{ base: "120px", md: "200px" }}
                        h={{ base: "160px", md: "260px" }}
                        zIndex={0}
                    />

                    <Image
                        src="/pr6.jpg"
                        alt="Industrial Machinery"
                        w="full"
                        objectFit="cover"
                        boxShadow="2xl"
                        position="relative"
                        zIndex={1}
                    />
                </Box>
            </Flex>
        </Container>
    );
};

export default IndustrialServiceSection;