'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { Button } from '../ui/Button';
import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react';

export function Hero() {
    const { t } = useLanguage();

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background z-0" />

            <div className="container relative z-10 mx-auto px-6 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
                        {t('hero.badge')}
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
                >
                    <span className="bg-gradient-to-r from-white via-white to-blue-200 bg-clip-text text-transparent">
                        {t('hero.title.1')}
                    </span>
                    {' '}
                    <br />
                    <span className="text-primary">{t('hero.title.2')}</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed"
                >
                    {t('hero.description')}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                >
                    <Button size="lg" className="group" onClick={() => document.getElementById('projects')?.scrollIntoView()}>
                        {t('hero.btn.projects')}
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                    <Button size="lg" variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView()}>
                        {t('hero.btn.contact')}
                    </Button>
                    <Button size="lg" variant="ghost" className="border-white/10" onClick={() => window.open('/cv.pdf', '_blank')}>
                        <Download className="mr-2 w-4 h-4" />
                        {t('hero.btn.cv')}
                    </Button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-16 flex items-center gap-6 text-gray-400"
                >
                    <a href="https://github.com/Felippe017" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors hover:scale-110 cursor-pointer">
                        <Github className="w-6 h-6" />
                    </a>
                    <a href="https://www.linkedin.com/in/felippecorrea/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors hover:scale-110 cursor-pointer">
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="mailto:felippecorrea2010@gmail.com" className="hover:text-white transition-colors hover:scale-110 cursor-pointer">
                        <Mail className="w-6 h-6" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
