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

    return (
        <div className="max-w-7xl mx-auto px-4 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <SEO title="Contact Us" description="Get in touch with Saskara Luxury Travels to plan your next dream vacation." />
            <div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">{pageContact.title}</h1>
                <p className="text-text-muted text-lg mb-12">
                    Ready to start your journey? Contact us today and let us help you plan the perfect trip.
                </p>

                <div className="space-y-8">
                    <div className="flex items-start gap-4">
                        <div className="bg-white/10 p-3 rounded-full text-primary">
                            <DynamicIcon name="Phone" size={24} />
                        </div>
                        <div>
                            <h3 className="text-white font-bold mb-1">Phone</h3>
                            <p className="text-text-muted">{globalContact.phone}</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="bg-white/10 p-3 rounded-full text-primary">
                            <DynamicIcon name="Mail" size={24} />
                        </div>
                        <div>
                            <h3 className="text-white font-bold mb-1">Email</h3>
                            <p className="text-text-muted">{globalContact.email}</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="bg-white/10 p-3 rounded-full text-primary">
                            <DynamicIcon name="MapPin" size={24} />
                        </div>
                        <div>
                            <h3 className="text-white font-bold mb-1">Office</h3>
                            <p className="text-text-muted">{globalContact.address}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-card-bg p-8 rounded border border-white/10">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
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
                    <div>
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
                    <div>
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
                    <button type="submit" className="w-full btn-primary flex justify-center items-center gap-2">
                        Send Message <DynamicIcon name="Send" size={18} />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
