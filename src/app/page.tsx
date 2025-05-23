import ClientAnimationWrapper from './components/ClientAnimationWrapper';
import Image from 'next/image';
import PageTransition from './components/PageTransition';
import AnimatedSection from './components/AnimatedSection';
import HoverCard from './components/HoverCard';
import ScrollProgress from './components/ScrollProgress';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <ScrollProgress />

      <PageTransition>
        <div className="min-h-screen max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          {/* Hero Section */}
          <section className="pt-8 md:pt-16 pb-16 md:pb-24">
            <ClientAnimationWrapper>
              <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
                <div className="flex-1 space-y-6 text-center md:text-left">
                  <div>
                    <span className="text-3xl">👋</span>
                    <h1 className="text-3xl md:text-4xl font-bold mt-4">Hello, I am Riley Derby</h1>
                  </div>
                  <p className="text-gray-700 text-lg">
                    I am a PhD Candidate in Biological Anthropology at UT Austin,
                    focusing on primate behavior and social relationships. My
                    research combines field studies of wild mountain gorillas and
                    chimpanzees.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <Link
                      href="/cv.pdf"
                      className="bg-ut-orange text-white px-6 py-3 rounded-md text-center hover:bg-ut-orange/90 transition-colors"
                    >
                      View CV
                    </Link>
                    <Link
                      href="mailto:rnderbs@utexas.edu"
                      className="bg-white text-gray-800 px-6 py-3 rounded-md border text-center hover:bg-gray-50 transition-colors"
                    >
                      Contact Me
                    </Link>
                  </div>
                </div>
                <div className="w-full md:w-auto md:flex-1">
                  <Image
                    src="/hero.png"
                    alt="Riley Derby"
                    width={500}
                    height={500}
                    priority
                    className="rounded-2xl shadow-lg w-full max-w-[300px] mx-auto md:max-w-none"
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
                <a
                  href="https://www.bwindiimpenetrablenationalpark.com/information/great-ape-project/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all"
                >
                  <h3 className="text-xl font-semibold text-ut-orange">Bwindi Gorilla Project</h3>
                  <p className="text-gray-700 mt-4">
                    Conducting behavioral data collection and sample analysis on mountain gorillas in one of Africa's most unique primate habitats.
                  </p>
                </a>

                <a
                  href="http://ngogochimpanzeeproject.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all"
                >
                  <h3 className="text-xl font-semibold text-ut-orange">Ngogo Chimpanzee Project</h3>
                  <p className="text-gray-700 mt-4">
                    Contributing to primate behavior research, studying physical and social development patterns in wild chimpanzees.
                  </p>
                </a>
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

          {/* Current Mentees */}
          <section className="mb-32">
            <ClientAnimationWrapper>
              <div className="flex items-center gap-3 mb-10">
                <span className="text-3xl">🎓</span>
                <h2 className="text-3xl font-bold">Current Mentees</h2>
              </div>
              <HoverCard>
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-xl font-semibold">Joshua Kyobe</h3>
                      <p className="text-gray-600">Research focus: Primate behavior and conservation</p>
                      <p className="text-sm text-gray-500">Expected graduation: 2025</p>
                    </div>
                    <div className="flex-1 flex justify-center md:justify-end w-full">
                      <Image
                        src="/Website_Derby/Riley_Joshua.jpg"
                        alt="Riley Derby and Joshua Kyobe together"
                        width={350}
                        height={350}
                        className="rounded-xl shadow-md object-cover max-w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </HoverCard>
            </ClientAnimationWrapper>
          </section>

          {/* Community Outreach */}
          <section className="mb-32">
            <ClientAnimationWrapper>
              <div className="flex items-center gap-3 mb-10">
                <span className="text-3xl">🤝</span>
                <h2 className="text-3xl font-bold">Community Outreach</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-8 shadow-sm">
                  <h3 className="text-xl font-semibold text-ut-orange">Educational Programs</h3>
                  <p className="text-gray-700 mt-4">
                    Leading interactive educational programs for local elementary schools, introducing students to primatology, conservation, and research methodology through engaging presentations and activities.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-sm">
                  <h3 className="text-xl font-semibold text-ut-orange">Conservation Workshops</h3>
                  <p className="text-gray-700 mt-4">
                    Conducting workshops for first-line communities in Uganda, sharing knowledge about conservation practices and primatological research to foster local engagement and understanding.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-sm md:col-span-2">
                  <h3 className="text-xl font-semibold text-ut-orange">Lacrosse Development Program</h3>
                  <p className="text-gray-700 mt-4">
                    Partnering Texas Lacrosse with Uganda Lacrosse to expand athletic opportunities throughout primary and secondary schools in Uganda, promoting sports development and cross-cultural exchange.
                  </p>
                </div>
              </div>
            </ClientAnimationWrapper>
          </section>
        </div>
      </PageTransition>
    </div>
  );
}
