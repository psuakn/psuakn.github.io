import React, { useState } from 'react';
import { Mail, Phone, MapPin, Building, Send, CheckCircle2, Copy, Check, ExternalLink, Clock } from 'lucide-react';
import { PROFESSOR_INFO } from '../data/professorData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    purpose: 'Reprint Request',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      return;
    }
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFESSOR_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
            Academic Communication & Collaboration
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white">
            Contact & Laboratory Inquiries
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
            For reprint requests, research collaborations, postdoctoral inquiries, or scientific correspondence, please reach out via official institutional channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Institutional Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 space-y-5 shadow-xs">
              <div>
                <h3 className="text-base font-serif font-bold text-slate-900 dark:text-white">
                  Laboratory Address
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Polymer Science Unit · School of Materials Science
                </p>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-start gap-3">
                  <Building className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>{PROFESSOR_INFO.institution}</strong>
                    <br />
                    (Autonomous Research Institute, Dept. of Science & Technology, Govt. of India)
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                  <span>{PROFESSOR_INFO.address}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                  <span className="font-mono">{PROFESSOR_INFO.telephone}</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="font-mono font-bold text-[11px] text-slate-400 uppercase w-4 text-center">FAX</span>
                  <span className="font-mono">{PROFESSOR_INFO.fax}</span>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                    <span className="font-mono font-medium text-slate-900 dark:text-white">
                      {PROFESSOR_INFO.email}
                    </span>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
                    title="Copy official email to clipboard"
                  >
                    {copiedEmail ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Visiting & Office Hours */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 space-y-3 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                <Clock className="w-4 h-4 text-indigo-600" />
                <span>Academic Office Hours</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Monday to Friday: 10:00 AM – 5:30 PM IST. Visiting scholars and seminar speakers are kindly requested to coordinate appointments in advance.
              </p>
              <div className="pt-2 text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                <a
                  href="http://iacs.res.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:underline"
                >
                  <span>Official IACS Institutional Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Correspondence & Reprint Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xs">
              <h3 className="text-lg font-serif font-bold text-slate-900 dark:text-white mb-1">
                Direct Inquiry / Reprint Request
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                Send an academic inquiry or request full-text PDF copies of Prof. Nandi's publications.
              </p>

              {submitted ? (
                <div className="p-8 text-center rounded-xl bg-indigo-50/50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-serif font-bold text-slate-900 dark:text-white">
                    Inquiry Transmitted
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Your correspondence regarding <em>"{formData.purpose}"</em> has been recorded. For urgent matters, you may also email directly to <code className="font-mono text-xs">{PROFESSOR_INFO.email}</code>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', institution: '', purpose: 'Reprint Request', message: '' });
                    }}
                    className="mt-2 px-4 py-2 text-xs font-semibold rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Your Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Dr. / Prof. / Scholar Name"
                        className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="scholar@university.edu"
                        className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Institution / University
                      </label>
                      <input
                        type="text"
                        value={formData.institution}
                        onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                        placeholder="e.g. IISc, CNRS, IIT, University..."
                        className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Purpose of Inquiry
                      </label>
                      <select
                        value={formData.purpose}
                        onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                        className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                      >
                        <option value="Reprint Request">Publication PDF / Reprint Request</option>
                        <option value="Research Collaboration">Academic / Research Collaboration</option>
                        <option value="Postdoctoral Inquiry">Doctoral / Postdoc Fellowship Inquiry</option>
                        <option value="Invited Lecture">Keynote / Conference Invitation</option>
                        <option value="Other">General Scientific Correspondence</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Message / Paper Reference <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please specify publication number/title or outline the scientific collaboration proposal..."
                      className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <p className="text-[11px] text-slate-400">
                      Replies are sent directly to your registered academic email.
                    </p>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-xs sm:text-sm transition-colors shadow-sm"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Inquiry</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
