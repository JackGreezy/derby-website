'use client';

import { motion } from 'framer-motion';

const gorillaVariants = {
    beat: {
        scale: [1, 1.2, 1],
        rotate: [0, -5, 5, -5, 0],
        transition: {
            duration: 0.6,
            repeat: 2,
            ease: "easeInOut"
        }
    }
};

export default function GorillaLoader() {
    return (
        <motion.div
            className="fixed inset-0 flex items-center justify-center bg-white z-50"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 2, duration: 0.5 }}
            onAnimationComplete={() => {
                document.body.style.overflow = 'auto';
            }}
        >
            <motion.div
                initial="initial"
                animate="beat"
                variants={gorillaVariants}
                className="text-8xl"
            >
                🦍
            </motion.div>
        </motion.div>
    );
} 