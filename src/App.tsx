/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  ExternalLink, 
  Code2, 
  Layers, 
  Settings, 
  Globe, 
  CheckCircle2, 
  ArrowRight,
  Menu,
  X,
  Sparkles,
  Terminal,
  Cpu,
  Monitor
} from 'lucide-react';

// --- Components ---

const Navbar = ({ activeTab, setActiveTab }: { activeTab: 'preview' | 'guide', setActiveTab: (t: 'preview' | 'guide') => void }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <Layers className="text-white w-5 h-5" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight">PortfoliX</span>
        </div>
        
        <div className="flex items-center bg-gray-100 p-1 rounded-full">
          <button 
            onClick={() => setActiveTab('preview')}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              activeTab === 'preview' ? 'bg-white text-black shadow-sm' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Preview Site
          </button>
          <button 
            onClick={() => setActiveTab('guide')}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              activeTab === 'guide' ? 'bg-white text-black shadow-sm' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Deployment Guide
          </button>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-black transition-colors">
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </nav>
  );
};

const PortfolioPreview = () => {
  const projects = [
    { title: "NeuroFlow", desc: "AI-driven rhythmic engine for creative workflows.", category: "Web App", icon: <Cpu className="w-5 h-5" /> },
    { title: "OmniLayer", desc: "Zero-latency state management for real-time apps.", category: "Utility", icon: <Layers className="w-5 h-5" /> },
    { title: "Prism UI", desc: "A recursive design system for fluid interfaces.", category: "Design System", icon: <Sparkles className="w-5 h-5" /> },
  ];

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4">
      {/* Hero Section */}
      <section className="mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="font-display text-6xl md:text-8xl font-bold leading-[0.9] mb-8">
            Building the next <span className="text-gray-400">digital frontier.</span>
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed max-w-xl mb-10">
            Frontend Architect specialized in high-performance web applications and immersive visual experiences.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-all flex items-center gap-2 group">
              Start a project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-gray-200 rounded-full font-medium hover:bg-gray-50 transition-all">
              View work
            </button>
          </div>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="mb-32">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="font-display text-4xl font-bold mb-2">Selected Works</h2>
            <p className="text-gray-500">A collection of technical experiments and commercial projects.</p>
          </div>
          <div className="hidden md:block h-[1px] flex-grow mx-12 bg-gray-100"></div>
          <span className="font-mono text-sm text-gray-400">01 / 03</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div 
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/5] bg-gray-100 rounded-3xl mb-6 overflow-hidden relative border border-gray-100 transition-all group-hover:shadow-2xl group-hover:shadow-black/5">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center transition-transform group-hover:scale-110">
                    {p.icon}
                  </div>
                </div>
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>
              <h3 className="font-display text-2xl font-bold mb-1">{p.title}</h3>
              <p className="text-gray-500 text-sm mb-2">{p.desc}</p>
              <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400 bg-gray-100 px-2 py-1 rounded">
                {p.category}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white rounded-[40px] p-12 md:p-24 border border-gray-100">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { label: "Lines of Code", value: "1.2M+" },
            { label: "Cups of Coffee", value: "4.8K" },
            { label: "Projects Shipped", value: "42" },
            { label: "Happy Clients", value: "100%" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-display text-4xl md:text-5xl font-bold mb-2">{s.value}</div>
              <div className="text-gray-400 text-sm font-medium uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const DeploymentGuide = () => {
  const steps = [
    {
      title: "GitHub Repository setup",
      desc: "Create a new repository on GitHub. You can name it whatever you like, or use `username.github.io` for your primary site.",
      icon: <Github className="w-6 h-6" />
    },
    {
      title: "Push your code",
      desc: "Use Git to push your local files to the master branch of your new repository.",
      icon: <Terminal className="w-6 h-6" />
    },
    {
      title: "Vite Configuration",
      desc: "Ensure your `vite.config.ts` has a `base` property if you are hosting on a subfolder (e.g., `/my-repo/`).",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "Enable GitHub Pages",
      desc: "Go to Settings > Pages in your GitHub repo and select the branch you want to deploy (usually `gh-pages` or `main/docs`).",
      icon: <Globe className="w-6 h-6" />
    }
  ];

  return (
    <div className="pt-24 pb-20 max-w-4xl mx-auto px-4">
      <header className="mb-20 text-center">
        <h1 className="font-display text-5xl font-bold mb-6">Host your site for free</h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          GitHub Pages is the easiest way to host your static sites directly from your repository. Here is how to make it live.
        </p>
      </header>

      <div className="space-y-6">
        {steps.map((step, i) => (
          <motion.div 
            key={step.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex gap-6 p-8 bg-white border border-gray-100 rounded-3xl"
          >
            <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0">
              {step.icon}
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-xs text-gray-400 font-bold">STEP 0{i + 1}</span>
                <h3 className="font-display text-xl font-bold">{step.title}</h3>
              </div>
              <p className="text-gray-500 leading-relaxed">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <section className="mt-20 p-12 bg-black rounded-[40px] text-white text-center">
        <Monitor className="w-12 h-12 mx-auto mb-8 opacity-50" />
        <h2 className="text-3xl font-display font-bold mb-4">Want a custom domain?</h2>
        <p className="text-gray-400 mb-10 max-w-md mx-auto">
          You can buy a domain from any provider and link it to GitHub Pages in the Custom Domain settings.
        </p>
        <button className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-100 transition-all">
          Learn how to link a domain
        </button>
      </section>
    </div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState<'preview' | 'guide'>('preview');

  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main>
        <AnimatePresence mode="wait">
          {activeTab === 'preview' ? (
            <motion.div
              key="preview"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <PortfolioPreview />
            </motion.div>
          ) : (
            <motion.div
              key="guide"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <DeploymentGuide />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="py-20 border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
              <Layers className="text-white w-4 h-4" />
            </div>
            <span className="font-display font-bold text-lg">PortfoliX</span>
          </div>
          <div className="flex gap-8 text-gray-400 text-sm font-medium">
            <a href="#" className="hover:text-black transition-colors">Dribbble</a>
            <a href="#" className="hover:text-black transition-colors">Behance</a>
            <a href="#" className="hover:text-black transition-colors">X (Twitter)</a>
            <a href="#" className="hover:text-black transition-colors">LinkedIn</a>
          </div>
          <p className="text-gray-400 text-sm">© 2026 PortfoliX Studio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
