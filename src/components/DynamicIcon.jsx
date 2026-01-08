import React from 'react';
import {
    ArrowRight,
    ArrowLeft,
    Key,
    Headset,
    Tag,
    Compass,
    Star,
    CheckCircle,
    MessageCircle,
    User,
    Share2,
    Phone,
    Mail,
    MapPin,
    Send,
    Facebook,
    Instagram,
    Twitter,
    Menu,
    X,
    HelpCircle
} from 'lucide-react';

// Mapping of icon names to components
const iconMap = {
    ArrowRight,
    ArrowLeft,
    Key, // Corrected export name
    Headset,
    Tag,
    Compass,
    Star,
    CheckCircle,
    MessageCircle,
    User,
    Share2,
    Phone,
    Mail,
    MapPin,
    Send,
    Facebook,
    Instagram,
    Twitter,
    Menu,
    X,
    HelpCircle
};

const DynamicIcon = ({ name, className, size = 24 }) => {
    // Handle case sensitivity or mismatch
    const IconComponent = iconMap[name] || iconMap[Object.keys(iconMap).find(k => k.toLowerCase() === name.toLowerCase())];

    if (!IconComponent) {
        console.warn(`Icon "${name}" not found in iconMap. Available icons: ${Object.keys(iconMap).join(', ')}`);
        return <HelpCircle className={className} size={size} />;
    }

    return <IconComponent className={className} size={size} />;
};

export default DynamicIcon;
