import React, { useEffect } from 'react';
import './FAQ.css';

const FAQ = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const faqs = [
        {
            category: "Retreats & Workshops",
            question: "What types of retreats do you host?",
            answer: "We host a diverse range of retreats, including Hatha, Vinyasa, and Nidra Yoga. Our sanctuary also specializes in Ayurvedic healing, meditation intensives, and spiritual growth workshops led by global experts."
        },
        {
            category: "Booking & Hosting",
            question: "How do I book a space for my own workshop?",
            answer: "Instructors can submit a request via our Booking form. Select 'Workshop / Event' as your purpose. Our residency team will review your requirements and coordinate logistics, typically responding within 24 hours."
        },
        {
            category: "Facilities",
            question: "What is included in the yoga hall rental?",
            answer: "Our rentals include exclusive access to the yoga hall, premium Manduka mats, organic cotton bolsters, blocks, professional sound systems, and a serene environment conducive to deep practice."
        },
        {
            category: "Nutrition",
            question: "Are meals provided for retreat participants?",
            answer: "Yes, we specialize in Satvik Ayurvedic vegetarian cuisine. Meals are prepared with seasonal, locally sourced ingredients to support the healing process and enhance the vitality of practitioners."
        },
        {
            category: "Policies",
            question: "Is there a minimum booking duration?",
            answer: "The minimum yoga hall booking is one hour for local classes. For residential retreats, we recommend a 3 to 7-night minimum to fully integrate the benefits of the sanctuary's environment and specialized programs."
        },
        {
            category: "Policies",
            question: "What is your cancellation policy?",
            answer: "Cancellations made 30 days prior to the start date are eligible for a full refund. For shorter notice, we offer credit towards future bookings to ensure the sustainability of our sanctuary for all guests."
        },
        {
            category: "Travel",
            question: "What travel arrangements are recommended?",
            answer: "We recommend flying into Cochin International Airport (COK). Our sanctuary provides private chauffeur services for a seamless 3.5-hour journey through the scenic Kerala landscape to the palace."
        },
        {
            category: "Sustainability",
            question: "Is the sanctuary eco-friendly?",
            answer: "Yes, Chamundi Hill Palace is committed to sustainability. We utilize solar energy, practice organic farming for our Ayurvedic kitchen, and implement strict 'zero-plastic' policies across the estate."
        },
        {
            category: "Accessibility",
            question: "Is the palace accessible for those with mobility issues?",
            answer: "While the palace is a heritage building with some stairs, we have ground-floor accommodation and accessible yoga hall spaces. Please contact our team in advance to ensure we meet your specific needs."
        }
    ];

    return (
        <div id="faq" className="faq-page">
            <header className="page-header faq-header">
                <div className="container">
                    <h1>Frequently Asked Questions</h1>
                    <p>Comprehensive guide to your journey at Chamundi Hill Palace.</p>
                </div>
            </header>

            <section className="faq-content-section">
                <div className="container">
                    <div className="faq-grid">
                        {faqs.map((faq, index) => (
                            <div key={index} className="faq-item">
                                <span className="faq-category">{faq.category}</span>
                                <h3>{faq.question}</h3>
                                <p>{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQ;
