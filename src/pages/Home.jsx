import React from 'react';
import { siteConfig } from '../data/site-config';
import DynamicIcon from '../components/DynamicIcon';
import TourCard from '../components/TourCard';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const Home = () => {
    const { home } = siteConfig.pages;
    const { tours } = siteConfig;
    const featuredTours = tours.slice(0, 3); // Show first 3 tours

    return (
        <>
            <SEO />
            {/* Hero Section */}
            <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={home.hero.image}
                        alt="Hero Background"
                        className="w-full h-full object-cover brightness-[0.3]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight opacity-0-initial animate-fade-in-up">
                        {home.hero.title}
                    </h1>
                    <p className="text-lg md:text-xl text-text-muted mb-10 max-w-2xl mx-auto font-light opacity-0-initial animate-fade-in-up animation-delay-200">
                        {home.hero.subtitle}
                    </p>
                    <Link to="/tours" className="btn-primary inline-flex items-center gap-2 group opacity-0-initial animate-fade-in-up animation-delay-400">
                        {home.hero.cta}
                        <DynamicIcon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 opacity-0-initial animate-fade-in-up">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">{home.features.title}</h2>
                        <div className="h-1 w-20 bg-primary mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {home.features.items.map((feature, idx) => (
                            <div
                                key={idx}
                                className={`bg-card-bg p-8 rounded border border-white/5 hover:border-primary transition-colors group opacity-0-initial animate-fade-in-up animation-delay-${(idx + 1) * 100}`}
                                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                            >
                                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-background transition-colors">
                                    <DynamicIcon name={feature.icon} size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                <p className="text-text-muted text-sm leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Tours Section */}
            <section className="py-24 bg-card-bg relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-end mb-12 opacity-0-initial animate-fade-in-up">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">Featured Journeys</h2>
                            <p className="text-text-muted">Handpicked experiences for the wanderlust in you.</p>
                        </div>
                        <Link to="/tours" className="hidden md:flex items-center gap-2 text-primary hover:text-white transition-colors">
                            View All <DynamicIcon name="ArrowRight" size={16} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {featuredTours.map((tour, idx) => (
                            <div
                                key={tour.id}
                                className="opacity-0-initial animate-fade-in-up"
                                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
                            >
                                <TourCard tour={tour} />
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 text-center md:hidden">
                        <Link to="/tours" className="btn-primary text-sm">View All Tours</Link>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-24 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-white text-center mb-16 opacity-0-initial animate-fade-in-up">{home.testimonials.title}</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {home.testimonials.items.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-card-bg p-8 rounded border border-white/5 flex gap-6 opacity-0-initial animate-fade-in-up hover:border-primary/50 transition-colors"
                                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
                            >
                                <img src={item.avatar} alt={item.name} className="w-16 h-16 rounded-full object-cover border-2 border-primary" />
                                <div>
                                    <div className="flex gap-1 text-primary mb-2">
                                        {[...Array(item.rating)].map((_, i) => (
                                            <DynamicIcon key={i} name="Star" size={14} className="fill-current" />
                                        ))}
                                    </div>
                                    <p className="text-white text-lg italic mb-4">"{item.text}"</p>
                                    <div>
                                        <h4 className="font-bold text-primary">{item.name}</h4>
                                        <p className="text-xs text-text-muted uppercase tracking-wider">{item.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
