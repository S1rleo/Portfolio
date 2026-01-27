import { useLanguage } from '../context/LanguageContext';
import './LanguageSwitch.css';

const LanguageSwitch = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button className="language-switch" onClick={toggleLanguage}>
            <span className={language === 'pt' ? 'active' : ''}>PT</span>
            <span className="separator">|</span>
            <span className={language === 'en' ? 'active' : ''}>EN</span>
        </button>
    );
};

export default LanguageSwitch;
