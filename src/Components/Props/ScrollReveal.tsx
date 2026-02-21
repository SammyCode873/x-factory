import type { ReactNode } from 'react';
import type { BoxProps } from '@chakra-ui/react';
import { chakra, shouldForwardProp } from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';


type Merge<P, T> = Omit<P, keyof T> & T;
type MotionBoxProps = Merge<BoxProps, HTMLMotionProps<'div'>>;

const MotionBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
}) as React.FC<MotionBoxProps>;

interface ScrollRevealProps {
    children: ReactNode;
    delay?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, delay = 0 }) => {
    return (
        <MotionBox
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration: 0.8,
                delay: delay,
                ease: [0.16, 1, 0.3, 1]
            }}
            width="full"
        >
            {children}
        </MotionBox>
    );
};

export default ScrollReveal;
