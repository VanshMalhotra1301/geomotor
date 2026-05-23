import { Link, useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowLeft } from 'react-icons/fi'
import { MdPhotoCamera } from 'react-icons/md'
import { productSeries } from '../data/products'
import EnquiryWidget from '../components/EnquiryWidget'
import './ProductDetail.css'

export default function ProductDetail() {
    const { seriesSlug, productId } = useParams()
    const navigate = useNavigate()

    const series = productSeries.find(s => s.slug === seriesSlug)
    const product = series?.products.find(p => p.id === productId)

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

    return (
        <div className="detail-page">
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
                    <button className="back-btn" onClick={() => navigate(-1)}>
                        <FiArrowLeft /> Back
                    </button>

                    <motion.div className="detail-content"
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>

                        {/* Image */}
                        <div className="detail-img-frame" style={{ background: '#f5f5f5', borderRadius: '16px', overflow: 'hidden', padding: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={product.image} alt={product.name} style={{ width: '100%', maxHeight: '450px', objectFit: 'contain' }} />
                        </div>

                        {/* Info */}
                        <div className="detail-info">
                            <div className="badge badge-green" style={{ marginBottom: '12px' }}>{series.name}</div>
                            <h2 className="detail-product-name">{product.name}</h2>
                            <p className="detail-desc">{product.desc}</p>

                            {product.specs && product.specs.length > 0 && (
                                <div className="specs-table">
                                    <h4 className="specs-title">Specifications</h4>
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
                                </div>
                            )}

                            <div className="detail-actions">
                                <Link to="/contact" className="btn btn-primary">Enquire About This Product</Link>
                                <Link to="/products" className="btn btn-dark">View All Products</Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Related products */}
                    {series.products.length > 1 && (
                        <div className="related-section">
                            <h3 className="related-title">More from {series.name}</h3>
                            <div className="related-grid">
                                {series.products.filter(p => p.id !== productId).map(p => (
                                    <Link key={p.id} to={`/products/${series.slug}/${p.id}`} className="related-card">
                                        <div className="related-card-img" style={{ height: '100px', background: 'white', borderRadius: '8px', overflow: 'hidden', padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <img src={p.image} alt={p.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                                        </div>
                                        <p className="related-card-name">{p.name}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </main>

                <aside className="detail-sidebar">
                    <EnquiryWidget productName={product.name} />
                </aside>
            </div>
        </div>
    )
}
