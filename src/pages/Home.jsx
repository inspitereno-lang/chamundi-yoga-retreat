import { motion } from "framer-motion";
import { CheckCircle, Award } from "lucide-react";
import "./Home.css";

// 1. Static data moved outside to reduce memory usage per render
const OFFERINGS = [
  {
    title: "Equipped Yoga Hall",
    desc: "Professional spaces with all yoga props and sound systems.",
    img: "/images/optimized/WhatsApp Image 2026-02-16 at 16.00.37.webp",
  },
  {
    title: "Peaceful Environment",
    desc: "A serene sanctuary surrounded by nature for deep practice.",
    img: "/images/optimized/peacefull.jpg.webp",
  },
  {
    title: "For All Levels",
    desc: "Perfect for yoga instructors, students, and practitioners.",
    img: "/images/optimized/028.webp",
  },
  {
    title: "Yoga with ayurveda massage",
    desc: "We restore your balance, strength, and energy through Ayurveda & Yoga.",
    img: "/images/optimized/053.webp",
  },
];

const WHY_US = [
  "Prime location surrounded by nature",
  "Professional, peaceful atmosphere",
  "All equipment included",
  "Affordable rates",
  "Clean, well-maintained facilities",
];

const ANIMATIONS = {
  fadeIn: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  },
  stagger: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  },
};

const Home = () => {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div id="home" className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          {" "}
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="hero-video"
          >
            <source src="/0206(1).mp4" type="video/mp4" />
          </video>
        </div>

        {/* Visualizing the "Perfect Yoga Space" concept for context */}

        <motion.div
          className="container hero-content"
          initial="hidden"
          animate="visible"
          variants={ANIMATIONS.stagger}
        >
          <motion.h1 variants={ANIMATIONS.fadeIn}>
            Your Perfect Yoga Space Awaits
          </motion.h1>
          <motion.p className="hero-tagline" variants={ANIMATIONS.fadeIn}>
            Elevate Your <span className="highlight">Practice</span> in a Sanctuary of <span className="highlight">Serenity</span>
          </motion.p>
        </motion.div>
      </section>

      {/* What We Offer */}
      <section className="offer-section">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={ANIMATIONS.fadeIn}
          >
            <h2>What We Offer</h2>
            <div className="underline"></div>
            <p>Experience the perfect balance of luxury and tranquility</p>
          </motion.div>

          <motion.div
            className="offer-grid-enhanced"
            variants={ANIMATIONS.stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {OFFERINGS.map((item, index) => (
              <motion.div
                key={index}
                className="offer-card-enhanced"
                variants={ANIMATIONS.fadeIn}
              >
                {/* Added lazy loading for performance */}
                <div className="offer-img">
                  <img src={item.img} alt={item.title} loading="lazy" />
                </div>
                <div className="offer-content">
                  <div className="offer-header">
                    <CheckCircle className="icon" />
                    <h3>{item.title}</h3>
                  </div>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us">
        <div className="container why-grid">
          <div className="why-img">
            <img
              src="/images/optimized/085.webp"
              alt="Yoga Session"
              loading="lazy"
            />
          </div>
          <div className="why-content">
            <h2>Why Choose Our Space</h2>
            <ul className="why-list">
              {WHY_US.map((item, index) => (
                <li key={index}>
                  <div className="bullet"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 25 Years Excellence Section */}
      <section className="journey-section-enhanced">
        <div className="container journey-grid">
          <motion.div
            className="journey-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="milestone-container">
              <div className="milestone-number">25</div>
              <div className="milestone-label">Years</div>
            </div>
            <div className="heritage-collage">
              <div className="collage-main">
                <img
                  src="/images/optimized/founder3.jpeg"
                  alt="Saroja Thampi"
                  loading="lazy"
                />
                <div className="founder-info">
                  <div className="founder-name">Saroja Thampi</div>
                  <div className="founder-title">Managing Director</div>
                </div>
              </div>
              <div className="collage-side">
                <div className="collage-item">
                  <img
                    src="/images/optimized/founder2.jpeg"
                    alt="Jibu C Joseph"
                    loading="lazy"
                  />
                  <div className="founder-info">
                    <div className="founder-name">Jibu C Joseph</div>
                  </div>
                </div>
                <div className="collage-item">
                  <img
                    src="/images/optimized/founder1.jpeg"
                    alt="Dr.Sheela VG"
                    loading="lazy"
                  />
                  <div className="founder-info">
                    <div className="founder-name" style={{ whiteSpace: 'nowrap' }}>Dr. Sheela VG</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="journey-content"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="heritage-badge">
              <img src="/images/optimized/logo_chamundi.webp" alt="Chamundi Logo" className="heritage-logo-icon" />
              <span className="subtitle">Our Heritage</span>
            </div>
            <h2>25 Years of Excellence</h2>
            <div className="underline-left"></div>
            <p className="journey-description">
              Celebrating a quarter-century of healing and spiritual growth. Since 1999,
              Chamundi Hill Palace has been a sanctuary for seekers, providing a sacred space
              where ancient wisdom meets modern tranquility. Our journey is defined by the
              thousands of lives touched and the serene legacy we continue to build every day.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
