import { Box, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react';

interface CounterProps {
    target: number;
    suffix: string;
}

const Counter = ({ target, suffix }: CounterProps) => {
    const [count, setCount] = useState<number>(0)

    useEffect(() => {
        if (count >= target) return;

        const timer = setInterval(() => {
            setCount((prev) => {
                if (prev < target) {
                    return prev + 1;
                }
                clearInterval(timer);
                return prev;
            });
        }, 10);

        return () => clearInterval(timer);
    }, [target, count]);

    return (
        <Box
            bg={"orange.600"}
            p={{ base: 4, lg: 6 }}
        >
            <Text
                fontWeight="bold"
                fontSize={{base:"2xl", lg:32}}
            >
                {count}{suffix}
            </Text>
        </Box>
    )
}

export default Counter;
