import PageLayout from '../components/PageLayout';

export default function Media() {
    return (
        <PageLayout title="Media & Press">
            <div className="space-y-16">
                {/* Featured Documentary Section */}
                <section>
                    <h2 className="text-2xl font-semibold mb-6">Featured Documentary</h2>
                    <div className="bg-white rounded-xl p-8 shadow-sm">
                        <h3 className="text-xl font-semibold mb-4">Netflix's Chimp Empire (2023)</h3>
                        <div className="aspect-video w-full mb-6">
                            <iframe
                                className="w-full h-full rounded-lg"
                                src="https://www.youtube.com/embed/NjgL7Pumb4Q"
                                title="Chimp Empire | Official Trailer | Netflix"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <p className="text-gray-700">
                            Featured in Netflix's groundbreaking documentary series exploring the complex social dynamics and behavior of chimpanzees at Ngogo, Kibale National Park.
                        </p>
                    </div>
                </section>

                {/* Recent Press Coverage */}
                <section>
                    <h2 className="text-2xl font-semibold mb-6">Recent Press Coverage</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <a
                            href="https://www.nature.com/articles/d44148-024-00224-5"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all"
                        >
                            <span className="text-sm text-ut-orange font-medium">Nature Africa</span>
                            <h3 className="text-xl font-semibold mt-2 mb-3">Not quite best friends forever, but female gorillas have girl pals</h3>
                            <p className="text-gray-600">
                                Research highlighting the enduring social bonds between female mountain gorillas, featured in Nature Africa, July 2024.
                            </p>
                        </a>
                        {/* Add more press coverage items here */}
                    </div>
                </section>

                {/* Media Contact Section */}
                <section>
                    <h2 className="text-2xl font-semibold mb-6">Media Inquiries</h2>
                    <div className="bg-white rounded-xl p-8 shadow-sm">
                        <div className="max-w-2xl">
                            <h3 className="text-xl font-semibold mb-4">Expert Commentary Available</h3>
                            <p className="text-gray-700 mb-6">
                                Riley Derby is available for expert commentary and interviews on topics including:
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-start gap-3">
                                    <span className="text-ut-orange">•</span>
                                    <span>Primate behavior and social relationships</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-ut-orange">•</span>
                                    <span>Mountain gorilla conservation and research</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-ut-orange">•</span>
                                    <span>Chimpanzee development and social dynamics</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-ut-orange">•</span>
                                    <span>Great ape behavioral ecology</span>
                                </li>
                            </ul>
                            <a
                                href="mailto:rnderbs@utexas.edu"
                                className="inline-flex items-center px-6 py-3 bg-ut-orange text-white rounded-md hover:bg-ut-orange/90 transition-colors"
                            >
                                Contact for Media Inquiries
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </PageLayout>
    );
} 