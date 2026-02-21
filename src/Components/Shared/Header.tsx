import {
    Flex, Link as ChakraLink, Image, Box, Button, IconButton, Drawer,
    DrawerBody, DrawerHeader, DrawerContent, DrawerCloseButton,
    useDisclosure, DrawerOverlay, VStack
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import { HamburgerIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Active Link Style Logic
    const activeStyle = ({ isActive }) => ({
        color: "white",
        fontWeight: 600,
        textDecoration: "none",
        borderBottom: isActive ? "2px solid #ff7700" : "2px solid transparent",
        paddingBottom: "4px",
        transition: "all 0.3s ease"
    });

    useEffect(() => {
        const controlHeader = () => {
            if (window.scrollY > lastScrollY && window.scrollY > 100) {
                setShow(false);
            } else {
                setShow(true);
            }
            setLastScrollY(window.scrollY);
        };
        window.addEventListener("scroll", controlHeader);
        return () => window.removeEventListener("scroll", controlHeader);
    }, [lastScrollY]);

    const navItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <>
            <Flex
                position="fixed"
                top="0" left="0" right="0"
                transform={show ? "translateY(0)" : "translateY(-100%)"}
                transition="transform 0.35s ease"
                w="full"
                zIndex={100000}
                bg="#1a1919"
                justifyContent="space-between"
                align="center"
                px={{ base: 4, md: 10 }}
                h={{ base: "70px", xl: "80px" }}
                boxShadow="xl"
            >
                <Flex alignItems="center" gap={10}>
                    <NavLink to="/">
                        <Image src="/logo.png" h="40px" objectFit="contain" />
                    </NavLink>

                    {/* Desktop Nav */}
                    <Flex gap={8} align="center" display={{ base: "none", lg: "flex" }}>
                        {navItems.map((item) => (
                            <NavLink key={item.path} to={item.path} style={activeStyle}>
                                {item.name}
                            </NavLink>
                        ))}
                    </Flex>
                </Flex>

                <Flex alignItems="center" gap={6} display={{ base: "none", lg: "flex" }} h="full">
                    <Button
                        h="full"
                        rounded={0}
                        bg="orange.500"
                        color="white"
                        px={8}
                        _hover={{ color: "black", bg: "white" }}
                    >
                        Get Free Quote
                    </Button>

                    <Flex color="white" gap={4} fontSize="lg">
                        <ChakraLink href="#"><FaFacebook /></ChakraLink>
                        <ChakraLink href="#"><FaTwitter /></ChakraLink>
                        <ChakraLink href="#"><FaInstagram /></ChakraLink>
                    </Flex>
                </Flex>

                {/* Mobile Trigger */}
                <IconButton
                    display={{ base: "flex", lg: "none" }}
                    aria-label="menu"
                    color="white"
                    bg="transparent"
                    fontSize="24px"
                    onClick={onOpen}
                    icon={<HamburgerIcon />}
                    _hover={{ bg: "whiteAlpha.200" }}
                />

                {/* Mobile Drawer */}
                <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                    <DrawerOverlay />
                    <DrawerContent bg="#1a1919" color="white">
                        <DrawerCloseButton color="white" />
                        <DrawerHeader borderBottomWidth="1px" borderColor="whiteAlpha.300">
                            Navigation
                        </DrawerHeader>
                        <DrawerBody pt={10}>
                            <VStack spacing={8} align="center">
                                {navItems.map((item) => (
                                    <NavLink
                                        key={item.path}
                                        to={item.path}
                                        onClick={onClose}
                                        style={activeStyle}
                                    >
                                        <Box fontSize="xl">{item.name}</Box>
                                    </NavLink>
                                ))}
                            </VStack>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Flex>

            <Box h={{ base: "70px", xl: "80px" }} />
        </>
    );
}

export default Header;
