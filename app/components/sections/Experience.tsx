'use client';

import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Briefcase } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export function Experience() {
    const { t } = useLanguage();

    const experiences = [
        {
            role: t('exp.role.1'),
            company: 'Meta Serviços de Informática S/A',
            period: t('exp.date.1'),
            desc: t('exp.desc.1'),
        },
        {
            role: t('exp.role.2'),
            company: 'ViroTrip',
            period: t('exp.date.2'),
            desc: t('exp.desc.2'),
        },
        {
            role: t('exp.role.3'),
            company: 'Meta Serviços informática S/A',
            period: t('exp.date.3'),
            desc: t('exp.desc.3'),
        },
    ];

    return (
        <section id="experience" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-4"
                    >
                        {t('exp.title.1')} <span className="text-primary">{t('exp.title.2')}</span>
                    </motion.h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        {t('exp.subtitle')}
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="flex gap-4 md:gap-6 items-start relative border-l-4 border-l-primary/50">
                                <div className="bg-primary/10 p-3 rounded-full hidden md:block">
                                    <Briefcase className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                        <span className="text-sm font-medium text-primary py-1 px-3 bg-primary/10 rounded-full w-fit mt-2 md:mt-0">
                                            {exp.period}
                                        </span>
                                    </div>
                                    <p className="text-lg text-gray-300 font-medium mb-2">{exp.company}</p>
                                    <p className="text-gray-400 whitespace-pre-line leading-relaxed">{exp.desc}</p>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
