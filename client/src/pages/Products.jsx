import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiChevronRight } from 'react-icons/fi'
import { productSeries } from '../data/products'
import ProductCard from '../components/ProductCard'
import './Products.css'

export default function Products() {
    const { seriesSlug } = useParams()
    const [activeId, setActiveId] = useState(seriesSlug || productSeries[0].slug)
    const activeSeries = productSeries.find(s => s.slug === activeId) || productSeries[0]

    return (
        <div className="products-page">
            {/* Banner */}
            <div className="page-banner">
                <div className="container">
                    <div className="page-banner-breadcrumb">
                        <Link to="/">Home</Link> / <span>Our Products</span>
                    </div>
                    <h1>OUR <span>PRODUCTS</span></h1>
                    <p className="page-banner-sub">6 Series · ISI Registered · Made in India</p>
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
                                >
                                    {series.name}
                                    <FiChevronRight className="sidebar-arrow" />
                                </button>
                            </li>
                        ))}
                    </ul>
                </aside>

                {/* Main */}
                <main className="products-main">
                    <motion.div key={activeId} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                        <div className="series-header">
                            <h2 className="series-name">{activeSeries.name}</h2>
                            <p className="series-desc">{activeSeries.description}</p>
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
                    </motion.div>
                </main>
            </div>
        </div>
    )
}
