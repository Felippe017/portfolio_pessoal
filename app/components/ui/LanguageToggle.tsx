'use client';

import { useLanguage } from '../../context/LanguageContext';
import { Button } from '../ui/Button';

export function LanguageToggle() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex items-center bg-white/5 rounded-full p-1 border border-white/10">
            <button
                onClick={() => setLanguage('pt')}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${language === 'pt'
                    ? 'bg-primary text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                    }`}
            >
                PT
            </button>
            <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${language === 'en'
                    ? 'bg-primary text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                    }`}
            >
                EN
            </button>
        </div>
    );
}
