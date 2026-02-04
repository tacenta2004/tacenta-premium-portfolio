"use client";

import { PortfolioPage, PortfolioPageProps } from "@/components/ui/starfall-portfolio-landing";

const customPortfolioData: PortfolioPageProps = {
    logo: {
        initials: 'TX',
        name: 'Tacenta X',
    },
    navLinks: [
        { label: 'Bio', href: '#about' },
        { label: 'Projects', href: '#projects' },
        { label: 'Expertise', href: '#skills' },
    ],
    resume: {
        label: 'Download CV',
        onClick: () => alert('Downloading CV...'),
    },
    hero: {
        titleLine1: 'AI Architect &',
        titleLine2Gradient: 'ECE Engineer',
        subtitle: 'Final-year ECE student at College of Engineering, Adoor. Developing intelligent IoT systems and autonomous workflows for social safety and industrial efficiency.',
    },
    ctaButtons: {
        primary: {
            label: 'Explore My Work',
            onClick: () => {
                const projects = document.getElementById('projects');
                if (projects) projects.scrollIntoView({ behavior: 'smooth' });
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
            title: 'Women Safety IoT Ecosystem',
            description: 'A 24x7 gender detection and communication system designed for railway safety, integrating real-time computer vision and IoT protocols.',
            tags: ['IoT', 'Gender Detection', 'Embedded Systems']
        },
        {
            title: 'Tacenta AI Workstation',
            description: 'A professional AI workstation with multi-provider fallback (Claude 4.5, GPT-5.2) and automated terminal control.',
            tags: ['AI Agents', 'OpenClaw', 'TypeScript']
        },
        {
            title: 'Vanguard 3D Portfolio',
            description: 'Premium Next.js portfolio featuring real-time WebGL Aurora animations and modern design architecture.',
            tags: ['Three.js', 'Next.js', 'Tailwind 4'],
            imageContent: <div className="text-2xl text-white/50">🚀</div>
        },
    ],
    stats: [
        { value: '4th Year', label: 'ECE @ CE Adoor' },
        { value: '200+', label: 'AI Models Integrated' },
        { value: 'IoT', label: 'Specialization' },
    ],
    showAnimatedBackground: true,
};

export default function Home() {
    return <PortfolioPage {...customPortfolioData} />;
}
