import './App.css'
import { useTranslation } from 'react-i18next';
import { Hero } from './components/Hero'
import { Experience } from './components/Experience'
import { SocialLinks } from './components/SocialLinks'
import { TechStack } from './components/TechStack'
import { Projects } from './components/Projects'
import { LanguageSwitcher } from './components/LanguageSwitcher';

function App() {
  const { t } = useTranslation();

  return (
    <div className="app-container">
      {/* ... decorative elements ... */}
      <div style={{
        position: 'fixed',
        top: '-10%',
        right: '-10%',
        width: '50vw',
        height: '50vw',
        background: 'radial-gradient(circle, rgba(0, 245, 255, 0.05) 0%, rgba(0,0,0,0) 70%)',
        zIndex: -1,
        pointerEvents: 'none'
      }}></div>
      <div style={{
        position: 'fixed',
        bottom: '-10%',
        left: '-10%',
        width: '40vw',
        height: '40vw',
        background: 'radial-gradient(circle, rgba(191, 90, 242, 0.05) 0%, rgba(0,0,0,0) 70%)',
        zIndex: -1,
        pointerEvents: 'none'
      }}></div>

      <nav style={{ padding: '2rem 3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h1 className="text-gradient" style={{ fontSize: '1.5rem', letterSpacing: '0.1em', marginBottom: '0.2rem' }}>IVAN VELAZQUEZ</h1>
          <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.2rem', opacity: 0.6 }}>@QIEVENZ</span>
        </div>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', color: 'var(--text-secondary)', fontWeight: 500, fontSize: '0.9rem' }}>
          <a href="#exp">{t('nav.exp')}</a>
          <a href="#tech">{t('nav.tech')}</a>
          <a href="#projects">{t('nav.projects')}</a>
          <a href="mailto:qievenz@example.com" className="glass" style={{ padding: '0.5rem 1rem' }}>{t('nav.contact')}</a>
          <LanguageSwitcher />
        </div>
      </nav>

      <main>
        <Hero />

        <div style={{ marginTop: '-2rem', marginBottom: '4rem' }}>
          <SocialLinks />
        </div>

        <Experience />

        <div style={{ margin: '4rem 0' }}>
          <TechStack />
        </div>

        <div style={{ margin: '4rem 0' }}>
          <Projects />
        </div>
      </main>

      <footer className="container" style={{ borderTop: '1px solid var(--border-color)', padding: '4rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', opacity: 0.6, fontSize: '0.9rem' }}>
        <p>{t('footer.copy', { year: new Date().getFullYear() })}</p>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="https://github.com/qievenz">GitHub</a>
          <a href="https://www.linkedin.com/in/ivan-velazquez-8308709b/">LinkedIn</a>
        </div>
      </footer>
    </div>
  )
}

export default App
