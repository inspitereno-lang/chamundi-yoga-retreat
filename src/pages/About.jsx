import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <div id="about" className="about-page">
            <header className="page-header about-header">
                <div className="container">
                    <h1>About Kerala Ayurveda Yoga</h1>
                    <p>A peaceful sanctuary for connection, healing, and growth.</p>
                </div>
            </header>

            <section className="about-story">
                <div className="container about-story-grid">
                    <div className="about-text-top">
                        <h2>Our Journey</h2>
                        <p>Kerala Ayurveda Yoga was created as a peaceful sanctuary for yoga, meditation, and wellness. Our goal is to provide yoga teachers, travelers, and practitioners a serene environment to connect deeply with their practice — surrounded by nature and calm energy.</p>
                    </div>
                    <div className="about-img">
                        <img src="/images/optimized/yoga2.webp" alt="Our Sanctuary" loading="lazy" />
                    </div>
                    <div className="about-text-bottom">
                        <h3>Our Commitment</h3>
                        <ul className="commitment-list">
                            <li>Maintaining a clean, peaceful, energy-filled environment</li>
                            <li>Supporting local and international yoga communities</li>
                            <li>Providing accessible, high-quality spaces for practice and retreats</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="location-section bg-light">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Find Us</h2>
                        <div className="underline"></div>
                    </div>

                    <div className="location-grid">
                        <div className="location-info">
                            <div className="contact-card">
                                <MapPin className="icon" />
                                <div>
                                    <h4>Location</h4>
                                    <p>Kerala Ayurveda Yoga, Kottayam, Kerala, India</p>
                                    <ul className="location-details">
                                        <li>Easy access from main road</li>
                                        <li>Free parking available</li>
                                        <li>Surrounded by greenery</li>
                                        <li>10 minutes from nearest town</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="contact-card">
                                <Phone className="icon" />
                                <div>
                                    <h4>Phone</h4>
                                    <p>+91-9447870386</p>
                                </div>
                            </div>
                            <div className="contact-card">
                                <Mail className="icon" />
                                <div>
                                    <h4>Email</h4>
                                    <p>chamundikerala@gmail.com</p>
                                </div>
                            </div>
                            <div className="contact-card">
                                <Clock className="icon" />
                                <div>
                                    <h4>Business Hours</h4>
                                    <p>7:00 AM – 8:00 PM (All days)</p>
                                </div>
                            </div>
                        </div>

                        <div className="map-container">
                            {/* Using a placeholder for Google Maps embed */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.3315694294025!2d76.5126838753!3d9.566699380295147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b062ba16c6b4511%3A0x2607149a40093836!2sKottayam%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                width="100%"
                                height="450"
                                style={{ border: 0, borderRadius: '0', aspectRatio: '1/1', objectFit: 'cover' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                </div>
            </section>


            <section className="guidelines-section bg-primary">
                <div className="container text-center">
                    <h2 style={{ color: 'white' }}>Rules & Guidelines</h2>
                    <div className="guidelines-grid">
                        <div className="guide-item">Respect the silence and cleanliness of the space</div>
                        <div className="guide-item">Arrive 10 minutes early for sessions</div>
                        <div className="guide-item">No outside food or loud music</div>
                        <div className="guide-item">Keep mobile phones silent inside yoga hall</div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
