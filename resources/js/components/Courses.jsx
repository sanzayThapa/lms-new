import React, { useState } from 'react';

const Courses = ({ courseCategories = [] }) => {
    // Filter out categories that have no courses
    const activeCategories = courseCategories.filter(cat => cat.course && cat.course.length > 0);
    const [activeTab, setActiveTab] = useState(activeCategories[0]?.id || null);

    const currentCategory = activeCategories.find(cat => cat.id === activeTab);
    const displayCourses = currentCategory?.course || [];

    return (
        <section className="bg-slate-50 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold tracking-widest text-skillBlue uppercase mb-4">Training Programs</h2>
                    <h3 className="text-4xl font-extrabold tracking-tight text-darkNavy sm:text-5xl">
                        Programs That Drive <span className="text-skillRed">Results</span>
                    </h3>
                </div>

                {/* Tabs inspired by the previous Laravel layout */}
                {activeCategories.length > 1 && (
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {activeCategories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveTab(cat.id)}
                                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === cat.id
                                    ? 'bg-skillBlue text-white shadow-lg'
                                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                                    }`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                )}

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {displayCourses.slice(0, 4).map((course, index) => (
                        <div key={course.id || index} className="group relative bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            {/* Top blue accent bar from image */}
                            <div className="h-2 w-full bg-skillBlue"></div>

                            <div className="p-8">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                                        {currentCategory?.name || 'COURSE'}
                                    </span>
                                    {course.bestseller === 'yes' && (
                                        <span className="px-3 py-1 rounded-full text-[10px] font-bold text-white shadow-sm bg-skillRed">
                                            Bestseller
                                        </span>
                                    )}
                                </div>

                                <h4 className="text-xl font-bold text-darkNavy mb-6 h-14 overflow-hidden leading-tight group-hover:text-skillBlue transition-colors">
                                    <a href={`/course/details/${course.course_name_slug}`}>
                                        {course.course_name}
                                    </a>
                                </h4>

                                <div className="flex items-center gap-4 text-slate-500 text-sm mb-8">
                                    <div className="flex items-center gap-1">
                                        <span className="text-amber-400">★</span>
                                        <span className="font-semibold text-darkNavy">4.8</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                        <span>Training Case Studies</span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex flex-col">
                                        <span className="text-xs text-slate-400 line-through">${course.selling_price}</span>
                                        <span className="text-lg font-bold text-skillBlue">${course.discount_price}</span>
                                    </div>
                                    <div className="text-[10px] font-bold text-slate-400 uppercase italic">
                                        {course.user?.name || 'Instructor'}
                                    </div>
                                </div>

                                <a
                                    href={`/course/details/${course.course_name_slug}`}
                                    className="block w-full py-3 text-center rounded-xl border border-slate-200 text-slate-600 font-bold text-sm hover:bg-slate-50 hover:border-skillBlue/30 hover:text-skillBlue transition-all"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a href="/login" className="inline-block px-8 py-4 bg-white rounded-xl border border-slate-200 text-darkNavy font-bold hover:bg-slate-50 hover:shadow-lg transition-all">
                        View All Programs
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Courses;
