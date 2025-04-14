import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-white border-t mt-auto">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="flex items-center space-x-4">
                        <a
                            href="https://liberalarts.utexas.edu/anthropology/gradstudents/rnd473"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-ut-orange transition-colors"
                        >
                            Official UT Profile
                        </a>
                        <span className="text-gray-300">|</span>
                        <a
                            href="mailto:rnderbs@utexas.edu"
                            className="text-gray-600 hover:text-ut-orange transition-colors"
                        >
                            Contact Me
                        </a>
                    </div>

                    <div className="text-center md:text-right text-sm text-gray-500">
                        <p>© {new Date().getFullYear()} Riley Derby. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
} 