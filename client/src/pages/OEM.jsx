import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiCheckCircle, FiPhone, FiMail } from 'react-icons/fi'
import { companyInfo } from '../data/products'
import EnquiryWidget from '../components/EnquiryWidget'
import SEO from '../components/SEO'
import JsonLd, { buildServiceSchema, buildBreadcrumbSchema } from '../components/JsonLd'
import './OEM.css'

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } }
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

export default function OEM() {
    return (
        <div className="oem-page">
            <SEO 
                title={companyInfo.seoMeta?.oemTitle || "OEM Motor Manufacturing Solutions — Sikka and Sons"}
                description={companyInfo.seoMeta?.oemDesc || "Custom OEM motor engineering for India's leading cooler brands. Sikka and Sons offers custom RPM, frame, winding, and blade solutions. ISI-certified OEM supply with bulk production capability."}
                slug="/oem-solutions"
            />
            <JsonLd data={[
                buildServiceSchema({
                    name: 'OEM Motor Manufacturing Solutions',
                    description: companyInfo.oem.intro,
                    url: '/oem-solutions'
                }),
                buildBreadcrumbSchema([
                    { name: 'Home', url: '/' },
                    { name: 'OEM Solutions' }
                ])
            ]} />

            {/* Banner */}
            <div className="page-banner">
                <div className="container">
                    <div className="page-banner-breadcrumb"><Link to="/">Home</Link> / <span>OEM Solutions</span></div>
                    <h1>OEM <span>SOLUTIONS</span></h1>
                    <p className="page-banner-sub">Custom Motor Engineering · ISI-Certified Supply · Bulk Production · Pan India Delivery</p>
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

                    {/* Why Partner With GEO */}
                    <section className="oem-why-partner">
                        <h3 className="oem-section-head">Why Partner With GEO®?</h3>
                        <div className="oem-why-grid">
                            {companyInfo.oem.whyPartner.map((item, i) => (
                                <motion.div key={item.title} className="oem-why-card"
                                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
                                    <FiCheckCircle className="oem-why-icon" />
                                    <div>
                                        <h4>{item.title}</h4>
                                        <p>{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Industries Served */}
                    <section className="oem-industries">
                        <h3 className="oem-section-head">Industries We Serve</h3>
                        <div className="oem-industries-list">
                            {companyInfo.oem.industriesServed.map((ind, i) => (
                                <motion.div key={ind} className="oem-industry-pill"
                                    initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.08 }} viewport={{ once: true }}>
                                    {ind}
                                </motion.div>
                            ))}
                        </div>
                    </section>

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

                    {/* Minimum Order Info */}
                    <section className="oem-moq-block">
                        <div className="oem-moq-icon">📦</div>
                        <div>
                            <h3>Bulk Production Capability</h3>
                            <p>Our automated T-200 winding plant and stamping lines support production runs of <strong style={{ color: 'var(--green)' }}>10,000+ units</strong> per order with consistent quality at every unit. We work with OEM partners on production planning to ensure on-time delivery for peak cooling season demand.</p>
                        </div>
                    </section>

                    {/* CTA */}
                    <div className="oem-cta-bar">
                        <div>
                            <h3>Ready to Start Your OEM Project?</h3>
                            <p>Talk to our engineering team — share your motor specifications and we'll provide a customized solution within 48 hours.</p>
                        </div>
                        <div className="oem-cta-actions">
                            <a href={`tel:${companyInfo.phone}`} className="btn btn-primary" id="oem-call-btn"><FiPhone /> {companyInfo.phone}</a>
                            <a href={`mailto:${companyInfo.email}`} className="btn btn-outline" id="oem-email-btn"><FiMail /> Email Us</a>
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
