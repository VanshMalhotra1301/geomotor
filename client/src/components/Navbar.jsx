import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import {
    FaWhatsapp, FaFacebookF, FaTwitter, FaInstagram,
    FaChevronDown, FaBars, FaTimes
} from 'react-icons/fa'
import { productSeries, companyInfo } from '../data/products'
import logoImg from '../data/image.png'
import './Navbar.css'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [activeCategory, setActiveCategory] = useState(null)
    const dropdownRef = useRef(null)
    const navigate = useNavigate()

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        const handler = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setDropdownOpen(false)
                setActiveCategory(null)
            }
        }
        document.addEventListener('mousedown', handler)
        return () => document.removeEventListener('mousedown', handler)
    }, [])

    const handleSeriesClick = (slug) => {
        navigate(`/products/${slug}`)
        setDropdownOpen(false)
        setMobileOpen(false)
        setActiveCategory(null)
    }

    return (
        <header className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
            {/* Top Bar */}
            <div className="navbar-topbar">
                <div className="container topbar-inner">
                    <div className="topbar-socials">
                        <a href={companyInfo.socials.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
                        <a href={companyInfo.socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebookF /></a>
                        <a href={companyInfo.socials.twitter} target="_blank" rel="noreferrer" aria-label="Twitter"><FaTwitter /></a>
                        <a href={companyInfo.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
                    </div>
                    <div className="topbar-brand">MFD BY :- <span>GEO MOTOR INDIA</span></div>
                </div>
            </div>

            {/* Main Bar */}
            <div className="navbar-main">
                <div className="container navbar-inner">
                    <Link to="/" className="navbar-logo">
                        <img src={logoImg} alt="Geo Motor India Logo" style={{ height: '45px', objectFit: 'contain' }} />
                        <div className="logo-text">
                            <span className="logo-company">Geo Motor India</span>
                            <span className="logo-tagline">{companyInfo.tagline}</span>
                        </div>
                    </Link>

                    <nav className="navbar-nav">
                        <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
                        <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>About</NavLink>

                        <div className="nav-dropdown-wrapper" ref={dropdownRef}>
                            <button className={`nav-link nav-dropdown-trigger ${dropdownOpen ? 'active' : ''}`} onClick={() => setDropdownOpen(v => !v)}>
                                Products <FaChevronDown className={`chevron ${dropdownOpen ? 'open' : ''}`} />
                            </button>
                            {dropdownOpen && (
                                <div className="nav-dropdown">
                                    {productSeries.map((series) => (
                                        <div key={series.id} className="dropdown-section">
                                            <button className="dropdown-category" onClick={() => handleSeriesClick(series.slug)} onMouseEnter={() => setActiveCategory(series.id)}>
                                                {series.name}
                                            </button>
                                            {activeCategory === series.id && series.products.map(p => (
                                                <button key={p.id} className="dropdown-item" onClick={() => {
                                                    navigate(`/products/${series.slug}/${p.id}`)
                                                    setDropdownOpen(false)
                                                    setActiveCategory(null)
                                                }}>
                                                    {p.name}
                                                </button>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <NavLink to="/oem-solutions" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>OEM</NavLink>
                        <NavLink to="/certifications" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Certificates</NavLink>
                        <NavLink to="/dealers" className={({ isActive }) => isActive ? 'nav-link active nav-link-highlight' : 'nav-link nav-link-highlight'}>Dealers</NavLink>
                        <NavLink to="/faq" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>FAQ</NavLink>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Contact</NavLink>
                    </nav>

                    <div className="navbar-actions">
                        <Link to="/contact" className="btn btn-primary enquire-btn">Enquire Now</Link>
                        <button className="mobile-toggle" onClick={() => setMobileOpen(v => !v)} aria-label="Menu">
                            {mobileOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="mobile-menu">
                    <NavLink to="/" end onClick={() => setMobileOpen(false)} className="mobile-link">Home</NavLink>
                    <NavLink to="/about" onClick={() => setMobileOpen(false)} className="mobile-link">About Us</NavLink>
                    <div className="mobile-products-label">Our Products</div>
                    {productSeries.map(series => (
                        <button key={series.id} className="mobile-link mobile-series" onClick={() => handleSeriesClick(series.slug)}>
                            {series.name}
                        </button>
                    ))}
                    <div className="mobile-products-label">Company</div>
                    <NavLink to="/oem-solutions" onClick={() => setMobileOpen(false)} className="mobile-link">OEM Solutions</NavLink>
                    <NavLink to="/certifications" onClick={() => setMobileOpen(false)} className="mobile-link">Certifications</NavLink>
                    <NavLink to="/dealers" onClick={() => setMobileOpen(false)} className="mobile-link">Dealer Program</NavLink>
                    <NavLink to="/faq" onClick={() => setMobileOpen(false)} className="mobile-link">FAQ</NavLink>
                    <NavLink to="/contact" onClick={() => setMobileOpen(false)} className="mobile-link">Contact Us</NavLink>
                    <Link to="/contact" onClick={() => setMobileOpen(false)} className="btn btn-primary" style={{ margin: '16px 20px', alignSelf: 'flex-start' }}>Enquire Now</Link>
                </div>
            )}
        </header>
    )
}
