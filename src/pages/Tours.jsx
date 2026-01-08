import React from 'react';
import { siteConfig } from '../data/site-config';
import TourCard from '../components/TourCard';
import SEO from '../components/SEO';

const Tours = () => {
    const { tours } = siteConfig;

    return (
        <div className="max-w-7xl mx-auto px-4 py-24">
            <SEO title="Luxury Tours" description="Explore our handpicked collection of luxury tours designed to give you the experience of a lifetime." />
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Our Exclusive Journeys</h1>
                <p className="text-lg text-text-muted max-w-2xl mx-auto">
                    Explore our handpicked collection of luxury tours designed to give you the experience of a lifetime.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tours.map((tour) => (
                    <TourCard key={tour.id} tour={tour} />
                ))}
            </div>
        </div>
    );
};

export default Tours;
