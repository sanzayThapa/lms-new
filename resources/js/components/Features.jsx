import React from 'react';

const features = [
    {
        name: 'Corporate Compliance',
        description: 'Ensure your employees meet industry standards with automated tracking and reporting.',
        icon: (
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.744c0 1.5.397 2.898 1.05 4.104l.43.834a3.75 3.75 0 003.352 1.832h6.336a3.75 3.75 0 003.352-1.832l.43-.834a11.947 11.947 0 001.05-4.104c0-1.303-.204-2.559-.598-3.744A11.959 11.959 0 0112 2.714z" />
            </svg>
        ),
    },
    {
        name: 'Skill Assessments',
        description: 'Benchmark employee skills with interactive quizzes and real-time performance feedback.',
        icon: (
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18c-2.305 0-4.408.867-6 2.292m0-14.25v14.25" />
            </svg>
        ),
    },
    {
        name: 'Progress Analytics',
        description: 'Comprehensive dashboards for HR and managers to visualize team advancement.',
        icon: (
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
            </svg>
        ),
    },
];

const Features = () => {
    return (
        <section className="bg-white py-32 relative">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl lg:text-center">
                    <h2 className="text-base font-bold leading-7 text-skillBlue uppercase tracking-widest">Enterprise solutions</h2>
                    <p className="mt-4 text-4xl font-extrabold tracking-tight text-darkNavy sm:text-5xl">
                        Unleash the potential of your <br /> corporate workforce
                    </p>
                    <p className="mt-6 text-xl leading-8 text-slate-600 max-w-2xl mx-auto">
                        We provide high-impact training and management tools that drive measurable results for businesses in Nepal.
                    </p>
                </div>
                <div className="mx-auto mt-20 max-w-2xl sm:mt-24 lg:mt-32 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-10 gap-y-12 lg:max-w-none lg:grid-cols-3">
                        {features.map((feature) => (
                            <div key={feature.name} className="flex flex-col items-start p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 transition-all duration-300 hover:shadow-[0_20px_40px_-10px_rgba(30,115,190,0.1)] hover:-translate-y-2 group">
                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-skillBlue to-blue-700 shadow-lg shadow-skillBlue/20 mb-8 transform group-hover:rotate-6 transition-transform">
                                    <div className="text-white">
                                        {feature.icon}
                                    </div>
                                </div>
                                <dt className="text-2xl font-bold leading-7 text-darkNavy">
                                    {feature.name}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-lg leading-7 text-slate-600 font-light">
                                    <p className="flex-auto">{feature.description}</p>
                                    <p className="mt-6">
                                        <a href="#" className="text-sm font-bold leading-6 text-skillBlue flex items-center group-hover:text-skillRed transition-colors">
                                            Learn more <span className="ml-1 transform group-hover:translate-x-1 transition-transform">→</span>
                                        </a>
                                    </p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        </section>
    );
};

export default Features;
