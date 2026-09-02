/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import BackToTop from './BackToTop';
import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  Code,
  FileCheck,
  MessageSquare,
  Users,
  Globe,
  Zap,
  CheckCircle,
  HelpCircle,
  ChevronDown,
  FolderGit2,
  Star,
  Award,
  ChevronRight,
  Github,
  Twitter,
  Linkedin
} from 'lucide-react';

interface LandingPageProps {
  onEnterApp: () => void;
  setCurrentTab: (tab: string) => void;
}

export default function LandingPage({ onEnterApp, setCurrentTab }: LandingPageProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const stats = [
    { value: '45,000+', label: 'DSA Problems Solved' },
    { value: '12,200+', label: 'ATS Resumes Scanned' },
    { value: '98.4%', label: 'Mock Success Rate' },
    { value: '180+', label: 'Top Recruiters Listed' }
  ];

  const features = [
    {
      title: 'Company-Curated DSA Sheets',
      description: 'Practice curated sheets like Blind 75, NeetCode 150, and Striver sheet directly inside an interactive sandbox workspace.',
      icon: Code,
      color: 'from-cyan-600 to-teal-600',
      badge: 'Interactive'
    },
    {
      title: 'ATS Resume Studio',
      description: 'Build real-time ATS compliant resumes with structured forms. Instantly review against SDE keywords with Gemini suggestions.',
      icon: FileCheck,
      color: 'from-teal-600 to-fuchsia-600',
      badge: 'AI Powered'
    },
    {
      title: 'AI Simulated Interview Hub',
      description: 'Choose behavioral or tech categories (OS, DBMS, OOP). Submit answers and let the Gemini client grade your transcripts with immediate reference solutions.',
      icon: MessageSquare,
      color: 'from-fuchsia-600 to-fuchsia-600',
      badge: 'Simulated'
    },
    {
      title: 'Open Source Community',
      description: 'Independent modules designed for easy contributions. Perfect for learning collaborative development with issue templates and pull requests.',
      icon: FolderGit2,
      color: 'from-emerald-600 to-teal-600',
      badge: '100% Free'
    }
  ];

  const testimonials = [
    {
      name: 'Rohan Sharma',
      role: 'Incoming SDE at Google',
      college: 'IIT Delhi',
      comment: 'PrepVerse\'s simulated mock interviews with Gemini completely changed my interview approach. The instant evaluation gave me precise feedback on what DBMS and OS keywords I was missing, which helped me clear Google onsite rounds!',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&q=80',
      stars: 5
    },
    {
      name: 'Anjali Gupta',
      role: 'Software Intern at Microsoft',
      college: 'BITS Pilani',
      comment: 'The ATS Resume Builder score is incredibly accurate. It recommended adding key sliding-window and graph optimization terms that matching systems search for. I got interview calls from 4 top product companies!',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80',
      stars: 5
    }
  ];

  const faqs = [
    {
      q: 'How does the Gemini AI Coach evaluate resumes and interview answers?',
      a: 'We use the latest Google Gemini 3.5 models. When you request a Resume audit or answer an Interview prompt, our Express backend securely structures the prompt, compares it against industry standards, and returns an ATS score, strengths, critical weaknesses, and perfect model answers.'
    },
    {
      q: 'Can I export my resume directly to PDF?',
      a: 'Yes! The ATS Resume Studio includes a specialized print template designed for standard single-page SDE resumes. You can fill out the form, review, and click "Export to PDF" to generate an industry-compliant resume.'
    },
    {
      q: 'Is PrepVerse completely open source?',
      a: 'Yes, PrepVerse is licensed under the Apache 2.0 license. The directory structure is fully modular, meaning contributors can easily create custom DSA sheets, company prep templates, or aptitude quizzes using pure Markdown or typescript.'
    }
  ];

  return (

    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-teal-500 selection:text-white overflow-x-hidden">

      {/* BACKGROUND DECORATIVE EFFECTS */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-fuchsia-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-emerald-600/5 rounded-full blur-[100px] pointer-events-none" />

      {/* HERO SECTION */}
      <section className="relative px-6 pt-16 md:pt-28 pb-16 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-bold text-teal-400 mb-8 animate-fade-in">
          <Sparkles className="w-3.5 h-3.5" />
          <span>The Open Source AI Placement Accelerator</span>
        </div>

        <h1 className="text-4xl md:text-7xl font-black tracking-tight leading-[1.1] mb-6 max-w-5xl mx-auto">
          Crack Placements & Internships with{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-fuchsia-400 bg-clip-text text-transparent">
            PrepVerse
          </span>
        </h1>

        <p className="text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
          The ultimate open-source engineering preparation workspace. Solve company-specific DSA sheets, optimize your ATS resume, and practice simulated technical interviews with our secure Gemini AI Coach.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <button
            onClick={onEnterApp}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-600 via-teal-600 to-fuchsia-600 hover:from-cyan-500 hover:to-fuchsia-500 text-white font-extrabold px-8 py-4 rounded-xl shadow-xl shadow-teal-900/40 transition-all transform hover:-translate-y-0.5 cursor-pointer text-base"
          >
            Enter Dashboard
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => setCurrentTab('opensource')}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 font-bold px-8 py-4 rounded-xl transition-all cursor-pointer text-base"
          >
            <FolderGit2 className="w-4 h-4 text-emerald-400" />
            Explore Open Source Code
          </button>
        </div>

        {/* METRICS ROW */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto border border-zinc-900 bg-zinc-950/60 backdrop-blur-md p-8 rounded-2xl relative">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <p className="text-3xl md:text-4xl font-black text-white tracking-tight mb-1">{stat.value}</p>
              <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CORE CAPABILITIES / BENTO FEATURES */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">
            Everything You Need, All In One Workspace
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm md:text-base">
            No fragmented tools. PrepVerse streamlines DSA coding, resume formatting, mock interviews, and career recommendations under a single intuitive control panel.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="group p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/40 hover:border-zinc-800 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-600/5 rounded-full blur-2xl group-hover:bg-teal-600/10 transition-all duration-500" />
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${feat.color} shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-[10px] bg-zinc-800 text-zinc-300 border border-zinc-700/50 font-extrabold px-2.5 py-1 rounded-full uppercase tracking-widest">
                    {feat.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">
                  {feat.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* SOCIAL PROOF / TESTIMONIALS */}
      <section className="px-6 py-20 bg-zinc-900/20 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">
              Loved by Top Tier Candidates
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-sm md:text-base">
              See how SDE aspirants secured roles at elite tech corporations using our automated prep sheets and secure AI evaluations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((test, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: test.stars }).map((_, i) => (
                      <Star key={i} className="w-4.5 h-4.5 text-orange-400 fill-orange-400" />
                    ))}
                  </div>
                  <p className="text-zinc-300 text-sm italic leading-relaxed mb-6">
                    "{test.comment}"
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src={test.avatar}
                    alt={test.name}
                    className="w-12 h-12 rounded-full border border-zinc-800 object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white">{test.name}</h4>
                    <p className="text-xs text-zinc-500 font-semibold">{test.role} • {test.college}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="px-6 py-20 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-zinc-400 text-sm">Have queries about the platform, templates, or security? We have answers.</p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-zinc-900 bg-zinc-950/40 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-900/20 transition-all cursor-pointer"
                >
                  <span className="font-bold text-white text-sm md:text-base">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-zinc-500 transition-transform ${isOpen ? 'rotate-180 text-teal-400' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-zinc-400 leading-relaxed border-t border-zinc-900/50 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="px-6 py-20 max-w-6xl mx-auto relative overflow-hidden rounded-2xl bg-gradient-to-tr from-zinc-900/60 to-zinc-950/40 border border-zinc-900 text-center mb-24">
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />
        <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Start Your Placement Journey Today</h2>
        <p className="text-zinc-400 max-w-xl mx-auto text-sm md:text-base mb-8">
          Gain access to curated sheets, simulated real-time interviews, ATS metrics, and career coach advice. Completely free and open-source.
        </p>
        <button
          onClick={onEnterApp}
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-600 via-teal-600 to-fuchsia-600 hover:from-cyan-500 hover:to-fuchsia-500 text-white font-extrabold px-8 py-4 rounded-xl shadow-xl shadow-teal-900/40 transition-all transform hover:-translate-y-0.5 cursor-pointer mx-auto text-base"
        >
          Launch Free Dashboard
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-900 bg-zinc-950/80 pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-gradient-to-tr from-cyan-600 via-teal-600 to-fuchsia-600 rounded-lg">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="font-black text-xl text-white tracking-tight">PrepVerse</span>
                <span className="text-[10px] bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded-full border border-zinc-700/50">v1.0.0-OpenSource</span>
              </div>
              <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
                The ultimate open-source engineering preparation workspace. Accelerate your career with curated DSA sheets, ATS resumes, and AI-simulated interviews.
              </p>
              <div className="flex items-center gap-4 pt-2">
                <a href="https://github.com/pari-28/PrepVerse" target="_blank" rel="noopener noreferrer" className="p-2 bg-zinc-900 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors border border-zinc-800">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-zinc-900 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors border border-zinc-800">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-zinc-900 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors border border-zinc-800">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Project</h4>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li><button onClick={() => setCurrentTab('opensource')} className="hover:text-cyan-400 transition-colors cursor-pointer">Documentation</button></li>
                <li><button onClick={() => setCurrentTab('opensource')} className="hover:text-cyan-400 transition-colors cursor-pointer">Code of Conduct</button></li>
                <li><button onClick={() => setCurrentTab('opensource')} className="hover:text-cyan-400 transition-colors cursor-pointer">License (Apache 2.0)</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Community</h4>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li><a href="https://github.com/pari-28/PrepVerse" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-2"><Github className="w-4 h-4" /> GitHub Repository</a></li>
                <li><button onClick={() => setCurrentTab('opensource')} className="hover:text-cyan-400 transition-colors flex items-center gap-2"><FolderGit2 className="w-4 h-4" /> Contributing</button></li>
                <li><button onClick={() => setCurrentTab('community')} className="hover:text-cyan-400 transition-colors flex items-center gap-2"><Users className="w-4 h-4" /> Discord Community</button></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
            <p>© 2026 PrepVerse. Built for students worldwide.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-zinc-300 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
     <BackToTop />
    </div>
  );
}
