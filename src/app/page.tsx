import ClientAnimationWrapper from './components/ClientAnimationWrapper';
import Image from 'next/image';
import PageTransition from './components/PageTransition';
import AnimatedSection from './components/AnimatedSection';
import HoverCard from './components/HoverCard';
import ScrollProgress from './components/ScrollProgress';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto space-y-24">
      <ScrollProgress />

      <PageTransition>
        <div className="min-h-screen max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          {/* Hero Section */}
          <section className="mb-32">
            <ClientAnimationWrapper>
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 space-y-6">
                  <div>
                    <span className="text-3xl">👋</span>
                    <h1 className="text-4xl font-bold mt-4">Hello, I am Riley Derby</h1>
                  </div>
                  <p className="text-gray-700 text-lg">
                    I am a PhD Candidate in Biological Anthropology at UT Austin,
                    focusing on primate behavior and social relationships. My
                    research combines field studies of wild mountain gorillas and
                    chimpanzees.
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="/cv"
                      className="bg-ut-orange text-white px-6 py-3 rounded-md hover:bg-ut-orange/90 transition-colors"
                    >
                      View CV
                    </a>
                    <a
                      href="/contact"
                      className="bg-white text-gray-800 px-6 py-3 rounded-md border hover:bg-gray-50 transition-colors"
                    >
                      Contact Me
                    </a>
                  </div>
                </div>
                <div className="flex-1">
                  <Image
                    src="/riley-derby.jpg"
                    alt="Riley Derby"
                    width={500}
                    height={500}
                    className="rounded-2xl shadow-lg"
                    priority
                  />
                </div>
              </div>
            </ClientAnimationWrapper>
          </section>

          {/* Education Section */}
          <section className="mb-32">
            <ClientAnimationWrapper>
              <div className="flex items-center gap-3 mb-10">
                <span className="text-3xl">🎓</span>
                <h2 className="text-3xl font-bold">Education</h2>
              </div>
              <div className="space-y-8">
                <div className="border-l-4 border-ut-orange pl-6">
                  <h3 className="text-xl font-semibold">PhD in Biological Anthropology</h3>
                  <p className="text-gray-600 mt-1">University of Texas at Austin | 2022-Present</p>
                </div>

                <div className="border-l-4 border-ut-orange pl-6">
                  <h3 className="text-xl font-semibold">M.S. in Primate Behavior and Ecology</h3>
                  <p className="text-gray-600 mt-1">Central Washington University | 2019-2021</p>
                  <p className="text-green-600 mt-1">Perfect GPA: 4.0</p>
                </div>

                <div className="border-l-4 border-ut-orange pl-6">
                  <h3 className="text-xl font-semibold">B.A. in Anthropology</h3>
                  <p className="text-gray-600 mt-1">University of Texas at Austin | 2015-2019</p>
                  <p className="text-gray-600 mt-1">Minor in History, Concentration in Biological Anthropology</p>
                </div>
              </div>
            </ClientAnimationWrapper>
          </section>

          {/* Experience Section */}
          <section className="mb-32">
            <ClientAnimationWrapper>
              <div className="flex items-center gap-3 mb-10">
                <span className="text-3xl">🔬</span>
                <h2 className="text-3xl font-bold">Research Experience</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-ut-orange">Bwindi Gorilla Project</h3>
                  <p className="text-gray-700">
                    Conducting behavioral data collection and sample analysis on mountain gorillas in one of Africa's most unique primate habitats.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-ut-orange">Ngogo Chimpanzee Project</h3>
                  <p className="text-gray-700">
                    Contributing to primate behavior research, studying physical and social development patterns in wild chimpanzees.
                  </p>
                </div>
              </div>
            </ClientAnimationWrapper>
          </section>

          {/* Research Interests Section */}
          <section className="mb-32">
            <ClientAnimationWrapper>
              <div className="flex items-center gap-3 mb-10">
                <span className="text-3xl">🔍</span>
                <h2 className="text-3xl font-bold">Research Interests</h2>
              </div>
              <HoverCard>
                <div className="space-y-6">
                  <p className="text-gray-700 leading-relaxed">
                    My research focuses on the social dynamics and behavioral ecology of primates, with particular emphasis on:
                  </p>
                  <ul className="space-y-4 list-none pl-0">
                    <li className="flex items-start gap-3">
                      <span className="text-xl">🦍</span>
                      <span>Social relationships of mountain gorillas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">🐒</span>
                      <span>Physical and social development of chimpanzees</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">🌿</span>
                      <span>How social structures influence survival and reproduction</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">🔬</span>
                      <span>Conservation strategies informed by behavioral research</span>
                    </li>
                  </ul>
                </div>
              </HoverCard>
            </ClientAnimationWrapper>
          </section>

          {/* Awards & Recognition */}
          <section className="mb-32">
            <ClientAnimationWrapper>
              <div className="flex items-center gap-3 mb-10">
                <span className="text-3xl">🏆</span>
                <h2 className="text-3xl font-bold">Awards & Recognition</h2>
              </div>
              <HoverCard>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🎯</span>
                      <div>
                        <h3 className="text-xl font-semibold">Perfect GPA in Master's Program</h3>
                        <p className="text-gray-600">Central Washington University</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="text-2xl">⭐</span>
                      <div>
                        <h3 className="text-xl font-semibold">World Top Scientists Best Researcher Award in Primatology</h3>
                        <p className="text-gray-600">2024</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🎤</span>
                      <div>
                        <h3 className="text-xl font-semibold">Multiple Conference Presentations</h3>
                        <p className="text-gray-600">Including prestigious workshops and research symposiums</p>
                      </div>
                    </div>
                  </div>
                </div>
              </HoverCard>
            </ClientAnimationWrapper>
          </section>

          {/* Current Mentees */}
          <section className="mb-32">
            <ClientAnimationWrapper>
              <div className="flex items-center gap-3 mb-10">
                <span className="text-3xl">🏆</span>
                <h2 className="text-3xl font-bold">Current Mentees</h2>
              </div>
              <HoverCard>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold">PhD Candidate Name</h3>
                    <p className="text-gray-600">Research focus area</p>
                    <p className="text-sm text-gray-500">Expected graduation: Year</p>
                  </div>
                </div>
              </HoverCard>
            </ClientAnimationWrapper>
          </section>

          {/* Athletics */}
          <section className="mb-32">
            <ClientAnimationWrapper>
              <div className="flex items-center gap-3 mb-10">
                <span className="text-3xl">🥍</span>
                <h2 className="text-3xl font-bold">Athletics</h2>
              </div>
              <HoverCard>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-ut-orange">Current Role</h3>
                    <p className="text-gray-700 mt-2">
                      Defensive Coordinator for the University of Texas Men's Lacrosse Team
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-ut-orange">Playing Career</h3>
                    <p className="text-gray-700 mt-2">
                      Former All-Conference First Team Defensive Midfielder for the Texas Longhorns
                    </p>
                  </div>
                </div>
              </HoverCard>
            </ClientAnimationWrapper>
          </section>
        </div>
      </PageTransition>
    </div>
  );
}
