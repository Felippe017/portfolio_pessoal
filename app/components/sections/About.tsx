'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { MessageCircle } from 'lucide-react';

import Image from 'next/image';

export function About() {
    const { t } = useLanguage();

    return (
        <section id="about" className="py-24">
            <div className="container mx-auto px-6">
                <div className="flex flex-col-reverse md:flex-row gap-12 items-center">

                    {/* Text Content */}
                    <div className="flex-1 space-y-6">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold text-primary"
                        >
                            {t('about.title.1')}
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="space-y-6 text-blue-200/80 text-base md:text-lg leading-relaxed text-justify"
                        >
                            <p className="text-primary-foreground/90">
                                {t('about.p1')}
                            </p>
                            <p className="text-primary-foreground/80">
                                {t('about.p2')}
                            </p>
                            <p className="text-primary-foreground/80">
                                {t('about.p3')}
                            </p>
                            <p className="text-primary-foreground/80">
                                {t('about.p4')}
                            </p>

                            <div className="pt-4">
                                <a
                                    href="https://wa.me/" // Placeholder, assumes user will fill
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-[#00a884] hover:bg-[#008f6f] text-white px-6 py-3 rounded-md font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    {t('about.btn.contact')}
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex-1 w-full max-w-md mx-auto"
                    >
                        <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl bg-secondary border border-white/10">
                            <Image
                                src="/profile.jpg"
                                alt="Profile"
                                fill
                                className="object-cover"
                                unoptimized
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
