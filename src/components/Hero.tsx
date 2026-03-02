import { useTranslation, Trans } from 'react-i18next';
import { ExternalLink } from 'lucide-react';

export const Hero = () => {
    const { t } = useTranslation();

    return (
        <section className="hero-section animate-fade-in">
            <div className="container">
                <h2 className="text-gradient" style={{ fontSize: '1.2rem', fontWeight: 500, marginBottom: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    {t('hero.subtitle')}
                </h2>
                <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem', maxWidth: '800px' }}>
                    <Trans i18nKey="hero.title">
                        Construyendo sistemas <span className="text-gradient">robustos</span> y automatizando el futuro.
                    </Trans>
                </h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '600px', marginBottom: '3rem' }}>
                    {t('hero.description')}
                </p>

                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                    <a href="#projects" className="glass" style={{ padding: '1rem 2rem', fontWeight: 600, border: '1px solid var(--accent-cyan)' }}>
                        {t('hero.cta_projects')}
                    </a>
                    <a href="#contact" style={{ padding: '1rem 2rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        {t('hero.cta_contact')} <ExternalLink size={18} />
                    </a>
                </div>
            </div>
        </section>
    );
};
