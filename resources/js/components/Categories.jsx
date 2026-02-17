import React from 'react';

const Categories = ({ allCategories = [] }) => {
    const categories = [
        { name: 'Leadership', icon: '🎯' },
        { name: 'Compliance', icon: '📋' },
        { name: 'Technology', icon: '💻' },
        { name: 'Sales', icon: '💰' },
        { name: 'HR', icon: '👥' },
        { name: 'Finance', icon: '📊' },
    ];

    return (
        <section className="py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-8">
                    <h3 className="text-lg font-bold text-gray-900">Training Categories</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {categories.map((cat, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                        >
                            <span className="text-2xl">{cat.icon}</span>
                            <span className="font-medium text-gray-900 text-sm">{cat.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
