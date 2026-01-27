import './Hero.css';
import React from 'react';
import Scene from './canvas/Scene';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../translations/translations';

// 1. Base Image
import sobreBasePt from '../assets/hero/Sobre_base.webp';
import sobreBaseEn from '../assets/hero/Sobre_base_en.jpg';

// 2. Skill Icons
import photoshopIcon from '../assets/hero/phootoshop.webp';
import illustratorIcon from '../assets/hero/illustrator.webp';
import afterEffectsIcon from '../assets/hero/aftereffects.webp';
import vibeCodingIcon from '../assets/hero/vibecoding.webp';
import cinema4dIcon from '../assets/hero/cinema4d.webp';

// 3. Skill Progress Bars
import photoshopBars from '../assets/hero/photoshopbarras.webp';
import illustratorBars from '../assets/hero/illustratorbarras.webp';
import afterEffectsBars from '../assets/hero/aftereffects barras.webp';
import vibeCodingBars from '../assets/hero/vibecodingbarras.webp';
import cinema4dBars from '../assets/hero/cinema4dbarras.webp';

// 4. Language Flags
import portuguesFlag from '../assets/hero/portugues.webp';
import inglesFlag from '../assets/hero/ingles.webp';
import francesFlag from '../assets/hero/frances.webp';

// 5. Language Progress Bars
import portuguesBars from '../assets/hero/portuguesbarras.webp';
import inglesBars from '../assets/hero/inglesbarras.webp';
import francesBars from '../assets/hero/francesbarras.webp';

// Utility component for interactive skills/languages
const SkillItem = ({ icon, bars, label, color, iconStyle, barStyle, rowStyle }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    // Default to green if no color provided
    const glow = color || '74, 222, 128';

    return (
        <div
            className="skill-item-wrapper"
            style={{ ...rowStyle, position: 'relative' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Label Tooltip */}
            <div className={`hero-skill-label ${isHovered ? 'visible' : ''}`} style={{ color: `rgb(${glow})`, borderColor: `rgba(${glow}, 0.3)` }}>
                {label}
            </div>

            <img
                src={icon}
                alt={label}
                style={{
                    ...iconStyle,
                    transition: 'all 0.3s ease',
                    transform: isHovered ? 'scale(1.2)' : 'scale(1)',
                    filter: isHovered ? `drop-shadow(0 0 10px rgba(${glow}, 0.9))` : 'none'
                }}
            />
            <img
                src={bars}
                alt=""
                style={{
                    ...barStyle,
                    transition: 'all 0.3s ease',
                    opacity: isHovered ? 1 : 0.8,
                    transform: isHovered ? 'scale(1.05)' : 'scale(1)'
                }}
            />
        </div>
    );
};

const Hero = () => {
    const { language } = useLanguage();

    // v8.0 - Independent item control
    const skillIconStyle = {
        height: '4.2vh',
        width: 'auto',
        objectFit: 'contain',
        display: 'block'
    };

    const barStyle = {
        height: '3.2vh',
        width: 'auto',
        objectFit: 'contain',
        display: 'block'
    };

    const langIconStyle = {
        height: '3.2vh',
        width: 'auto',
        objectFit: 'contain',
        display: 'block'
    };

    const rowStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '30px',
        cursor: 'pointer'
    };

    const skillsContainerStyle = {
        position: 'absolute',
        top: '50.5%',
        left: '15.5%',
        display: 'flex',
        flexDirection: 'column',
        gap: '3vh',
        zIndex: 20
    };

    const langsContainerStyle = {
        position: 'absolute',
        top: '54%', // Shifted further up from 56%
        right: '25%', // Keep user's preferred right position
        display: 'flex',
        flexDirection: 'column',
        gap: '2.5vh',
        zIndex: 20
    };

    return (
        <section id="home" className="hero-section">
            <div className="hero-aspect-ratio-container">
                {/* 1. Background layer */}
                <img src={language === 'pt' ? sobreBasePt : sobreBaseEn} alt="" className="hero-base-img" />

                {/* 2. 3D Viewer layer */}
                <div className="hero-canvas-container">
                    <Scene />
                </div>

                {/* SKILLS */}
                <div style={skillsContainerStyle}>
                    <SkillItem icon={photoshopIcon} bars={photoshopBars} label="Adobe Photoshop" color="0, 168, 255" iconStyle={skillIconStyle} barStyle={barStyle} rowStyle={rowStyle} />
                    <SkillItem icon={illustratorIcon} bars={illustratorBars} label="Adobe Illustrator" color="255, 154, 0" iconStyle={skillIconStyle} barStyle={barStyle} rowStyle={rowStyle} />
                    <SkillItem icon={afterEffectsIcon} bars={afterEffectsBars} label="Adobe After Effects" color="153, 153, 255" iconStyle={skillIconStyle} barStyle={barStyle} rowStyle={rowStyle} />
                    <SkillItem icon={vibeCodingIcon} bars={vibeCodingBars} label="Vibe Coding" color="191, 64, 191" iconStyle={skillIconStyle} barStyle={barStyle} rowStyle={rowStyle} />
                    <SkillItem icon={cinema4dIcon} bars={cinema4dBars} label="Cinema 4D" color="0, 107, 255" iconStyle={skillIconStyle} barStyle={barStyle} rowStyle={rowStyle} />
                </div>

                {/* LANGUAGES */}
                <div style={langsContainerStyle}>
                    <SkillItem icon={portuguesFlag} bars={portuguesBars} label={t('hero', 'portuguese', language)} color="239, 68, 68" iconStyle={langIconStyle} barStyle={barStyle} rowStyle={rowStyle} />
                    <SkillItem icon={inglesFlag} bars={inglesBars} label={t('hero', 'english', language)} color="59, 130, 246" iconStyle={langIconStyle} barStyle={barStyle} rowStyle={rowStyle} />
                    <SkillItem icon={francesFlag} bars={francesBars} label={t('hero', 'french', language)} color="255, 255, 255" iconStyle={langIconStyle} barStyle={barStyle} rowStyle={rowStyle} />
                </div>
            </div>
        </section>
    );
};


export default Hero;
