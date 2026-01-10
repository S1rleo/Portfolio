
const Portfolio = () => {
    return (
        <section id="portfolio" style={{ padding: '0 20px', minHeight: '100vh', display: 'flex', alignItems: 'center', background: '#080808', scrollSnapAlign: 'start' }}>
            <div className="container" style={{ width: '100%' }}>
                <h2 style={{ fontSize: '4rem', marginBottom: '4rem', textTransform: 'uppercase', textAlign: 'right', color: '#333' }}>Selected Works</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '40px' }}>
                    {[1, 2, 3, 4].map((item) => (
                        <div key={item} style={{ height: '400px', background: '#111', border: '1px solid #222', padding: '20px' }}>
                            <h3 style={{ color: 'white' }}>Project {item}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
