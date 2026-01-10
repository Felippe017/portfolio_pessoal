'use client';

import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export function Contact() {
    const { t } = useLanguage();

    return (
        <section id="contact" className="py-24 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-4"
                    >
                        {t('contact.title.1')} <span className="text-primary">{t('contact.title.2')}</span>
                    </motion.h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        {t('contact.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {/* Contact Cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6"
                    >
                        <Card className="flex flex-col items-center text-center p-8 gap-4 bg-[#243447] border-transparent hover:bg-[#2d4052] transition-colors">
                            <div className="bg-primary/20 p-4 rounded-full">
                                <Mail className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400 mb-1">{t('contact.email')}</p>
                                <p className="text-white font-medium text-lg">felippecorrea2010@gmail.com</p>
                            </div>
                        </Card>

                        <Card className="flex flex-col items-center text-center p-8 gap-4 bg-[#1E293B] border-transparent hover:bg-[#334155] transition-colors">
                            <div className="bg-primary/20 p-4 rounded-full">
                                <Phone className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400 mb-1">{t('contact.whatsapp')}</p>
                                <p className="text-white font-medium text-lg">+55 (21) 983831917</p>
                            </div>
                        </Card>

                        <Card className="flex flex-col items-center text-center p-8 gap-4 bg-[#1E293B] border-transparent hover:bg-[#334155] transition-colors">
                            <div className="bg-primary/20 p-4 rounded-full">
                                <MapPin className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400 mb-1">{t('contact.location')}</p>
                                <p className="text-white font-medium text-lg">Rio de Janeiro, Brasil</p>
                            </div>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
