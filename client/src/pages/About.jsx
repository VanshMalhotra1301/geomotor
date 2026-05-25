import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi'
import { companyInfo } from '../data/products'
import EnquiryWidget from '../components/EnquiryWidget'
import SEO from '../components/SEO' // Imported the reusable SEO metadata engine
import './About.css'

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } }
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

export default function About() {
    return (
        <div className="about-page">
            {/* Dynamic SEO Injector customized for your Vercel production deployment */}
            <SEO 
                title={companyInfo.seoMeta?.aboutTitle || "About GEO Motor India — 30+ Years of Cooler Motor Manufacturing Excellence"}
                description={companyInfo.seoMeta?.aboutDesc || "Founded in 1995 by Mr. Vijay Sikka, GEO Motor India is an ISO-certified, ISI-registered cooler motor manufacturer based in Delhi. Learn about our manufacturing journey, milestones, and engineering commitment."}
                slug="/about"
            />

            {/* Banner */}
            <div className="page-banner">
                <div className="container">
                    <div className="page-banner-breadcrumb">
                        <Link to="/">Home</Link> / <span>About Us</span>
                    </div>
                    <h1>ABOUT <span>US</span></h1>
                    <p className="page-banner-sub">GEO® Motor India — Precision Cooler Motor Manufacturer Since 1995</p>
                </div>
            </div>

            <div className="container about-layout">
                {/* Main Content */}
                <motion.div className="about-main" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>

                    {/* Who We Are */}
                    <motion.div variants={fadeUp}>
                        <h2 className="about-section-head">Who We Are</h2>
                        {companyInfo.fullAbout.split('\n\n').map((para, i) => (
                            <p key={i} className="about-para">{para}</p>
                        ))}
                    </motion.div>

                    {/* Mission & Vision */}
                    <motion.div variants={fadeUp} className="about-mvp-grid">
                        <div className="about-mv-card">
                            <div className="about-mv-icon">🎯</div>
                            <h3 className="about-mv-title">Our Mission</h3>
                            <p className="about-mv-text">{companyInfo.mission}</p>
                        </div>
                        <div className="about-mv-card">
                            <div className="about-mv-icon">🔭</div>
                            <h3 className="about-mv-title">Our Vision</h3>
                            <p className="about-mv-text">{companyInfo.vision}</p>
                        </div>
                    </motion.div>

                    {/* Manufacturing Philosophy */}
                    <motion.div variants={fadeUp} className="about-philosophy">
                        <h2 className="about-section-head">Manufacturing Philosophy</h2>
                        <p className="about-para">{companyInfo.manufacturingPhilosophy}</p>
                    </motion.div>

                    {/* Quality Commitment */}
                    <motion.div variants={fadeUp} className="about-quality-block">
                        <div className="about-quality-icon">🔬</div>
                        <div>
                            <h3 className="about-quality-title">Our Quality Commitment</h3>
                            <p className="about-quality-text">{companyInfo.qualityPhilosophy}</p>
                        </div>
                    </motion.div>

                    {/* Leadership */}
                    <motion.div variants={fadeUp} className="about-leadership">
                        <h2 className="about-section-head">Leadership & Founders</h2>
                        <div className="leadership-grid">
                            {[
                                { name: "Mr. Vijay Sikka", role: "Founder & CEO", desc: "Founded GEO Motor India in 1995 with a vision to provide high-quality, affordable cooler motors as alternatives to expensive market offerings. His decades of experience in India's electrical industry established the technical foundation of the GEO brand." },
                                { name: "Mr. Gaurav Sikka", role: "Co-Founder — Technical Operations", desc: "Joined as co-founder, contributing deep expertise in technical operations management. Instrumental in driving GEO's manufacturing capability upgrades — from the stamping plant to the T-200 winding machine installation." },
                                { name: "Mr. Rachin Sikka", role: "Co-Founder — Workforce & Operations", desc: "Joined as co-founder with a focus on workforce management and operational excellence. His contributions have been central to scaling GEO's production capacity while maintaining the consistent quality standards the brand is known for." },
                            ].map((leader, i) => (
                                <motion.div key={leader.name} className="leader-card"
                                    initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.12 }} viewport={{ once: true }}>
                                    <div className="leader-avatar">{leader.name.split(' ')[1]?.charAt(0) || 'G'}</div>
                                    <div>
                                        <h4 className="leader-name">{leader.name}</h4>
                                        <span className="leader-role">{leader.role}</span>
                                        <p className="leader-desc">{leader.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Timeline */}
                    <motion.div variants={fadeUp} className="timeline">
                        <h3 className="timeline-title">Our Manufacturing Journey</h3>
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

                    {/* Manufacturing Capability Stats */}
                    <motion.div variants={fadeUp} className="about-stats-strip">
                        {companyInfo.stats.map(s => (
                            <div key={s.label} className="about-stat-item">
                                <span className="about-stat-value">{s.value}</span>
                                <span className="about-stat-label">{s.label}</span>
                            </div>
                        ))}
                    </motion.div>

                    {/* Certifications */}
                    <motion.div variants={fadeUp} className="cert-row">
                        {['ISO 9001:2015 Certified', 'ISI Registered — IS:996', 'GSTIN Verified', 'UDYAM Registered MSME'].map(c => (
                            <div key={c} className="cert-badge"><FiCheckCircle /> {c}</div>
                        ))}
                    </motion.div>

                    {/* CTA */}
                    <motion.div variants={fadeUp} className="about-cta-row">
                        <Link to="/contact" className="btn btn-primary" id="about-contact-btn">Enquire Now <FiArrowRight /></Link>
                        <Link to="/oem-solutions" className="btn btn-outline" id="about-oem-btn">OEM Solutions <FiArrowRight /></Link>
                        <Link to="/dealers" className="btn btn-dark" id="about-dealer-btn">Become a Dealer</Link>
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