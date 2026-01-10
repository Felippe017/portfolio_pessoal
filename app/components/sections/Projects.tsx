'use client';

import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '../../context/LanguageContext';

export function Projects() {
    const { t } = useLanguage();

    const projects = [
        {
            title: 'Shark Tech Digital',
            desc: t('project.desc.1'),
            tags: ['Next.js', 'Typescript', 'Tailwind'],
            image: '/shark-tech.png',
            link: 'https://www.sharktechdigital.com/',
            github: 'https://github.com/sharkTech-solutions/site_shark_teck',
        },
        {
            title: 'Psicóloga Carol Nogueira',
            desc: t('project.desc.2'),
            tags: ['Template for Vite', 'React', 'Typescript', 'Tailwind', 'React Router Dom'],
            image: 'https://image.thum.io/get/width/600/crop/800/https://psicarolnogueira.com.br/',
            link: 'https://psicarolnogueira.com.br/',
            github: 'https://github.com/Felippe017/Landing-Page-Psi-Project',
        },
        {
            title: 'Trivia Bigodes Game',
            desc: t('project.desc.3'),
            tags: ['React.js', 'JavaScript', 'Tailwind CSS'],
            image: 'https://image.thum.io/get/width/600/crop/800/https://felippe017.github.io/trivia_bigodes_game/',
            link: 'https://felippe017.github.io/trivia_bigodes_game/',
            github: 'https://github.com/Felippe017/trivia_bigodes_game',
        },
    ];

    return (
        <section id="projects" className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-4"
                    >
                        {t('projects.title.1')} <span className="text-primary">{t('projects.title.2')}</span>
                    </motion.h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        {t('projects.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full flex flex-col p-0 overflow-hidden group">
                                <div className="relative h-48 w-full overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        unoptimized
                                    />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                                            <Button size="sm" variant="outline" className="rounded-full bg-black/50 border-white text-white hover:bg-white hover:text-black">
                                                <ExternalLink className="w-4 h-4" />
                                            </Button>
                                        </a>
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                                            <Button size="sm" variant="outline" className="rounded-full bg-black/50 border-white text-white hover:bg-white hover:text-black">
                                                <Github className="w-4 h-4" />
                                            </Button>
                                        </a>
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                    <p className="text-gray-400 text-sm mb-4 flex-grow">{project.desc}</p>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
