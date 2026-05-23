import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { companyInfo } from '../data/products'
import EnquiryWidget from '../components/EnquiryWidget'
import './About.css'

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } }
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

export default function About() {
    return (
        <div className="about-page">
            {/* Banner */}
            <div className="page-banner">
                <div className="container">
                    <div className="page-banner-breadcrumb">
                        <Link to="/">Home</Link> / <span>About Us</span>
                    </div>
                    <h1>ABOUT <span>US</span></h1>
                    <p className="page-banner-sub">GEO Since :- 1995</p>
                </div>
            </div>

            <div className="container about-layout">
                {/* Main Content */}
                <motion.div className="about-main" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                    <motion.div variants={fadeUp}>
                        <h2 className="about-section-head">Who We Are</h2>
                        {companyInfo.fullAbout.split('\n\n').map((para, i) => (
                            <p key={i} className="about-para">{para}</p>
                        ))}
                    </motion.div>

                    {/* Timeline */}
                    <motion.div variants={fadeUp} className="timeline">
                        <h3 className="timeline-title">Our Journey</h3>
                        <div className="timeline-list">
                            {companyInfo.milestones.map((m, i) => (
                                <motion.div key={m.year} className="timeline-item"
                                    initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
                                    <div className="timeline-dot" />
                                    <div className="timeline-content">
                                        <span className="timeline-year">{m.year}</span>
                                        <p className="timeline-event">{m.event}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Certifications */}
                    <motion.div variants={fadeUp} className="cert-row">
                        {['ISO Certified', 'ISI Registered', 'GSTIN Verified', 'UDYAM Registered'].map(c => (
                            <div key={c} className="cert-badge">✓ {c}</div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Sidebar */}
                <aside className="about-sidebar">
                    <EnquiryWidget />
                </aside>
            </div>
        </div>
    )
}
