import PageLayout from '../components/PageLayout';

export default function Publications() {
    return (
        <PageLayout title="Publications">
            <div className="space-y-12">
                <section>
                    <h2 className="text-2xl font-semibold mb-6">Recent Publications</h2>
                    <div className="space-y-8">
                        {/* Female mountain gorillas paper */}
                        <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all">
                            <a
                                href="https://www.researchgate.net/publication/381376284_Female_mountain_gorillas_form_enduring_social_relationships"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                            >
                                <h3 className="text-xl font-semibold mb-3 text-ut-orange hover:text-ut-orange/90 transition-colors">
                                    Female mountain gorillas form enduring social relationships
                                </h3>
                                <p className="text-gray-700 mb-4">
                                    <span className="font-medium">Derby, R. N.</span>, Eckardt, W., Stoinski, T.S., Morrison, R.E., Sandel, A.A. (2024).
                                    <span className="italic"> Animal Behaviour 213</span>, 139-147.
                                </p>
                                <p className="text-gray-600 text-sm border-l-4 border-gray-200 pl-4">
                                    Strong, affiliative relationships are important across social mammals. This study examines proximity and grooming between 47 adult female mountain gorillas in five groups over 5–13 years, revealing how females can form enduring social bonds despite dispersing multiple times throughout their lives.
                                </p>
                            </a>
                        </div>

                        {/* Parallel lasers paper */}
                        <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all">
                            <a
                                href="https://www.researchgate.net/publication/358738098_Parallel_lasers_and_digital_photography_to_estimate_limb_size_of_chimpanzees_Pan_troglodytes_at_Ngogo_Kibale_National_Park_Uganda"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                            >
                                <h3 className="text-xl font-semibold mb-3 text-ut-orange hover:text-ut-orange/90 transition-colors">
                                    Parallel lasers and digital photography to estimate limb size of chimpanzees
                                </h3>
                                <p className="text-gray-700 mb-4">
                                    Sandel, A. A., <span className="font-medium">Derby, R. N.</span>, Chesterman, N. S., McNamara, A., Dudas, M. M., & Rawat, I. (2022).
                                    <span className="italic"> Primates, 63(3)</span>, 217-224.
                                </p>
                                <p className="text-gray-600 text-sm border-l-4 border-gray-200 pl-4">
                                    This study presents an innovative method using digital photography combined with parallel lasers to measure limb size in wild chimpanzees. The research demonstrates how this non-invasive technique can effectively track physical development in endangered primates.
                                </p>
                            </a>
                        </div>

                        {/* Friendship in primates paper */}
                        <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all">
                            <a
                                href="https://www.researchgate.net/publication/370628719_A_multilingual_reflection_on_friendship_in_humans_and_other_primates"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                            >
                                <h3 className="text-xl font-semibold mb-3 text-ut-orange hover:text-ut-orange/90 transition-colors">
                                    A multilingual reflection on friendship in humans and other primates
                                </h3>
                                <p className="text-gray-700 mb-4">
                                    <span className="font-medium">Derby, R.N.</span> et al. (2023).
                                    <span className="italic"> American Journal of Biological Anthropology</span>
                                </p>
                                <p className="text-gray-600 text-sm border-l-4 border-gray-200 pl-4">
                                    This paper explores the concept of friendship across species, examining how social bonds manifest in both human and non-human primates, contributing to our understanding of social evolution and relationship development.
                                </p>
                            </a>
                        </div>
                    </div>
                </section>

                <div className="flex justify-center mt-12">
                    <a
                        href="https://scholar.google.com/citations?user=7ljr3G8AAAAJ&hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 border border-ut-orange text-ut-orange rounded-md hover:bg-ut-orange hover:text-white transition-colors"
                    >
                        View Complete Publication List
                    </a>
                </div>
            </div>
        </PageLayout>
    );
} 