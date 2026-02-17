import React from 'react';

const Hero = () => {
    return (
        <section className="relative bg-navy-900 overflow-hidden">
            {/* Background orbs */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-600/20 rounded-full blur-[150px] animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-purple/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '4s' }}></div>
            <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-brand-400/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '6s' }}></div>

            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

            {/* Floating shapes */}
            <div className="absolute top-20 left-10 w-4 h-4 bg-brand-400 rounded-full animate-bounce" style={{ animationDuration: '2s' }}></div>
            <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '2.5s' }}></div>
            <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
                <div className="lg:grid lg:grid-cols-2 lg:gap-x-16 lg:items-center">
                    {/* Left Content */}
                    <div className="max-w-2xl">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-brand-500/10 border border-brand-500/20 mb-6 animate-fade-in-up">
                            <span className="w-2 h-2 bg-brand-400 rounded-full animate-ping"></span>
                            <span className="text-sm font-semibold text-brand-300">Nepal's #1 Corporate LMS</span>
                        </div>

                        {/* Headline */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                            SkillBest{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-brand-300 to-accent-cyan animate-gradient">
                                Nepal
                            </span>
                            <br />Corporate Training
                        </h1>

                        <p className="mt-6 text-lg text-slate-400 leading-relaxed max-w-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            Nepal's leading corporate training platform. Empower your workforce with world-class
                            learning solutions designed for Nepali businesses.
                        </p>

                        {/* CTA Buttons */}
                        <div className="mt-8 flex flex-col sm:flex-row gap-3 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                            <a
                                href="/register"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-600 text-white font-semibold hover:bg-brand-700 transition-all shadow-lg shadow-brand-600/25 hover:scale-105 transform"
                            >
                                Get Started
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>
                            <a
                                href="/courses"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-slate-600 text-white font-semibold hover:bg-slate-800 transition-all hover:scale-105 transform"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                </svg>
                                View Courses
                            </a>
                        </div>

                        {/* Trust */}
                        <div className="mt-10 flex items-center gap-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            <div className="flex -space-x-3">
                                {['https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=50', 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=50', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=50'].map((src, i) => (
                                    <img key={i} src={src} alt="" className="w-10 h-10 rounded-full border-2 border-navy-900 hover:scale-110 transition-transform" />
                                ))}
                            </div>
                            <div>
                                <p className="text-lg font-bold text-white">200+</p>
                                <p className="text-sm text-slate-400">Nepal Companies</p>
                            </div>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="mt-12 lg:mt-0 relative">
                        <div className="relative animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                            <div className="absolute inset-0 bg-gradient-to-r from-brand-500 to-accent-cyan rounded-xl blur-2xl opacity-40 animate-pulse"></div>

                            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-slate-700 group">
                                <img
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200"
                                    alt="SkillBest Nepal Corporate Training"
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent"></div>
                            </div>

                            {/* Floating cards */}
                            <div className="absolute -left-6 top-1/4 bg-navy-800 rounded-lg p-4 shadow-xl border border-slate-700 animate-bounce" style={{ animationDuration: '3s' }}>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-bold text-white">98%</p>
                                        <p className="text-xs text-slate-400">Satisfaction</p>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -right-4 bottom-1/4 bg-navy-800 rounded-lg p-4 shadow-xl border border-slate-700 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-brand-500/20 flex items-center justify-center">
                                        <span className="text-xl">🇳🇵</span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-white">10K+</p>
                                        <p className="text-xs text-slate-400">Learners</p>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-lg px-4 py-2 shadow-xl">
                                <div className="flex items-center gap-2">
                                    <div className="flex -space-x-1">
                                        <span className="text-2xl">⭐</span>
                                        <span className="text-2xl">⭐</span>
                                        <span className="text-2xl">⭐</span>
                                        <span className="text-2xl">⭐</span>
                                        <span className="text-2xl">⭐</span>
                                    </div>
                                    <span className="text-sm font-bold text-gray-900">4.9/5</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Wave */}
            <div className="absolute bottom-0 left-0 right-0 h-20 -mb-1">
                <svg className="w-full h-full text-white" viewBox="0 0 1440 100" preserveAspectRatio="none" fill="currentColor">
                    <path d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z"></path>
                </svg>
            </div>

            <style>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes gradient {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                .animate-fade-in-up {
                    animation: fadeInUp 0.6s ease-out forwards;
                    opacity: 0;
                }
                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradient 3s ease infinite;
                }
            `}</style>
        </section>
    );
};

export default Hero;
