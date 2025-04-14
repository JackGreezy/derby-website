'use client';

import Link from 'next/link';

export default function ResearchCard({
    title,
    description,
    link
}: {
    title: string;
    description: string;
    link: string;
}) {
    return (
        <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all"
        >
            <h3 className="text-xl font-semibold mb-3">{title}</h3>
            <p className="text-gray-600">{description}</p>
            <span className="text-ut-orange mt-4 inline-block">
                Learn more →
            </span>
        </Link>
    );
} 