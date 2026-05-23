import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiCheckCircle, FiPhone, FiMail } from 'react-icons/fi'
import { companyInfo } from '../data/products'
import EnquiryWidget from '../components/EnquiryWidget'
import './OEM.css'

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } }
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

export default function OEM() {
    return (
        <div className="oem-page">
            {/* Banner */}
            <div className="page-banner">
                <div className="container">
                    <div className="page-banner-breadcrumb"><Link to="/">Home</Link> / <span>OEM Solutions</span></div>
                    <h1>OEM <span>SOLUTIONS</span></h1>
                    <p className="page-banner-sub">Custom Motor Engineering · Bulk Production · Pan India Supply</p>
                </div>
            </div>

            <div className="container oem-layout">
                <main className="oem-main">
                    {/* Intro */}
                    <motion.section className="oem-intro" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                        <motion.div variants={fadeUp} className="section-label">OEM Manufacturing</motion.div>
                        <motion.h2 variants={fadeUp} className="section-title">Your <span>Engineering Partner</span></motion.h2>
                        <motion.p variants={fadeUp} className="oem-intro-text">{companyInfo.oem.intro}</motion.p>
                    </motion.section>

                    {/* Capabilities Grid */}
                    <section className="oem-capabilities">
                        <h3 className="oem-section-head">Engineering Capabilities</h3>
                        <div className="capabilities-grid">
                            {companyInfo.oem.capabilities.map((cap, i) => (
                                <motion.div key={cap.title} className="cap-card"
                                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.08 }} viewport={{ once: true }}>
                                    <FiCheckCircle className="cap-icon" />
                                    <h4>{cap.title}</h4>
                                    <p>{cap.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Process */}
                    <section className="oem-process">
                        <h3 className="oem-section-head">Our OEM Process</h3>
                        <div className="process-list">
                            {companyInfo.oem.process.map((step, i) => (
                                <motion.div key={step.step} className="process-step"
                                    initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
                                    <div className="process-num">{step.step}</div>
                                    <div className="process-content">
                                        <h4>{step.title}</h4>
                                        <p>{step.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* CTA */}
                    <div className="oem-cta-bar">
                        <div>
                            <h3>Ready to Start Your OEM Project?</h3>
                            <p>Talk to our engineering team — no obligation consultation.</p>
                        </div>
                        <div className="oem-cta-actions">
                            <a href={`tel:${companyInfo.phone}`} className="btn btn-primary"><FiPhone /> {companyInfo.phone}</a>
                            <a href={`mailto:${companyInfo.email}`} className="btn btn-outline"><FiMail /> Email Us</a>
                        </div>
                    </div>
                </main>

                <aside className="oem-sidebar">
                    <EnquiryWidget productName="OEM Motor Engineering" />
                </aside>
            </div>
        </div>
    )
}
