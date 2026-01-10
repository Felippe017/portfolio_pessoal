'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '../ui/Button'; // reusing cn util

import { useLanguage } from '../../context/LanguageContext';
import { LanguageToggle } from '../ui/LanguageToggle';

const navItems = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.about', href: '#about' },
    { key: 'nav.projects', href: '#projects' },
    { key: 'nav.experience', href: '#experience' },
    { key: 'nav.contact', href: '#contact' },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={cn(
                    'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
                    isScrolled
                        ? 'bg-[#0B3C5D]/95 backdrop-blur-md border-white/5 py-4'
                        : 'bg-transparent border-transparent py-6'
                )}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <a href="#" className="flex items-center gap-2 group cursor-pointer">
                        <div className="text-2xl md:text-3xl font-bold tracking-tight">
                            <span className="bg-gradient-to-r from-primary via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                Felippe
                            </span>
                            <span className="text-primary ml-1 group-hover:scale-110 inline-block transition-transform font-mono">
                                {'</>'}
                            </span>
                        </div>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <a
                                key={item.key}
                                href={item.href}
                                className="text-sm font-medium text-gray-400 hover:text-white transition-colors hover:text-primary cursor-pointer"
                            >
                                {t(item.key)}
                            </a>
                        ))}
                        <LanguageToggle />
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden flex items-center gap-4">
                        <LanguageToggle />
                        <button
                            className="text-white cursor-pointer"
                            onClick={() => setIsMobileMenuOpen(true)}
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[60] bg-[#1E293B] md:hidden flex flex-col items-center justify-center gap-8"
                    >
                        <button
                            className="absolute top-6 right-6 text-white cursor-pointer"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <X className="w-8 h-8" />
                        </button>

                        {navItems.map((item, i) => (
                            <motion.a
                                key={item.key}
                                href={item.href}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * i }}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-2xl font-bold text-gray-300 hover:text-primary hover:scale-110 transition-all cursor-pointer"
                            >
                                {t(item.key)}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
