import React from 'react';
import { useTranslation } from 'react-i18next';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export const Experience = () => {
    const { t } = useTranslation();

    const experiences = [
        {
            company: "QiMark",
            role: t('exp.qimark.role'),
            period: "Oct 2025 - " + t('common.present'),
            description: t('exp.qimark.desc'),
            techs: ["React", ".NET", "Android", "OpenAI", "Cloud"]
        },
        {
            company: "InvertirOnline",
            role: "Backend Developer & Architect",
            period: "2020 - Oct 2025",
            description: t('exp.iol.desc'),
            techs: ["C# .NET", "NestJS", "Kafka", "Orleans", "AWS", "Jupyter"]
        },
        {
            company: "Accenture (Galicia)",
            role: "Full Stack Developer",
            period: "2014 - 2020",
            description: t('exp.galicia.desc'),
            techs: ["ASP.NET", "Java", "Cobol", "Visual Basic", "SQL/DB2"]
        }
    ];

    return (
        <section id="experience" className="container">
            <h2 className="section-title">{t('sections.experience')}</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {experiences.map((exp, idx) => (
                    <div key={idx} className="glass" style={{ padding: '2.5rem', position: 'relative' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-cyan)', marginBottom: '0.5rem' }}>{exp.role}</h3>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                                    <Briefcase size={16} /> {exp.company}
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', background: 'rgba(255,255,255,0.03)', padding: '0.4rem 0.8rem', borderRadius: '2rem' }}>
                                <Calendar size={16} /> {exp.period}
                            </div>
                        </div>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '2rem', whiteSpace: 'pre-line' }}>
                            {exp.description}
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                            {exp.techs.map(tech => (
                                <span key={tech} style={{ fontSize: '0.8rem', color: 'var(--accent-purple)', background: 'rgba(191, 90, 242, 0.05)', padding: '0.3rem 0.7rem', borderRadius: '0.5rem', border: '1px solid rgba(191, 90, 242, 0.1)' }}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
