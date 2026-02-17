import React from 'react';
import Hero from './Hero';
import Features from './Features';
import Stats from './Stats';
import Categories from './Categories';
import Courses from './Courses';
import ClientStories from './ClientStories';
import CTA from './CTA';

const Homepage = ({ courseCategories, allCategories }) => {
    return (
        <div className="bg-slate-50 min-h-screen">
            <Hero />
            <Features />
            <Courses courseCategories={courseCategories} />
            <Stats />
            <Categories allCategories={allCategories} />
            <ClientStories />
            <CTA />
        </div>
    );
};

export default Homepage;
