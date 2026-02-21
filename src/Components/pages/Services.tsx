import type { FC } from 'react';
import {
    Box,
    Container,
    Heading,
    Text,
    SimpleGrid,
    VStack,
    Icon,
    Center,
} from "@chakra-ui/react";
import type { IconType } from "react-icons";
import {
    MdBusiness,
    MdFactory,
    MdAgriculture,
    MdSettingsSuggest,
    MdLocalShipping,
    MdOilBarrel
} from "react-icons/md";
import ScrollReveal from '../Props/ScrollReveal';
import Header from '../Shared/Header';

interface ServiceItem {
    title: string;
    desc: string;
    icon: IconType;
}

const ServiceGrid: FC = () => {
    const services: ServiceItem[] = [
        { title: "INDUSTRIAL SERVICE", icon: MdBusiness, desc: "Quality Only Happens When you Care Enough To Do Your Best" },
        { title: "POWER PLANTS", icon: MdFactory, desc: "Quality Only Happens When you Care Enough To Do Your Best" },
        { title: "CONSTRUCTION", icon: MdAgriculture, desc: "Quality Only Happens When you Care Enough To Do Your Best" },
        { title: "MACHINERY & CNC", icon: MdSettingsSuggest, desc: "Quality Only Happens When you Care Enough To Do Your Best" },
        { title: "EQUIPMENT RELOCATION", icon: MdLocalShipping, desc: "Quality Only Happens When you Care Enough To Do Your Best" },
        { title: "OIL & GAS IND.", icon: MdOilBarrel, desc: "Quality Only Happens When you Care Enough To Do Your Best" },
    ];

    return (
        <>
        <Header />
            <Box bg="white" py={{ base: 12, md: 24 }}>
                <Box
                    textAlign={"center"}
                >
                    <Text fontWeight="light" color={"#ff7700"}>Services</Text>
                    <Text
                        fontWeight={600}
                        fontSize={44}
                    >What We Do?</Text>
                </Box>
                <Container maxW="container.xl" mt={20}>
                    <SimpleGrid
                        columns={{ base: 1, sm: 2, lg: 3 }}
                        spacingX={10}
                        spacingY={{ base: 16, md: 24 }}
                    >
                        {services.map((service, index) => (
                            <ScrollReveal key={index} delay={index * 0.1}>
                                <VStack spacing={5} textAlign="center">
                                    <Center
                                        bg="orange.500"
                                        w="70px"
                                        h="70px"
                                        color="white"
                                        transition="transform 0.3s ease"
                                        _hover={{ transform: 'scale(1.1)' }}
                                    >
                                        <Icon as={service.icon} w={10} h={10} />
                                    </Center>

                                    <VStack spacing={2}>
                                        <Heading
                                            as="h3"
                                            fontSize="lg"
                                            fontWeight="bold"
                                            letterSpacing="wider"
                                            textTransform="uppercase"
                                        >
                                            {service.title}
                                        </Heading>

                                        <Text
                                            fontSize="sm"
                                            color="gray.500"
                                            maxW="250px"
                                            lineHeight="tall"
                                        >
                                            {service.desc}
                                        </Text>
                                    </VStack>
                                </VStack>
                            </ScrollReveal>
                        ))}
                    </SimpleGrid>
                </Container>
            </Box>
        </>
    );
};

export default ServiceGrid;
