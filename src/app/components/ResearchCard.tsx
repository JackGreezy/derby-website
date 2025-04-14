'use client';

import { motion } from 'framer-motion';
import HoverCard from './HoverCard';

export default function ResearchCard({
    title,
    description,
    link
}: {
    title: string;
    description: string;
    link: string;
}) {
    return (
        <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="block"
        >
            <HoverCard>
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-gray-600">{description}</p>
                <motion.span
                    className="text-ut-orange mt-4 inline-block"
                    whileHover={{ x: 5 }}
                >
                    Learn more →
                </motion.span>
            </HoverCard>
        </motion.a>
    );
} 