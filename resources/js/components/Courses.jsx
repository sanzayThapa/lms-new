import React, { useState } from 'react';

const Courses = ({ courseCategories = [] }) => {
    const activeCategories = courseCategories.filter(cat => cat.course && cat.course.length > 0);
    const [activeTab, setActiveTab] = useState(activeCategories[0]?.id || 'all');

    const currentCategory = activeCategories.find(cat => cat.id === activeTab);
    const displayCourses = currentCategory?.course || [];

    const sampleCourses = [
        { id: 1, course_name: 'Leadership & Management Excellence', course_name_slug: 'leadership', bestseller: 'yes', selling_price: 99, discount_price: 49, user: { name: 'John Smith' }, image: '1516321318423-f06f85e504b3' },
        { id: 2, course_name: 'Corporate Compliance & Ethics', course_name_slug: 'compliance', bestseller: null, selling_price: 129, discount_price: 79, user: { name: 'Sarah Johnson' }, image: '1587620962725-abab7fe55159' },
        { id: 3, course_name: 'Data Security for Enterprise', course_name_slug: 'security', bestseller: 'yes', selling_price: 89, discount_price: 39, user: { name: 'Mike Brown' }, image: '1633356122544-f134324a6cee' },
        { id: 4, course_name: 'Effective Business Communication', course_name_slug: 'communication', bestseller: null, selling_price: 149, discount_price: 89, user: { name: 'Emily Davis' }, image: '1517694712202-14dd9538aa97' },
    ];

    const coursesToShow = displayCourses.length > 0 ? displayCourses : sampleCourses;
    const tabs = activeCategories.length > 0 ? activeCategories : [
        { id: 'all', name: 'All Solutions' },
        { id: 'popular', name: 'Popular' },
        { id: 'new', name: 'New' },
    ];

    return (
        <section className="py-14 bg-gray-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <span className="inline-block px-3 py-1 rounded-md bg-brand-100 text-brand-600 text-sm font-semibold mb-3">
                        Training Solutions
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                        Enterprise{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-purple-600">
                            Programs
                        </span>
                    </h2>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${activeTab === tab.id
                                    ? 'bg-brand-600 text-white'
                                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                                }`}
                        >
                            {tab.name}
                        </button>
                    ))}
                </div>

                {/* Course grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {coursesToShow.slice(0, 4).map((course, index) => (
                        <div
                            key={course.id || index}
                            className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                        >
                            {/* Image */}
                            <div className="relative h-36 overflow-hidden">
                                <img
                                    src={`https://images.unsplash.com/photo-${course.image}?auto=format&fit=crop&q=80&w=400`}
                                    alt={course.course_name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                {course.bestseller === 'yes' && (
                                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-bold">
                                        Popular
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-4">
                                <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-2">
                                    <a href={`/course/details/${course.course_name_slug}`}>
                                        {course.course_name}
                                    </a>
                                </h3>

                                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                                    <div>
                                        <span className="text-sm text-gray-400 line-through">${course.selling_price}</span>
                                        <span className="ml-1 text-lg font-bold text-brand-600">${course.discount_price}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View all */}
                <div className="mt-8 text-center">
                    <a
                        href="/courses"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 text-white font-medium text-sm hover:bg-brand-700 transition-all"
                    >
                        View All Programs
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Courses;
