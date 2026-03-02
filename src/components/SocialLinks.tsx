import { Github, Linkedin, Mail } from 'lucide-react';

const links = [
    { name: 'GitHub', icon: <Github size={20} />, url: 'https://github.com/qievenz', color: '#fff' },
    { name: 'LinkedIn', icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/ivan-velazquez-8308709b/', color: '#0077b5' },
    { name: 'Email', icon: <Mail size={20} />, url: 'mailto:qievenz@example.com', color: '#ea4335' },
];

export const SocialLinks = () => {
    return (
        <div className="glass" style={{ padding: '1rem', display: 'flex', gap: '1rem', width: 'fit-content', margin: '0 auto' }}>
            {links.map((link) => (
                <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '45px',
                        height: '45px',
                        borderRadius: '0.75rem',
                        background: 'rgba(255,255,255,0.05)',
                        transition: 'all 0.3s ease'
                    }}
                    title={link.name}
                >
                    {link.icon}
                </a>
            ))}
        </div>
    );
};
