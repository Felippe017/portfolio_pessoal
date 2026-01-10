'use client';

import { useLanguage } from '../../context/LanguageContext';

export function Footer() {
    const { t } = useLanguage();
    return (
        <footer className="py-8 border-t border-white/5 bg-secondary text-center">
            <div className="container mx-auto px-6">
                <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} Portfólio Pessoal. {t('footer.rights')}
                </p>
            </div>
        </footer>
    );
}
