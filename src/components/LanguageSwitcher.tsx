import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'es' ? 'en' : 'es';
        i18n.changeLanguage(newLang);
    };

    return (
        <button
            onClick={toggleLanguage}
            className="glass"
            style={{
                padding: '0.4rem 0.8rem',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                textTransform: 'uppercase',
                border: '1px solid var(--glass-border)',
                background: 'rgba(255,255,255,0.05)',
                color: 'var(--text-primary)'
            }}
        >
            <span style={{ opacity: i18n.language === 'es' ? 1 : 0.4 }}>ES</span>
            <span style={{ width: '1px', height: '10px', background: 'var(--border-color)' }}></span>
            <span style={{ opacity: i18n.language === 'en' ? 1 : 0.4 }}>EN</span>
        </button>
    );
};
