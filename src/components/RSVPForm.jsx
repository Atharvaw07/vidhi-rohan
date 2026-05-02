import { useState, useRef } from 'react';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxmvYg3N81Qyn9JS8D2IaARiQK3URozKZYqOGqs81E5b6aX_vsAcNqgaOr6r0EuNiTl8Q/exec';

export default function RSVPForm({ onSuccess }) {
    const [btnText, setBtnText] = useState('Confirm Attendance');
    const [loading, setLoading] = useState(false);
    const formRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setBtnText('Sending...');

        try {
            const form = formRef.current;
            const formData = new FormData(form);
            const data = {};

            // 1. Handle File Uploads
            const files = formData.getAll('id_proof');
            let uploadedFileUrls = [];

            if (files.length > 0 && files[0].name !== '') {
                setBtnText('Uploading IDs...');

                for (let i = 0; i < files.length; i++) {
                    const file = files[i];
                    const base64 = await new Promise((resolve) => {
                        const reader = new FileReader();
                        reader.onload = () => resolve(reader.result.split(',')[1]);
                        reader.readAsDataURL(file);
                    });

                    const uploadRes = await fetch(GOOGLE_SCRIPT_URL, {
                        method: 'POST',
                        body: JSON.stringify({
                            filename: file.name,
                            mimeType: file.type,
                            bytes: base64
                        })
                    });
                    const uploadData = await uploadRes.json();
                    uploadedFileUrls.push(uploadData.fileUrl);

                    // Placeholder logic for now:
                    uploadedFileUrls.push('Pending Drive Upload (' + file.name + ')');
                }
            }

            // 2. Prepare data for Excel backend
            setBtnText('Saving Details...');

            const uniqueKeys = new Set(formData.keys());
            for (const key of uniqueKeys) {
                if (key === 'id_proof') continue;
                const values = formData.getAll(key).map(v => (typeof v === 'string' ? v.trim() : v)).filter(v => v);
                if (values.length === 0) continue;
                data[key] = values.length > 1 ? values.join(', ') : values[0];
            }

            data.id_proof_links = uploadedFileUrls.length > 0 ? uploadedFileUrls.join(', ') : 'None';
            data.clientId = 'rohan-vidhi-wedding';

            // 3. Send to Render backend
            const res = await fetch('https://wedding-backend-k67l.onrender.com/api/rsvp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            let result = { success: false };
            try { result = await res.json(); } catch (_) { result = { success: res.ok }; }

            if (result.success || res.ok) {
                onSuccess();
                form.reset();
            } else {
                alert('Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting RSVP:', error);
            alert('Could not submit form. Please check your connection and try again.');
        } finally {
            setLoading(false);
            setBtnText('Confirm Attendance');
        }
    };

    return (
        <section id="rsvp-section" className="rsvp-section" style={{ background: 'var(--white)', padding: '5rem 1.5rem', position: 'relative' }}>
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <p style={{ fontFamily: "'Great Vibes', cursive", fontSize: 'clamp(2.5rem, 8vw, 3.5rem)', color: 'var(--maroon)', marginBottom: '0.5rem', lineHeight: 1.2 }}>
                    Confirm Your Attendance
                </p>
            </div>

            <form id="rsvp-form" ref={formRef} className="rsvp-form reveal"
                style={{ maxWidth: '540px', margin: '0 auto' }}
                encType="multipart/form-data"
                onSubmit={handleSubmit}>

                {/* Personal Details */}
                <div className="form-card">
                    <p className="form-card-title" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Personal Details</p>
                    <div className="field-group">
                        <label className="field-label" htmlFor="f-name">Full Name</label>
                        <input className="field-input" type="text" id="f-name" name="name" required placeholder="Enter your full name" />
                    </div>
                    <div className="field-group">
                        <label className="field-label" htmlFor="f-phone">WhatsApp Number</label>
                        <input className="field-input" type="tel" id="f-phone" name="phone" required placeholder="+91 00000 00000" />
                    </div>
                    <div className="field-group" style={{ marginBottom: 0 }}>
                        <label className="field-label" htmlFor="f-email">Email Address</label>
                        <input className="field-input" type="email" id="f-email" name="email" required placeholder="your.email@example.com" />
                    </div>
                </div>

                {/* Guest Details */}
                <div className="form-card">
                    <p className="form-card-title" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Guest Details</p>
                    <div className="field-group" style={{ marginBottom: 0 }}>
                        <label className="field-label" htmlFor="f-pax">Number of pax (from your group)</label>
                        <select className="field-input" id="f-pax" name="guest_count" required defaultValue="">
                            <option value="" disabled>Select number of guests</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6+">6+</option>
                        </select>
                    </div>
                </div>

                {/* Travel Details */}
                <div className="form-card">
                    <p className="form-card-title" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Travel Details</p>
                    <div className="field-group">
                        <label className="field-label" htmlFor="f-arrival">Arrival Time on 26/06/2026</label>
                        <input className="field-input" type="time" id="f-arrival" name="arrival_time" />
                    </div>
                    <div className="field-group">
                        <label className="field-label" htmlFor="f-travel-mode">Mode of Travel</label>
                        <select className="field-input" id="f-travel-mode" name="travel_mode" defaultValue="">
                            <option value="" disabled>Flight / Train / Other</option>
                            <option value="Flight">Flight</option>
                            <option value="Train">Train</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="field-group" style={{ marginBottom: 0 }}>
                        <label className="field-label" htmlFor="f-travel-no">Flight / Train Number</label>
                        <input className="field-input" type="text" id="f-travel-no" name="travel_number" placeholder="e.g. AI-101 or 12345" />
                    </div>
                </div>

                {/* Hotel Check-in */}
                <div className="form-card">
                    <p className="form-card-title" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Hotel Check-in</p>
                    <div className="field-group" style={{ marginBottom: 0 }}>
                        <label className="field-label" htmlFor="f-id-proof">
                            Upload ID for Check-in <span style={{ textTransform: 'none', opacity: 0.8 }}>(all members from your group)</span>
                        </label>
                        <input className="field-input" type="file" id="f-id-proof" name="id_proof" multiple accept="image/*,.pdf" style={{ padding: '0.5rem 0', fontSize: '0.9rem' }} />
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', fontStyle: 'italic', marginTop: '0.6rem' }}>
                            Files will be securely uploaded to our Google Drive to speed up your check-in.
                        </p>
                    </div>
                </div>

                <div style={{ marginTop: '2rem' }}>
                    <button type="submit" className="submit-btn" id="submit-btn" disabled={loading}>
                        <span id="btn-text">{btnText}</span>
                        {loading && (
                            <svg id="btn-spinner" width="18" height="18" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2"
                                style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: '8px' }}
                                className="spin">
                                <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
                                <path d="M12 2a10 10 0 0110 10" strokeOpacity="0.75" />
                            </svg>
                        )}
                    </button>
                </div>
            </form>
        </section>
    );
}
