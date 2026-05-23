import { Link } from 'react-router-dom'
import { FaWhatsapp, FaFacebookF, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { FiCheckCircle } from 'react-icons/fi'
import { productSeries, companyInfo } from '../data/products'
import './Footer.css'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-glow" />
            <div className="container footer-grid">

                {/* Brand */}
                <div className="footer-brand-col">
                    <div className="footer-logo">
                        <span className="logo-g">G</span><span className="logo-e">E</span><span className="logo-o">O</span><sup>®</sup>
                    </div>
                    <p className="footer-tagline">{companyInfo.tagline}</p>
                    <p className="footer-usp">{companyInfo.usp}</p>
                    <p className="footer-about">
                        GEO® Motor India is an ISO 9001:2015 certified, ISI-registered cooler motor manufacturer based in New Delhi.
                        Founded in 1995, we engineer precision motors trusted by India's leading cooler OEMs, industrial buyers, and dealers nationwide.
                    </p>

                    {/* Certification Badges */}
                    <div className="footer-cert-badges">
                        {['ISI Registered', 'ISO 9001:2015', 'UDYAM MSME', 'GSTIN Verified'].map(c => (
                            <span key={c} className="footer-cert-badge">
                                <FiCheckCircle /> {c}
                            </span>
                        ))}
                    </div>

                    <div className="footer-socials">
                        <a href={companyInfo.socials.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
                        <a href={companyInfo.socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebookF /></a>
                        <a href={companyInfo.socials.twitter} target="_blank" rel="noreferrer" aria-label="Twitter"><FaTwitter /></a>
                        <a href={companyInfo.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
                    </div>

                    <Link to="/dealers" className="footer-dealer-cta" id="footer-dealer-link">
                        🤝 Become a GEO® Dealer →
                    </Link>
                </div>

                {/* Products */}
                <div className="footer-col">
                    <h4 className="footer-col-title">Product Range</h4>
                    <ul className="footer-links">
                        {productSeries.map(s => (
                            <li key={s.id}><Link to={`/products/${s.slug}`}>{s.name}</Link></li>
                        ))}
                    </ul>
                </div>

                {/* Quick Links */}
                <div className="footer-col">
                    <h4 className="footer-col-title">Quick Links</h4>
                    <ul className="footer-links" style={{ marginBottom: '24px' }}>
                        <li><Link to="/about">About GEO Motor India</Link></li>
                        <li><Link to="/oem-solutions">OEM Manufacturing Solutions</Link></li>
                        <li><Link to="/dealers">Dealer & Distributor Program</Link></li>
                        <li><Link to="/certifications">Certifications & Quality</Link></li>
                        <li><Link to="/faq">Frequently Asked Questions</Link></li>
                        <li><Link to="/contact">Contact & Enquiry</Link></li>
                    </ul>

                    <h4 className="footer-col-title">Contact Us</h4>
                    <ul className="footer-contact-list">
                        <li><FaPhone /><span>Toll Free 24×7: <a href={`tel:${companyInfo.phone}`}>{companyInfo.phone}</a></span></li>
                        {companyInfo.phones.map(p => <li key={p}><FaPhone /><a href={`tel:${p}`}>{p}</a></li>)}
                        <li><FaEnvelope /><a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a></li>
                        <li><FaMapMarkerAlt /><span><strong>Factory:</strong> {companyInfo.address}, {companyInfo.city}</span></li>
                        <li><FaMapMarkerAlt /><span><strong>Head Office:</strong> {companyInfo.headOffice}</span></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container footer-bottom-inner">
                    <p>© {new Date().getFullYear()} Geo Motor India. All rights reserved. | {companyInfo.usp} | ISI-Certified Cooler Motor Manufacturer Since 1995</p>
                    <p className="bottom-gstin">GSTIN: {companyInfo.gstin} | UDYAM: {companyInfo.udyam} | Made with ❤️ in India</p>
                </div>
            </div>
        </footer>
    )
}
