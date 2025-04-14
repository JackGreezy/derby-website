import Image from 'next/image';

export default function Hero() {
    return (
        <div className="relative overflow-hidden bg-gradient-to-b from-[#BF5700]/5 to-transparent py-16 sm:py-24">
            <div className="relative">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h1 className="text-5xl font-bold gradient-text">
                            Riley Derby
                        </h1>
                        <p className="text-xl text-gray-600">
                            Exploring the complexities of primate social relationships and development
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="/cv.pdf"
                                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#BF5700] hover:bg-[#A64B00] transition-colors duration-300"
                            >
                                View CV
                            </a>
                            <a
                                href="/contact"
                                className="inline-flex items-center px-6 py-3 border border-[#333F48] text-base font-medium rounded-md text-[#333F48] hover:bg-[#333F48] hover:text-white transition-colors duration-300"
                            >
                                Contact Me
                            </a>
                        </div>
                    </div>
                    <div className="relative h-[500px] w-full">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#BF5700]/10 to-transparent rounded-2xl overflow-hidden">
                            <Image
                                src="/riley-derby.jpg"
                                alt="Riley Derby"
                                fill
                                className="object-cover rounded-2xl"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 