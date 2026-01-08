import React from 'react';
import { Link } from 'react-router-dom';
import DynamicIcon from './DynamicIcon';

const TourCard = ({ tour }) => {
    return (
        <Link to={`/tour/${tour.slug}`} className="group block h-full">
            <div className="card h-full flex flex-col relative">
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                        src={tour.image}
                        alt={tour.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
                    <div className="absolute top-4 right-4 bg-background/90 backdrop-blur px-3 py-1 rounded text-primary text-sm font-bold">
                        {tour.duration}
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-primary transition-colors">
                        {tour.title}
                    </h3>
                    <p className="text-text-muted text-sm mb-4 line-clamp-2">
                        {tour.description}
                    </p>

                    <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/10">
                        <div className="text-primary font-bold text-lg">
                            {tour.price}
                        </div>
                        <div className="text-text-muted text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                            View Detail <DynamicIcon name="ArrowRight" size={16} />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default TourCard;
