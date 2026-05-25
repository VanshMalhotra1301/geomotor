import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiSend, FiMapPin, FiPhone, FiMail } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { companyInfo } from '../data/products'
import axios from 'axios'
import SEO from '../components/SEO'
import JsonLd, { buildBreadcrumbSchema } from '../components/JsonLd'
import './Contact.css'

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', enquiryType: '', message: '' })
    const [captcha] = useState({ a: Math.ceil(Math.random() * 9), b: Math.ceil(Math.random() * 9) })
    const [captchaInput, setCaptchaInput] = useState('')
    const [status, setStatus] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (parseInt(captchaInput) !== captcha.a + captcha.b) {
            setStatus('captcha')
            return
        }
        
        const subject = encodeURIComponent(`New Enquiry: ${form.enquiryType || 'General'}`);
        const body = encodeURIComponent(`You have a new enquiry from the GEO Motor Website:

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Nature of Enquiry: ${form.enquiryType}

Message:
${form.message}
`);

        window.location.href = `mailto:info@geomotorindia.com?subject=${subject}&body=${body}`;
        
        setStatus('success');
        setForm({ name: '', email: '', phone: '', enquiryType: '', message: '' });
        setCaptchaInput('');
    }

    return (
        <div className="contact-page">
            <SEO 
                title={companyInfo.seoMeta?.contactTitle || "Contact GEO Motor India — Motor Enquiries, OEM & Dealer Partnerships"}
                description={companyInfo.seoMeta?.contactDesc || "Contact GEO Motor India for product enquiries, OEM manufacturing partnerships, dealer applications, and bulk orders. Toll-free: 1800 571 6999 | info@geomotorindia.com"}
                slug="/contact"
            />
            <JsonLd data={buildBreadcrumbSchema([
                { name: 'Home', url: '/' },
                { name: 'Contact Us' }
            ])} />

            {/* Banner */}
            <div className="page-banner">
                <div className="container">
                    <div className="page-banner-breadcrumb">
                        <Link to="/">Home</Link> / <span>Contact Us</span>
                    </div>
                    <h1>CONTACT <span>US</span></h1>
                    <p className="page-banner-sub">Product Enquiries · OEM Partnerships · Dealer Applications · Bulk Orders</p>
                </div>
            </div>

            <div className="container contact-layout">
                {/* Contact Info Card */}
                <motion.div className="contact-info-card"
                    initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                    <h3 className="cic-title">Get In Touch</h3>
                    <div className="divider" />
                    <ul className="cic-list">
                        <li>
                            <span className="cic-icon"><FiMail /></span>
                            <div>
                                <strong>{companyInfo.name}</strong>
                                <p>GSTIN/UIN: {companyInfo.gstin}</p>
                                <p>UDYAM: {companyInfo.udyam}</p>
                            </div>
                        </li>
                        <li>
                            <span className="cic-icon cic-loc"><FiMapPin /></span>
                            <div>
                                <strong>Factory Address</strong>
                                <p>{companyInfo.address}, {companyInfo.city}</p>
                            </div>
                        </li>
                        <li>
                            <span className="cic-icon cic-loc"><FiMapPin /></span>
                            <div>
                                <strong>Head Office</strong>
                                <p>{companyInfo.headOffice}, {companyInfo.city}</p>
                            </div>
                        </li>
                        <li>
                            <span className="cic-icon"><FiPhone /></span>
                            <div>
                                <strong>Toll Free Number 24×7</strong>
                                <p><a href={`tel:${companyInfo.phone}`}>{companyInfo.phone}</a></p>
                            </div>
                        </li>
                        {companyInfo.phones.map(p => (
                            <li key={p}>
                                <span className="cic-icon"><FiPhone /></span>
                                <div><a href={`tel:${p}`}>{p}</a></div>
                            </li>
                        ))}
                        <li>
                            <span className="cic-icon"><FiMail /></span>
                            <div>
                                <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>
                                <br />
                                <a href={`mailto:${companyInfo.emailAlt}`} style={{ fontSize: '12px', marginTop: '4px', display: 'block' }}>{companyInfo.emailAlt}</a>
                            </div>
                        </li>
                        <li>
                            <span className="cic-icon" style={{ color: '#25d366' }}><FaWhatsapp /></span>
                            <div>
                                <a href={companyInfo.socials.whatsapp} target="_blank" rel="noreferrer" className="whatsapp-cta-link" id="contact-whatsapp-btn">
                                    WhatsApp Us — Quick Response
                                </a>
                            </div>
                        </li>
                    </ul>

                    {/* Enquiry Types */}
                    <div className="contact-enquiry-types">
                        <h4 className="cet-title">We Handle Enquiries For:</h4>
                        {companyInfo.enquiryTypes.map(t => (
                            <div key={t} className="cet-item">✓ {t}</div>
                        ))}
                    </div>
                </motion.div>

                {/* Form Card */}
                <motion.div className="contact-form-card"
                    initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                    <h3 className="cfc-title"><span>Send</span> an Enquiry</h3>
                    <p className="cfc-sub">Our team responds within 24 business hours</p>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="cf-row">
                            <input className="form-input" type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required id="contact-name-input" />
                            <input className="form-input" type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} required id="contact-email-input" />
                        </div>
                        <div className="cf-row">
                            <input className="form-input" type="tel" name="phone" placeholder="Contact Number" value={form.phone} onChange={handleChange} id="contact-phone-input" />
                            <select className="form-input" name="enquiryType" value={form.enquiryType} onChange={handleChange} required id="contact-enquiry-type-select">
                                <option value="">Nature of Enquiry</option>
                                {companyInfo.enquiryTypes.map(t => (
                                    <option key={t} value={t}>{t}</option>
                                ))}
                            </select>
                        </div>
                        <textarea className="form-input" name="message" placeholder="Describe your requirement — product, quantity, specification..." value={form.message} onChange={handleChange} rows={5} id="contact-message-input" />

                        {/* Captcha */}
                        <div className="captcha-row">
                            <div className="captcha-box">{captcha.a} + {captcha.b}</div>
                            <input className="form-input captcha-input" type="number" placeholder="Enter Answer" value={captchaInput}
                                onChange={e => setCaptchaInput(e.target.value)} required id="contact-captcha-input" />
                        </div>

                        {status === 'success' && <p className="cf-success">✓ Enquiry sent! Our team will respond within 24 hours.</p>}
                        {status === 'error' && <p className="cf-error">Something went wrong. Please call us directly: {companyInfo.phone}</p>}
                        {status === 'captcha' && <p className="cf-error">Incorrect answer. Please try again.</p>}

                        <button className="btn btn-primary cf-submit" type="submit" disabled={loading} id="contact-submit-btn">
                            {loading ? 'Sending...' : <><FiSend /> Send Enquiry</>}
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    )
}
