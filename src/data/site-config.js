export const siteConfig = {
    theme: {
        colors: {
            primary: "#D4AF37",    // Gold - Luxurious and stands out on dark
            secondary: "#64748B",  // Slate 500 - Muted secondary
            background: "#020617", // Slate 950 - Deep dark blue/black
            cardBg: "#0F172A",     // Slate 900 - Slightly lighter for cards
            text: "#F8FAFC",       // Slate 50 - Very readable white
            textMuted: "#94A3B8",  // Slate 400 - Muted text
            accent: "#38BDF8",     // Sky 400 - Subtle accent
        },
        layout: {
            radius: "0.5rem",
        },
        font: {
            sans: "Inter",
            serif: "Playfair Display"
        }
    },
    global: {
        siteName: "Elysian Odyssey",
        logo: "/logo.svg",
        favicon: "/vite.svg", // Default favicon
        metadata: {
            title: "Elysian Odyssey | Luxury Travel Curators",
            titleTemplate: "%s | Elysian Odyssey",
            description: "Journey beyond ordinary. Curated luxury experiences for discerning travelers seeking transformative adventures.",
            siteUrl: "https://elysianodyssey.com",
            openGraph: {
                type: "website",
                locale: "en_US",
                url: "https://elysianodyssey.com",
                site_name: "Elysian Odyssey",
            },
            twitter: {
                handle: "@elysianodyssey",
                site: "@elysianodyssey",
                cardType: "summary_large_image",
            },
        },
        social: {
            facebook: "https://www.facebook.com/elysianodyssey",
            instagram: "https://www.instagram.com/elysianodyssey",
            twitter: "https://www.twitter.com/elysianodyssey",
        },
        contact: {
            phone: "+6281234567890",
            email: "journey@elysianodyssey.com",
            address: "Bali, Indonesia"
        },
        footer: {
            description: "Crafting transformative journeys beyond imagination. We orchestrate experiences that redefine luxury travel.",
            copyright: "© 2026 Elysian Odyssey. All rights reserved.",
            links: [
                { label: "Voyages", href: "/tours" },
                { label: "Chronicles", href: "/blog" },
                { label: "Our Ethos", href: "/about" },
                { label: "Concierge", href: "/contact" }
            ]
        }
    },
    pages: {
        home: {
            hero: {
                title: "Journey Beyond Ordinary",
                subtitle: "Experience transformative luxury travel. Curated odysseys for the discerning soul.",
                cta: "Explore Voyages",
                image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop"
            },
            features: {
                title: "The Elysian Promise",
                items: [
                    { title: "Exclusive Access", description: "Unlock doors to hidden sanctuaries and private realms.", icon: "Key" },
                    { title: "24/7 Concierge", description: "Dedicated journey curator available around the clock.", icon: "Headset" },
                    { title: "Price Assurance", description: "Exceptional value for unparalleled experiences.", icon: "Tag" },
                    { title: "Local Sages", description: "Native guides with deep cultural insights.", icon: "Compass" }
                ]
            },
            testimonials: {
                title: "Voices from Our Voyagers",
                items: [
                    { name: "Sarah J.", role: "Travel Enthusiast", text: "A transformative experience that redefined how I see the world.", rating: 5, avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
                    { name: "Michael T.", role: "CEO", text: "Impeccable curation. Every moment was a masterpiece.", rating: 5, avatar: "https://randomuser.me/api/portraits/men/32.jpg" }
                ]
            }
        },
        about: {
            title: "Our Ethos",
            content: "We are curators of extraordinary journeys, crafting experiences that transcend mere travel to become transformative odysseys."
        },
        contact: {
            title: "Begin Your Odyssey",
            whatsapp: "6285792942449",
            messagePrefix: "Hello Elysian Odyssey, I'm interested in learning more about..."
        },
        blog: {
            title: "Odyssey Chronicles",
            subtitle: "Narratives, insights, and inspirations from the world's hidden corners."
        }
    },
    tours: [
        {
            id: "bali-bliss",
            slug: "balinese-serenity-retreat",
            title: "Balinese Serenity Retreat",
            price: "$1,200",
            duration: "5 Days",
            description: "Immerse in Bali's spiritual tapestry. From ancient temples to pristine beaches in curated seclusion.",
            image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2076&auto=format&fit=crop",
            highlights: ["Uluwatu Temple", "Ubud Sacred Forest", "Nusa Penida Secrets"]
        },
        {
            id: "swiss-alps",
            slug: "alpine-symphony-expedition",
            title: "Alpine Symphony Expedition",
            price: "$2,500",
            duration: "7 Days",
            description: "Conquer majestic Swiss peaks. Luxury chalets, private skiing, and alpine wonders await.",
            image: "https://images.unsplash.com/photo-1502759683299-cdcd6974244f?q=80&w=2070&auto=format&fit=crop",
            highlights: ["Zermatt Private Access", "Matterhorn Sunrise", "Lake Geneva Yachting"]
        },
        {
            id: "kyoto-culture",
            slug: "kyoto-heritage-immersion",
            title: "Kyoto Heritage Immersion",
            price: "$1,800",
            duration: "6 Days",
            description: "Step into ancient Japan's soul. Private tea ceremonies, temple stays, and cultural mastery.",
            image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop",
            highlights: ["Golden Pavilion Private Viewing", "Fushimi Inari Dawn Experience", "Arashiyama Bamboo Forest"]
        }
    ],
    posts: [
        {
            id: 1,
            slug: "balinese-temple-etiquette",
            title: "The Sacred and the Profane: A Global Traveler's Guide to Balinese Temple Etiquette",
            date: "January 15, 2026",
            author: "Dr. Alexandra Chen",
            excerpt: "Navigating Bali's spiritual landscape requires cultural sensitivity. Our comprehensive guide ensures you honor traditions while experiencing profound cultural immersion.",
            content: `
            <p>Bali's temples are not merely historical sites but active centers of spiritual life where ancient traditions continue to unfold daily. For the discerning traveler, understanding temple etiquette transforms a tourist visit into a meaningful cultural exchange.</p>
            
            <h3>The Philosophy of Respect in Balinese Hinduism</h3>
            <p>Balinese Hinduism (Agama Hindu Dharma) is interwoven with animist traditions, creating a unique spiritual landscape where every space has sacred significance. The concept of 'Tri Hita Karana'—harmony with God, people, and nature—guides all interactions.</p>
            <p>Temples (Pura) are categorized by function: sea (Pura Segara), mountain (Pura Gunung), and directional temples, each serving distinct spiritual purposes. Daily offerings (canang sari) represent the balance of elements and gratitude, while sacred spaces follow a hierarchy from public courtyards to increasingly restricted inner sanctums.</p>
            
            <h3>Ceremonial Attire Protocol for the Discerning Traveler</h3>
            <p>The sarong (kamben) and sash (selendang) symbolize purification and respect, not costume. Quality matters—opt for traditional handwoven fabrics over synthetic tourist versions to support local artisans.</p>
            <ul>
                <li><strong>Men:</strong> Kamben worn waist-to-ankle, selendang tied around waist</li>
                <li><strong>Women:</strong> Kamben worn under arms, selendang across shoulder</li>
                <li>Avoid revealing clothing even under sarongs</li>
                <li>Purchase from local weavers to support traditional crafts</li>
            </ul>
            
            <h3>Photography with Cultural Integrity</h3>
            <p>In an Instagram-saturated world, capturing spiritual moments requires exceptional sensitivity. Many ceremonies prohibit photography entirely, while others restrict certain angles and equipment.</p>
            <ul>
                <li>Never photograph from within inner sanctums</li>
                <li>Use silent mode and disable flash at all times</li>
                <li>Seek verbal permission before photographing worshippers</li>
                <li>Consider purchasing temple-approved postcards to support conservation</li>
            </ul>
            
            <h3>Global Traveler's Cultural Audit</h3>
            <p>Before entering any temple, perform this quick cultural audit to ensure respectful engagement:</p>
            <ol>
                <li>Have I washed my feet? (Many temples provide water for purification)</li>
                <li>Is my sarong properly fastened and respectful?</li>
                <li>Am I menstruating? (Traditionally restricts entry to certain areas)</li>
                <li>Have I removed leather accessories? (Considered impure in some contexts)</li>
                <li>Is my phone silenced and camera respectfully stored?</li>
            </ol>
            `,
            image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2076&auto=format&fit=crop"
        },
        {
            id: 2,
            slug: "beyond-instagram-waterfalls",
            title: "Beyond Instagram: Discovering Bali's Hidden Hydrological Wonders",
            date: "December 28, 2025",
            author: "Marcus Thorne",
            excerpt: "Move beyond crowded waterfalls to explore Bali's lesser-known cascades where geology, ecology, and adventure intersect.",
            content: `
            <p>While Bali's famous waterfalls draw crowds, the island's true hydrological treasures lie in its complex network of lesser-known cascades, each telling a story of volcanic geology, tropical climate, and cultural significance.</p>
            
            <h3>The Geology of Falling Water: Bali's Volcanic Legacy</h3>
            <p>Bali's waterfalls are shaped by its volcanic history, with basalt cliffs creating dramatic drops and porous limestone forming intricate cave systems behind cascades. Understanding this geology enhances appreciation:</p>
            <ul>
                <li><strong>Northern volcanic slopes:</strong> Create taller, steeper falls with powerful flows</li>
                <li><strong>Eastern limestone formations:</strong> Produce multiple tiers and turquoise pools</li>
                <li><strong>Seasonal variations:</strong> Peak flow occurs November-March during monsoon season</li>
                <li><strong>Sacred springs:</strong> Many waterfalls originate from underground rivers considered sacred</li>
            </ul>
            
            <h3>Conservation-First Exploration Philosophy</h3>
            <p>With increased tourism threatening delicate ecosystems, we advocate for a 'leave no trace' approach complemented by active conservation efforts:</p>
            <ul>
                <li>Visit during shoulder hours (7-9 AM or 3-5 PM) to reduce environmental impact</li>
                <li>Use reef-safe, biodegradable sunscreen before swimming in natural pools</li>
                <li>Support local conservation collectives through guided tour fees</li>
                <li>Report pollution and environmental concerns via Bali Waterkeeper app</li>
                <li>Stay on marked paths to prevent erosion and protect fragile ecosystems</li>
            </ul>
            `,
            image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: 3,
            slug: "balinese-culinary-renaissance",
            title: "Balinese Culinary Renaissance: How Ancient Recipes Are Shaping Modern Gastronomy",
            date: "November 10, 2025",
            author: "Isabella Rossi",
            excerpt: "Discover how Balinese chefs are reinventing ancestral recipes for the global palate while preserving culinary heritage.",
            content: `
            <p>Bali's culinary landscape is experiencing a renaissance, where traditional warungs collaborate with avant-garde chefs to create a globally relevant cuisine that honors its spiritual and agricultural roots.</p>
            
            <h3>The Spice Routes Revisited: A Historical Culinary Journey</h3>
            <p>Balinese cuisine represents a confluence of Indian, Chinese, and indigenous Austronesian traditions, with complex spice pastes (bumbu) forming its foundation:</p>
            <ul>
                <li><strong>9th century:</strong> Indian traders introduce spices and religious food prohibitions</li>
                <li><strong>16th century:</strong> Chinese influence on wok techniques and noodle dishes</li>
                <li><strong>Colonial era:</strong> European introduction of chili peppers and new cooking methods</li>
                <li><strong>Modern era:</strong> Global fusion while maintaining core spiritual elements</li>
            </ul>
            
            <h3>Modern Interpretations: Traditional Dishes Reimagined</h3>
            <p>Progressive Balinese chefs are deconstructing traditional dishes while maintaining their spiritual essence:</p>
            
            <h4>Babi Guling Reinterpreted</h4>
            <p>Once solely ceremonial, now presented as tasting menus across 7 cuts in fine dining establishments, each paired with traditional condiments and modern presentations.</p>
            `,
            image: "https://images.unsplash.com/photo-1502759683299-cdcd6974244f?q=80&w=2070&auto=format&fit=crop"
        }
    ]
};