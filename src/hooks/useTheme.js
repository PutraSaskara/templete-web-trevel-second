import { useEffect } from 'react';
import { siteConfig } from '../data/site-config';

export function useTheme() {
    useEffect(() => {
        const root = document.documentElement;
        const { colors, layout } = siteConfig.theme;

        // Set Colors
        root.style.setProperty('--color-primary', colors.primary);
        root.style.setProperty('--color-secondary', colors.secondary);
        root.style.setProperty('--color-background', colors.background);
        root.style.setProperty('--color-card-bg', colors.cardBg || colors.background); // Fallback
        root.style.setProperty('--color-text', colors.text);
        root.style.setProperty('--color-text-muted', colors.textMuted);
        root.style.setProperty('--color-accent', colors.accent);

        // Set Layout
        root.style.setProperty('--radius', layout.radius);

    }, []);

    return siteConfig.theme;
}
