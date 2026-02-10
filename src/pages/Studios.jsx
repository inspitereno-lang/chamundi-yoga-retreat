import { ArrowRight, Wind, Shield, Users, Music, Coffee, Wifi, Car, Waves, Leaf, Home, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Studios.css';

const Studios = () => {
    const studios = [
        {
            id: 1,
            name: "Main Yoga Hall",
            features: [
                "Spacious with natural lighting and ventilation",
                "Wooden or anti-slip flooring",
                "Equipped with mats, blocks, bolsters, and sound system",
                "Ideal for group sessions, workshops, and teacher trainings",
            ],
            img: "/images/optimized/048.jpg",
        },
    ];

    const allInclusivePackage = {
        name: "All-Inclusive Heritage Retreat",
        icon: <Home size={44} />,
        includes: [
            "Exclusive Yoga Hall Space (equipped with mats, sound & lighting)",
            "Luxury Heritage Accommodation (Single or Twin-sharing)",
            "Satvik Ayurvedic Vegetarian Meals (3 per day)",
            "Professional Hospitality & Housekeeping",
            "Full access to palace gardens and meditation areas",
            "High-speed Wi-Fi & essential amenities",
        ],
        bestFor: "Yoga teachers and schools seeking a complete, hassle-free sanctuary experience where every detail is taken care of.",
        img: "/images/optimized/welcomingGuests.webp",
        color: "var(--primary-color)",
    };

    return (
        <div id="studios" className="studios-page">
            <header className="page-header studios-header">
                <div className="container">
                    <h1>Explore Our Yoga Spaces</h1>
                    <p>Find the perfect environment for your practice or teaching.</p>
                </div>
            </header>

            <section className="studios-list">
                <div className="container">
                    {studios.map((studio, index) => (
                        <motion.div
                            key={studio.id}
                            className={`studio-detail-card ${index % 2 !== 0 ? 'reverse' : ''}`}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="studio-img">
                                <img src={studio.img} alt={studio.name} loading="lazy" />
                            </div>
                            <div className="studio-content">
                                <h2>{studio.name}</h2>
                                <ul className="feature-list">
                                    {studio.features.map((f, i) => (
                                        <li key={i}>{f}</li>
                                    ))}
                                </ul>
                                {studio.id !== 2 && <Link to="/booking" className="btn btn-primary">Book This Space</Link>}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section id="packages" className="packages bg-light">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Retreat Packages for Instructors</h2>
                        <p>(Chamundi Hill Palace)</p>
                        <div className="underline"></div>
                    </div>
                    <div className="single-package-container">
                        <motion.div
                            className="package-card-premium"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="package-visual-pro">
                                <img src={allInclusivePackage.img} alt={allInclusivePackage.name} loading="lazy" />
                                <div className="package-tag">Primary Offering</div>
                            </div>
                            <div className="package-content-pro">
                                <div className="package-header-pro">
                                    <div className="package-icon-pro">{allInclusivePackage.icon}</div>
                                    <div className="package-title-group">
                                        <h3>{allInclusivePackage.name}</h3>
                                        <p className="full-bundle">Accommodation + Food + Space</p>
                                    </div>
                                </div>
                                <ul className="premium-features">
                                    {allInclusivePackage.includes.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                                <div className="best-for-pro">
                                    <strong>Perfect for:</strong> {allInclusivePackage.bestFor}
                                </div>
                                <Link to="/booking" className="btn btn-primary package-book-btn">
                                    Inquire for Group Rates <ArrowRight size={18} />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Studios;
