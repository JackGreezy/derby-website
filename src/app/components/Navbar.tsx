'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Research', path: '/research' },
    { name: 'Publications', path: '/publications' },
    { name: 'Media', path: '/media' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="flex items-center">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <Image
                                src="/RD-logo.png"
                                alt="RD Logo"
                                width={80}
                                height={80}
                                priority
                                className="py-2"
                            />
                        </motion.div>
                    </Link>

                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                className="relative group"
                            >
                                <span className={`text-gray-800 hover:text-ut-orange transition-colors ${pathname === item.path ? 'text-ut-orange' : ''
                                    }`}>
                                    {item.name}
                                </span>
                                {pathname === item.path && (
                                    <motion.div
                                        layoutId="underline"
                                        className="absolute left-0 right-0 h-0.5 bg-ut-orange bottom-[-4px]"
                                    />
                                )}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
} 