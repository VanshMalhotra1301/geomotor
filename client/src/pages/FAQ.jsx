import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'
import { companyInfo } from '../data/products'
import './FAQ.css'

// Combine original FAQ + additional expanded FAQ
const allFaq = companyInfo.faq

export default function FAQ() {
    const [open, setOpen] = useState(null)

    return (
        <div className="faq-page">
            <div className="page-banner">
                <div className="container">
                    <div className="page-banner-breadcrumb"><Link to="/">Home</Link> / <span>FAQ</span></div>
                    <h1>FREQUENTLY ASKED <span>QUESTIONS</span></h1>
                    <p className="page-banner-sub">Everything you need to know about GEO Motor India — products, OEM, dealership, and more</p>
                </div>
            </div>

            <div className="container faq-layout">
                <div className="section-header-centered" style={{ textAlign: 'center', marginBottom: '48px' }}>
                    <div className="section-label">Got Questions?</div>
                    <h2 className="section-title">We Have <span>Answers</span></h2>
                    <p className="section-desc" style={{ margin: '0 auto' }}>
                        From product specifications to OEM engineering, dealer programs to bulk orders — find answers to India's most common cooler motor questions.
                    </p>
                </div>

                <div className="faq-list">
                    {allFaq.map((item, i) => (
                        <motion.div key={i} className={`faq-item ${open === i ? 'open' : ''}`}
                            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: Math.min(i * 0.04, 0.4) }} viewport={{ once: true }}>
                            <button className="faq-question" onClick={() => setOpen(open === i ? null : i)} id={`faq-item-${i}`}>
                                <span>{item.q}</span>
                                <FiChevronDown className={`faq-chevron ${open === i ? 'rotated' : ''}`} />
                            </button>
                            <AnimatePresence>
                                {open === i && (
                                    <motion.div className="faq-answer"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}>
                                        <p>{item.a}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                <div className="faq-cta">
                    <div className="faq-cta-text">
                        <h3>Still Have Questions?</h3>
                        <p>Our commercial and technical teams are ready to help — whether it's a product specification, OEM requirement, or dealer inquiry.</p>
                    </div>
                    <div className="faq-cta-actions">
                        <Link to="/contact" className="btn btn-primary" id="faq-contact-btn">Contact Our Team</Link>
                        <Link to="/oem-solutions" className="btn btn-outline" id="faq-oem-btn">OEM Solutions</Link>
                        <Link to="/dealers" className="btn btn-dark" id="faq-dealer-btn">Dealer Program</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
