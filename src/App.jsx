import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense, memo } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';

// Lazy load page components for faster initial load
const Home = lazy(() => import('./pages/Home'));
const Studios = lazy(() => import('./pages/Studios'));
const Services = lazy(() => import('./pages/Services'));
const Booking = lazy(() => import('./pages/Booking'));
const About = lazy(() => import('./pages/About'));
const FAQ = lazy(() => import('./pages/FAQ'));

// Loading fallback
const PageLoader = () => (
    <div style={{
        minHeight: '50vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f9f9f7'
    }}>
        <div style={{
            width: '40px',
            height: '40px',
            border: '3px solid #e0e0e0',
            borderTop: '3px solid #5d8a54',
            borderRadius: '50%',
            animation: 'spin 0.8s linear infinite'
        }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
);

// Component to handle smooth scrolling with Lenis
// Component to handle scroll restoration on route change
const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        const scrollToElement = () => {
            if (!hash) {
                window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                return true;
            }

            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                return true;
            }
            return false;
        };

        // Try immediately
        if (!scrollToElement()) {
            // Retry for a bit if not found (lazy load)
            const interval = setInterval(() => {
                if (scrollToElement()) {
                    clearInterval(interval);
                }
            }, 100);

            // Stop trying after 2 seconds
            const timeout = setTimeout(() => {
                clearInterval(interval);
            }, 2000);

            return () => {
                clearInterval(interval);
                clearTimeout(timeout);
            };
        }
    }, [pathname, hash]);

    return null;
};

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="app-container">
                <Header />
                <main>
                    <Suspense fallback={<PageLoader />}>
                        <Routes>
                            <Route path="/" element={
                                <>
                                    <Home />
                                    <Studios />
                                    <Services />
                                    <Booking />
                                    <About />
                                </>
                            } />
                            <Route path="/faq" element={<FAQ />} />
                        </Routes>
                    </Suspense>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
