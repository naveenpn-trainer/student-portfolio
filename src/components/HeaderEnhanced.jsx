import profileImg from '../assets/react.svg';

function Header() {
    return (
        <header style={styles.header}>
            <img src={profileImg} alt="Profile" style={styles.img} />
            <div>
                <h1 style={styles.title}>Naveen PN</h1>
                <p style={styles.subtitle}>Corporate Trainer | Data Engineer | Mentor</p>
                <nav style={styles.nav}>
                    <a href="#about" style={styles.link}>About</a>
                    <a href="#projects" style={styles.link}>Projects</a>
                    <a href="#contact" style={styles.link}>Contact</a>
                </nav>
            </div>
        </header>
    );
}

const styles = {
    header: {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        backgroundColor: '#0074D9', // Blue shade
        color: '#fff',
        padding: '1.5rem',
        flexWrap: 'wrap',
    },
    img: {
        width: '70px',
        height: '70px',
        borderRadius: '50%',
        objectFit: 'cover',
    },
    title: {
        margin: 0,
        fontSize: '1.5rem',
    },
    subtitle: {
        margin: 0,
        fontSize: '1rem',
    },
    nav: {
        marginTop: '0.8rem',
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap',
    },
    link: {
        color: '#fff',
        backgroundColor: '#0056b3',
        padding: '0.5rem 1rem',
        borderRadius: '5px',
        textDecoration: 'none',
        transition: 'background 0.3s',
    },
};

export default Header;
