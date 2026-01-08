import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { siteConfig } from '../data/site-config';
import DynamicIcon from '../components/DynamicIcon';
import SEO from '../components/SEO';

const TourDetail = () => {
    const { slug } = useParams();
    const tour = siteConfig.tours.find(t => t.slug === slug);

    if (!tour) {
        return (
            <div className="min-h-[50vh] flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-3xl font-bold text-white mb-4">Tour Not Found</h1>
                <p className="text-text-muted mb-6">The tour you are looking for does not exist.</p>
                <Link to="/tours" className="btn-primary">Browse Tours</Link>
            </div>
        );
    }

    return (
        <>
            <SEO
                title={tour.title}
                description={tour.description}
                image={tour.image}
                slug={`tours/${tour.slug}`}
            />
            {/* Hero */}
            <div className="relative h-[60vh]">
                <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover brightness-[0.4]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
                    <div className="max-w-7xl mx-auto">
                        <div className="inline-block bg-primary text-background px-3 py-1 rounded text-sm font-bold mb-4">
                            {tour.duration}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">{tour.title}</h1>
                        <p className="text-xl md:text-2xl text-primary font-bold">{tour.price}</p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="col-span-1 lg:col-span-2 space-y-12">
                    <div>
                        <h2 className="text-2xl font-serif font-bold text-white mb-6">Overview</h2>
                        <p className="text-text-muted text-lg leading-relaxed">
                            {tour.description}
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-serif font-bold text-white mb-6">Highlights</h2>
                        <ul className="space-y-4">
                            {tour.highlights.map((highlight, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-text-muted">
                                    <DynamicIcon name="CheckCircle" className="text-primary mt-1 min-w-[20px]" size={20} />
                                    <span>{highlight}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="col-span-1">
                    <div className="bg-card-bg p-8 rounded border border-white/10 sticky top-24">
                        <h3 className="text-xl font-bold text-white mb-6">Book This Tour</h3>
                        <p className="text-text-muted text-sm mb-6">
                            Interested in this trip? Contact us via WhatsApp to check availability and book your spot.
                        </p>

                        <a
                            href={`https://wa.me/${siteConfig.pages.contact.whatsapp}?text=${encodeURIComponent(`Hello, I am interested in booking the tour: ${tour.title}. Please provide more details.`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full btn-primary flex justify-center items-center gap-2"
                        >
                            Book Now <DynamicIcon name="MessageCircle" size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TourDetail;
