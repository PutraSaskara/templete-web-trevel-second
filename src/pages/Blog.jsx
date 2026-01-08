import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/site-config';
import DynamicIcon from '../components/DynamicIcon';
import SEO from '../components/SEO';

const Blog = () => {
    const { posts } = siteConfig;
    const { title, subtitle } = siteConfig.pages.blog;

    return (
        <div className="max-w-7xl mx-auto px-4 py-24">
            <SEO title={title} description={subtitle} slug="blog" />
            {/* Header */}
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">{title}</h1>
                <p className="text-lg text-text-muted max-w-2xl mx-auto">
                    {subtitle}
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                    <Link to={`/blog/${post.slug}`} key={post.id} className="group block h-full">
                        <div className="card h-full flex flex-col relative bg-card-bg rounded border border-white/10 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary">
                            {/* Image Container */}
                            <div className="relative aspect-[16/9] overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
                                <div className="absolute top-4 left-4 bg-background/90 backdrop-blur px-3 py-1 rounded text-text-muted text-xs font-medium uppercase tracking-wider">
                                    {post.date}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="text-text-muted text-sm mb-4 line-clamp-3 leading-relaxed">
                                    {post.excerpt}
                                </p>

                                <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between text-xs text-text-muted">
                                    <span className="flex items-center gap-1">
                                        <DynamicIcon name="User" size={12} /> {post.author}
                                    </span>
                                    <span className="flex items-center gap-1 text-primary group-hover:translate-x-1 transition-transform">
                                        Read Article <DynamicIcon name="ArrowRight" size={12} />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Blog;
