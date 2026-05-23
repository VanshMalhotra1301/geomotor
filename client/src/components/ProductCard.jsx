import { Link } from 'react-router-dom'
import { FiArrowUpRight } from 'react-icons/fi'
import { MdPhotoCamera } from 'react-icons/md'
import './ProductCard.css'

export default function ProductCard({ series, product, layout = 'series' }) {
    if (layout === 'series') {
        return (
            <Link to={`/products/${series.slug}`} className="pcard">
                <div className="pcard-img" style={{ height: 220 }}>
                    <div className="img-placeholder" style={{ height: '100%' }}>
                        <MdPhotoCamera size={36} />
                        <span>Image Coming Soon</span>
                    </div>
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
            <div className="pcard-img" style={{ height: 200 }}>
                <div className="img-placeholder" style={{ height: '100%' }}>
                    <MdPhotoCamera size={32} />
                    <span>Image Coming Soon</span>
                </div>
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
