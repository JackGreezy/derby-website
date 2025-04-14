'use client';

export default function HoverCard({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all">
            {children}
        </div>
    );
} 