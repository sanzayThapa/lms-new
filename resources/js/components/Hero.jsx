import React from 'react';

const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-darkNavy pt-20 pb-32 lg:pt-32 lg:pb-48">
            <div className="absolute inset-0 bg-[radial-gradient(45%_40%_at_50%_40%,rgba(30,115,190,0.15)_0%,transparent_100%)]"></div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="lg:grid lg:grid-cols-2 lg:gap-x-16 lg:items-center">
                    <div className="max-w-2xl lg:max-w-lg">
                        <div className="inline-flex items-center space-x-2 rounded-full bg-skillBlue/10 backdrop-blur-sm px-4 py-1.5 text-sm font-medium leading-6 text-skillBlue ring-1 ring-inset ring-skillBlue/20">
                            <span className="flex h-2 w-2 rounded-full bg-skillRed animate-pulse mr-2"></span>
                            <span>Nepal's Premier Corporate LMS</span>
                        </div>
                        <h1 className="mt-8 text-5xl font-extrabold tracking-tight text-white sm:text-7xl leading-[1.1]">
                            Excellence in <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-skillBlue to-blue-400">
                                Digital Learning
                            </span>
                        </h1>
                        <p className="mt-8 text-xl leading-8 text-slate-300 font-normal">
                            SkillBest Nepal provides world-class training solutions tailored for the corporate workforce. Empowering your team with the skills of tomorrow, today.
                        </p>
                        <div className="mt-12 flex flex-col sm:flex-row items-center gap-6">
                            <a
                                href="/instructor/register"
                                className="w-full sm:w-auto rounded-xl bg-skillRed px-8 py-4 text-base font-bold text-white shadow-[0_10px_20px_-5px_rgba(225,101,94,0.4)] hover:bg-red-500 hover:shadow-[0_15px_25px_-5px_rgba(225,101,94,0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-skillRed transition-all duration-300 transform hover:-translate-y-1 text-center"
                            >
                                Request a Demo
                            </a>
                            <a href="/login" className="text-base font-bold leading-6 text-slate-100 hover:text-skillBlue transition-colors flex items-center group">
                                Explore Courses
                                <span className="ml-2 transform group-hover:translate-x-1 transition-transform text-skillBlue">→</span>
                            </a>
                        </div>
                        <div className="mt-12 pt-8 border-t border-slate-800 flex items-center space-x-8">
                            <div>
                                <p className="text-2xl font-bold text-white">50+</p>
                                <p className="text-sm text-slate-400 font-medium">Clients</p>
                            </div>
                            <div className="w-px h-8 bg-slate-800"></div>
                            <div>
                                <p className="text-2xl font-bold text-white">10k+</p>
                                <p className="text-sm text-slate-400 font-medium">Learners</p>
                            </div>
                            <div className="w-px h-8 bg-slate-800"></div>
                            <div>
                                <p className="text-2xl font-bold text-white">98%</p>
                                <p className="text-sm text-slate-400 font-medium">Success Rate</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-20 lg:mt-0 relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-8 border-slate-800 group">
                            <div className="absolute inset-0 bg-skillBlue/10 group-hover:bg-transparent transition-colors duration-500"></div>
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070"
                                alt="Professional training session"
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        {/* Abstract floating elements */}
                        <div className="absolute -top-10 -right-10 h-32 w-32 bg-skillBlue/20 rounded-full blur-3xl opacity-60"></div>
                        <div className="absolute -bottom-10 -left-10 h-40 w-40 bg-skillRed/10 rounded-full blur-3xl opacity-60"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
