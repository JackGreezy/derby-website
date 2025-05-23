'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/RD-logo.png"
                            alt="RD Logo"
                            width={80}
                            height={80}
                            priority
                            className="py-2"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {[
                            { name: 'Home', path: '/' },
                            { name: 'Research', path: '/research' },
                            { name: 'Publications', path: '/publications' },
                            { name: 'Media', path: '/media' },
                            { name: 'Gallery', path: '/gallery' }
                        ].map((item) => (
                            <Link
                                key={item.name}
                                href={item.path}
                                className={`text-gray-800 hover:text-ut-orange transition-colors ${pathname === item.path ? 'text-ut-orange' : ''}`}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <a
                            href="mailto:rnderbs@utexas.edu"
                            className="text-gray-800 hover:text-ut-orange transition-colors"
                        >
                            Contact
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2"
                    >
                        {isMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden py-4">
                        {[
                            { name: 'Home', path: '/' },
                            { name: 'Research', path: '/research' },
                            { name: 'Publications', path: '/publications' },
                            { name: 'Media', path: '/media' },
                            { name: 'Gallery', path: '/gallery' }
                        ].map((item) => (
                            <Link
                                key={item.name}
                                href={item.path}
                                className="block py-2 text-gray-800 hover:text-ut-orange"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <a
                            href="mailto:rnderbs@utexas.edu"
                            className="block py-2 text-gray-800 hover:text-ut-orange"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
} 