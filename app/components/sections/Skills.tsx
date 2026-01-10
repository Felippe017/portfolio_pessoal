'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import {
    Terminal,
    Database,
    CheckSquare,
    Cloud,
    Settings,
    Layout,
    Server,
    Smartphone, // For Responsive Design
    Layers, // For SOLID
    TestTube, // For TDD
    Code // Generic code icon
} from 'lucide-react';
import {
    SiSpringboot, SiNodedotjs, SiExpress, SiPython, SiFastapi, SiSocketdotio, SiAdonisjs, // Backend
    SiPostgresql, SiMysql, SiMongodb, // Database
    SiJunit5, SiJest, // Testing
    SiDocker, SiAmazonwebservices, SiGit, SiGithubactions, SiVagrant, SiGitlab, // DevOps
    SiReact, SiTypescript, SiTailwindcss, SiNextdotjs, SiVuedotjs, SiBootstrap, SiMui, SiHtml5, SiCss3, SiRedux, // Frontend
    SiNestjs, SiJsonwebtokens // Added missing imports
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

// Using a simple utility for classnames
function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

type Category = 'backend' | 'database' | 'testing' | 'devops' | 'tools' | 'frontend';

interface Skill {
    name: string;
    icon: any;
    color: string; // Hex color for the icon
}

interface SkillCategory {
    id: Category;
    label: string;
    icon: any; // Category Header Icon
    items: Skill[];
}

export function Skills() {
    const { t } = useLanguage();
    const [filter, setFilter] = useState<Category | 'all'>('all');

    const categories: SkillCategory[] = [
        {
            id: 'backend',
            label: 'skills.backend',
            icon: Server,
            items: [
                { name: 'Java', icon: FaJava, color: '#007396' },
                { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
                { name: 'Express', icon: SiExpress, color: '#000000' },
                { name: 'Python', icon: SiPython, color: '#3776AB' },
                { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
                { name: 'Adonis', icon: SiAdonisjs, color: '#220052' },
                { name: 'WebSocket', icon: SiSocketdotio, color: '#010101' },
                { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
                { name: 'Nest.js', icon: SiNestjs, color: '#E0234E' },
                { name: 'JWT', icon: SiJsonwebtokens, color: '#F50057' },
                { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
            ]
        },
        {
            id: 'db',
            label: 'skills.database',
            icon: Database,
            items: [
                { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
                { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
                { name: 'SQL', icon: Database, color: '#EEE' }, // Generic SQL
                { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
                { name: 'NoSQL', icon: Database, color: '#EEE' }, // Changed to generic Database icon
            ]
        },
        {
            id: 'testing',
            label: 'skills.testing',
            icon: CheckSquare,
            items: [
                { name: 'Jest', icon: SiJest, color: '#C21325' },
                { name: 'JUnit', icon: SiJunit5, color: '#25A162' },
            ]
        },
        {
            id: 'devops',
            label: 'skills.devops',
            icon: Cloud,
            items: [
                { name: 'AWS', icon: SiAmazonwebservices, color: '#FF9900' },
                { name: 'Docker', icon: SiDocker, color: '#2496ED' },
                { name: 'Vagrant', icon: SiVagrant, color: '#1563FF' },
                { name: 'Git', icon: SiGit, color: '#F05032' },
                { name: 'GitHub Actions', icon: SiGithubactions, color: '#2088FF' },
            ]
        },
        {
            id: 'tools',
            label: 'skills.tools',
            icon: Settings,
            items: [
                { name: 'GitLab', icon: SiGitlab, color: '#FC6D26' },
                { name: 'TDD', icon: TestTube, color: '#25A162' },
                { name: 'SOLID', icon: Layers, color: '#EEE' },
                { name: 'Design Responsivo', icon: Smartphone, color: '#38BDF8' },
            ]
        },
        {
            id: 'frontend',
            label: 'skills.frontend',
            icon: Layout,
            items: [
                { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
                { name: 'CSS', icon: SiCss3, color: '#1572B6' },
                { name: 'React', icon: SiReact, color: '#61DAFB' },
                { name: 'Redux', icon: SiRedux, color: '#764ABC' },
                { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
                { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
                { name: 'Vue.js', icon: SiVuedotjs, color: '#4FC08D' },
                { name: 'React Native', icon: SiReact, color: '#61DAFB' },
                { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
                { name: 'Material UI', icon: SiMui, color: '#007FFF' },
                { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
            ]
        }
    ];

    const filteredCategories = filter === 'all'
        ? categories
        : categories.filter(c => c.id === filter);

    return (
        <section id="skills" className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary" // Title in Cyan/Primary
                >
                    {t('skills.title')}
                </motion.h2>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    <button
                        onClick={() => setFilter('all')}
                        className={classNames(
                            "px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300",
                            filter === 'all'
                                ? "bg-white text-black scale-105 shadow-lg"
                                : "bg-secondary text-gray-400 hover:text-white hover:bg-white/10"
                        )}
                    >
                        {t('skills.all')}
                    </button>
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setFilter(cat.id)}
                            className={classNames(
                                "px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer", // Added flex items-center gap-2 and cursor-pointer
                                filter === cat.id
                                    ? "bg-primary text-white scale-105 shadow-lg"
                                    : "bg-secondary text-gray-400 hover:text-white hover:bg-white/10"
                            )}
                            aria-label={t(cat.label)} // Changed to cat.label
                        >
                            <cat.icon className="w-6 h-6" /> {/* Used cat.icon */}
                            <span className="font-medium">{t(cat.label)}</span> {/* Used cat.label */}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredCategories.map((category) => (
                            <motion.div
                                key={category.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="bg-[#243447] rounded-xl p-6 shadow-xl hover:bg-[#2d4052] transition-all duration-300"
                            >
                                <div className="flex items-center gap-3 mb-6 border-b border-white/20 pb-4">
                                    <category.icon className="w-8 h-8 text-white" />
                                    <h3 className="text-xl font-bold text-white">
                                        {t(category.label)} {/* Changed to category.label */}
                                    </h3>
                                </div>

                                <ul className="space-y-4">
                                    {category.items.map((skill) => (
                                        <li key={skill.name} className="flex items-center gap-3 text-white/90 font-medium group">
                                            {/* Icon with Color */}
                                            <div className="group-hover:scale-110 transition-transform">
                                                <skill.icon
                                                    className="w-6 h-6"
                                                    style={{ color: skill.color }}
                                                />
                                            </div>
                                            <span className="text-white font-semibold shadow-black/10 text-shadow-sm">
                                                {skill.name}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
