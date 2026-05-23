import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiAward, FiShield } from 'react-icons/fi'
import { companyInfo } from '../data/products'
import './Certifications.css'

export default function Certifications() {
    return (
        <div className="cert-page">
            <div className="page-banner">
                <div className="container">
                    <div className="page-banner-breadcrumb"><Link to="/">Home</Link> / <span>Certifications</span></div>
                    <h1>CERTIFICA<span>TIONS</span></h1>
                    <p className="page-banner-sub">ISO Certified · ISI Registered · Government Verified</p>
                </div>
            </div>

            <div className="container section">
                <div className="section-header-centered" style={{ textAlign: 'center', marginBottom: '48px' }}>
                    <div className="section-label">Trust & Compliance</div>
                    <h2 className="section-title">Built on <span>Standards</span></h2>
                    <p className="section-desc" style={{ margin: '0 auto' }}>
                        Every GEO motor is manufactured under the strictest quality standards, carrying certifications that represent international engineering excellence and Indian regulatory compliance.
                    </p>
                </div>

                <div className="cert-cards-grid">
                    {companyInfo.certifications.map((cert, i) => (
                        <motion.div key={cert.name} className="cert-card-full"
                            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
                            <div className="cert-card-icon">
                                {i % 2 === 0 ? <FiAward /> : <FiShield />}
                            </div>
                            <div className="cert-card-body">
                                <div className="cert-card-standard">{cert.standard}</div>
                                <h3 className="cert-card-name">{cert.name}</h3>
                                <p className="cert-card-issuer">{cert.body}</p>
                                <p className="cert-card-desc">{cert.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <div className="cert-cta">
                    <p>Want to verify our quality credentials or discuss compliance requirements for your OEM project?</p>
                    <Link to="/contact" className="btn btn-primary">Contact Us <FiAward /></Link>
                </div>
            </div>
        </div>
    )
}
