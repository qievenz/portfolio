import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface LegalPageProps {
    type: 'tos' | 'privacy';
}

export const LegalPage = ({ type }: LegalPageProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    // Retrieve the sections array from the translations (needs to tell TS it's an array of objects)
    const sections = t(`legal.${type}_sections`, { returnObjects: true }) as Array<{ title: string, content: string }>;

    return (
        <div className="container" style={{ padding: '8rem 2rem', minHeight: '80vh' }}>
            <button
                onClick={() => navigate('/')}
                className="glass"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem 1rem',
                    marginBottom: '3rem',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem'
                }}
            >
                <ArrowLeft size={16} />
                {t('footer.back_home')}
            </button>

            <article style={{ maxWidth: '800px' }}>
                <h1 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                    {t(`legal.${type}_title`)}
                </h1>
                <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', fontSize: '0.9rem' }}>
                    {t('legal.last_updated')}
                </p>

                <section style={{ lineHeight: '1.8', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                    {Array.isArray(sections) ? sections.map((section, index) => (
                        <div key={index} style={{ marginBottom: '2.5rem' }}>
                            <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
                                {section.title}
                            </h2>
                            <p>{section.content}</p>
                        </div>
                    )) : (
                        <p>{t(`legal.${type}_content`)}</p>
                    )}
                </section>
            </article>
        </div>
    );
};
