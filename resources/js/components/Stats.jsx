import React from 'react';

const stats = [
    { label: 'Nepal Companies', value: '200+', icon: '🏢', color: 'bg-brand-100' },
    { label: 'Learners', value: '10K+', icon: '👨‍🎓', color: 'bg-purple-100' },
    { label: 'Courses', value: '500+', icon: '📚', color: 'bg-orange-100' },
    { label: 'Cities', value: '30+', icon: '🏙️', color: 'bg-green-100' },
];

const Stats = () => {
    return (
        <section className="py-14 bg-gray-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className={`inline-flex items-center justify-center w-14 h-14 ${stat.color} rounded-lg mb-3`}>
                                <span className="text-2xl">{stat.icon}</span>
                            </div>
                            <dd className="text-3xl font-extrabold text-gray-900 mb-1">
                                {stat.value}
                            </dd>
                            <dt className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                                {stat.label}
                            </dt>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
