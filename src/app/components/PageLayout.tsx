export default function PageLayout({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
            <h1 className="text-3xl font-bold mb-8">{title}</h1>
            {children}
        </div>
    );
} 