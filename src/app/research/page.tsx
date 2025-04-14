import PageLayout from '../components/PageLayout';

export default function Research() {
    return (
        <PageLayout title="Research">
            <div className="space-y-12">
                <section className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all">
                    <a
                        href="https://www.bwindiimpenetrablenationalpark.com/information/great-ape-project/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                    >
                        <h2 className="text-2xl font-semibold mb-4 text-ut-orange hover:text-ut-orange/80 transition-colors">
                            Bwindi Gorilla Project
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Conducting behavioral data collection and sample analysis on mountain gorillas,
                            focusing on social relationships and their enduring nature among female mountain gorillas. The Bwindi-Impenetrable Great Ape Project (BIGAPE) studies the ecological relationship between the park's populations of mountain gorillas and chimpanzees.
                        </p>
                    </a>
                </section>

                <section className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all">
                    <a
                        href="http://ngogochimpanzeeproject.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                    >
                        <h2 className="text-2xl font-semibold mb-4 text-ut-orange hover:text-ut-orange/80 transition-colors">
                            Ngogo Chimpanzee Project
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Contributing to groundbreaking primate research at Ngogo, studying physical and social development patterns in wild chimpanzees. The project has been featured in several wildlife documentaries, including Netflix's Chimp Empire series (2023) and the award-winning Rise of the Warrior Apes (2017).
                        </p>
                    </a>
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