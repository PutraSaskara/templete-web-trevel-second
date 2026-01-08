import React from 'react';
import { siteConfig } from '../data/site-config';
import SEO from '../components/SEO';

const About = () => {
    const { title, content } = siteConfig.pages.about;

    return (
        <div className="max-w-4xl mx-auto px-4 py-24">
            <SEO title="About Us" description={content.substring(0, 150) + "..."} />
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 text-center">{title}</h1>
            <div className="prose prose-invert prose-lg mx-auto text-text-muted">
                <p>{content}</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
    );
};

export default About;
