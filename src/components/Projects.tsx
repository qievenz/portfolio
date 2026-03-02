import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink, Server, Code2, Monitor, Cpu, Database, Globe, Layers, Video, Lock } from 'lucide-react';
import { parseMarkdownData } from '../utils/markdownParser';
import projectData from '../data/projects.md?raw';

const iconMap: Record<string, React.ReactNode> = {
    Server: <Server size={32} />,
    Code2: <Code2 size={32} />,
    Monitor: <Monitor size={32} />,
    Cpu: <Cpu size={32} />,
    Database: <Database size={32} />,
    Globe: <Globe size={32} />,
    Layers: <Layers size={32} />,
    Video: <Video size={32} />
};

export const Projects = () => {
    const { t, i18n } = useTranslation();
    const [projects, setProjects] = useState<any[]>([]);

    useEffect(() => {
        const data = parseMarkdownData(projectData);
        setProjects(data);
    }, []);

    return (
        <section id="projects" className="container">
            <h2 className="section-title">{t('sections.featured_projects')}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
                {projects.map((project, idx) => (
                    <div key={idx} className="glass" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s ease' }}>
                        <div style={{ color: 'var(--accent-cyan)', marginBottom: '1.5rem' }}>
                            {iconMap[project.icon] || <Code2 size={32} />}
                        </div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{project.title}</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', flex: 1 }}>
                            {i18n.language === 'en' ? project.description_en : project.description_es}
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                            {project.tech?.map((t: string) => (
                                <span key={t} style={{ fontSize: '0.8rem', color: 'var(--text-muted)', background: 'rgba(255,255,255,0.03)', padding: '0.2rem 0.6rem', borderRadius: '0.25rem' }}>
                                    {t}
                                </span>
                            ))}
                        </div>
                        <div style={{ display: 'flex', gap: '1.5rem', marginTop: 'auto' }}>
                            {project.live && (
                                <a href={project.live} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                                    Demo <ExternalLink size={16} />
                                </a>
                            )}
                            {project.github && project.github !== 'Private' ? (
                                <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                                    GitHub <ExternalLink size={16} />
                                </a>
                            ) : project.github === 'Private' && (
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', opacity: 0.6, fontSize: '0.9rem' }}>
                                    <Lock size={14} /> {i18n.language === 'en' ? 'Private' : 'Privado'}
                                </span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
