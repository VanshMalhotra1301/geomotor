import { Link, useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowLeft, FiCheckCircle, FiArrowRight, FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { productSeries, companyInfo } from '../data/products'
import EnquiryWidget from '../components/EnquiryWidget'
import SEO from '../components/SEO'
import './ProductDetail.css'

export default function ProductDetail() {
    const { seriesSlug, productId } = useParams()
    const navigate = useNavigate()

    const series = productSeries.find(s => s.slug === seriesSlug)
    const product = series?.products.find(p => p.id === productId)

    // Fallback UI if product or series slug does not resolve properly
    if (!series || !product) {
        return (
            <div style={{ textAlign: 'center', padding: '80px 24px' }}>
                <h2 style={{ color: 'var(--white)' }}>Product not found</h2>
                <Link to="/products" className="btn btn-primary" style={{ marginTop: '20px', display: 'inline-flex' }}>
                    Back to Products
                </Link>
            </div>
        )
    }

    // Safely extract winding spec for dynamic metadata generation
    const windingType = product.specs?.find(s => s.label === "Winding")?.value || 'premium';

    return (
        <div className="detail-page">
            {/* Dynamic SEO Meta Tag Injector optimized for Vercel crawling */}
            <SEO 
                title={`${product.name} | ${companyInfo.brand} Motor India`}
                description={`${product.desc} Engineered with ${windingType} winding and backed by a ${product.warranty || 'heavy-duty'} warranty.`}
                slug={`/products/${seriesSlug}/${productId}`}
            />

            {/* Banner */}
            <div className="page-banner">
                <div className="container">
                    <div className="page-banner-breadcrumb">
                        <Link to="/">Home</Link> / <Link to="/products">Products</Link> / <span>{product.name}</span>
                    </div>
                    <h1><span>{series.name}</span></h1>
                    <p className="page-banner-sub">{product.name}</p>
                </div>
            </div>

            <div className="container detail-layout">
                <main className="detail-main">
                    <button className="back-btn" onClick={() => navigate(-1)} id="detail-back-btn">
                        <FiArrowLeft /> Back
                    </button>

                    <motion.div 
                        className="detail-content"
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.4 }}
                    >
                        {/* Image Frame */}
                        <div className="detail-img-frame">
                            <img src={product.image} alt={`GEO ${product.name} — ${series.name}`} />
                        </div>

                        {/* Info Block */}
                        <div className="detail-info">
                            <div className="badge badge-green" style={{ marginBottom: '12px' }}>{series.name}</div>
                            <h2 className="detail-product-name">{product.name}</h2>
                            <p className="detail-desc">{product.desc}</p>

                            {/* Why Choose Section */}
                            {product.whyChoose && (
                                <div className="detail-why-choose">
                                    <h4 className="detail-why-title">Why Choose This Motor?</h4>
                                    <p className="detail-why-text">{product.whyChoose}</p>
                                </div>
                            )}

                            {/* Technical Specs Table */}
                            {product.specs && product.specs.length > 0 && (
                                <div className="specs-table">
                                    <h4 className="specs-title">Technical Specifications</h4>
                                    <table>
                                        <tbody>
                                            {product.specs.map(spec => (
                                                <tr key={spec.label}>
                                                    <td className="spec-label">{spec.label}</td>
                                                    <td className="spec-value">{spec.value}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    {product.warranty && (
                                        <div className="detail-warranty-badge">🛡️ Warranty: {product.warranty}</div>
                                    )}
                                </div>
                            )}

                            {/* B2B Hotlines */}
                            <div className="detail-quick-contact-row">
                                <a href={`tel:${companyInfo.directPhone}`} className="btn-direct-call" id="detail-quick-call">
                                    <FiPhone /> Call Now: {companyInfo.directPhone}
                                </a>
                                <a href={companyInfo.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-direct-whatsapp" id="detail-quick-whatsapp">
                                    <FaWhatsapp /> WhatsApp Support
                                </a>
                            </div>

                            {/* Section Navigation Actions */}
                            <div className="detail-actions">
                                <Link to="/contact" className="btn btn-primary" id="detail-enquire-btn">
                                    Request a Quote <FiArrowRight />
                                </Link>
                                <Link to="/dealers" className="btn btn-outline" id="detail-dealer-btn">
                                    Become a Dealer
                                </Link>
                                <Link to="/products" className="btn btn-dark" id="detail-back-products-btn">
                                    View All Products
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Technical Highlights Feature Grid */}
                    {product.technicalHighlights && product.technicalHighlights.length > 0 && (
                        <div className="technical-highlights-section">
                            <h3 className="th-section-title">Technical Highlights</h3>
                            <div className="th-grid">
                                {product.technicalHighlights.map((th, i) => (
                                    <motion.div 
                                        key={th.label} 
                                        className="th-card"
                                        initial={{ opacity: 0, y: 16 }} 
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.08 }} 
                                        viewport={{ once: true }}
                                    >
                                        <div className="th-icon">{th.icon}</div>
                                        <div>
                                            <h4 className="th-label">{th.label}</h4>
                                            <p className="th-desc">{th.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Quality Features Checklist */}
                    {product.features && product.features.length > 0 && (
                        <div className="product-features-section">
                            <h3 className="pf-title">Product Features</h3>
                            <div className="pf-list">
                                {product.features.map((feat, i) => (
                                    <div key={i} className="pf-item">
                                        <FiCheckCircle className="pf-icon" />
                                        <span>{feat}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Mapped Alternative Series Matrix */}
                    {series.products.length > 1 && (
                        <div className="related-section">
                            <h3 className="related-title">More from {series.name}</h3>
                            <div className="related-grid">
                                {series.products.filter(p => p.id !== productId).map(p => (
                                    <Link key={p.id} to={`/products/${series.slug}/${p.id}`} className="related-card" id={`related-${p.id}`}>
                                        <div className="related-card-img" style={{ height: '100px', background: 'white', borderRadius: '8px', overflow: 'hidden', padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <img src={p.image} alt={p.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                                        </div>
                                        <p className="related-card-name">{p.name}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Bottom Sticky Action Banner */}
                    <div className="detail-bottom-cta">
                        <div>
                            <h3>Ready to Order {product.name}?</h3>
                            <p>Contact our commercial team for pricing, bulk orders, and OEM specifications.</p>
                        </div>
                        <div className="detail-bottom-cta-actions">
                            <Link to="/contact" className="btn btn-primary" id="detail-bottom-quote-btn">Get a Quote <FiArrowRight /></Link>
                            <a href={`tel:${companyInfo.directPhone}`} className="btn btn-phone-outline" id="detail-bottom-call-btn"><FiPhone /> Call Now</a>
                            <a href={companyInfo.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-whatsapp-solid" id="detail-bottom-whatsapp-btn"><FaWhatsapp /> WhatsApp</a>
                        </div>
                    </div>
                </main>

                {/* Sticky Right Sidebar Widget Wrapper */}
                <aside className="detail-sidebar">
                    <EnquiryWidget productName={product.name} />
                </aside>
            </div>
        </div>
    )
}