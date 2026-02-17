import React from 'react';
import { createRoot } from 'react-dom/client';
import Homepage from './components/Homepage';

const rootElement = document.getElementById('homepage');
if (rootElement) {
    const courseCategories = JSON.parse(rootElement.dataset.courseCategories || '[]');
    const allCategories = JSON.parse(rootElement.dataset.categories || '[]');

    const root = createRoot(rootElement);
    root.render(<Homepage courseCategories={courseCategories} allCategories={allCategories} />);
}
