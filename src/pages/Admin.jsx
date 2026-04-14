import { useState } from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, Package, Users, Settings, BarChart3, Bell, Plus, Search, MoreHorizontal, TrendingUp, TrendingDown, ShoppingCart, DollarSign, Eye } from 'lucide-react';
import { useApp } from '../context/AppContext';

const sidebarItems = [
  { icon: <LayoutDashboard size={18} />, label: 'Dashboard', key: 'dashboard' },
  { icon: <Package size={18} />, label: 'Templates', key: 'templates' },
  { icon: <ShoppingCart size={18} />, label: 'Orders', key: 'orders' },
  { icon: <Users size={18} />, label: 'Customers', key: 'customers' },
  { icon: <BarChart3 size={18} />, label: 'Analytics', key: 'analytics' },
  { icon: <Settings size={18} />, label: 'Settings', key: 'settings' },
];

const stats = [
  { label: 'Revenue', value: '$48,290', change: '+12.5%', positive: true, icon: <DollarSign size={20} /> },
  { label: 'Orders', value: '1,247', change: '+8.2%', positive: true, icon: <ShoppingCart size={20} /> },
  { label: 'Visitors', value: '34.2K', change: '+23.1%', positive: true, icon: <Eye size={20} /> },
  { label: 'Customers', value: '892', change: '-2.4%', positive: false, icon: <Users size={20} /> },
];

const recentOrders = [
  { id: '#NW-4521', customer: 'Sarah Chen', template: 'Quantum Portfolio', amount: '$49', status: 'active', date: 'Apr 14, 2026' },
  { id: '#NW-4520', customer: 'Marcus Wright', template: 'NeonCommerce Pro', amount: '$89', status: 'active', date: 'Apr 14, 2026' },
  { id: '#NW-4519', customer: 'Elena R.', template: 'LaunchPad SaaS', amount: '$45', status: 'pending', date: 'Apr 13, 2026' },
  { id: '#NW-4518', customer: 'David Kim', template: 'Enterprise Pro', amount: '$129', status: 'active', date: 'Apr 13, 2026' },
  { id: '#NW-4517', customer: 'Lisa T.', template: 'ShopWave Store', amount: '$99', status: 'inactive', date: 'Apr 12, 2026' },
  { id: '#NW-4516', customer: 'James Park', template: 'StartupX Landing', amount: '$39', status: 'active', date: 'Apr 12, 2026' },
];

const templates = [
  { name: 'Quantum Portfolio', sales: 234, revenue: '$11,466', status: 'active' },
  { name: 'NeonCommerce Pro', sales: 189, revenue: '$16,821', status: 'active' },
  { name: 'LaunchPad SaaS', sales: 156, revenue: '$7,020', status: 'active' },
  { name: 'Enterprise Pro', sales: 98, revenue: '$12,642', status: 'active' },
  { name: 'ShopWave Store', sales: 145, revenue: '$14,355', status: 'pending' },
];

export default function Admin() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="admin-page">
      <div className="admin-layout">
        <aside className="admin-sidebar">
          <div style={{ padding: '0 24px 24px', borderBottom: '1px solid var(--border-subtle)', marginBottom: 16 }}>
            <div className="navbar-logo" style={{ fontSize: '1.1rem' }}>
              <div className="navbar-logo-icon" style={{ width: 28, height: 28, fontSize: '0.75rem' }}>⬡</div>
              <span style={{ fontSize: '1rem' }}>Nova<span className="gradient-text">Web</span></span>
            </div>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: 4 }}>Admin Panel</p>
          </div>
          {sidebarItems.map(item => (
            <div
              key={item.key}
              className={`admin-sidebar-item ${activeTab === item.key ? 'active' : ''}`}
              onClick={() => setActiveTab(item.key)}
            >
              {item.icon} {item.label}
            </div>
          ))}
        </aside>

        <main className="admin-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
              <div>
                <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700 }}>
                  {activeTab === 'dashboard' ? 'Dashboard' : activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
                </h1>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: 4 }}>Welcome back, Admin</p>
              </div>
              <div style={{ display: 'flex', gap: 12 }}>
                <div className="search-bar" style={{ maxWidth: 250 }}>
                  <Search size={14} className="search-icon" />
                  <input className="search-input" placeholder="Search..." style={{ padding: '10px 16px 10px 38px', fontSize: '0.85rem' }} />
                </div>
                <button className="btn-icon"><Bell size={18} /></button>
                <button className="btn btn-primary btn-sm"><Plus size={16} /> Add Template</button>
              </div>
            </div>

            {/* Stats */}
            <div className="admin-stats">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="admin-stat-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className="admin-stat-label">{stat.label}</div>
                    <div style={{ color: 'var(--neon-purple-light)', opacity: 0.5 }}>{stat.icon}</div>
                  </div>
                  <div className="admin-stat-value">{stat.value}</div>
                  <div className={`admin-stat-change ${stat.positive ? 'positive' : 'negative'}`}>
                    {stat.positive ? <TrendingUp size={12} /> : <TrendingDown size={12} />} {stat.change} vs last month
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Charts placeholder + Recent Orders */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 32 }}>
              {/* Revenue Chart */}
              <div style={{ background: 'var(--bg-glass)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: 24 }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 20 }}>Revenue Overview</h3>
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, height: 180, paddingTop: 20 }}>
                  {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
                    <motion.div
                      key={i}
                      style={{
                        flex: 1,
                        background: i === 11 ? 'var(--gradient-primary)' : 'rgba(168,85,247,0.15)',
                        borderRadius: '4px 4px 0 0',
                        minHeight: 4,
                      }}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: i * 0.05, duration: 0.6, ease: 'easeOut' }}
                    />
                  ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                  <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
                </div>
              </div>

              {/* Top Templates */}
              <div style={{ background: 'var(--bg-glass)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: 24 }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 20 }}>Top Templates</h3>
                {templates.map((t, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0', borderBottom: i < templates.length - 1 ? '1px solid var(--border-subtle)' : 'none' }}>
                    <div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 500 }}>{t.name}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{t.sales} sales</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--neon-purple-light)' }}>{t.revenue}</span>
                      <span className={`admin-status ${t.status}`}>{t.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Orders */}
            <div style={{ background: 'var(--bg-glass)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 24px', borderBottom: '1px solid var(--border-subtle)' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 600 }}>Recent Orders</h3>
                <button style={{ fontSize: '0.8rem', color: 'var(--neon-purple-light)', fontWeight: 500 }}>View All</button>
              </div>
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Template</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order, i) => (
                    <motion.tr
                      key={order.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.06 }}
                    >
                      <td style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--neon-purple-light)' }}>{order.id}</td>
                      <td>{order.customer}</td>
                      <td>{order.template}</td>
                      <td style={{ fontWeight: 600 }}>{order.amount}</td>
                      <td><span className={`admin-status ${order.status}`}>{order.status}</span></td>
                      <td style={{ color: 'var(--text-muted)' }}>{order.date}</td>
                      <td><button style={{ color: 'var(--text-muted)' }}><MoreHorizontal size={16} /></button></td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
