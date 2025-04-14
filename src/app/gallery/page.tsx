import Image from 'next/image';
import PageLayout from '../components/PageLayout';

export default function Gallery() {
    const images = [
        {
            src: '/gallery/derby-in-the-wild.jpg',  // Fixed the file extension
            alt: 'Riley Derby in the field with gorilla',
            caption: 'Field research with mountain gorillas in Bwindi'
        }
        // Add more images here as they're added to the gallery folder
    ];

    return (
        <PageLayout title="Gallery">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {images.map((image, index) => (
                    <div key={index} className="group relative">
                        <div className="relative h-[400px] overflow-hidden rounded-lg bg-gray-100">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-contain"
                                priority
                            />
                        </div>
                        {image.caption && (
                            <p className="mt-3 text-sm text-gray-600 text-center">
                                {image.caption}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </PageLayout>
    );
} 