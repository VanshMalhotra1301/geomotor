import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiChevronRight, FiCheckCircle, FiArrowRight, FiPhone } from 'react-icons/fi'
import { productSeries, companyInfo } from '../data/products'
import ProductCard from '../components/ProductCard'
import SEO from '../components/SEO'
import JsonLd, { buildBreadcrumbSchema } from '../components/JsonLd'
import './Products.css'

export default function Products() {
    const { seriesSlug } = useParams()
    const [activeId, setActiveId] = useState(seriesSlug || productSeries[0].slug)
    const activeSeries = productSeries.find(s => s.slug === activeId) || productSeries[0]

    return (
        <div className="products-page">
            <SEO
                title={`${activeSeries.name} — GEO Motor India | ISI-Certified Cooler Motors`}
                description={activeSeries.description}
                keywords={companyInfo.seoMeta?.productsKeywords || 'cooler motor products, ISI cooler motor, commercial cooler motor, industrial motor, exhaust fan motor'}
                slug={`/products/${activeSeries.slug}`}
            />
            <JsonLd data={buildBreadcrumbSchema([
                { name: 'Home', url: '/' },
                { name: 'Products', url: '/products' },
                { name: activeSeries.name }
            ])} />

            {/* Banner */}
            <div className="page-banner">
                <div className="container">
                    <div className="page-banner-breadcrumb">
                        <Link to="/">Home</Link> / <span>Our Products</span>
                    </div>
                    <h1>OUR <span>PRODUCTS</span></h1>
                    <p className="page-banner-sub">6 Series · ISI Registered · ISO Certified · Made in India · OEM Ready</p>
                </div>
            </div>

            <div className="container products-layout">
                {/* Sidebar */}
                <aside className="products-sidebar">
                    <h3 className="sidebar-title">Product Series</h3>
                    <ul className="sidebar-list">
                        {productSeries.map(series => (
                            <li key={series.id}>
                                <button
                                    className={`sidebar-item ${activeId === series.slug ? 'active' : ''}`}
                                    onClick={() => setActiveId(series.slug)}
                                    id={`sidebar-${series.id}`}
                                >
                                    {series.name}
                                    <FiChevronRight className="sidebar-arrow" />
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* Sidebar Trust Block */}
                    <div className="sidebar-trust-block">
                        <h4 className="sidebar-trust-title">Why GEO®?</h4>
                        {['ISI Registered — IS:996-2009', 'ISO 9001:2015 Certified', 'Copper Winding Options', 'OEM Bulk Production', 'Pan-India Supply'].map(t => (
                            <div key={t} className="sidebar-trust-item">
                                <FiCheckCircle className="sidebar-trust-icon" />
                                <span>{t}</span>
                            </div>
                        ))}
                        <Link to="/contact" className="btn btn-primary sidebar-cta-btn" id="products-sidebar-enquire-btn">
                            Request a Quote <FiArrowRight />
                        </Link>
                    </div>
                </aside>

                {/* Main */}
                <main className="products-main">
                    <motion.div key={activeId} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                        <div className="series-header">
                            <div className="badge badge-green" style={{ marginBottom: '12px' }}>GEO® {activeSeries.name}</div>
                            <h2 className="series-name">{activeSeries.name}</h2>
                            <p className="series-desc">{activeSeries.longDesc || activeSeries.description}</p>

                            {/* Use Cases */}
                            {activeSeries.useCases && activeSeries.useCases.length > 0 && (
                                <div className="series-usecases">
                                    <span className="usecases-label">Applications:</span>
                                    <div className="usecases-chips">
                                        {activeSeries.useCases.map(u => (
                                            <span key={u} className="usecase-chip">{u}</span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="series-products-grid">
                            {activeSeries.products.map((product, i) => (
                                <motion.div key={product.id}
                                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.09 }}>
                                    <ProductCard series={activeSeries} product={product} layout="product" />
                                </motion.div>
                            ))}
                        </div>

                        {/* Series Advantages */}
                        {activeSeries.advantages && activeSeries.advantages.length > 0 && (
                            <div className="series-advantages">
                                <h3 className="advantages-title">Series Advantages</h3>
                                <div className="advantages-grid">
                                    {activeSeries.advantages.map((adv, i) => (
                                        <div key={i} className="advantage-item">
                                            <FiCheckCircle className="advantage-icon" />
                                            <span>{adv}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Series CTA */}
                        <div className="series-cta-bar">
                            <div>
                                <h4>Interested in {activeSeries.name}?</h4>
                                <p>Request bulk pricing, OEM specifications, or product samples.</p>
                            </div>
                            <div className="series-cta-actions">
                                <Link to="/contact" className="btn btn-primary" id="products-cta-quote-btn">Request a Quote <FiArrowRight /></Link>
                                <a href={`tel:${companyInfo.phone}`} className="btn btn-dark" id="products-cta-call-btn"><FiPhone /> {companyInfo.phone}</a>
                            </div>
                        </div>
                    </motion.div>
                </main>
            </div>
        </div>
    )
}
