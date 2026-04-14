import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Heart, ShoppingCart, Eye, Star, X } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Showcase() {
  const {
    filteredTemplates, searchQuery, setSearchQuery,
    activeCategory, setActiveCategory, addToCart, toggleWishlist, wishlist
  } = useApp();
  const [preview, setPreview] = useState(null);
  const categories = ['All', 'Portfolio', 'Business', 'E-commerce', 'Startup Landing Pages'];

  return (
    <section className="section showcase" id="showcase">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Templates</div>
          <h2 className="section-title">Premium Website Templates</h2>
          <p className="section-subtitle">Browse our collection of high-converting, beautifully designed templates ready to deploy.</p>
        </motion.div>

        <motion.div
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20, margin: '40px 0' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="showcase-filters">
            {categories.map(cat => (
              <button
                key={cat}
                className={`showcase-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="search-bar">
            <Search size={16} className="search-icon" />
            <input
              className="search-input"
              placeholder="Search templates..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>
        </motion.div>

        <div className="showcase-grid">
          <AnimatePresence mode="popLayout">
            {filteredTemplates.map((template, i) => {
              const isWished = wishlist.find(w => w.id === template.id);
              return (
                <motion.div
                  key={template.id}
                  className="template-card"
                  layout
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="template-card-image">
                    <img src={template.image} alt={template.name} loading="lazy" />
                    {template.hot && <div className="template-card-hot">🔥 Hot</div>}
                    <button
                      className={`template-card-wishlist ${isWished ? 'active' : ''}`}
                      onClick={(e) => { e.stopPropagation(); toggleWishlist(template); }}
                    >
                      <Heart size={14} fill={isWished ? '#ec4899' : 'none'} />
                    </button>
                    <div className="template-card-overlay">
                      <div className="template-card-actions">
                        <button className="btn btn-primary btn-sm" onClick={() => setPreview(template)}>
                          <Eye size={14} /> Preview
                        </button>
                        <button className="btn btn-secondary btn-sm" onClick={() => addToCart(template)}>
                          <ShoppingCart size={14} /> Add
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="template-card-body">
                    <div className="template-card-category">{template.category}</div>
                    <div className="template-card-name">{template.name}</div>
                    <div className="template-card-footer">
                      <div className="template-card-price">${template.price}</div>
                      <div className="template-card-rating">
                        <Star size={14} fill="#f59e0b" /> {template.rating}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {filteredTemplates.length === 0 && (
          <motion.div
            style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-muted)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p style={{ fontSize: '1.1rem' }}>No templates found matching your criteria.</p>
            <button
              className="btn btn-secondary btn-sm"
              style={{ marginTop: 16 }}
              onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
            >
              Reset Filters
            </button>
          </motion.div>
        )}
      </div>

      {/* Preview Modal */}
      <AnimatePresence>
        {preview && (
          <motion.div
            className="preview-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreview(null)}
          >
            <motion.div
              className="preview-content"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={e => e.stopPropagation()}
            >
              <div className="preview-browser-bar">
                <div className="demo-browser-dots">
                  <div className="demo-browser-dot" />
                  <div className="demo-browser-dot" />
                  <div className="demo-browser-dot" />
                </div>
                <div className="demo-browser-url">novaweb.studio/preview/{preview.name.toLowerCase().replace(/\s+/g, '-')}</div>
                <button onClick={() => setPreview(null)} style={{ marginLeft: 'auto', color: 'var(--text-muted)' }}>
                  <X size={18} />
                </button>
              </div>
              <img className="preview-image" src={preview.image} alt={preview.name} />
              <div className="preview-footer">
                <div className="preview-info">
                  <h3>{preview.name}</h3>
                  <p>{preview.category} • {preview.style} Style • ⭐ {preview.rating}</p>
                </div>
                <div className="preview-actions">
                  <span style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--neon-purple-light)', fontFamily: 'var(--font-display)' }}>
                    ${preview.price}
                  </span>
                  <button className="btn btn-primary btn-sm" onClick={() => { addToCart(preview); setPreview(null); }}>
                    <ShoppingCart size={14} /> Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
