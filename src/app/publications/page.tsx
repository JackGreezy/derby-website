import PageLayout from '../components/PageLayout';
import Link from 'next/link';

export default function Publications() {
    return (
        <PageLayout title="Publications">
            <div className="space-y-12">
                <section>
                    <h2 className="text-2xl font-semibold mb-6">Recent Publications</h2>
                    <div className="space-y-8">
                        {/* Female mountain gorillas paper */}
                        <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all">
                            <h3 className="text-xl font-semibold mb-3">Female mountain gorillas form enduring social relationships</h3>
                            <p className="text-gray-700 mb-4">
                                Research highlighting the importance of social bonds among female mountain gorillas, studied over 5–13 years.
                            </p>
                            <Link
                                href="https://www.sciencedirect.com/science/article/abs/pii/S0003347223002907"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-ut-orange hover:underline"
                            >
                                Read Paper →
                            </Link>
                        </div>

                        {/* Parallel lasers paper */}
                        <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all">
                            <h3 className="text-xl font-semibold mb-3">Parallel lasers and digital photography to estimate limb size of chimpanzees</h3>
                            <p className="text-gray-700 mb-4">
                                Novel method using digital photography and parallel lasers to measure limb size in wild chimpanzees.
                            </p>
                            <Link
                                href="https://onlinelibrary.wiley.com/doi/10.1002/ajp.23595"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-ut-orange hover:underline"
                            >
                                Read Paper →
                            </Link>
                        </div>

                        {/* Friendship in primates paper */}
                        <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all">
                            <h3 className="text-xl font-semibold mb-3">A multilingual reflection on friendship in humans and other primates</h3>
                            <p className="text-gray-700 mb-4">
                                Exploring social bonds across species and their implications for understanding primate relationships.
                            </p>
                            <Link
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-ut-orange hover:underline"
                            >
                                Read Paper →
                            </Link>
                        </div>
                    </div>
                </section>

                <div className="flex justify-center">
                    <Link
                        href="https://scholar.google.com/citations?user=7ljr3G8AAAAJ&hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-ut-orange text-white px-8 py-3 rounded-md hover:bg-ut-orange/90 transition-colors"
                    >
                        <span>View Complete Publications List</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </Link>
                </div>
            </div>
        </PageLayout>
    );
} 