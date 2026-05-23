import { Link } from 'react-router-dom'
import { FaWhatsapp, FaFacebookF, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
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
                    <p className="footer-about">{companyInfo.about}</p>
                    <div className="footer-socials">
                        <a href={companyInfo.socials.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
                        <a href={companyInfo.socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebookF /></a>
                        <a href={companyInfo.socials.twitter} target="_blank" rel="noreferrer" aria-label="Twitter"><FaTwitter /></a>
                        <a href={companyInfo.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
                    </div>
                </div>

                {/* Products */}
                <div className="footer-col">
                    <h4 className="footer-col-title">Our Products</h4>
                    <ul className="footer-links">
                        {productSeries.map(s => (
                            <li key={s.id}><Link to={`/products/${s.slug}`}>{s.name}</Link></li>
                        ))}
                    </ul>
                </div>

                {/* Information */}
                <div className="footer-col">
                    <h4 className="footer-col-title">Information</h4>
                    <ul className="footer-links" style={{ marginBottom: '24px' }}>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/oem-solutions">OEM Solutions</Link></li>
                        <li><Link to="/certifications">Certifications</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/contact">Enquire Now</Link></li>
                    </ul>

                    <h4 className="footer-col-title">Contact</h4>
                    <ul className="footer-contact-list">
                        <li><FaPhone /><span>Toll Free: {companyInfo.phone}</span></li>
                        {companyInfo.phones.slice(0, 2).map(p => <li key={p}><FaPhone /><a href={`tel:${p}`}>{p}</a></li>)}
                        <li><FaEnvelope /><a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a></li>
                        <li><FaMapMarkerAlt /><span>{companyInfo.address}</span></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container footer-bottom-inner">
                    <p>© {new Date().getFullYear()} Geo Motor India. All rights reserved. | {companyInfo.usp}</p>
                    <p className="bottom-gstin">GSTIN: {companyInfo.gstin} | UDYAM: {companyInfo.udyam}</p>
                </div>
            </div>
        </footer>
    )
}
