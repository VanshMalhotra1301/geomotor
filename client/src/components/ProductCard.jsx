import { Link } from 'react-router-dom'
import { FiArrowUpRight } from 'react-icons/fi'
import { MdPhotoCamera } from 'react-icons/md'
import './ProductCard.css'

export default function ProductCard({ series, product, layout = 'series' }) {
    if (layout === 'series') {
        return (
            <Link to={`/products/${series.slug}`} className="pcard">
                <div className="pcard-img" style={{ height: 260, padding: '24px', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                    <img src={series.image} alt={series.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                </div>
                <div className="pcard-body">
                    <h3 className="pcard-name">{series.name}</h3>
                    <p className="pcard-desc">{series.shortDesc.slice(0, 90)}..</p>
                    <div className="pcard-footer">
                        <span className="pcard-count">{series.products.length} variant{series.products.length > 1 ? 's' : ''}</span>
                        <span className="pcard-cta">Explore more <FiArrowUpRight /></span>
                    </div>
                </div>
            </Link>
        )
    }

    // product layout
    return (
        <Link to={`/products/${series.slug}/${product.id}`} className="pcard pcard-product">
            <div className="pcard-img" style={{ height: 220, padding: '20px', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <img src={product.image || series.image} alt={product.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
            </div>
            <div className="pcard-body">
                <h3 className="pcard-name pcard-name-sm">{product.name}</h3>
                <p className="pcard-desc">{product.desc.slice(0, 80)}..</p>
                <div className="pcard-footer">
                    <span className="pcard-cta">Explore more <FiArrowUpRight /></span>
                </div>
            </div>
        </Link>
    )
}
