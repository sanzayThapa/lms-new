import React from 'react';

const categories = [
    { title: 'Management', count: '24 Courses', color: 'bg-emerald-500', icon: '📁' },
    { title: 'Information Technology', count: '48 Courses', color: 'bg-blue-500', icon: '💻' },
    { title: 'Marketing', count: '18 Courses', color: 'bg-amber-500', icon: '📊' },
    { title: 'Human Resources', count: '15 Courses', color: 'bg-indigo-500', icon: '👥' },
    { title: 'Finance', count: '12 Courses', color: 'bg-rose-500', icon: '📈' },
    { title: 'Design', count: '30 Courses', color: 'bg-purple-500', icon: '🎨' },
];

const Categories = ({ allCategories = [] }) => {
    const colors = ['bg-emerald-500', 'bg-blue-500', 'bg-amber-500', 'bg-indigo-500', 'bg-rose-500', 'bg-purple-500'];
    const icons = ['📁', '💻', '📊', '👥', '📈', '🎨', '🚀', '🧠', '⚙️', '🛡️'];

    return (
        <section className="bg-slate-50 py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                    <div className="max-w-2xl">
                        <h2 className="text-base font-bold leading-7 text-skillBlue uppercase tracking-widest mb-4">Curated content</h2>
                        <h3 className="text-4xl font-extrabold tracking-tight text-darkNavy sm:text-5xl">Explore Specialized <br /> Corporate Paths</h3>
                        <p className="mt-6 text-xl text-slate-600 leading-relaxed">
                            Empower your employees with targeted learning paths designed for the modern business landscape.
                        </p>
                    </div>
                    <div className="flex">
                        <a href="/login" className="px-6 py-3 rounded-xl border-2 border-slate-200 text-darkNavy font-bold hover:bg-white hover:border-skillBlue/20 transition-all flex items-center group">
                            All Categories
                            <span className="ml-2 transform group-hover:translate-x-1 transition-transform text-skillBlue">→</span>
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {allCategories.map((category, index) => (
                        <div key={category.id || index} className="group relative overflow-hidden rounded-[2.5rem] bg-white border border-slate-100 p-10 hover:border-skillBlue/20 shadow-sm hover:shadow-[0_30px_60px_-15px_rgba(30,115,190,0.1)] transition-all duration-500 cursor-pointer">
                            <div className="absolute top-0 right-0 -mt-4 -mr-4 h-32 w-32 bg-gradient-to-br from-skillBlue/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>

                            <div className={`mb-8 flex h-20 w-20 items-center justify-center rounded-2xl ${colors[index % colors.length]} text-4xl shadow-xl shadow-slate-100 ring-8 ring-white transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                                {icons[index % icons.length]}
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-2xl font-extrabold text-darkNavy transition-colors group-hover:text-skillBlue">
                                    {category.name}
                                </h3>
                                <div className="mt-4 flex items-center space-x-2">
                                    <span className="text-skillBlue font-bold">Programs Available</span>
                                    <span className="text-slate-300">•</span>
                                    <span className="text-slate-500 font-medium italic">Professional Certificate</span>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-slate-50 flex items-center justify-between">
                                <span className="text-sm font-bold text-slate-400 group-hover:text-skillRed transition-colors uppercase tracking-widest">Enroll Now</span>
                                <div className="h-10 w-10 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-skillBlue group-hover:border-skillBlue transition-all duration-300">
                                    <svg className="h-5 w-5 text-slate-400 group-hover:text-white transform group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
