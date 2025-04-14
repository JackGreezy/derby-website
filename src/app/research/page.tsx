import PageLayout from '../components/PageLayout';
import Link from 'next/link';

export default function Research() {
    return (
        <PageLayout title="Research">
            <div className="space-y-12">
                <section>
                    <div className="grid md:grid-cols-2 gap-8">
                        <Link
                            href="https://www.bwindiimpenetrablenationalpark.com/information/great-ape-project/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all"
                        >
                            <h3 className="text-xl font-semibold text-ut-orange">Bwindi Gorilla Project</h3>
                            <p className="text-gray-700 mt-4">
                                Conducting behavioral data collection and sample analysis on mountain gorillas in one of Africa's most unique primate habitats.
                            </p>
                        </Link>

                        <Link
                            href="http://ngogochimpanzeeproject.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all"
                        >
                            <h3 className="text-xl font-semibold text-ut-orange">Ngogo Chimpanzee Project</h3>
                            <p className="text-gray-700 mt-4">
                                Contributing to primate behavior research, studying physical and social development patterns in wild chimpanzees.
                            </p>
                        </Link>
                    </div>
                </section>

                <section className="bg-white rounded-lg p-8 shadow-sm">
                    <h2 className="text-2xl font-semibold mb-4">Field Research Experience</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Extensive experience in collecting behavioral and biological data on primates,
                        combining academic research with practical conservation strategies. Specializing in observational studies and data collection methodologies that inform both scientific understanding and conservation efforts.
                    </p>
                </section>
            </div>
        </PageLayout>
    );
} 