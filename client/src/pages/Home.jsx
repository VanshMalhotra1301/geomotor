import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiArrowUpRight, FiPhone, FiMail, FiAward, FiCheckCircle } from 'react-icons/fi'
import { MdPhotoCamera, MdFactory } from 'react-icons/md'
import { productSeries, companyInfo } from '../data/products'
import ProductCard from '../components/ProductCard'
import './Home.css'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
const stagger = { visible: { transition: { staggerChildren: 0.12 } } }

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
                            India's Most <span>Trusted</span><br />Cooler Motor <span>Brand</span>
                        </motion.h1>
                        <motion.p variants={fadeUp} className="hero-desc">
                            GEO® Motor India has been manufacturing premium ISI-registered cooler motors since 1995.
                            Economical, reliable, and built for the Indian climate — 12W to 152W and beyond.
                        </motion.p>
                        <motion.div variants={fadeUp} className="hero-actions">
                            <Link to="/products" className="btn btn-primary">
                                Explore Products <FiArrowRight />
                            </Link>
                            <Link to="/contact" className="btn btn-outline">
                                Enquire Now
                            </Link>
                        </motion.div>
                        <motion.div variants={fadeUp} className="hero-quick-contacts">
                            <a href={`tel:${companyInfo.phone}`} className="hero-contact-pill">
                                <FiPhone /> {companyInfo.phone}
                            </a>
                            <a href={`mailto:${companyInfo.email}`} className="hero-contact-pill">
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
                            <div className="img-placeholder" style={{ height: '380px' }}>
                                <MdPhotoCamera size={48} />
                                <span>Hero / Product Showcase Image</span>
                            </div>
                            <div className="hero-img-badge">GEO® Since 1995</div>
                        </div>
                    </motion.div>
                </div>

                {/* Stats Bar */}
                <div className="hero-stats">
                    <div className="container stats-grid">
                        {[
                            { value: '1995', label: 'Founded' },
                            { value: '30+', label: 'Years Experience' },
                            { value: '6', label: 'Product Series' },
                            { value: 'ISI', label: 'Certified Motors' },
                            { value: '12W–152W', label: 'Power Range' },
                        ].map(s => (
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
                            Powering India With <span>GEO®</span> Quality
                        </motion.h2>
                        <motion.p variants={fadeUp} className="section-desc">
                            {companyInfo.about}
                        </motion.p>
                        <motion.p variants={fadeUp} className="section-desc" style={{ marginTop: '12px' }}>
                            Geo Motor India is an ISO-certified company committed to quality, reliability, and excellence in manufacturing.
                            Since 2007, our motors carry the ISI mark — a testament to our uncompromising standards.
                        </motion.p>
                        <motion.div variants={fadeUp} style={{ marginTop: '28px' }}>
                            <Link to="/about" className="btn btn-outline">Our Story <FiArrowRight /></Link>
                        </motion.div>
                    </motion.div>

                    <div className="as-milestones">
                        {companyInfo.milestones.slice(0, 4).map((m, i) => (
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

            {/* ── Products ── */}
            <section className="section products-section">
                <div className="container">
                    <div className="section-header-centered">
                        <div className="section-label">Our Catalogue</div>
                        <h2 className="section-title">Complete <span>Product</span> Range</h2>
                        <p className="section-desc">
                            Six comprehensive product series covering commercial coolers, industrial motors, exhaust fans, water pumps, metal blades, and chimney motors.
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
                        <Link to="/products" className="btn btn-outline">View All Products <FiArrowUpRight /></Link>
                    </div>
                </div>
            </section>

            {/* ── Why GEO ── */}
            <section className="section why-section">
                <div className="why-bg" />
                <div className="container">
                    <div className="section-header-centered">
                        <div className="section-label">Why Choose Us</div>
                        <h2 className="section-title">The <span>GEO®</span> Advantage</h2>
                    </div>
                    <div className="why-grid">
                        {[
                            { icon: <FiAward />, title: 'ISI Registered', desc: 'All motors carry the ISI mark — guaranteed quality and safety compliance.' },
                            { icon: <FiCheckCircle />, title: 'ISO Certified', desc: 'ISO certification reflects our adherence to international manufacturing standards.' },
                            { icon: <MdFactory />, title: 'In-House Manufacturing', desc: 'Our own stamping and winding plants ensure end-to-end quality control.' },
                            { icon: <FiPhone />, title: 'Toll-Free Support', desc: '24×7 toll-free helpline — 1800 571 6999 — always here when you need us.' },
                        ].map((w, i) => (
                            <motion.div key={w.title} className="why-card"
                                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
                                <div className="why-icon">{w.icon}</div>
                                <h3 className="why-title">{w.title}</h3>
                                <p className="why-desc">{w.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Testimonials ── */}
            <section className="section testimonials-section">
                <div className="container" style={{ marginBottom: '32px', textAlign: 'center' }}>
                    <div className="section-label">Trusted By Industry</div>
                    <h2 className="section-title">Client <span>Testimonials</span></h2>
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
                        {/* Duplicate for infinite loop */}
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

            {/* ── Clients ── */}
            <section className="section clients-section">
                <div className="container" style={{ textAlign: 'center', marginBottom: '32px' }}>
                    <h3 style={{ color: 'var(--text-muted)', fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase' }}>Our OEM Partners</h3>
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

            {/* ── CTA Strip ── */}
            <section className="cta-strip">
                <div className="container cta-inner">
                    <div className="cta-text">
                        <h2>Ready to Work With <span>GEO Motor India</span>?</h2>
                        <p>Get in touch for bulk enquiries, OEM partnerships, or product information.</p>
                    </div>
                    <div className="cta-actions">
                        <Link to="/contact" className="btn btn-primary">Enquire Now <FiArrowRight /></Link>
                        <a href={`tel:${companyInfo.phone}`} className="btn btn-dark">
                            <FiPhone /> {companyInfo.phone}
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}
