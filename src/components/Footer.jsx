import { useLanguage } from '../context/LanguageContext';
import { t } from '../translations/translations';

const Footer = () => {
    const { language } = useLanguage();

    return (
        <footer id="contact" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', borderTop: '1px solid #222', textAlign: 'center', color: '#555', scrollSnapAlign: 'start' }}>
            <p>{t('footer', 'copyright', language)}</p>
        </footer>
    );
};

export default Footer;
