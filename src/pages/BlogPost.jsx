import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { siteConfig } from '../data/site-config';
import DynamicIcon from '../components/DynamicIcon';
import SEO from '../components/SEO';

const BlogPost = () => {
    const { slug } = useParams();
    const post = siteConfig.posts.find(p => p.slug === slug);
    const [showCopied, setShowCopied] = useState(false);

    const handleShare = async () => {
        const shareData = {
            title: post?.title || 'Article',
            text: post?.excerpt || '',
            url: window.location.href
        };

        try {
            // Try native share API first (mobile/modern browsers)
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                // Fallback: copy to clipboard
                await navigator.clipboard.writeText(window.location.href);
                setShowCopied(true);
                setTimeout(() => setShowCopied(false), 2000);
            }
        } catch (err) {
            // If share was cancelled or failed, try clipboard
            if (err.name !== 'AbortError') {
                try {
                    await navigator.clipboard.writeText(window.location.href);
                    setShowCopied(true);
                    setTimeout(() => setShowCopied(false), 2000);
                } catch {
                    console.error('Failed to copy URL');
                }
            }
        }
    };

    if (!post) {
        return (
            <div className="min-h-[50vh] flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-3xl font-bold text-white mb-4">Article Not Found</h1>
                <p className="text-text-muted mb-6">The article you are looking for does not exist.</p>
                <Link to="/blog" className="btn-primary">Back to Journal</Link>
            </div>
        );
    }

    return (
        <article className="min-h-screen pb-24">
            <SEO
                title={post.title}
                description={post.excerpt}
                image={post.image}
                article={true}
                slug={`blog/${post.slug}`}
            />
            {/* Hero / Header */}
            <div className="relative h-[50vh] w-full">
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover brightness-[0.3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>

                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <div className="inline-flex items-center gap-4 text-sm text-text-muted mb-6 uppercase tracking-widest justify-center opacity-0-initial animate-fade-in-down">
                            <span>{post.date}</span>
                            <span className="w-1 h-1 bg-primary rounded-full"></span>
                            <span>{post.author}</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight mb-8 opacity-0-initial animate-fade-in-up animation-delay-200">
                            {post.title}
                        </h1>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-3xl mx-auto px-4 -mt-10 relative z-10">
                <div className="bg-card-bg p-8 md:p-12 rounded border border-white/10 shadow-xl opacity-0-initial animate-scale-in animation-delay-400">
                    <div
                        className="prose prose-invert prose-lg max-w-none prose-headings:font-serif prose-headings:text-white prose-p:text-text-muted prose-li:text-text-muted prose-strong:text-white prose-a:text-primary hover:prose-a:text-white transition-colors"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    <div className="mt-12 pt-8 border-t border-white/10 flex justify-between items-center opacity-0-initial animate-fade-in-up animation-delay-600">
                        <Link to="/blog" className="text-text-muted hover:text-white flex items-center gap-2 transition-colors">
                            <DynamicIcon name="ArrowLeft" size={16} /> Back to Journal
                        </Link>
                        <div className="flex gap-4 relative">
                            <button
                                onClick={handleShare}
                                className="text-text-muted hover:text-primary transition-colors flex items-center gap-2"
                                title="Share this article"
                            >
                                <DynamicIcon name={showCopied ? "Check" : "Share2"} size={20} />
                                {showCopied && <span className="text-sm text-primary">Link copied!</span>}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default BlogPost;
