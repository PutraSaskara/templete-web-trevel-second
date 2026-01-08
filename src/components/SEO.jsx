import React from 'react';
import { siteConfig } from '../data/site-config';

const SEO = ({ title, description, image, article = false, slug = '' }) => {
    const { metadata } = siteConfig.global;

    const pageTitle = title ? metadata.titleTemplate.replace('%s', title) : metadata.title;
    const pageDescription = description || metadata.description;
    const pageImage = image || (metadata.siteUrl + metadata.logo);
    const favicon = siteConfig.global.favicon;
    const canonicalUrl = `${metadata.siteUrl}${slug ? `/${slug}` : ''}`;

    return (
        <>
            {/* Standard Metadata */}
            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription} />
            <link rel="canonical" href={canonicalUrl} />
            <link rel="icon" type="image/svg+xml" href={favicon} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={article ? 'article' : 'website'} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={pageDescription} />
            <meta property="og:image" content={pageImage} />
            <meta property="og:site_name" content={metadata.openGraph.site_name} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={metadata.twitter.handle} />
            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:description" content={pageDescription} />
            <meta name="twitter:image" content={pageImage} />
        </>
    );
};

export default SEO;
