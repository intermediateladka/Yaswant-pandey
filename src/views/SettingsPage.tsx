import React, { useState } from 'react';
import { useLms } from '../context/LmsContext';
import { 
  User, 
  Shield, 
  Bell, 
  Palette, 
  BookOpen, 
  Save, 
  Sun, 
  Moon, 
  Key, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { ThemeToggle } from '../components/ui/ThemeToggle';

export const SettingsPage: React.FC = () => {
  const { 
    theme,
    resolvedTheme,
    setTheme,
    isDark, 
    toggleTheme, 
    brandName, 
    setBrandName, 
    addToast 
  } = useLms();

  const [activeTab, setActiveTab] = useState<'profile' | 'account' | 'notifications' | 'appearance' | 'learning'>('profile');

  // Form states
  const [name, setName] = useState('Alex Mercer');
  const [email, setEmail] = useState('alex.mercer@dev.io');
  const [bio, setBio] = useState('Software Engineer specializing in Distributed Frontends & Machine Learning Systems.');
  const [emailDigest, setEmailDigest] = useState(true);
  const [instructorReplies, setInstructorReplies] = useState(true);
  const [autoplayVideo, setAutoplayVideo] = useState(false);
  const [codeTheme, setCodeTheme] = useState('JetBrains Mono');

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    addToast("Settings Updated", "Your preferences have been applied successfully.", "success");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      
      {/* Header */}
      <div>
        <div className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1">
          Preferences & Security
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 dark:text-white tracking-tight">
          Account & Platform Settings
        </h1>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-neutral-200 dark:border-neutral-800 gap-6 text-xs sm:text-sm font-semibold overflow-x-auto">
        {(['profile', 'account', 'notifications', 'appearance', 'learning'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 capitalize transition-colors whitespace-nowrap relative ${
              activeTab === tab
                ? 'text-neutral-900 dark:text-white'
                : 'text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300'
            }`}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-900 dark:bg-white rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* Form Container */}
      <form onSubmit={handleSave}>
        {activeTab === 'profile' && (
          <GlassCard className="p-6 sm:p-8 space-y-6">
            <h3 className="text-base font-bold text-neutral-900 dark:text-white">
              Public Profile Information
            </h3>

            <div className="flex items-center gap-5">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80"
                alt="Avatar"
                className="w-16 h-16 rounded-2xl object-cover ring-2 ring-neutral-200 dark:ring-neutral-700"
              />
              <div>
                <Button variant="outline" size="sm" type="button" onClick={() => addToast("Avatar Picker", "Simulated avatar file picker.", "info")}>
                  Change Avatar
                </Button>
                <div className="text-[10px] text-neutral-400 mt-1">JPG, PNG, or GIF up to 5MB</div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs rounded-xl bg-neutral-50 dark:bg-neutral-850 border border-neutral-200 dark:border-neutral-750 text-neutral-900 dark:text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                  Bio / Engineering Focus
                </label>
                <textarea
                  rows={3}
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="w-full p-3 text-xs rounded-xl bg-neutral-50 dark:bg-neutral-850 border border-neutral-200 dark:border-neutral-750 text-neutral-900 dark:text-white focus:outline-none resize-none"
                />
              </div>
            </div>

            <div className="pt-2">
              <Button variant="primary" size="md" type="submit" icon={<Save className="w-3.5 h-3.5" />}>
                Save Changes
              </Button>
            </div>
          </GlassCard>
        )}

        {activeTab === 'appearance' && (
          <GlassCard className="p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-neutral-100 dark:border-neutral-800">
              <div>
                <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                  Interface Theme & Display Mode
                </h3>
                <p className="text-xs text-neutral-500 mt-0.5">
                  Choose between Light, Dark, or automatic Operating System synchronization.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant={theme === 'system' ? 'blue' : 'neutral'} size="sm">
                  {theme === 'system' ? 'System Sync' : `${theme.toUpperCase()} MODE`}
                </Badge>
                <Badge variant="neutral" size="sm">
                  Appearance: {resolvedTheme === 'dark' ? 'Dark' : 'Light'}
                </Badge>
              </div>
            </div>

            {/* Interactive Theme Cards */}
            <div className="space-y-3">
              <div className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                Display Theme
              </div>
              <ThemeToggle variant="cards" />
            </div>

            {/* Compact Quick Switcher Bar */}
            <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-850 border border-neutral-200/80 dark:border-neutral-750 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="text-xs font-bold text-neutral-900 dark:text-white">Quick Switcher</div>
                <p className="text-[11px] text-neutral-500">
                  Toggle instantaneously or switch back to automatic device scheduling.
                </p>
              </div>
              <ThemeToggle variant="segmented" size="md" showLabels />
            </div>

            {/* Glassmorphism Adaptation Info */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-neutral-100/80 to-neutral-50/80 dark:from-neutral-900/80 dark:to-neutral-850/80 border border-neutral-200/80 dark:border-neutral-800 text-xs space-y-2">
              <div className="flex items-center gap-2 font-semibold text-neutral-900 dark:text-white">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Dynamic Glassmorphism Architecture</span>
              </div>
              <p className="text-[11px] text-neutral-600 dark:text-neutral-400 leading-relaxed">
                All course cards, navigation bars, code playgrounds, and interactive modals use dual-mode frosted glass. In <strong>Light Mode</strong>, surfaces render with high-key daylight diffusion and soft ambient shadows. In <strong>Dark Mode</strong>, surfaces dynamically shift to deep obsidian glass with luminous edge borders and specular highlights.
              </p>
            </div>

            {/* Custom Brand Name Setting */}
            <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-850 border border-neutral-200 dark:border-neutral-750 space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-neutral-900 dark:text-white">Platform Brand Identity</div>
                  <p className="text-[11px] text-neutral-500">Customize the top-left brand name across all views</p>
                </div>
                <Badge variant="purple" size="sm">White-Label</Badge>
              </div>
              <input
                type="text"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-750 text-neutral-900 dark:text-white font-bold"
              />
            </div>

            <div className="pt-2">
              <Button 
                variant="primary" 
                size="md" 
                type="button" 
                icon={<Save className="w-3.5 h-3.5" />}
                onClick={() => addToast("Theme Preferences Saved", `Active mode: ${theme.toUpperCase()} (${resolvedTheme === 'dark' ? 'Dark theme' : 'Light theme'})`, "success")}
              >
                Apply Theme Preferences
              </Button>
            </div>
          </GlassCard>
        )}

        {activeTab === 'notifications' && (
          <GlassCard className="p-6 sm:p-8 space-y-4">
            <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-2">
              Notification Preferences
            </h3>

            <label className="flex items-center justify-between p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-850 border border-neutral-200/60 dark:border-neutral-750 text-xs cursor-pointer">
              <div>
                <strong className="text-neutral-900 dark:text-white">Weekly Engineering Digest</strong>
                <p className="text-neutral-500">Curated release notes on new React & AI lessons</p>
              </div>
              <input
                type="checkbox"
                checked={emailDigest}
                onChange={(e) => setEmailDigest(e.target.checked)}
                className="w-4 h-4 rounded text-neutral-900 focus:ring-0"
              />
            </label>

            <label className="flex items-center justify-between p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-850 border border-neutral-200/60 dark:border-neutral-750 text-xs cursor-pointer">
              <div>
                <strong className="text-neutral-900 dark:text-white">Instructor Feedback Alerts</strong>
                <p className="text-neutral-500">Instant ping when assignments receive grades</p>
              </div>
              <input
                type="checkbox"
                checked={instructorReplies}
                onChange={(e) => setInstructorReplies(e.target.checked)}
                className="w-4 h-4 rounded text-neutral-900 focus:ring-0"
              />
            </label>

            <div className="pt-2">
              <Button variant="primary" size="md" type="submit">
                Save Notification Rules
              </Button>
            </div>
          </GlassCard>
        )}

        {activeTab === 'learning' && (
          <GlassCard className="p-6 sm:p-8 space-y-4">
            <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-2">
              Learning Interface Behavior
            </h3>

            <label className="flex items-center justify-between p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-850 border border-neutral-200/60 dark:border-neutral-750 text-xs cursor-pointer">
              <div>
                <strong className="text-neutral-900 dark:text-white">Autoplay Subsequent Lessons</strong>
                <p className="text-neutral-500">Automatically progress video queue upon lesson completion</p>
              </div>
              <input
                type="checkbox"
                checked={autoplayVideo}
                onChange={(e) => setAutoplayVideo(e.target.checked)}
                className="w-4 h-4 rounded text-neutral-900 focus:ring-0"
              />
            </label>

            <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-850 border border-neutral-200/60 dark:border-neutral-750 text-xs space-y-1.5">
              <label className="block font-semibold text-neutral-900 dark:text-white">
                Code Snippet Font Family
              </label>
              <select
                value={codeTheme}
                onChange={(e) => setCodeTheme(e.target.value)}
                className="w-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white px-3 py-1.5 rounded-lg text-xs"
              >
                <option value="JetBrains Mono">JetBrains Mono</option>
                <option value="Fira Code">Fira Code</option>
                <option value="Geist Mono">Geist Mono</option>
              </select>
            </div>

            <div className="pt-2">
              <Button variant="primary" size="md" type="submit">
                Update Player Settings
              </Button>
            </div>
          </GlassCard>
        )}

        {activeTab === 'account' && (
          <GlassCard className="p-6 sm:p-8 space-y-6">
            <h3 className="text-base font-bold text-neutral-900 dark:text-white">
              Account Security & Credentials
            </h3>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs rounded-xl bg-neutral-50 dark:bg-neutral-850 border border-neutral-200 dark:border-neutral-750 text-neutral-900 dark:text-white focus:outline-none"
                />
              </div>

              <div className="pt-2">
                <Button variant="outline" size="sm" type="button" icon={<Key className="w-3.5 h-3.5" />} onClick={() => addToast("Password Reset", "Reset instructions dispatched to email.", "info")}>
                  Change Password
                </Button>
              </div>
            </div>
          </GlassCard>
        )}
      </form>

    </div>
  );
};
