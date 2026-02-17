import React from 'react';

const features = [
    {
        name: 'Custom Learning Paths',
        description: 'Tailored training programs designed to meet your organization specific needs.',
        icon: '🎯',
        color: 'bg-brand-100 text-brand-600',
    },
    {
        name: 'Progress Analytics',
        description: 'Comprehensive dashboards to track employee progress and ROI on training.',
        icon: '📊',
        color: 'bg-purple-100 text-purple-600',
    },
    {
        name: 'Local Content',
        description: 'Courses tailored for Nepali businesses and compliance requirements.',
        icon: '🇳🇵',
        color: 'bg-orange-100 text-orange-600',
    },
    {
        name: 'Scalable Platform',
        description: 'Train hundreds or thousands of employees across Nepal seamlessly.',
        icon: '📈',
        color: 'bg-green-100 text-green-600',
    },
    {
        name: 'Expert Support',
        description: 'Dedicated support team based in Nepal for local assistance.',
        icon: '👥',
        color: 'bg-pink-100 text-pink-600',
    },
    {
        name: 'Easy Integration',
        description: 'Seamlessly integrates with your existing HR systems.',
        icon: '🔗',
        color: 'bg-blue-100 text-blue-600',
    },
];

const Features = () => {
    return (
        <section className="py-20 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-50 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-50"></div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <span className="inline-block px-3 py-1 rounded-md bg-brand-100 text-brand-600 text-sm font-semibold mb-3">
                        Why SkillBest Nepal
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                        Nepal's Leading Corporate{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-purple-600">
                            Training Platform
                        </span>
                    </h2>
                    <p className="mt-3 text-base text-gray-600">
                        Trusted by 200+ Nepali companies for employee development.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {features.map((feature, index) => (
                        <div
                            key={feature.name}
                            className="group relative bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-brand-200"
                        >
                            <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center text-2xl mb-4`}>
                                {feature.icon}
                            </div>

                            <h3 className="text-lg font-bold text-gray-900 mb-2">
                                {feature.name}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
