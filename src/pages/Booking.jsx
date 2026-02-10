import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Users, MessageSquare, Info, ArrowRight, Award, Instagram, Facebook, Mail, Loader2, CheckCircle2, AlertCircle, Linkedin, Youtube } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import './Booking.css';

const Booking = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        country: '',
        date: '',
        time: '',
        duration: '1',
        participants: '',
        purpose: 'Yoga Class / Session',
        requirements: '',
    });


    const handleSubmit = (e) => {
        e.preventDefault();

        // Custom Validation
        if (!formData.name.trim()) return toast.error("Please enter your full name.");
        if (!formData.email.trim()) return toast.error("Please enter your email address.");
        if (!formData.phone.trim()) return toast.error("Please enter your phone number.");
        if (!formData.country.trim()) return toast.error("Please enter your country.");
        if (!formData.date) return toast.error("Please choose a date.");
        if (!formData.time) return toast.error("Please choose a preferred time.");
        if (!formData.participants || formData.participants < 1) return toast.error("Please enter number of participants (minimum 1).");

        setIsSubmitting(true);
        // setSubmitStatus(null); // Removed as per instruction

        // emailjs.send(serviceID, templateID, templateParams, publicKey);
        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            country: formData.country,
            date: formData.date,
            time: formData.time,
            duration: formData.duration,
            participants: formData.participants,
            purpose: formData.purpose,
            requirements: formData.requirements || 'None provided',
        };

        emailjs.send(
            'service_cpjd2t6',
            'template_kw9pyac',
            templateParams,
            'g29o6rhguUYNKXTAf'
        )
            .then((result) => {
                console.log('SUCCESS!', result.text);
                toast.success("Booking Request Submitted! We will contact you shortly."); // Changed to toast
                // setSubmitStatus('success'); // Removed as per instruction
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    country: '',
                    date: '',
                    time: '',
                    duration: '1',
                    participants: '',
                    purpose: 'Yoga Class / Session',
                    requirements: '',
                });
            }, (error) => {
                console.log('FAILED...', error.text);
                toast.error("Submission Failed. Please try again or contact us directly."); // Changed to toast
                // setSubmitStatus('error'); // Removed as per instruction
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    const handleComingSoon = (e) => { // Added handleComingSoon function
        e.preventDefault();
        toast.info("Coming soon!");
    };

    return (
        <div id="booking" className="booking-page">
            <header className="page-header booking-header">
                <div className="container">
                    <h1>Booking Form</h1>
                    <p>Reserve your sanctuary for practice and growth.</p>
                </div>
            </header>

            <section className="booking-main">
                <div className="container grid-booking">
                    <div className="booking-form-container">
                        <h2>Booking Form</h2>

                        {/* Removed submitStatus conditional rendering as per instruction
                        {submitStatus === 'success' && (
                            <div className="status-message success">
                                <CheckCircle2 size={20} />
                                <div>
                                    <strong>Booking Requested!</strong>
                                    <p>We've received your request and will contact you shortly at {formData.email || 'your email'}.</p>
                                </div>
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="status-message error">
                                <AlertCircle size={20} />
                                <div>
                                    <strong>Submission Failed</strong>
                                    <p>Something went wrong. Please try again or contact us directly.</p>
                                </div>
                            </div>
                        )} */}

                        <form onSubmit={handleSubmit} className="booking-form" noValidate> {/* Added noValidate */}
                            <div className="form-group">
                                <label>Full Name <span className="required-star">*</span></label>
                                <input
                                    type="text"
                                    placeholder="Enter your full name"
                                    // required Removed as per instruction
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Email Address <span className="required-star">*</span></label>
                                    <input
                                        type="email"
                                        placeholder="email@example.com"
                                        // required Removed as per instruction
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Phone Number <span className="required-star">*</span></label>
                                    <input
                                        type="tel"
                                        placeholder="+91 XXXXX XXXXX"
                                        // required Removed as per instruction
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Country <span className="required-star">*</span></label>
                                <input
                                    type="text"
                                    placeholder="Enter your country"
                                    // required Removed as per instruction
                                    value={formData.country}
                                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                                />
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Choose Date <span className="required-star">*</span></label>
                                    <input
                                        type="date"
                                        // required Removed as per instruction
                                        value={formData.date}
                                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Preferred Time <span className="required-star">*</span></label>
                                    <input
                                        type="time"
                                        // required Removed as per instruction
                                        value={formData.time}
                                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Duration (Hours) <span className="required-star">*</span></label>
                                    <input
                                        type="number"
                                        min="1"
                                        placeholder="1"
                                        // required Removed as per instruction
                                        value={formData.duration}
                                        onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>No. of Participants <span className="required-star">*</span></label>
                                    <input
                                        type="number"
                                        min="1"
                                        // required Removed as per instruction
                                        value={formData.participants}
                                        onChange={(e) => setFormData({ ...formData, participants: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Purpose <span className="required-star">*</span></label>
                                <select // required Removed as per instruction
                                    value={formData.purpose} onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}>
                                    <option value="Yoga Class / Session">Yoga Class / Session</option>
                                    <option value="Workshop / Event">Workshop / Event</option>
                                    <option value="Private Practice">Private Practice</option>
                                    <option value="Retreat">Retreat</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Special Requirements</label>
                                <textarea
                                    rows="4"
                                    placeholder="Any specific equipment or setup needed? (Optional)"
                                    value={formData.requirements}
                                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className={`btn btn-primary ${isSubmitting ? 'loading' : ''}`}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="spinner" size={18} />
                                        Sending...
                                    </>
                                ) : 'Submit Booking Request'}
                            </button>
                        </form>
                    </div>

                    <div className="booking-sidebar">
                        <div className="sidebar-box connect-box">
                            <h3>Connect With Us</h3>
                            <div className="connect-links">
                                <a href="https://www.instagram.com/chamundihillpalaceayurveda/" target="_blank" rel="noopener noreferrer" className="connect-item">
                                    <Instagram size={24} />
                                    <div>
                                        <strong>Instagram</strong>
                                        <span>@chamundihillpalaceayurveda</span>
                                    </div>
                                </a>
                                <a href="https://www.facebook.com/Chamundiayurvedaresort/" target="_blank" rel="noopener noreferrer" className="connect-item">
                                    <Facebook size={24} />
                                    <div>
                                        <strong>Facebook</strong>
                                        <span>Chamundi Ayurveda Resort</span>
                                    </div>
                                </a>
                                <a href="https://www.linkedin.com/company/chamundi-hill-palace-ayurveda-resort" target="_blank" rel="noopener noreferrer" className="connect-item">
                                    <Linkedin size={24} />
                                    <div>
                                        <strong>LinkedIn</strong>
                                        <span>Chamundi Hill Palace</span>
                                    </div>
                                </a>
                                <a href="https://www.youtube.com/@chamundihillpalaceayurveda8025" target="_blank" rel="noopener noreferrer" className="connect-item">
                                    <Youtube size={24} />
                                    <div>
                                        <strong>YouTube</strong>
                                        <span>Official Channel</span>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="sidebar-box visit-box">
                            <h3>Visit Us</h3>
                            <ul className="visit-list">
                                <li>Schedule a yoga hall tour</li>
                                <li>Book a trial yoga session</li>
                            </ul>
                        </div>

                        <div className="sidebar-box policies">
                            <h3><Info size={20} /> Booking Policies</h3>
                            <ul>
                                <li>Advance booking required for all slots.</li>
                                <li>Please arrive 10 minutes early.</li>
                                <li>Equipment must be handled with care.</li>
                                <li>Payments are required to secure the slot.</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            <section className="faq-section bg-light">
                <div className="container">
                    <div className="faq-redirect-card-enhanced">
                        <div className="redirect-content">
                            <h3>Explore Our Comprehensive FAQ Center</h3>
                            <p>For detailed information on arrival, sanctuary policies, and specialized retreat requirements, visit our official Knowledge Base.</p>
                            <Link to="/faq" className="btn btn-primary">
                                View Full FAQ Page <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Booking;
