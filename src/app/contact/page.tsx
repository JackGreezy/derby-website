import PageLayout from '../components/PageLayout';

export default function Contact() {
    return (
        <PageLayout title="Contact">
            <div className="max-w-2xl">
                <form className="space-y-6 bg-white rounded-lg p-8 shadow-sm">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-ut-orange focus:border-ut-orange"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-ut-orange focus:border-ut-orange"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            rows={6}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-ut-orange focus:border-ut-orange"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="px-6 py-2 bg-ut-orange text-white rounded-md hover:bg-ut-orange/90 transition-colors"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </PageLayout>
    );
} 