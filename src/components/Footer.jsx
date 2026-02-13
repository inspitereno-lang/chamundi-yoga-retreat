import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Footer.css';

const Footer = () => {
    const handleComingSoon = (e) => {
        e.preventDefault();
        toast.info("Coming soon!");
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-info">
                        <img src="/images/optimized/logo_chamundi.webp" alt="Chamundi Yoga" className="footer-logo" />
                        <p>Peaceful sanctuary for yoga, meditation, and wellness in the heart of Kerala.</p>
                        <div className="social-links">
                            <a href="https://www.instagram.com/chamundihillpalaceayurveda/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={20} /></a>
                            <a href="https://www.facebook.com/Chamundiayurvedaresort/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={20} /></a>
                            <a href="https://www.linkedin.com/company/chamundi-hill-palace-ayurveda-resort" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
                            <a href="https://www.youtube.com/@chamundihillpalaceayurveda8025" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><Youtube size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-links-section">
                        <h3>Quick Links</h3>
                        <ul className="footer-links">
                            <li><Link to="/#packages">Packages</Link></li>
                            <li><Link to="/#services">Services</Link></li>
                            <li><Link to="/#booking">Book a Space</Link></li>
                            <li><Link to="/faq">FAQ</Link></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h3>Contact Us</h3>
                        <ul>
                            <li><Phone size={18} /> +91-9447870386</li>
                            <li><Mail size={18} /> chamundikerala@gmail.com</li>
                            <li><MapPin size={18} /> Kottayam, Kerala, India</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Kerala Ayurveda Yoga Chamundi. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
