export default function Affiliations() {
    return (
        <div className="py-12">
            <h1 className="text-4xl font-bold mb-8">Affiliations</h1>
            <div className="grid gap-6">
                <div className="bg-white rounded-lg p-6 shadow-sm border">
                    <h2 className="text-2xl font-semibold mb-2">Primate Social Evolution Group</h2>
                    <p className="text-gray-600">University of Zurich</p>
                    <p className="mt-4 text-gray-700">
                        Description of involvement...
                    </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border">
                    <h2 className="text-2xl font-semibold mb-2">PEE Lab</h2>
                    <p className="mt-4 text-gray-700">
                        Description of involvement...
                    </p>
                </div>
            </div>
        </div>
    );
} 