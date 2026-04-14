import { createContext, useContext, useState, useCallback } from 'react';

const AppContext = createContext();

const TEMPLATES = [
  { id: 1, name: 'Quantum Portfolio', category: 'Portfolio', price: 49, style: 'Minimal', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop', rating: 4.9, hot: true },
  { id: 2, name: 'NeonCommerce Pro', category: 'E-commerce', price: 89, style: 'Bold', image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop', rating: 4.8, hot: true },
  { id: 3, name: 'StartupX Landing', category: 'Startup Landing Pages', price: 39, style: 'Modern', image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop', rating: 4.7 },
  { id: 4, name: 'CorporateEdge', category: 'Business', price: 69, style: 'Corporate', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop', rating: 4.6 },
  { id: 5, name: 'ArtVault Gallery', category: 'Portfolio', price: 59, style: 'Creative', image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop', rating: 4.9 },
  { id: 6, name: 'ShopWave Store', category: 'E-commerce', price: 99, style: 'Modern', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop', rating: 4.5 },
  { id: 7, name: 'LaunchPad SaaS', category: 'Startup Landing Pages', price: 45, style: 'Minimal', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop', rating: 4.8, hot: true },
  { id: 8, name: 'BizCore Suite', category: 'Business', price: 79, style: 'Bold', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop', rating: 4.7 },
  { id: 9, name: 'PixelPerfect Folio', category: 'Portfolio', price: 55, style: 'Creative', image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=600&h=400&fit=crop', rating: 4.6 },
  { id: 10, name: 'FastCart Express', category: 'E-commerce', price: 109, style: 'Modern', image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=400&fit=crop', rating: 4.9 },
  { id: 11, name: 'RocketLaunch', category: 'Startup Landing Pages', price: 35, style: 'Bold', image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop', rating: 4.4 },
  { id: 12, name: 'Enterprise Pro', category: 'Business', price: 129, style: 'Corporate', image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=600&h=400&fit=crop', rating: 4.8 },
];

export function AppProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [user, setUser] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [styleFilter, setStyleFilter] = useState('All');
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [billingMode, setBillingMode] = useState('one-time');

  const addNotification = useCallback((message, type = 'success') => {
    const id = Date.now();
    setNotifications(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 3500);
  }, []);

  const addToCart = useCallback((template) => {
    setCart(prev => {
      if (prev.find(item => item.id === template.id)) {
        addNotification('Already in cart!', 'warning');
        return prev;
      }
      addNotification(`${template.name} added to cart!`, 'success');
      return [...prev, { ...template, quantity: 1 }];
    });
  }, [addNotification]);

  const removeFromCart = useCallback((id) => {
    setCart(prev => prev.filter(item => item.id !== id));
    addNotification('Removed from cart', 'info');
  }, [addNotification]);

  const toggleWishlist = useCallback((template) => {
    setWishlist(prev => {
      if (prev.find(item => item.id === template.id)) {
        addNotification('Removed from wishlist', 'info');
        return prev.filter(item => item.id !== template.id);
      }
      addNotification(`${template.name} saved to wishlist!`, 'success');
      return [...prev, template];
    });
  }, [addNotification]);

  const login = useCallback((email, password) => {
    setUser({ email, name: email.split('@')[0], avatar: null, role: 'user' });
    addNotification('Welcome back!', 'success');
    setShowLogin(false);
  }, [addNotification]);

  const signup = useCallback((name, email, password) => {
    setUser({ email, name, avatar: null, role: 'user' });
    addNotification('Account created successfully!', 'success');
    setShowSignup(false);
  }, [addNotification]);

  const logout = useCallback(() => {
    setUser(null);
    addNotification('Logged out successfully', 'info');
  }, [addNotification]);

  const filteredTemplates = TEMPLATES.filter(t => {
    const matchCategory = activeCategory === 'All' || t.category === activeCategory;
    const matchSearch = t.name.toLowerCase().includes(searchQuery.toLowerCase()) || t.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchPrice = t.price >= priceRange[0] && t.price <= priceRange[1];
    const matchStyle = styleFilter === 'All' || t.style === styleFilter;
    return matchCategory && matchSearch && matchPrice && matchStyle;
  });

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <AppContext.Provider value={{
      templates: TEMPLATES, filteredTemplates, cart, wishlist, user, notifications,
      searchQuery, setSearchQuery, activeCategory, setActiveCategory,
      priceRange, setPriceRange, styleFilter, setStyleFilter,
      showLogin, setShowLogin, showSignup, setShowSignup, showCart, setShowCart,
      billingMode, setBillingMode,
      addToCart, removeFromCart, toggleWishlist, addNotification,
      login, signup, logout, cartTotal
    }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
