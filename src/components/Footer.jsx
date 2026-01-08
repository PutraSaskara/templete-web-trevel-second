import React from 'react';
import { siteConfig } from '../data/site-config';
import DynamicIcon from './DynamicIcon';

const Footer = () => {
    const { global } = siteConfig;

    return (
        <footer className="bg-card-bg border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-serif font-bold text-primary mb-4">{global.siteName}</h3>
                        <p className="text-text-muted mb-6 max-w-sm">
                            {global.footer.description}
                        </p>
                        <div className="flex gap-4">
                            {Object.entries(global.social).map(([platform, url]) => (
                                <a key={platform} href={url} target='_blank' className="text-text-muted hover:text-primary transition-colors">
                                    <DynamicIcon name={platform.charAt(0).toUpperCase() + platform.slice(1)} size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-wider mb-6">Explore</h4>
                        <ul className="space-y-4 text-text-muted">
                            {global.footer.links.map((link) => (
                                <li key={link.href}>
                                    <a href={link.href} className="hover:text-primary transition">{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-wider mb-6">Contact</h4>
                        <ul className="space-y-4 text-text-muted">
                            <li className="flex items-center gap-2">
                                <DynamicIcon name="Phone" size={16} />
                                {global.contact.phone}
                            </li>
                            <li className="flex items-center gap-2">
                                <DynamicIcon name="Mail" size={16} />
                                {global.contact.email}
                            </li>
                            <li className="flex items-center gap-2">
                                <DynamicIcon name="MapPin" size={16} />
                                {global.contact.address}
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-text-muted text-sm">
                    {global.footer.copyright}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
