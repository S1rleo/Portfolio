const translations = {
    nav: {
        pt: {
            aboutMe: 'SOBRE MIM',
            projects: 'PROJETOS',
            contact: 'CONTACTOS'
        },
        en: {
            aboutMe: 'ABOUT ME',
            projects: 'PROJECTS',
            contact: 'CONTACT'
        }
    },
    hero: {
        pt: {
            degree: 'Licenciatura em',
            multimedia: 'Multimédia',
            institution: 'ISMT - Instituto Superior Miguel Torga',
            age: 'anos',
            role: 'Designer',
            portuguese: 'Português',
            english: 'Inglês',
            french: 'Francês'
        },
        en: {
            degree: 'Bachelor\'s in',
            multimedia: 'Multimedia',
            institution: 'ISMT - Instituto Superior Miguel Torga',
            age: 'years old',
            role: 'Designer',
            portuguese: 'Portuguese',
            english: 'English',
            french: 'French'
        }
    },
    projects: {
        pt: {
            urbanEchoesTitle: 'Urban Echoes — Portuguese Hip-Hop Collectibles #1',
            urbanEchoesCategory: 'Design Gráfico / Colagem Digital',
            urbanEchoesDescription: 'Coleção de cartas colecionáveis inspirada na estética e atitude do hip-hop português. Cada peça combina colagem digital, tipografia e cor para traduzir a identidade única de cada artista, mantendo coerência visual em toda a série.\n\nUm projeto focado em expressão, contraste e narrativa visual, pensado para formato digital e apresentação de portfolio. Desenvolvido em Adobe Photoshop.',
            urbanEchoes2Title: 'Urban Echoes — Portuguese Hip-Hop Collectibles #2',
            urbanEchoes2Category: 'Design Gráfico / Colagem Digital',
            urbanEchoes2Description: 'Segunda série da coleção de cartas colecionáveis dedicada ao hip-hop português. Continuação do projeto visual que celebra a cultura e identidade dos artistas nacionais através de colagem digital e design gráfico expressivo.\n\nMantendo a linguagem visual estabelecida, esta série expande o universo criativo com novas composições e paletas cromáticas. Desenvolvido em Adobe Photoshop.'
        },
        en: {
            urbanEchoesTitle: 'Urban Echoes — Portuguese Hip-Hop Collectibles #1',
            urbanEchoesCategory: 'Graphic Design / Digital Collage',
            urbanEchoesDescription: 'A collectible card series inspired by the aesthetics and attitude of Portuguese hip-hop. Each piece combines digital collage, typography, and color to translate each artist\'s unique identity while maintaining visual coherence throughout the series.\n\nA project focused on expression, contrast, and visual storytelling, designed for digital format and portfolio presentation. Developed in Adobe Photoshop.',
            urbanEchoes2Title: 'Urban Echoes — Portuguese Hip-Hop Collectibles #2',
            urbanEchoes2Category: 'Graphic Design / Digital Collage',
            urbanEchoes2Description: 'Second series of the collectible card collection dedicated to Portuguese hip-hop. A continuation of the visual project celebrating the culture and identity of national artists through digital collage and expressive graphic design.\n\nMaintaining the established visual language, this series expands the creative universe with new compositions and color palettes. Developed in Adobe Photoshop.'
        }
    },
    footer: {
        pt: {
            copyright: '© 2025 Leandro Gonçalves. Todos os direitos reservados.'
        },
        en: {
            copyright: '© 2025 Leandro Gonçalves. All rights reserved.'
        }
    }
};

export const t = (section, key, language) => {
    return translations[section]?.[language]?.[key] || translations[section]?.pt?.[key] || key;
};

export default translations;
