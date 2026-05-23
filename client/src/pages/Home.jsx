import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiArrowUpRight, FiPhone, FiMail, FiAward, FiCheckCircle, FiZap, FiShield } from 'react-icons/fi'
import { MdFactory, MdPrecisionManufacturing, MdVerified } from 'react-icons/md'
import { productSeries, companyInfo } from '../data/products'
import ProductCard from '../components/ProductCard'
import mainImg from '../data/main.png'
import './Home.css'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
const stagger = { visible: { transition: { staggerChildren: 0.12 } } }

const iconMap = {
    "🏆": <FiAward />,
    "🌐": <MdVerified />,
    "🏭": <MdFactory />,
    "⚡": <FiZap />,
    "🔩": <MdPrecisionManufacturing />,
    "🚚": <FiCheckCircle />,
    "🤝": <FiCheckCircle />,
    "📞": <FiPhone />,
}

export default function Home() {
    return (
        <div className="home">

            {/* ── Hero ── */}
            <section className="hero">
                <div className="hero-bg-mesh" />
                <div className="container hero-content">
                    <motion.div
                        className="hero-text"
                        variants={stagger}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div variants={fadeUp} className="hero-badge">
                            <span className="badge badge-green">🏭 ISO Certified · ISI Registered Since 2007</span>
                        </motion.div>
                        <motion.h1 variants={fadeUp} className="hero-title">
                            India's Most <span>Trusted</span><br />Cooler Motor <span>Manufacturer</span>
                        </motion.h1>
                        <motion.p variants={fadeUp} className="hero-desc">
                            GEO® Motor India has been precision-manufacturing ISI-registered cooler motors since 1995.
                            Engineered for India's climate — trusted by OEMs, dealers, and industrial buyers across the nation.
                        </motion.p>
                        <motion.div variants={fadeUp} className="hero-actions">
                            <Link to="/products" className="btn btn-primary" id="hero-explore-btn">
                                Explore Products <FiArrowRight />
                            </Link>
                            <Link to="/oem-solutions" className="btn btn-outline" id="hero-oem-btn">
                                OEM Solutions
                            </Link>
                            <Link to="/dealers" className="btn btn-dark" id="hero-dealer-btn">
                                Become a Dealer
                            </Link>
                        </motion.div>
                        <motion.div variants={fadeUp} className="hero-quick-contacts">
                            <a href={`tel:${companyInfo.phone}`} className="hero-contact-pill" id="hero-phone-link">
                                <FiPhone /> {companyInfo.phone}
                            </a>
                            <a href={`mailto:${companyInfo.email}`} className="hero-contact-pill" id="hero-email-link">
                                <FiMail /> {companyInfo.email}
                            </a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="hero-visual"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <div className="hero-img-frame">
                            <img src={mainImg} alt="GEO Motor India — ISI Certified Cooler Motors" style={{ width: '100%', height: '380px', objectFit: 'cover', borderRadius: '16px', display: 'block' }} />
                            <div className="hero-img-badge">GEO® Since 1995</div>
                            <div className="hero-img-badge-2">India's First H-Frame Capcan Motor</div>
                        </div>
                    </motion.div>
                </div>

                {/* Stats Bar */}
                <div className="hero-stats">
                    <div className="container stats-grid">
                        {companyInfo.stats.map(s => (
                            <div key={s.label} className="stat-item">
                                <span className="stat-value">{s.value}</span>
                                <span className="stat-label">{s.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── About Snippet ── */}
            <section className="section about-snippet">
                <div className="container about-snippet-inner">
                    <motion.div className="as-text" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                        <motion.div variants={fadeUp} className="section-label">Who We Are</motion.div>
                        <motion.h2 variants={fadeUp} className="section-title">
                            Powering India With <span>GEO®</span> Precision
                        </motion.h2>
                        <motion.p variants={fadeUp} className="section-desc">
                            {companyInfo.about}
                        </motion.p>
                        <motion.p variants={fadeUp} className="section-desc" style={{ marginTop: '12px' }}>
                            Geo Motor India is an ISO 9001:2015 certified company committed to quality, reliability, and excellence in manufacturing.
                            Since 2007, our motors carry the ISI mark under IS:996-2009 — a testament to our uncompromising engineering standards.
                            {' '}<strong style={{ color: 'var(--green)' }}>{companyInfo.usp}.</strong>
                        </motion.p>
                        <motion.div variants={fadeUp} style={{ marginTop: '28px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                            <Link to="/about" className="btn btn-outline" id="about-story-btn">Our Story <FiArrowRight /></Link>
                            <Link to="/certifications" className="btn btn-dark" id="about-cert-btn">View Certifications</Link>
                        </motion.div>
                    </motion.div>

                    <div className="as-milestones">
                        {companyInfo.milestones.map((m, i) => (
                            <motion.div key={m.year} className="milestone-card"
                                initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
                                <span className="milestone-year">{m.year}</span>
                                <p className="milestone-event">{m.event}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Manufacturing Strength ── */}
            <section className="section manufacturing-section">
                <div className="mfg-bg" />
                <div className="container">
                    <div className="section-header-centered">
                        <div className="section-label">Manufacturing Excellence</div>
                        <h2 className="section-title">Built in India. <span>Engineered to Last.</span></h2>
                        <p className="section-desc" style={{ margin: '0 auto' }}>
                            {companyInfo.manufacturing.intro}
                        </p>
                    </div>
                    <div className="mfg-grid">
                        {companyInfo.manufacturing.pillars.map((pillar, i) => (
                            <motion.div key={pillar.title} className="mfg-card"
                                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
                                <div className="mfg-icon">{pillar.icon}</div>
                                <h3 className="mfg-title">{pillar.title}</h3>
                                <p className="mfg-desc">{pillar.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Products ── */}
            <section className="section products-section">
                <div className="container">
                    <div className="section-header-centered">
                        <div className="section-label">Our Catalogue</div>
                        <h2 className="section-title">Complete <span>Product</span> Range</h2>
                        <p className="section-desc" style={{ margin: '0 auto' }}>
                            Six comprehensive product series covering commercial coolers, industrial motors, exhaust fans, water pumps, metal blades, and chimney motors — all ISI-registered and Made in India.
                        </p>
                    </div>
                    <div className="products-grid">
                        {productSeries.map((series, i) => (
                            <motion.div key={series.id}
                                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.08 }} viewport={{ once: true }}>
                                <ProductCard series={series} layout="series" />
                            </motion.div>
                        ))}
                    </div>
                    <div className="products-cta">
                        <Link to="/products" className="btn btn-outline" id="home-view-all-btn">View All Products <FiArrowUpRight /></Link>
                    </div>
                </div>
            </section>

            {/* ── Why GEO (8 cards) ── */}
            <section className="section why-section">
                <div className="why-bg" />
                <div className="container">
                    <div className="section-header-centered">
                        <div className="section-label">Why Choose Us</div>
                        <h2 className="section-title">The <span>GEO®</span> Advantage</h2>
                        <p className="section-desc" style={{ margin: '0 auto' }}>
                            Thirty years of engineering discipline, government-verified certifications, and a nationwide supply network — here's why India's leading cooler brands choose GEO.
                        </p>
                    </div>
                    <div className="why-grid-8">
                        {companyInfo.whyGeo.map((w, i) => (
                            <motion.div key={w.title} className="why-card"
                                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.08 }} viewport={{ once: true }}>
                                <div className="why-icon-emoji">{w.icon}</div>
                                <h3 className="why-title">{w.title}</h3>
                                <p className="why-desc">{w.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Industries We Serve ── */}
            <section className="section industries-section">
                <div className="container">
                    <div className="section-header-centered">
                        <div className="section-label">Industries Served</div>
                        <h2 className="section-title">Who We <span>Serve</span></h2>
                        <p className="section-desc" style={{ margin: '0 auto' }}>
                            From cooler OEM manufacturers to industrial facility managers, GEO® motors power businesses across India's cooling industry.
                        </p>
                    </div>
                    <div className="industries-grid">
                        {companyInfo.industryServed.map((ind, i) => (
                            <motion.div key={ind.name} className="industry-card"
                                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.09 }} viewport={{ once: true }}>
                                <div className="industry-icon">{ind.icon}</div>
                                <h4 className="industry-name">{ind.name}</h4>
                                <p className="industry-desc">{ind.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Testimonials ── */}
            <section className="section testimonials-section">
                <div className="container" style={{ marginBottom: '32px', textAlign: 'center' }}>
                    <div className="section-label">Trusted By Industry</div>
                    <h2 className="section-title">What Our <span>Partners Say</span></h2>
                    <p className="section-desc" style={{ margin: '0 auto' }}>
                        OEM manufacturers, industrial distributors, and dealer partners across India share their GEO® experience.
                    </p>
                </div>
                <div className="marquee-wrapper">
                    <div className="marquee-content testimonials-track">
                        {companyInfo.testimonials.map((t, i) => (
                            <div key={i} className="testimonial-card">
                                <p className="t-text">"{t.text}"</p>
                                <div className="t-author">
                                    <div className="t-avatar">{t.name.charAt(0)}</div>
                                    <div>
                                        <h5>{t.name}</h5>
                                        <span>{t.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {companyInfo.testimonials.map((t, i) => (
                            <div key={`dup-${i}`} className="testimonial-card">
                                <p className="t-text">"{t.text}"</p>
                                <div className="t-author">
                                    <div className="t-avatar">{t.name.charAt(0)}</div>
                                    <div>
                                        <h5>{t.name}</h5>
                                        <span>{t.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── OEM Partners Marquee ── */}
            <section className="section clients-section">
                <div className="container" style={{ textAlign: 'center', marginBottom: '32px' }}>
                    <h3 style={{ color: 'var(--text-muted)', fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase' }}>Trusted OEM & Distribution Partners</h3>
                </div>
                <div className="marquee-wrapper">
                    <div className="marquee-content clients-track">
                        {companyInfo.clients.map((c, i) => (
                            <div key={i} className="client-badge">{c}</div>
                        ))}
                        {companyInfo.clients.map((c, i) => (
                            <div key={`dup-${i}`} className="client-badge">{c}</div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Dealer CTA Strip ── */}
            <section className="dealer-strip">
                <div className="container dealer-strip-inner">
                    <div className="dealer-strip-icon">🤝</div>
                    <div className="dealer-strip-text">
                        <h2>Grow Your Business with <span>GEO®</span></h2>
                        <p>Join our nationwide dealer and distributor network. Competitive margins, ISI-certified products, reliable supply, and full business support.</p>
                    </div>
                    <div className="dealer-strip-actions">
                        <Link to="/dealers" className="btn btn-primary" id="dealer-strip-apply-btn">
                            Become a Dealer <FiArrowRight />
                        </Link>
                        <a href={`tel:${companyInfo.phone}`} className="btn btn-outline" id="dealer-strip-call-btn">
                            <FiPhone /> {companyInfo.phone}
                        </a>
                    </div>
                </div>
            </section>

            {/* ── CTA Strip ── */}
            <section className="cta-strip">
                <div className="container cta-inner">
                    <div className="cta-text">
                        <h2>Ready to Work With <span>GEO Motor India</span>?</h2>
                        <p>Get in touch for bulk enquiries, OEM partnerships, product specifications, or dealer applications.</p>
                    </div>
                    <div className="cta-actions">
                        <Link to="/contact" className="btn btn-primary" id="home-cta-enquire-btn">Enquire Now <FiArrowRight /></Link>
                        <Link to="/oem-solutions" className="btn btn-outline" id="home-cta-oem-btn">OEM Solutions</Link>
                        <a href={`tel:${companyInfo.phone}`} className="btn btn-dark" id="home-cta-call-btn">
                            <FiPhone /> {companyInfo.phone}
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}
