import React from 'react';

const CTA = () => {
    return (
        <section className="py-14 bg-gray-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800"></div>
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 25px 25px, white 2%, transparent 0%), radial-gradient(circle at 75px 75px, white 2%, transparent 0%)`,
                    backgroundSize: '100px 100px'
                }}></div>
            </div>

            <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-brand-500/10 border border-brand-500/20 text-brand-300 text-sm font-semibold mb-6">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    Start Your Journey Today
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                    Transform Your Workforce with{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-cyan-400">
                        SkillBest Nepal
                    </span>
                </h2>

                <p className="text-base text-gray-400 leading-relaxed mb-6 max-w-2xl mx-auto">
                    Join 200+ Nepali companies already empowering their teams.
                    Get a free consultation for your organization.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                        href="/register"
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-brand-600 text-white font-medium text-sm hover:bg-brand-700 transition-all"
                    >
                        Get Started Free
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </a>
                    <a
                        href="/courses"
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-gray-600 text-white font-medium text-sm hover:bg-gray-800 transition-all"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CTA;
