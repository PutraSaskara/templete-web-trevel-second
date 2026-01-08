import React, { useState } from 'react';
import { siteConfig } from '../data/site-config';
import SEO from '../components/SEO';
import DynamicIcon from '../components/DynamicIcon';

const Contact = () => {
    const { contact: pageContact } = siteConfig.pages;
    const { contact: globalContact } = siteConfig.global;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { whatsapp, messagePrefix } = pageContact;

        // Format message
        const waMessage = `${messagePrefix}\n\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
        const encodedMessage = encodeURIComponent(waMessage);
        const waUrl = `https://wa.me/${whatsapp}?text=${encodedMessage}`;

        // Redirect to WhatsApp
        window.open(waUrl, '_blank');
    };

    const contactItems = [
        { icon: 'Phone', label: 'Phone', value: globalContact.phone },
        { icon: 'Mail', label: 'Email', value: globalContact.email },
        { icon: 'MapPin', label: 'Office', value: globalContact.address }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <SEO title="Contact Us" description="Get in touch with Saskara Luxury Travels to plan your next dream vacation." />
            <div className="opacity-0-initial animate-fade-in-left">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">{pageContact.title}</h1>
                <p className="text-text-muted text-lg mb-12">
                    Ready to start your journey? Contact us today and let us help you plan the perfect trip.
                </p>

                <div className="space-y-8">
                    {contactItems.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex items-start gap-4 opacity-0-initial animate-fade-in-up"
                            style={{ animationDelay: `${300 + (idx * 150)}ms` }}
                        >
                            <div className="bg-white/10 p-3 rounded-full text-primary">
                                <DynamicIcon name={item.icon} size={24} />
                            </div>
                            <div>
                                <h3 className="text-white font-bold mb-1">{item.label}</h3>
                                <p className="text-text-muted">{item.value}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-card-bg p-8 rounded border border-white/10 opacity-0-initial animate-fade-in-right animation-delay-200">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="opacity-0-initial animate-fade-in-up animation-delay-300">
                        <label className="block text-sm font-medium text-text-muted mb-2">Your Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full bg-background border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                            placeholder="John Doe"
                        />
                    </div>
                    <div className="opacity-0-initial animate-fade-in-up animation-delay-400">
                        <label className="block text-sm font-medium text-text-muted mb-2">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full bg-background border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                            placeholder="john@example.com"
                        />
                    </div>
                    <div className="opacity-0-initial animate-fade-in-up animation-delay-500">
                        <label className="block text-sm font-medium text-text-muted mb-2">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="4"
                            className="w-full bg-background border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                            placeholder="Tell us about your dream trip..."
                        ></textarea>
                    </div>
                    <button type="submit" className="w-full btn-primary flex justify-center items-center gap-2 opacity-0-initial animate-fade-in-up animation-delay-600">
                        Send Message <DynamicIcon name="Send" size={18} />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
