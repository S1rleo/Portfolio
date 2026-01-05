
const About = () => {
    return (
        <section id="about" style={{ padding: '150px 20px', display: 'flex', justifyContent: 'center' }}>
            <div className="container" style={{ display: 'flex', gap: '50px', alignItems: 'center' }}>
                <div style={{ flex: 1 }}>
                    <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>ABOUT ME</h2>
                    <p style={{ lineHeight: '1.6', color: '#ccc' }}>Creative developer and designer focused on building immersive digital experiences.</p>
                </div>
                <div style={{ flex: 1, height: '400px', background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    [IMAGE/MODEL PLACEHOLDER]
                </div>
            </div>
        </section>
    );
};

export default About;
