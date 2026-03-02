import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Code2, Database, Cpu, Globe, Terminal, Layers } from 'lucide-react';
import { parseMarkdownData } from '../utils/markdownParser';
import skillData from '../data/skills.md?raw';

const iconMap: Record<string, React.ReactNode> = {
    Code2: <Code2 size={24} />,
    Layers: <Layers size={24} />,
    Cpu: <Cpu size={24} />,
    Database: <Database size={24} />,
    Globe: <Globe size={24} />,
    Terminal: <Terminal size={24} />
};

export const TechStack = () => {
    const { t, i18n } = useTranslation();
    const [skillGroups, setSkillGroups] = useState<any[]>([]);

    useEffect(() => {
        const data = parseMarkdownData(skillData);
        setSkillGroups(data);
    }, []);

    return (
        <section id="tech" className="container">
            <h2 className="section-title">{t('sections.tech_stack')}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                {skillGroups.map((group, idx) => (
                    <div key={idx} className="glass" style={{ padding: '2rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', color: 'var(--accent-cyan)' }}>
                            {iconMap[group.icon] || <Code2 size={24} />}
                            <h3 style={{ fontSize: '1.25rem' }}>
                                {i18n.language === 'en' ? group.category_en : group.category_es}
                            </h3>
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                            {group.skills?.map((skill: string) => (
                                <span
                                    key={skill}
                                    style={{
                                        padding: '0.4rem 0.8rem',
                                        background: 'rgba(255,255,255,0.05)',
                                        borderRadius: '0.5rem',
                                        fontSize: '0.9rem',
                                        fontFamily: 'var(--font-mono)',
                                        border: '1px solid var(--glass-border)'
                                    }}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
