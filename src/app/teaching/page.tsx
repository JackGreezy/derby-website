export default function Teaching() {
    return (
        <div className="py-12 page-transition">
            <h1 className="text-4xl font-bold mb-8 gradient-text">Teaching Experience</h1>

            <div className="grid gap-8 md:grid-cols-2">
                <div className="card p-6">
                    <h2 className="text-2xl font-semibold mb-4">University of Texas at Austin</h2>
                    <div className="space-y-4">
                        <div className="border-l-4 border-[#BF5700] pl-4">
                            <h3 className="text-lg font-medium">Teaching Assistant - Biological Anthropology</h3>
                            <p className="text-gray-600">2022 - Present</p>
                            <ul className="mt-2 space-y-2 text-gray-700">
                                <li>• Led discussion sections and laboratory sessions</li>
                                <li>• Mentored undergraduate students in research methods</li>
                                <li>• Developed course materials and grading rubrics</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="card p-6">
                    <h2 className="text-2xl font-semibold mb-4">Central Washington University</h2>
                    <div className="space-y-4">
                        <div className="border-l-4 border-[#333F48] pl-4">
                            <h3 className="text-lg font-medium">Teaching Assistant - Primate Studies</h3>
                            <p className="text-gray-600">2019 - 2021</p>
                            <ul className="mt-2 space-y-2 text-gray-700">
                                <li>• Facilitated primate behavior observation workshops</li>
                                <li>• Assisted in field research methodology training</li>
                                <li>• Coordinated student research projects</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="card p-6 md:col-span-2">
                    <h2 className="text-2xl font-semibold mb-4">Guest Lectures & Workshops</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="border-l-4 border-[#BF5700] pl-4">
                            <h3 className="text-lg font-medium">Primate Social Behavior Workshop</h3>
                            <p className="text-gray-600">Spring 2023</p>
                            <p className="mt-2 text-gray-700">
                                Intensive workshop on observational methods in primatology
                            </p>
                        </div>
                        <div className="border-l-4 border-[#333F48] pl-4">
                            <h3 className="text-lg font-medium">Field Research Methods Seminar</h3>
                            <p className="text-gray-600">Fall 2022</p>
                            <p className="mt-2 text-gray-700">
                                Techniques for behavioral data collection in the field
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 