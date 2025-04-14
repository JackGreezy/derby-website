'use client';

import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    return (
        <>
            <Navbar />
            <AnimatePresence mode="wait">
                <main key={pathname} className="container mx-auto px-4 py-8">
                    {children}
                </main>
            </AnimatePresence>
            <Footer />
        </>
    );
} 