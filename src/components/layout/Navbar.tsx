import React, { useState } from 'react';
import { useLms } from '../../context/LmsContext';
import { 
  Search, 
  Bell, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  BookOpen, 
  Sparkles, 
  GraduationCap, 
  ShieldCheck, 
  User, 
  LogOut, 
  Check, 
  Layers, 
  CheckCircle2, 
  Flame,
  Settings,
  ChevronDown,
  FileText,
  Wrench,
  DownloadCloud
} from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { ThemeToggle } from '../ui/ThemeToggle';

export const Navbar: React.FC = () => {
  const {
    currentView,
    setCurrentView,
    role,
    setRole,
    brandName,
    setSearchModalOpen,
    openAuthModal,
    notifications,
    unreadCount,
    markAllNotificationsRead,
  } = useLms();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notifDropdownOpen, setNotifDropdownOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const navLinks = [
    { id: 'courses', label: 'Courses' },
    { id: 'projects', label: 'Projects' },
    { id: 'learning-paths', label: 'Paths' },
    { id: 'blog', label: 'Blog' },
    { id: 'resources', label: 'Free Resources' },
    { id: 'notes', label: 'Notes' },
    { id: 'tools', label: 'Tools' },
    { id: 'community', label: 'Community' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200/80 dark:border-neutral-800/80 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Left: Brand Logo & Navigation */}
        <div className="flex items-center gap-8">
          {/* Logo Area */}
          <div 
            onClick={() => setCurrentView('landing')}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 font-black flex items-center justify-center text-sm shadow-sm group-hover:scale-105 transition-transform">
              <span className="font-mono">▲</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-extrabold tracking-tight text-neutral-900 dark:text-white group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                {brandName}
              </span>
              <span className="text-[10px] text-neutral-400 font-mono tracking-wider uppercase -mt-0.5">
                ENGINEERING LMS
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = currentView === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => setCurrentView(link.id as any)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-colors ${
                    isActive 
                      ? 'text-neutral-950 dark:text-white bg-neutral-100 dark:bg-neutral-850 font-semibold' 
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-neutral-900'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Center/Right: Global Search Bar Trigger */}
        <div className="hidden lg:flex flex-1 max-w-xs mx-4">
          <button
            onClick={() => setSearchModalOpen(true)}
            className="w-full flex items-center justify-between px-3.5 py-1.5 rounded-xl bg-neutral-100/80 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 text-xs text-neutral-500 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all shadow-2xs"
          >
            <div className="flex items-center gap-2">
              <Search className="w-3.5 h-3.5 text-neutral-400" />
              <span>Search courses, skills, paths...</span>
            </div>
            <kbd className="hidden xl:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-mono text-neutral-400 bg-neutral-200 dark:bg-neutral-800 rounded">
              ⌘K
            </kbd>
          </button>
        </div>

        {/* Right: Actions, Notifications, Theme, User Profile */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Mobile Search Button */}
          <button
            onClick={() => setSearchModalOpen(true)}
            className="lg:hidden p-2 rounded-xl text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Theme Toggle (Light / Dark / System) */}
          <ThemeToggle variant="segmented" size="sm" />

          {/* Notifications Bell with Dropdown */}
          <div className="relative">
            <button
              onClick={() => setNotifDropdownOpen(!notifDropdownOpen)}
              className="p-2 rounded-xl text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors relative"
              aria-label="Notifications"
            >
              <Bell className="w-4 h-4" />
              {unreadCount > 0 && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white dark:ring-neutral-950" />
              )}
            </button>

            {/* Notification Dropdown Panel */}
            {notifDropdownOpen && (
              <div 
                className="absolute right-0 mt-2 w-80 sm:w-88 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-2xl p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between pb-3 border-b border-neutral-100 dark:border-neutral-800">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-neutral-900 dark:text-white">Notifications</span>
                    {unreadCount > 0 && (
                      <span className="text-[10px] font-bold bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 px-1.5 py-0.2 rounded-full">
                        {unreadCount} new
                      </span>
                    )}
                  </div>
                  {unreadCount > 0 && (
                    <button
                      onClick={markAllNotificationsRead}
                      className="text-[11px] text-neutral-500 hover:text-neutral-900 dark:hover:text-white font-medium"
                    >
                      Mark all as read
                    </button>
                  )}
                </div>

                <div className="divide-y divide-neutral-100 dark:divide-neutral-850 max-h-72 overflow-y-auto my-1">
                  {notifications.map((notif) => (
                    <div 
                      key={notif.id} 
                      className={`py-3 px-1 transition-colors ${notif.read ? 'opacity-70' : 'opacity-100'}`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <h5 className="text-xs font-semibold text-neutral-900 dark:text-white">
                          {notif.title}
                        </h5>
                        <span className="text-[10px] text-neutral-400 shrink-0 font-mono">
                          {notif.timeAgo}
                        </span>
                      </div>
                      <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-1 leading-relaxed">
                        {notif.message}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800 text-center">
                  <button
                    onClick={() => {
                      setNotifDropdownOpen(false);
                      setCurrentView('student-dashboard');
                    }}
                    className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white"
                  >
                    View All in Dashboard
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* User Profile / Auth Action */}
          {role === 'guest' ? (
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => openAuthModal('login')}
              >
                Log In
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={() => openAuthModal('signup')}
              >
                Sign Up
              </Button>
            </div>
          ) : (
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-2 p-1 pl-2 rounded-xl bg-neutral-100/60 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all"
              >
                <div className="text-right hidden sm:block">
                  <div className="text-xs font-bold text-neutral-900 dark:text-white leading-none">
                    {role === 'instructor' ? 'Sarah Chen' : role === 'admin' ? 'Platform Admin' : 'Alex Mercer'}
                  </div>
                  <div className="text-[10px] text-neutral-500 capitalize leading-none mt-1">
                    {role}
                  </div>
                </div>
                <img
                  src={
                    role === 'instructor'
                      ? 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80'
                      : role === 'admin'
                      ? 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80'
                      : 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80'
                  }
                  alt="Avatar"
                  className="w-7 h-7 rounded-lg object-cover ring-1 ring-neutral-300 dark:ring-neutral-700"
                />
                <ChevronDown className="w-3 h-3 text-neutral-400 mr-1" />
              </button>

              {/* User Dropdown Menu */}
              {userMenuOpen && (
                <div
                  className="absolute right-0 mt-2 w-56 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-2xl p-2 z-50 animate-in fade-in duration-150"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="px-3 py-2 border-b border-neutral-100 dark:border-neutral-800 mb-1">
                    <div className="text-xs font-bold text-neutral-900 dark:text-white">
                      {role === 'instructor' ? 'Sarah Chen' : role === 'admin' ? 'Admin Controller' : 'Alex Mercer'}
                    </div>
                    <div className="text-[11px] text-neutral-400 truncate">
                      {role === 'instructor' ? 'sarah.chen@tech.org' : role === 'admin' ? 'admin@apex.system' : 'alex.mercer@dev.io'}
                    </div>
                  </div>

                  <div className="space-y-0.5 text-xs">
                    <button
                      onClick={() => {
                        setUserMenuOpen(false);
                        setCurrentView('student-dashboard');
                      }}
                      className="w-full text-left px-3 py-2 rounded-xl text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 flex items-center gap-2"
                    >
                      <GraduationCap className="w-3.5 h-3.5" /> Student Dashboard
                    </button>

                    <button
                      onClick={() => {
                        setUserMenuOpen(false);
                        setCurrentView('student-profile');
                      }}
                      className="w-full text-left px-3 py-2 rounded-xl text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 flex items-center gap-2"
                    >
                      <User className="w-3.5 h-3.5" /> Public Profile
                    </button>

                    <button
                      onClick={() => {
                        setUserMenuOpen(false);
                        setCurrentView('notes');
                      }}
                      className="w-full text-left px-3 py-2 rounded-xl text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 flex items-center gap-2"
                    >
                      <FileText className="w-3.5 h-3.5" /> Study Notes
                    </button>

                    <button
                      onClick={() => {
                        setUserMenuOpen(false);
                        setCurrentView('tools');
                      }}
                      className="w-full text-left px-3 py-2 rounded-xl text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 flex items-center gap-2"
                    >
                      <Wrench className="w-3.5 h-3.5" /> Developer Tools
                    </button>

                    <button
                      onClick={() => {
                        setUserMenuOpen(false);
                        setCurrentView('instructor-dashboard');
                      }}
                      className="w-full text-left px-3 py-2 rounded-xl text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 flex items-center gap-2"
                    >
                      <Layers className="w-3.5 h-3.5" /> Instructor Studio
                    </button>

                    <button
                      onClick={() => {
                        setUserMenuOpen(false);
                        setCurrentView('admin-dashboard');
                      }}
                      className="w-full text-left px-3 py-2 rounded-xl text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 flex items-center gap-2"
                    >
                      <ShieldCheck className="w-3.5 h-3.5" /> Admin Portal
                    </button>

                    <button
                      onClick={() => {
                        setUserMenuOpen(false);
                        setCurrentView('settings');
                      }}
                      className="w-full text-left px-3 py-2 rounded-xl text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 flex items-center gap-2"
                    >
                      <Settings className="w-3.5 h-3.5" /> Settings
                    </button>
                  </div>

                  <div className="pt-1 mt-1 border-t border-neutral-100 dark:border-neutral-800">
                    <button
                      onClick={() => {
                        setUserMenuOpen(false);
                        setRole('guest');
                        setCurrentView('landing');
                      }}
                      className="w-full text-left px-3 py-1.5 rounded-xl text-xs text-rose-600 dark:text-rose-400 hover:bg-rose-500/10 flex items-center gap-2"
                    >
                      <LogOut className="w-3.5 h-3.5" /> Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                setCurrentView(link.id as any);
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 rounded-xl text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-850"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3 pb-1 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
            <span className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">Appearance</span>
            <ThemeToggle variant="segmented" size="sm" showLabels />
          </div>

          <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800 flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="flex-1"
              onClick={() => {
                setCurrentView('student-dashboard');
                setMobileMenuOpen(false);
              }}
            >
              Dashboard
            </Button>
            <Button
              variant="primary"
              size="sm"
              className="flex-1"
              onClick={() => {
                setCurrentView('courses');
                setMobileMenuOpen(false);
              }}
            >
              Explore
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
