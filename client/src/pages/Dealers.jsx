import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiCheckCircle, FiPhone, FiMail } from 'react-icons/fi'
import { companyInfo } from '../data/products'
import './Dealers.css'

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } }
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

export default function Dealers() {
    return (
        <div className="dealers-page">
            {/* Banner */}
            <div className="page-banner">
                <div className="container">
                    <div className="page-banner-breadcrumb">
                        <Link to="/">Home</Link> / <span>Dealer Program</span>
                    </div>
                    <h1>DEALER & <span>DISTRIBUTOR</span> PROGRAM</h1>
                    <p className="page-banner-sub">Join the GEO® Network · Competitive Margins · ISI-Certified Products · Pan-India Coverage</p>
                </div>
            </div>

            <div className="container dealers-layout">

                {/* Hero Intro */}
                <motion.section className="dealers-intro" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                    <motion.div variants={fadeUp} className="section-label">Partnership Opportunity</motion.div>
                    <motion.h2 variants={fadeUp} className="section-title">
                        {companyInfo.dealerInfo.headline}
                    </motion.h2>
                    <motion.p variants={fadeUp} className="dealers-intro-sub">{companyInfo.dealerInfo.subheadline}</motion.p>
                    <motion.p variants={fadeUp} className="dealers-intro-text">{companyInfo.dealerInfo.intro}</motion.p>
                </motion.section>

                {/* Benefits Grid */}
                <section className="dealers-benefits">
                    <h2 className="dealers-section-head">Benefits of Becoming a GEO® Dealer</h2>
                    <div className="benefits-grid">
                        {companyInfo.dealerInfo.benefits.map((b, i) => (
                            <motion.div key={b.title} className="benefit-card"
                                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
                                <div className="benefit-icon">{b.icon}</div>
                                <h3 className="benefit-title">{b.title}</h3>
                                <p className="benefit-desc">{b.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Partnership Types */}
                <section className="dealers-types">
                    <h2 className="dealers-section-head">Partnership Types</h2>
                    <div className="types-grid">
                        {companyInfo.dealerInfo.types.map((t, i) => (
                            <motion.div key={t.type} className="type-card"
                                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
                                <div className="type-scope">{t.scope}</div>
                                <h3 className="type-title">{t.type}</h3>
                                <p className="type-desc">{t.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Eligibility Criteria */}
                <motion.section className="dealers-criteria"
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                    <motion.h2 variants={fadeUp} className="dealers-section-head">Dealer Eligibility Criteria</motion.h2>
                    <motion.p variants={fadeUp} className="dealers-criteria-intro">
                        We welcome established businesses in the electrical, hardware, and cooler industry to apply for GEO® dealership. Here's what we look for in our partners:
                    </motion.p>
                    <motion.div variants={fadeUp} className="criteria-list">
                        {companyInfo.dealerInfo.criteria.map((c, i) => (
                            <div key={i} className="criteria-item">
                                <FiCheckCircle className="criteria-icon" />
                                <span>{c}</span>
                            </div>
                        ))}
                    </motion.div>
                </motion.section>

                {/* Stats Strip */}
                <section className="dealers-stats">
                    {[
                        { value: '30+', label: 'Years of Manufacturing Trust' },
                        { value: 'ISI & ISO', label: 'Certified Products' },
                        { value: '10,000+', label: 'Units Per Production Run' },
                        { value: 'Pan India', label: 'Supply Network' },
                        { value: '6', label: 'Product Series to Sell' },
                    ].map(s => (
                        <div key={s.label} className="dealer-stat-item">
                            <span className="dealer-stat-value">{s.value}</span>
                            <span className="dealer-stat-label">{s.label}</span>
                        </div>
                    ))}
                </section>

                {/* Current Partners */}
                <section className="dealers-partners">
                    <h2 className="dealers-section-head">Our OEM & Distribution Partners</h2>
                    <p className="dealers-partners-intro">
                        GEO® motors power India's leading cooler brands. When you become a GEO dealer, you sell products trusted by established manufacturers across the country.
                    </p>
                    <div className="partners-marquee-wrapper">
                        <div className="partners-marquee-track">
                            {[...companyInfo.clients, ...companyInfo.clients].map((c, i) => (
                                <div key={i} className="partner-badge">{c}</div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Apply Section */}
                <section className="dealers-apply">
                    <div className="apply-card">
                        <div className="apply-icon">📋</div>
                        <div className="apply-content">
                            <h2 className="apply-title">Apply for GEO® Dealership</h2>
                            <p className="apply-desc">{companyInfo.dealerInfo.cta}</p>
                            <div className="apply-actions">
                                <a href={`tel:${companyInfo.phone}`} className="btn btn-primary" id="dealers-call-btn">
                                    <FiPhone /> {companyInfo.phone}
                                </a>
                                <a href={`mailto:${companyInfo.email}`} className="btn btn-outline" id="dealers-email-btn">
                                    <FiMail /> {companyInfo.email}
                                </a>
                                <Link to="/contact" className="btn btn-dark" id="dealers-enquiry-btn">
                                    Send Enquiry <FiArrowRight />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why GEO Summary */}
                <section className="dealers-why-strip">
                    <h3>Why GEO® Is the Right Partner for Your Business</h3>
                    <div className="dealers-why-list">
                        {[
                            'ISI-registered motors — legally compliant, market-trusted',
                            'ISO 9001:2015 certified manufacturing — consistent quality every batch',
                            '30+ years of Indian manufacturing experience',
                            'Complete product range — one supplier for all cooler motor needs',
                            'India\'s first manufacturer of H-Frame Capcan Cooler Motor',
                            'Reliable pan-India supply chain for uninterrupted business',
                        ].map((w, i) => (
                            <div key={i} className="dealers-why-item">
                                <FiCheckCircle className="dealers-why-icon" />
                                <span>{w}</span>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    )
}
