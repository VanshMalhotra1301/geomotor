import { useState } from 'react'
import axios from 'axios'
import { FiSend } from 'react-icons/fi'
import './EnquiryWidget.css'

export default function EnquiryWidget({ productName = '' }) {
    const [form, setForm] = useState({ name: '', email: '', phone: '', message: productName ? `Enquiry about: ${productName}` : '' })
    const [status, setStatus] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            await axios.post('http://localhost:5000/api/enquiry', form)
            setStatus('success')
            setForm({ name: '', email: '', phone: '', message: '' })
        } catch {
            setStatus('error')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="enquiry-widget">
            <div className="ew-header">
                <h3 className="ew-title"><span>Enquiry</span> Now</h3>
                <p className="ew-sub">We're here to answer your questions</p>
            </div>
            <form className="ew-form" onSubmit={handleSubmit}>
                <div className="ew-row">
                    <input className="form-input" type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
                    <input className="form-input" type="email" name="email" placeholder="E-mail" value={form.email} onChange={handleChange} required />
                </div>
                <input className="form-input" type="tel" name="phone" placeholder="Contact Number" value={form.phone} onChange={handleChange} />
                <textarea className="form-input" name="message" placeholder="Message" value={form.message} onChange={handleChange} rows={4} />

                {status === 'success' && <p className="ew-success">✓ Enquiry sent! We'll contact you soon.</p>}
                {status === 'error' && <p className="ew-error">Something went wrong. Please try again.</p>}

                <button className="btn btn-primary ew-submit" type="submit" disabled={loading}>
                    {loading ? 'Sending...' : <><FiSend /> Send Enquiry</>}
                </button>
            </form>
        </div>
    )
}
