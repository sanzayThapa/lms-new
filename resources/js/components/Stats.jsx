import React from 'react';

const stats = [
    { label: 'Corporate Partners', value: '50+' },
    { label: 'Employees Trained', value: '10,000+' },
    { label: 'Course Completion Rate', value: '94%' },
    { label: 'Satisfaction Score', value: '4.9/5' },
];

const Stats = () => {
    return (
        <section className="relative py-24 sm:py-32 overflow-hidden">
            <div className="absolute inset-0 bg-darkNavy border-y border-slate-800"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 gap-y-16 text-center lg:grid-cols-4">
                    {stats.map((stat) => (
                        <div key={stat.label} className="mx-auto flex max-w-xs flex-col gap-y-2 group">
                            <dd className="order-first text-4xl font-extrabold tracking-tight text-white sm:text-6xl group-hover:text-skillRed transition-colors duration-300">
                                {stat.value}
                            </dd>
                            <dt className="text-sm font-bold uppercase tracking-[0.2em] text-skillBlue">
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
