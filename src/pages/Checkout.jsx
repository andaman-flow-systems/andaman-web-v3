import { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Lock, ArrowLeft, ShieldCheck, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import Footer from '../components/Footer';

export default function Checkout() {
  const { cart, cartTotal, addNotification } = useApp();
  const [step, setStep] = useState(1);
  const [cardNumber, setCardNumber] = useState('');
  const [processing, setProcessing] = useState(false);
  const [done, setDone] = useState(false);

  const formatCard = (val) => {
    const cleaned = val.replace(/\D/g, '').slice(0, 16);
    return cleaned.replace(/(.{4})/g, '$1 ').trim();
  };

  const handlePay = (e) => {
    e.preventDefault();
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setDone(true);
      addNotification('Payment successful! 🎉', 'success');
    }, 2000);
  };

  if (done) {
    return (
      <div className="checkout-page" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{ textAlign: 'center', padding: 60 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 300, delay: 0.2 }}
            style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(16,185,129,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', color: 'var(--neon-green)' }}
          >
            <Check size={40} />
          </motion.div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', marginBottom: 12 }}>Payment Successful!</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 32, maxWidth: 400, margin: '0 auto 32px' }}>
            Your templates are ready to download. Check your email for access links and documentation.
          </p>
          <Link to="/" className="btn btn-primary">Back to Home</Link>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      <div className="checkout-page">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--text-secondary)', marginBottom: 32, fontSize: '0.9rem' }}>
              <ArrowLeft size={16} /> Back to Store
            </Link>

            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', marginBottom: 40 }}>Checkout</h1>

            <div className="checkout-grid">
              <div>
                {/* Billing Info */}
                <div className="checkout-form-section" style={{ marginBottom: 24 }}>
                  <div className="checkout-section-title">
                    <span style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--gradient-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', color: '#fff' }}>1</span>
                    Billing Information
                  </div>
                  <div className="contact-row">
                    <div className="form-group">
                      <label className="form-label">First Name</label>
                      <input className="form-input" placeholder="John" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Last Name</label>
                      <input className="form-input" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="form-group" style={{ marginTop: 16 }}>
                    <label className="form-label">Email</label>
                    <input className="form-input" type="email" placeholder="john@company.com" />
                  </div>
                </div>

                {/* Payment */}
                <form className="checkout-form-section" onSubmit={handlePay}>
                  <div className="checkout-section-title">
                    <span style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--gradient-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', color: '#fff' }}>2</span>
                    Payment Details
                  </div>
                  <div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
                    {['Visa', 'Mastercard', 'Amex'].map(card => (
                      <div key={card} style={{ padding: '8px 16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-glass)', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                        {card}
                      </div>
                    ))}
                  </div>
                  <div className="form-group">
                    <label className="form-label">Card Number</label>
                    <div style={{ position: 'relative' }}>
                      <input
                        className="form-input"
                        placeholder="4242 4242 4242 4242"
                        value={cardNumber}
                        onChange={e => setCardNumber(formatCard(e.target.value))}
                        style={{ paddingLeft: 44 }}
                      />
                      <CreditCard size={16} style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                    </div>
                  </div>
                  <div className="card-inputs" style={{ marginTop: 16 }}>
                    <div className="form-group">
                      <label className="form-label">Expiry Date</label>
                      <input className="form-input" placeholder="MM / YY" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">CVC</label>
                      <div style={{ position: 'relative' }}>
                        <input className="form-input" placeholder="123" style={{ paddingRight: 40 }} />
                        <Lock size={14} style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    style={{ width: '100%', justifyContent: 'center', marginTop: 24 }}
                    disabled={processing}
                  >
                    {processing ? (
                      <motion.span
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1.2, repeat: Infinity }}
                      >
                        Processing...
                      </motion.span>
                    ) : (
                      <>
                        <ShieldCheck size={18} /> Pay ${cartTotal}
                      </>
                    )}
                  </button>
                  <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: 12 }}>
                    🔒 Secured by Stripe. Your payment information is encrypted.
                  </p>
                </form>
              </div>

              {/* Order Summary */}
              <div className="checkout-summary">
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', marginBottom: 20 }}>Order Summary</h3>
                {cart.length === 0 ? (
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Your cart is empty</p>
                ) : (
                  <>
                    {cart.map(item => (
                      <div key={item.id} className="checkout-summary-item">
                        <span>{item.name}</span>
                        <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>${item.price}</span>
                      </div>
                    ))}
                    <div className="checkout-summary-item">
                      <span>Subtotal</span>
                      <span>${cartTotal}</span>
                    </div>
                    <div className="checkout-summary-item">
                      <span>Tax</span>
                      <span>$0</span>
                    </div>
                    <div className="checkout-summary-total">
                      <span>Total</span>
                      <span className="gradient-text">${cartTotal}</span>
                    </div>
                  </>
                )}
                <div style={{ marginTop: 20, padding: 16, background: 'rgba(16,185,129,0.06)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(16,185,129,0.15)' }}>
                  <p style={{ fontSize: '0.8rem', color: 'var(--neon-green)', fontWeight: 500 }}>
                    ✓ 30-day money-back guarantee<br/>
                    ✓ Lifetime updates included<br/>
                    ✓ Premium support access
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}
