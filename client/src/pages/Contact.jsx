import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiSend, FiMapPin, FiPhone, FiMail } from 'react-icons/fi'
import { companyInfo } from '../data/products'
import axios from 'axios'
import './Contact.css'

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
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
        setLoading(true)
        try {
            await axios.post('http://localhost:5000/api/enquiry', form)
            setStatus('success')
            setForm({ name: '', email: '', phone: '', message: '' })
            setCaptchaInput('')
        } catch {
            setStatus('error')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="contact-page">
            {/* Banner */}
            <div className="page-banner">
                <div className="container">
                    <div className="page-banner-breadcrumb">
                        <Link to="/">Home</Link> / <span>Contact Us</span>
                    </div>
                    <h1>CONTACT <span>US</span></h1>
                    <p className="page-banner-sub">{companyInfo.about.slice(0, 120)}...</p>
                </div>
            </div>

            <div className="container contact-layout">
                {/* Contact Info Card */}
                <motion.div className="contact-info-card"
                    initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                    <h3 className="cic-title">Contacts Us</h3>
                    <div className="divider" />
                    <ul className="cic-list">
                        <li>
                            <span className="cic-icon"><FiMail /></span>
                            <div>
                                <strong>{companyInfo.name}</strong>
                                <p>GSTIN/UIN: {companyInfo.gstin}</p>
                            </div>
                        </li>
                        <li>
                            <span className="cic-icon"><FiMapPin /></span>
                            <div>
                                <strong>UDYAM REGISTRATION NUMBER</strong>
                                <p>{companyInfo.udyam}</p>
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
                            <span className="cic-icon"><FiMail /></span>
                            <div>
                                <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>
                            </div>
                        </li>
                        <li>
                            <span className="cic-icon"><FiPhone /></span>
                            <div>
                                <strong>Toll Free Number 24×7</strong>
                                <p>{companyInfo.phone}</p>
                            </div>
                        </li>
                    </ul>
                </motion.div>

                {/* Form Card */}
                <motion.div className="contact-form-card"
                    initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                    <h3 className="cfc-title"><span>Get</span> in Touch</h3>
                    <p className="cfc-sub">We're here to answer your questions</p>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="cf-row">
                            <input className="form-input" type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
                            <input className="form-input" type="email" name="email" placeholder="E-mail" value={form.email} onChange={handleChange} required />
                        </div>
                        <input className="form-input" type="tel" name="phone" placeholder="Contact Number" value={form.phone} onChange={handleChange} />
                        <textarea className="form-input" name="message" placeholder="Message" value={form.message} onChange={handleChange} rows={5} />

                        {/* Captcha */}
                        <div className="captcha-row">
                            <div className="captcha-box">{captcha.a} + {captcha.b}</div>
                            <input className="form-input captcha-input" type="number" placeholder="Enter Answer" value={captchaInput}
                                onChange={e => setCaptchaInput(e.target.value)} required />
                        </div>

                        {status === 'success' && <p className="cf-success">✓ Message sent! We'll get back to you soon.</p>}
                        {status === 'error' && <p className="cf-error">Something went wrong. Please call us directly.</p>}
                        {status === 'captcha' && <p className="cf-error">Incorrect answer. Please try again.</p>}

                        <button className="btn btn-primary cf-submit" type="submit" disabled={loading}>
                            {loading ? 'Sending...' : <><FiSend /> Send</>}
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    )
}
