'use client';

import { motion } from 'framer-motion';

export default function HoverCard({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow"
        >
            {children}
        </motion.div>
    );
} 