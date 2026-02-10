import { motion } from 'framer-motion';
import { Clock, Users, ShieldCheck } from 'lucide-react';
import './Services.css';

const Services = () => {

    return (
        <div id="services" className="services-page">
            <header className="page-header services-header">
                <div className="container">
                    <h1>Retreat Packages & Services</h1>
                    <p>Flexible options for instructors and practitioners</p>
                </div>
            </header>

            <section className="booking-info">
                <div className="container">
                    <div>
                        <h2>Who Can Book Our Space</h2>
                        <div className="who-list">
                            <div className="who-item"><strong>Yoga Instructors</strong> – Host your retreats or workshops</div>
                            <div className="who-item"><strong>Individual Practitioners</strong> – Personal practice sessions</div>
                            <div className="who-item"><strong>Small Groups</strong> – Friends or yoga communities</div>
                            <div className="who-item"><strong>Corporate Wellness Teams</strong> – Relaxation sessions</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="additional-services">
                <div className="container">
                    <div className="grid-3">
                        <div className="service-box">
                            <ShieldCheck className="icon" />
                            <h4>Rental</h4>
                            <p>Yoga hall space, basic equipment, changing facilities, and parking.</p>
                        </div>
                        <div className="service-box">
                            <Users className="icon" />
                            <h4>Additional Support</h4>
                            <p>Reception / Check-in support and marketing support for instructors.</p>
                        </div>
                        <div className="service-box">
                            <Clock className="icon" />
                            <h4>Flexible Extensions</h4>
                            <p>Extended hours and extra equipment rental available on request.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
