import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ChevronDown,
  Mail,
  Phone,
  Globe,
  Accessibility,
  LogIn,
  Landmark,
  Shield,
  CheckCircle2,
} from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  {
    label: 'About',
    path: '/about',
    submenu: [
      { label: 'Foundation Story', path: '/about#story', desc: 'Our journey since 2015' },
      { label: 'Leadership', path: '/about#leadership', desc: 'Meet our team' },
      { label: 'Partners', path: '/about#partners', desc: 'Collaborators' },
    ],
  },
  {
    label: 'Programmes',
    path: '/projects',
    submenu: [
      { label: 'Maha-Agri', path: '/projects#maha-agri', desc: 'Agricultural transformation' },
      { label: 'Mee Swayamsevika', path: '/projects#swayamsevika', desc: 'Women empowerment' },
      { label: 'Drone Services', path: '/projects#drones', desc: 'Technology solutions' },
      { label: 'Training & EDP', path: '/projects#training', desc: 'Skill development' },
    ],
  },
  { label: 'Services', path: '/services' },
  { label: 'Media', path: '/media' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Careers', path: '/careers' },
  { label: 'Transparency', path: '/transparency' },
  { label: 'Contact', path: '/contact' },
];

const registrations = [
  { name: 'Section 8', full: 'Section 8 Company' },
  { name: 'NGO Darpan', full: 'NGO Darpan (NITI Aayog)' },
  { name: 'Udyam', full: 'Udyam MSME Registration' },
  { name: '12A', full: '12A Income Tax Exemption' },
  { name: '80G', full: '80G Tax Benefits' },
  { name: 'CSR', full: 'CSR Funding Eligible' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveMenu(null);
  }, [location.pathname]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-white/98 backdrop-blur-sm'
    }`}>
      {/* Level 1: Government Utility Bar */}
      <div className="bg-primary-950 text-primary-300 border-b border-primary-800/50">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-9">
            <div className="flex items-center gap-8 text-xs">
              <a href="tel:1800123456" className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Phone className="w-3 w-3" />
                <span className="font-medium">1800-123-456</span>
                <span className="text-primary-500">Toll Free</span>
              </a>
              <a href="mailto:info@abhinavbharatfoundation.org" className="hidden md:flex items-center gap-1.5 hover:text-white transition-colors">
                <Mail className="w-3 h-3" />
                <span>info@abhinavbharatfoundation.org</span>
              </a>
            </div>
            <div className="flex items-center gap-6 text-xs">
              <button className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors">
                <Accessibility className="w-3.5 h-3.5" />
                <span>Accessibility</span>
              </button>
              <button className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Globe className="w-3.5 h-3.5" />
                <span>English</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              <Link to="/login" className="flex items-center gap-1.5 hover:text-white transition-colors border-l border-primary-700 pl-6">
                <LogIn className="w-3.5 h-3.5" />
                <span>Login</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Level 2: Main Header */}
      <div className="bg-white border-b border-primary-100">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Official Government-Style Logo Block */}
            <Link to="/" className="flex items-center gap-3.5 group">
              {/* Emblem */}
              <div className="relative">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary-700 via-primary-800 to-primary-950 rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300 ring-1 ring-primary-600/20">
                  <Landmark className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="absolute -bottom-1 -right-1 w-4 h-4 bg-accent-green-500 rounded-full border-2 border-white flex items-center justify-center shadow-sm"
                >
                  <CheckCircle2 className="w-2 h-2 text-white" />
                </motion.div>
              </div>
              {/* Text Block */}
              <div className="hidden sm:block">
                <div className="text-[9px] sm:text-[10px] text-primary-500 font-semibold tracking-[0.2em] uppercase mb-0.5">
                  Section 8 Non-Profit | Est. 2015
                </div>
                <div className="text-primary-900 font-bold text-base sm:text-lg tracking-tight leading-tight -mb-0.5">
                  ABHINAV BHARAT
                </div>
                <div className="text-primary-700 font-semibold text-sm sm:text-base tracking-wide">
                  FOUNDATION
                </div>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center">
              {navLinks.map((item) => (
                <div
                  key={item.path}
                  className="relative"
                  onMouseEnter={() => item.submenu && setActiveMenu(item.label)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <Link
                    to={item.path}
                    className={`relative px-4 h-20 flex items-center text-sm font-medium transition-colors ${
                      location.pathname === item.path
                        ? 'text-primary-900'
                        : 'text-primary-600 hover:text-primary-900'
                    }`}
                  >
                    {item.label}
                    {item.submenu && (
                      <ChevronDown className={`w-4 h-4 ml-0.5 transition-transform ${activeMenu === item.label ? 'rotate-180' : ''}`} />
                    )}
                    {location.pathname === item.path && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary-900"
                      />
                    )}
                  </Link>

                  <AnimatePresence>
                    {item.submenu && activeMenu === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 pt-2 -translate-x-2"
                      >
                        <div className="bg-white rounded-lg shadow-xl border border-primary-100 py-2 min-w-[240px]">
                          {item.submenu.map((sub) => (
                            <Link
                              key={sub.path}
                              to={sub.path}
                              className="block px-4 py-2.5 hover:bg-primary-50 transition-colors"
                            >
                              <div className="text-sm font-medium text-primary-900">{sub.label}</div>
                              <div className="text-xs text-primary-500 mt-0.5">{sub.desc}</div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* CTA */}
            <div className="flex items-center gap-3">
              <Link
                to="/contact"
                className="hidden xl:flex items-center gap-2 px-6 py-2.5 bg-primary-900 text-white text-sm font-semibold rounded hover:bg-primary-800 transition-colors"
              >
                Partner With Us
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-primary-900 hover:bg-primary-50 rounded-lg transition-colors"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Level 3: Verification Strip */}
      <div className="bg-primary-50/80 backdrop-blur-sm border-b border-primary-200/60">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          {/* Desktop: Single Row */}
          <div className="hidden lg:flex items-center justify-center py-2 gap-1">
            <div className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-primary-400 shrink-0">
              <Shield className="w-3 h-3" />
              <span className="uppercase tracking-widest text-[10px]">Verified</span>
            </div>
            <div className="w-px h-3 bg-primary-200" />
            {registrations.map((reg, idx) => (
              <motion.div
                key={reg.name}
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-center gap-1.5 px-2.5 py-1 bg-white/80 rounded border border-primary-100/80 hover:border-primary-300 hover:bg-white transition-all duration-200 cursor-default group"
                title={reg.full}
              >
                <CheckCircle2 className="w-3 h-3 text-accent-green-500" />
                <span className="text-[10px] font-semibold text-primary-600 group-hover:text-primary-900 transition-colors tracking-wide">
                  {reg.name}
                </span>
              </motion.div>
            ))}
          </div>
          {/* Tablet: 3-column Grid */}
          <div className="hidden md:grid lg:hidden grid-cols-3 gap-1.5 py-2">
            {registrations.map((reg, idx) => (
              <motion.div
                key={reg.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.03 }}
                className="flex items-center justify-center gap-1.5 px-2 py-1.5 bg-white/80 rounded border border-primary-100/80 hover:border-primary-300 transition-all duration-200 cursor-default group"
                title={reg.full}
              >
                <CheckCircle2 className="w-3 h-3 text-accent-green-500" />
                <span className="text-[10px] font-semibold text-primary-600 group-hover:text-primary-900 transition-colors">
                  {reg.name}
                </span>
              </motion.div>
            ))}
          </div>
          {/* Mobile: 3-column Grid */}
          <div className="md:hidden grid grid-cols-3 gap-1.5 py-2">
            {registrations.map((reg, idx) => (
              <motion.div
                key={reg.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.04 }}
                className="flex items-center justify-center gap-1 px-1.5 py-1.5 bg-white/80 rounded border border-primary-100/80 transition-all duration-200 cursor-default group"
                title={reg.full}
              >
                <CheckCircle2 className="w-2.5 h-2.5 text-accent-green-500" />
                <span className="text-[9px] font-semibold text-primary-600 group-hover:text-primary-900 transition-colors">
                  {reg.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-primary-100"
          >
            <div className="max-w-[1440px] mx-auto px-6 py-4 space-y-1">
              {navLinks.map((item) => (
                <div key={item.path}>
                  <Link
                    to={item.path}
                    className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium ${
                      location.pathname === item.path
                        ? 'bg-primary-900 text-white'
                        : 'text-primary-700 hover:bg-primary-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.submenu && (
                    <div className="pl-4 space-y-1 mt-1">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          className="block px-4 py-2 text-xs text-primary-500 hover:bg-primary-50 rounded"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 mt-4 border-t border-primary-100">
                <Link
                  to="/contact"
                  className="block w-full text-center px-4 py-3 bg-primary-900 text-white rounded-lg font-medium"
                >
                  Partner With Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
