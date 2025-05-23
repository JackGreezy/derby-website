"use client";
import { useState } from 'react';
import Image from 'next/image';
import PageLayout from '../components/PageLayout';

export default function Gallery() {
    const images = [
        {
            src: '/gallery/derby-in-the-wild.jpg',
            alt: 'Riley Derby in the field with gorilla',
            caption: 'Riley Derby conducting field research with mountain gorillas in Bwindi.'
        },
        { src: '/Website_Derby/urine1.jpg', alt: 'urine1.jpg', caption: 'Collecting a urine sample for hormonal analyses.' },
        { src: '/Website_Derby/headshot.jpg', alt: 'headshot.jpg', caption: 'Spending time with silverback Kaganga.' },
        { src: '/Website_Derby/Rolex Grant_2024_DerbyR_Bwindi_6_RDerby.JPG', alt: 'Rolex Grant_2024_DerbyR_Bwindi_6_RDerby.JPG', caption: 'Collecting behavioral data on Kadogo the gorilla.' },
        { src: '/Website_Derby/Rolex Grant_2024_DerbyR_Bwindi_3_RDerby.jpg', alt: 'Rolex Grant_2024_DerbyR_Bwindi_3_RDerby.jpg', caption: 'Mufuruki, an adolescent gorilla I study.' },
        { src: '/Website_Derby/Riley_Joshua.jpg', alt: 'Riley_Joshua.jpg', caption: 'Working alongside Joshua in the forest.' },
        { src: '/Website_Derby/IMG_9545.jpeg', alt: 'IMG_9545.jpg', caption: 'Teaching a primate behavior workshop to Ugandan students in Kibale National Park.' },
        { src: '/Website_Derby/IMG_4683.jpeg', alt: 'IMG_4683.jpg', caption: 'Hosting a primatology educational activity on STEM night at a local Austin school.' },
        { src: '/Website_Derby/IMG_4682.jpeg', alt: 'IMG_4682.jpg', caption: 'Hosting a primatology educational activity on STEM night at a local Austin school.' },
        { src: '/Website_Derby/IMG_4681.jpeg', alt: 'IMG_4681.jpg', caption: 'Hosting a primatology educational activity on STEM night at a local Austin school.' },
        { src: '/Website_Derby/IMG_0302.JPEG', alt: 'IMG_0302.JPEG', caption: 'Partnering with the Uganda Lacrosse Association to expand the game across Uganda.' },
        { src: '/Website_Derby/IMG_0292.JPEG', alt: 'IMG_0292.JPEG', caption: 'Partnering with the Uganda Lacrosse Association to expand the game across Uganda.' },
        { src: '/Website_Derby/DSC00289.JPG', alt: 'DSC00289.JPG', caption: 'Kadogo, a young gorilla, in the bush.' },
        { src: '/Website_Derby/DSC00252.JPG', alt: 'DSC00252.JPG', caption: 'Kakuto, an adolescent male gorilla, resting.' },
        { src: '/Website_Derby/455556dc-2ec1-40ef-bb51-7af09aa4aee7.JPG', alt: '455556dc-2ec1-40ef-bb51-7af09aa4aee7.JPG', caption: 'Primate conservation workshop in Kibale National Park.' },
        { src: '/Website_Derby/20240104_102922.jpg', alt: '20240104_102922.jpg', caption: 'Following a mountain gorilla through the thick bush at Bwindi.' },
        { src: '/Website_Derby/20231229_185630.jpg', alt: '20231229_185630.jpg', caption: 'Watching Kadogo and his group in the sun.' },
    ];

    const [modalOpen, setModalOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openModal = (idx: number) => {
        setCurrentIndex(idx);
        setModalOpen(true);
    };
    const closeModal = () => setModalOpen(false);
    const prevImage = () => setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1));
    const nextImage = () => setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1));

    return (
        <PageLayout title="Gallery">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="group relative bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col cursor-pointer"
                        onClick={() => openModal(index)}
                    >
                        <div className="relative w-full aspect-[4/3] bg-gray-100">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className={`object-cover transition-transform duration-300 group-hover:scale-105 ${image.src.includes('Riley_Joshua.jpg') ? 'object-[center_20%]' : ''
                                    } ${image.src.includes('IMG_0292.JPEG') ? 'object-[center_30%]' : ''
                                    } ${image.src.includes('IMG_0302.JPEG') ? 'object-[center_15%]' : ''
                                    }`}
                                priority
                            />
                        </div>
                        {image.caption && (
                            <p className="px-4 py-3 text-base font-medium text-gray-700 text-center bg-gray-50 border-t border-gray-100">
                                {image.caption}
                            </p>
                        )}
                    </div>
                ))}
            </div>

            {/* Modal/Lightbox */}
            {modalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
                    <button
                        className="absolute top-4 right-4 text-white text-3xl font-bold focus:outline-none hover:scale-110 transition-transform"
                        onClick={closeModal}
                        aria-label="Close"
                    >
                        &times;
                    </button>
                    <button
                        className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center justify-center w-14 h-14 text-white text-4xl bg-black bg-opacity-60 rounded-full shadow-lg hover:bg-ut-orange hover:text-white hover:scale-110 focus:outline-none transition-all"
                        onClick={prevImage}
                        aria-label="Previous"
                        tabIndex={0}
                    >
                        <span className="sr-only">Previous</span>
                        &#8592;
                    </button>
                    <div className="relative max-w-3xl w-full flex flex-col items-center">
                        <div className="relative w-full aspect-[4/3] bg-gray-200 rounded-xl overflow-hidden">
                            <Image
                                src={images[currentIndex].src}
                                alt={images[currentIndex].alt}
                                fill
                                sizes="100vw"
                                className={`object-contain md:object-cover ${images[currentIndex].src.includes('Riley_Joshua.jpg') ? 'object-[center_20%]' : ''
                                    } ${images[currentIndex].src.includes('IMG_0292.JPEG') ? 'object-[center_30%]' : ''
                                    } ${images[currentIndex].src.includes('IMG_0302.JPEG') ? 'object-[center_15%]' : ''
                                    }`}
                                loading="eager"
                            />
                        </div>
                        {images[currentIndex].caption && (
                            <p className="mt-4 px-4 py-2 text-lg font-medium text-white text-center bg-black bg-opacity-40 rounded">
                                {images[currentIndex].caption}
                            </p>
                        )}
                    </div>
                    <button
                        className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center justify-center w-14 h-14 text-white text-4xl bg-black bg-opacity-60 rounded-full shadow-lg hover:bg-ut-orange hover:text-white hover:scale-110 focus:outline-none transition-all"
                        onClick={nextImage}
                        aria-label="Next"
                        tabIndex={0}
                    >
                        <span className="sr-only">Next</span>
                        &#8594;
                    </button>
                </div>
            )}
        </PageLayout>
    );
} 