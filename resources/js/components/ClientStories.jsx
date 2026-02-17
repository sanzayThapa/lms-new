import React from 'react';

const stories = [
    {
        quote: "SkillBest Nepal transformed our employee training. The local content and Nepali support team made all the difference for our organization.",
        author: "Rajesh Sharma",
        role: "HR Director, Himalayan Bank",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    },
    {
        quote: "The platform helped us train 500+ employees across Kathmandu and Pokhara. Excellent ROI and measurable results!",
        author: "Priya Khatri",
        role: "Training Manager, Nepal Telecom",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    },
    {
        quote: "Best corporate training solution in Nepal. The analytics helped us track progress and improve employee performance significantly.",
        author: "Binod Adhikari",
        role: "CEO, Yeti Group",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    },
];

const ClientStories = () => {
    return (
        <section className="py-14 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <span className="inline-block px-3 py-1 rounded-md bg-brand-100 text-brand-600 text-sm font-semibold mb-3">
                        Success Stories
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                        Trusted by Nepal's{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-purple-600">
                            Top Companies
                        </span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {stories.map((story, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-lg p-5 border border-gray-100"
                        >
                            <div className="flex gap-1 mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                "{story.quote}"
                            </p>

                            <div className="flex items-center gap-3">
                                <img
                                    src={story.image}
                                    alt={story.author}
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm">{story.author}</h4>
                                    <p className="text-xs text-brand-600">{story.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientStories;
