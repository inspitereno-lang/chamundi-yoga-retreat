import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';
import './Header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Scroll Spy Logic
            const sections = ['home', 'studios', 'packages', 'services', 'booking', 'about'];
            let current = '';

            // Reverse iterate to find the most relevant current section
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150) {
                        current = section;
                        break;
                    }
                }
            }
            if (current && current !== activeSection) {
                setActiveSection(current);
            }
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeSection]);

    const scrollToSection = (id) => {
        setIsOpen(false);

        if (id === 'faq') {
            navigate('/faq');
            setActiveSection('faq');
            return;
        }

        if (location.pathname !== '/') {
            navigate('/');
            // Small timeout to allow navigation to complete before scrolling
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    const headerOffset = 100;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.scrollY - headerOffset;
                    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                }
            }, 100);
        } else {
            const element = document.getElementById(id);
            if (element) {
                const headerOffset = 100;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
            }
        }
        setActiveSection(id);
    };

    const navLinks = [
        { name: 'Home', id: 'home' },
        { name: 'Yoga Hall', id: 'studios' },
        { name: 'Packages', id: 'packages' },
        { name: 'Services', id: 'services' },
        { name: 'Booking', id: 'booking' },
        { name: 'About', id: 'about' },
        { name: 'FAQ', id: 'faq' },
    ];

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''} white-nav`}>
            <div className="container header-content">
                <Link to="/" onClick={() => scrollToSection('home')} className="logo">
                    <img
                        src="/images/optimized/logo_chamundi.webp"
                        alt="Chamundi Yoga"
                        className="logo-img"
                        width="40"
                        height="40"
                    />
                    <span className="logo-text">
                        <span className="logo-main">Yoga Retreat</span>
                        <span className="logo-sub">Chamundi Hill Palace</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="desktop-nav">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className={`nav-link-btn ${activeSection === link.id ? 'active' : ''}`}
                        >
                            {link.name}
                            {activeSection === link.id && (
                                <span className="nav-underline"></span>
                            )}
                        </button>
                    ))}
                    <button onClick={() => scrollToSection('booking')} className="btn btn-primary nav-cta">Book Now</button>
                </nav>

                {/* Mobile Menu Button */}
                <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Nav */}
                <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className="mobile-link"
                            style={{
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                width: '100%',
                                textAlign: 'left',
                                color: activeSection === link.id ? 'var(--primary-color)' : 'inherit',
                                fontWeight: activeSection === link.id ? '700' : '600'
                            }}
                        >
                            {link.name}
                        </button>
                    ))}
                    <button onClick={() => scrollToSection('booking')} className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
