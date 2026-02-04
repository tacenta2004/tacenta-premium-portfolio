"use client";

import { PortfolioPage, PortfolioPageProps } from "@/components/ui/starfall-portfolio-landing";

const customPortfolioData: PortfolioPageProps = {
    logo: {
        initials: 'TX',
        name: 'Tacenta X',
    },
    navLinks: [
        { label: 'Bio', href: '#about' },
        { label: 'Work', href: '#projects' },
        { label: 'Expertise', href: '#skills' },
    ],
    resume: {
        label: 'Download CV',
        onClick: () => alert('Downloading CV...'),
    },
    hero: {
        titleLine1: 'AI Digital Architect &',
        titleLine2Gradient: 'Engineering Student',
        subtitle: 'I build robust and scalable autonomous workflows and premium digital assets at the intersection of IoT and Intelligence.',
    },
    ctaButtons: {
        primary: {
            label: 'Explore My Work',
            onClick: () => {
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            },
        },
        secondary: {
            label: 'Contact Me',
            onClick: () => {
                window.location.href = 'mailto:aswingopakumarx@gmail.com';
            },
        },
    },
    projects: [
        {
            title: 'Tacenta AI Bot',
            description: 'Personal AI workstation setup with multi-provider fallback and automated web workflows.',
            tags: ['OpenClaw', 'TypeScript', 'Node.js']
        },
        {
            title: 'Soldier 1',
            description: 'Minimalist student portfolio template for rapid deployment.',
            tags: ['HTML', 'CSS', 'GitHub Pages']
        },
        {
            title: 'Vanguard Portfolio',
            description: 'Premium 3D-animated portfolio built with Next.js and Three.js.',
            tags: ['Next.js', 'Three.js', 'Tailwind CSS'],
            imageContent: <div className="text-2xl text-white/50">🚀</div>
        },
    ],
    stats: [
        { value: '100+', label: 'Commits per Day' },
        { value: '200+', label: 'AI Models Integrated' },
        { value: '24/7', label: 'Uptime' },
    ],
    showAnimatedBackground: true,
};

export default function Home() {
    return <PortfolioPage {...customPortfolioData} />;
}
