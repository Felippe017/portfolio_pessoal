'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
    pt: {
        // Navbar
        'nav.home': 'Início',
        'nav.about': 'Sobre',
        'nav.projects': 'Projetos',
        'nav.experience': 'Experiência',
        'nav.contact': 'Contato',

        // Hero
        'hero.badge': 'Bem-vindo ao meu portfólio',
        'hero.title.1': 'Criando Experiências',
        'hero.title.2': 'Digitais de Impacto',
        'hero.description': 'Desenvolvedor Full Stack apaixonado por construir soluções web modernas, performáticas e com design excepcional. Transformo ideias complexas em interfaces simples e elegantes.',
        'hero.btn.projects': 'Ver Projetos',
        'hero.btn.contact': 'Entrar em Contato',
        'hero.btn.cv': 'Baixar Currículo',

        // About
        'about.title.1': 'Sobre',
        'about.title.2': '', // Removed "Mim" to match user image "Sobre"
        'about.p1': 'Sou Desenvolvedor Full Stack, com atuação em front-end e back-end, e formação em Análise e Desenvolvimento de Sistemas e Engenharia de Software. Tenho experiência no desenvolvimento de aplicações web, trabalhando com tecnologias modernas para construir soluções escaláveis, estáveis e fáceis de manter.',
        'about.p2': 'Atuo com Java, React, Node.js, Python e TypeScript, participando do desenvolvimento de APIs, integrações entre sistemas e interfaces focadas em performance e boa experiência do usuário. No dia a dia, colaboro com times ágeis, participo de decisões técnicas e contribuo para a evolução contínua dos produtos.',
        'about.p3': 'Ao longo da minha trajetória, desenvolvi uma base sólida em arquitetura de software, modelagem de dados e boas práticas de desenvolvimento, sempre buscando alinhar soluções técnicas às necessidades reais do negócio.',
        'about.p4': 'Gosto de construir sistemas bem estruturados, confiáveis e organizados, com código claro, sustentável e preparado para evoluir. Estou sempre em busca de novos desafios e oportunidades para crescer profissionalmente e gerar impacto positivo por meio da tecnologia.',
        'about.btn.contact': 'Contato',

        // Experience
        'exp.title.1': 'Minha',
        'exp.title.2': 'Jornada',
        'exp.subtitle': 'Um breve resumo da minha trajetória profissional e conquistas ao longo dos anos.',
        'exp.present': 'Presente',
        'exp.role.1': 'Desenvolvedor II',
        'exp.date.1': 'jun de 2025 - o momento',
        'exp.desc.1': `Atuo como Desenvolvedor Full Stack, utilizando Java, React e React Native, alocado diretamente em cliente. Participo ativamente do desenvolvimento, evolução e manutenção de aplicações front-end e back-end, contribuindo para a entrega de soluções estáveis, escaláveis e alinhadas às necessidades do negócio.

• Desenvolvimento e manutenção de aplicações front-end com React e React Native, garantindo performance, responsividade e boa experiência do usuário.
• Atuação no desenvolvimento e manutenção de back-end em Java, incluindo implementação e consumo de APIs REST.
• Correção de bugs, melhorias contínuas e implementação de novas funcionalidades em sistemas já existentes.
• Participação ativa em cerimônias ágeis (SCRUM), como planning, dailies, reviews e retrospectivas.
• Colaboração direta com times multidisciplinares e stakeholders do cliente, auxiliando na definição técnica e na entrega das demandas.
• Atuação com autonomia e responsabilidade técnica, condizente com o nível pleno, contribuindo para decisões de implementação, qualidade de código e boas práticas.
Resultado: Contribuição contínua para a evolução das aplicações do cliente, garantindo entregas consistentes, melhoria da qualidade do código e maior eficiência no desenvolvimento das soluções.`,
        'exp.role.2': 'Desenvolvedor Back end - Pleno',
        'exp.date.2': 'set de 2023 - jun de 2025',
        'exp.desc.2': `Como Desenvolvedor Backend, minha principal responsabilidade é contribuir para o desenvolvimento de uma aplicação relacionada ao planejamento de viagens, direcionada tanto a empresas quanto a pessoas físicas com desenvolvimento de Software com as tecnologias AWS, Python e MySQL para criar os componentes de backend da aplicação. Isso envolve a criação de APIs, serviços web, e a integração de sistemas para garantir o funcionamento suave da aplicação.
Minhas atividades diárias incluem:
• Desenvolvimento de código Python, o design e a implementação de bancos de dados MySQL, a criação de APIs RESTful, a integração de serviços AWS para hospedagem e escalabilidade, e a resolução de problemas técnicos.
• Participação ativa em reuniões de planejamento e revisão do SCRUM, ajudando a definir metas claras para cada sprint e garantindo que o progresso esteja alinhado com as expectativas da equipe e da empresa.
• Trabalho em equipe e um ambiente de desenvolvimento ágil, onde utilizamos a metodologia SCRUM. Como membro da equipe, contribuo para a organização e planejamento das sprints, participando de reuniões diárias de stand-up e acompanhando o progresso do projeto.
• Além do desenvolvimento de código, tenho um papel importante na documentação do projeto. Isso inclui a criação de documentação técnica para auxiliar os colegas de equipe e futuros desenvolvedores, bem como a documentação do processo de desenvolvimento.`,
        'exp.role.3': 'Desenvolvedor full stack júnior',
        'exp.date.3': 'dez de 2021 - abr de 2023',
        'exp.desc.3': `Liderar e participar ativamente em projetos internos, incluindo a manutenção e correção de sistemas existentes, bem como a criação de novos sistemas, bem como, colaborar com projetos externos, fornecendo soluções personalizadas para clientes, abordando desafios como a resolução de bugs quando solicitado pelos clientes.
• Desenvolvimento e manutenção de sistemas internos, garantindo sua funcionalidade e performance.
• Colaboração com equipes multidisciplinares na construção de soluções personalizadas para clientes, com foco na qualidade e eficiência.
• Participação ativa em reuniões de planejamento e revisão, seguindo as práticas ágeis do SCRUM para garantir a entrega pontual de projetos.
• Coordenar e ministrar aulas práticas para jovens aprendizes, promovendo o aprendizado de tecnologias como React.js e Javascript Vanilla.
• Oferecer suporte técnico contínuo aos aprendizes, auxiliando-os na resolução de desafios técnicos e no desenvolvimento de suas habilidades.
• Trabalhar com diversas tecnologias, com ênfase nas principais, que incluem React.js, Node.js, e a adoção de metodologias ágeis, com destaque para o SCRUM.
• Ministrar aulas e oferecer suporte técnico a jovens aprendizes, orientando-os no desenvolvimento de aplicações práticas em React.js e Javascript Vanilla.

Resultado: Através das melhorias implementadas no desenvolvimento da plataforma, nosso objetivo foi aprimorar a experiência do usuário, introduzindo novas funcionalidades, como controle de inscrições e processamento de pagamentos. Com essas melhorias, proporcionamos aos usuários mais facilidade e praticidade no uso. Essas mudanças foram tão bem-sucedidas que conseguimos estender o contrato com a empresa por mais 12 meses.`,

        // Projects
        'projects.title.1': 'Portfolio de',
        'projects.title.2': 'Projetos',
        'projects.subtitle': 'Uma seleção dos meus trabalhos mais recentes, demonstrando minhas habilidades técnicas e de design.',
        'project.desc.1': 'Landing page da minha agência, Shark Tech Solutions. Focada em consultoria tecnológica e criação de sites.',
        'project.desc.2': 'Landing Page profissional para psicóloga, com design acolhedor e informações sobre terapia.',
        'project.desc.3': 'Jogo de perguntas e respostas divertido e interativo para testar conhecimentos gerais.',
        'project.title.4': 'Portfólio Pessoal',
        'project.desc.4': 'Este próprio site! Desenvolvido para apresentar meus projetos e experiência, com foco em design limpo e performance.',

        // Contact
        'contact.title.1': 'Vamos',
        'contact.title.2': 'Conversar?',
        'contact.subtitle': 'Tem um projeto em mente ou quer apenas trocar uma ideia? Fique à vontade para entrar em contato.',
        'contact.info': 'Informações de Contato',
        'contact.email': 'Email',
        'contact.whatsapp': 'WhatsApp',
        'contact.location': 'Localização',


        // Skills
        'skills.title': 'Habilidades Técnicas',
        'skills.all': 'Todos',
        'skills.backend': 'Back-End',
        'skills.database': 'Banco de Dados',
        'skills.testing': 'Testes & Qualidade',
        'skills.devops': 'DevOps & Cloud',
        'skills.tools': 'Ferramentas & Práticas',
        'skills.frontend': 'Front-End',

        // Footer
        'footer.rights': 'Todos os direitos reservados.',
    },
    en: {
        // Navbar
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.projects': 'Projects',
        'nav.experience': 'Experience',
        'nav.contact': 'Contact',

        // Hero
        'hero.badge': 'Welcome to my portfolio',
        'hero.title.1': 'Creating Impactful',
        'hero.title.2': 'Digital Experiences',
        'hero.description': 'Full Stack Developer passionate about building modern, high-performance web solutions with exceptional design. I transform complex ideas into simple and elegant interfaces.',
        'hero.btn.projects': 'View Projects',
        'hero.btn.contact': 'Get in Touch',
        'hero.btn.cv': 'Download CV',

        // About
        'about.title.1': 'About',
        'about.title.2': '',
        'about.p1': 'I am a Back-End Developer with a degree in Systems Analysis and Development and Software Engineering, with experience in building APIs, microservices, and scalable systems. In my daily work, I like to structure solutions clearly, stably, and maintainably, always seeking technical decisions that make sense in the long term and align with business reality.',
        'about.p2': 'I worked with Node.js, TypeScript, and PostgreSQL on high-demand products, creating asynchronous integrations with AWS, organizing flows between services, and ensuring performance and quality. This experience gave me a solid foundation to focus on Java and the Spring ecosystem, applying best practices in architecture, data modeling, and testing.',
        'about.p3': 'I seek to build reliable and organized systems that truly contribute to a better product, with code that is simple to understand, evolve, and operate.',
        'about.p4': 'I like to build well-structured, reliable, and organized systems, with clear, sustainable code prepared to evolve. I am always looking for new challenges and opportunities to grow professionally and generate positive impact through technology.',
        'about.btn.contact': 'Contact',

        // Experience
        'exp.title.1': 'My',
        'exp.title.2': 'Journey',
        'exp.subtitle': 'A brief summary of my professional trajectory and achievements over the years.',
        'exp.present': 'Present',
        'exp.role.1': 'Developer II',
        'exp.date.1': 'Jun 2025 - Present',
        'exp.desc.1': `I work as a Full Stack Developer, using Java, React, and React Native, allocated directly to the client. I actively participate in the development, evolution, and maintenance of front-end and back-end applications, contributing to the delivery of stable, scalable solutions aligned with business needs.

• Development and maintenance of front-end applications with React and React Native, ensuring performance, responsiveness, and good user experience.
• Acting in back-end development and maintenance in Java, including implementation and consumption of REST APIs.
• Bug fixing, continuous improvements, and implementation of new features in existing systems.
• Active participation in agile ceremonies (SCRUM), such as planning, dailies, reviews, and retrospectives.
• Direct collaboration with multidisciplinary teams and client stakeholders, assisting in technical definition and demand delivery.
• Acting with autonomy and technical responsibility, consistent with the mid-level role, contributing to implementation decisions, code quality, and best practices.
Result: Continuous contribution to the evolution of client applications, ensuring consistent deliveries, improved code quality, and greater efficiency in solution development.`,
        'exp.role.2': 'Back End Developer - Mid Level',
        'exp.date.2': 'Sep 2023 - Jun 2025',
        'exp.desc.2': `As a Backend Developer, my main responsibility is to contribute to the development of a travel planning application, directed at both companies and individuals, developing software with AWS, Python, and MySQL technologies to create the application's backend components. This involves creating APIs, web services, and integrating systems to ensure the smooth operation of the application.
My daily activities include:
• Developing Python code, designing and implementing MySQL databases, creating RESTful APIs, integrating AWS services for hosting and scalability, and resolving technical problems.
• Active participation in SCRUM planning and review meetings, helping to define clear goals for each sprint and ensuring progress aligns with team and company expectations.
• Teamwork in an agile development environment, utilizing the SCRUM methodology. As a team member, I contribute to sprint organization and planning, participating in daily stand-up meetings and tracking project progress.
• In addition to code development, I play an important role in project documentation. This includes creating technical documentation to assist teammates and future developers, as well as documenting the development process.`,
        'exp.role.3': 'Junior Full Stack Developer',
        'exp.date.3': 'Dec 2021 - Apr 2023',
        'exp.desc.3': `Leading and actively participating in internal projects, including maintenance and correction of existing systems, as well as creating new systems, and collaborating on external projects, providing customized solutions for clients, addressing challenges such as bug resolution when requested by clients.
• Development and maintenance of internal systems, ensuring functionality and performance.
• Collaboration with multidisciplinary teams to build personalized solutions for clients, focusing on quality and efficiency.
• Active participation in planning and review meetings, following agile SCRUM practices to ensure punctual project delivery.
• Coordinating and teaching practical classes for young apprentices, promoting learning of technologies like React.js and Vanilla Javascript.
• Offering continuous technical support to apprentices, helping them resolve technical challenges and develop their skills.
• Working with various technologies, emphasizing main ones including React.js, Node.js, and adopting agile methodologies, highlighting SCRUM.
• Teaching classes and offering technical support to young apprentices, guiding them in developing practical applications in React.js and Vanilla Javascript.

Result: Through improvements implemented in platform development, our goal was to enhance user experience by introducing new functionalities, such as registration control and payment processing. With these improvements, we provided users with greater ease and practicality. These changes were so successful that we extended the contract with the company for another 12 months.`,

        // Projects
        'projects.title.1': 'Project',
        'projects.title.2': 'Portfolio',
        'projects.subtitle': 'A selection of my most recent work, demonstrating my technical and design skills.',
        'project.desc.1': 'Landing page for my agency, Shark Tech Solutions. Focused on tech consulting and website creation.',
        'project.desc.2': 'Professional landing page for a psychologist, with a welcoming design and therapy information.',
        'project.desc.3': 'Fun and interactive trivia game to test general knowledge.',
        'project.title.4': 'Personal Portfolio',
        'project.desc.4': 'This very website! Developed to showcase my projects and experience, focusing on clean design and performance.',

        // Contact
        'contact.title.1': 'Let\'s',
        'contact.title.2': 'Talk?',
        'contact.subtitle': 'Have a project in mind or just want to chat? Feel free to reach out.',
        'contact.info': 'Contact Information',
        'contact.email': 'Email',
        'contact.whatsapp': 'WhatsApp',
        'contact.location': 'Location',


        // Skills
        'skills.title': 'Technical Skills',
        'skills.all': 'All',
        'skills.backend': 'Back-End',
        'skills.database': 'Database',
        'skills.testing': 'Testing & QA',
        'skills.devops': 'DevOps & Cloud',
        'skills.tools': 'Tools & Practices',
        'skills.frontend': 'Front-End',

        // Footer
        'footer.rights': 'All rights reserved.',
    }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>('pt');

    const t = (key: string) => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
