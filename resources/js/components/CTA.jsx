import React from 'react';

const CTA = () => {
    return (
        <section className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="relative isolate overflow-hidden bg-darkNavy px-6 py-24 shadow-2xl rounded-[3rem] sm:px-24 xl:py-32">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl mb-8 leading-[1.1]">
                            Ready to Transform <br />
                            <span className="text-skillRed italic">Your Workforce?</span>
                        </h2>
                        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-300">
                            Join 100+ organizations already empowering their teams with SkillBest.
                            Let's build a custom training plan for your company.
                        </p>
                        <div className="mt-12 flex items-center justify-center">
                            <a
                                href="/instructor/register"
                                className="flex items-center gap-2 rounded-xl bg-skillBlue px-8 py-4 text-lg font-bold text-white shadow-lg hover:bg-blue-600 transition-all transform hover:-translate-y-1"
                            >
                                Schedule a Consultation
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute -top-24 -left-24 h-96 w-96 bg-skillBlue/10 rounded-full blur-3xl opacity-50"></div>
                    <div className="absolute -bottom-24 -right-24 h-96 w-96 bg-skillRed/10 rounded-full blur-3xl opacity-50"></div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
