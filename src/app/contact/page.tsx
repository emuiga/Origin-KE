'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ContactPatterns } from '@/components/DecorativePatterns';
import Image from 'next/image';
import { Send, AlertCircle, Plus, Minus } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useCallback } from 'react';

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    honeypot: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');
  const [lastSubmitTime, setLastSubmitTime] = useState(0);
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(prev => (prev === index ? null : index));
  };

  const validateField = useCallback((name: string, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return undefined;
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email';
        return undefined;
      case 'phone':
        if (value && !/^[\d\s\+\-()]{7,20}$/.test(value)) return 'Please enter a valid phone number';
        return undefined;
      case 'message':
        if (!value.trim()) return 'This field is required';
        if (value.trim().length < 20) return 'Please provide at least 20 characters';
        return undefined;
      default:
        return undefined;
    }
  }, []);

  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors = {};
    const fieldsToValidate = ['name', 'email', 'phone', 'message'] as const;

    fieldsToValidate.forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData, validateField]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  }, [touched, validateField]);

  const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  }, [validateField]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) return;

    const now = Date.now();
    if (now - lastSubmitTime < 30000) {
      setSubmitState('error');
      setSubmitMessage('Please wait a moment before submitting again.');
      return;
    }

    setTouched({ name: true, email: true, phone: true, message: true });

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitState('idle');
    setSubmitMessage('');

    try {
      const { honeypot, ...submitData } = formData;
      const response = await fetch('/api/send-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submitData),
      });

      if (response.ok) {
        setSubmitState('success');
        setSubmitMessage('Thank you! We\u2019ll get back to you within 24 hours.');
        setLastSubmitTime(now);
        setFormData({
          name: '', email: '', company: '', phone: '',
          message: '', honeypot: '',
        });
        setTouched({});
        setErrors({});
      } else {
        throw new Error('Failed to send message');
      }
    } catch {
      setSubmitState('error');
      setSubmitMessage('Something went wrong. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (field: keyof FormErrors) =>
    `w-full px-4 py-3 bg-white/60 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all ${
      errors[field] && touched[field as string]
        ? 'border-red-400 focus:ring-red-400'
        : 'border-slate-200 focus:ring-blue-500'
    }`;

  return (
    <div className="min-h-screen bg-white flex flex-col relative overflow-hidden">
      <ContactPatterns />
      <Header />

      <main className="flex-1 px-4 sm:px-8 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto">
          {/* Hero */}
          <motion.div
            className="text-center mb-16 sm:mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[20px] leading-[28px] font-medium text-blue-700 mb-4">
              BOOK A CALL
            </p>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Let&apos;s talk about what you&apos;re building
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Tell us what&apos;s slowing your business down. We&apos;ll come back with a plan.
            </p>
          </motion.div>

          {/* Calendar + Form Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20 sm:mb-28">
            {/* Calendly Embed */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src="/logo.png"
                  alt="Origin"
                  width={32}
                  height={32}
                  className="rounded"
                />
                <h2 className="text-2xl font-bold text-slate-900">
                  Schedule a Call
                </h2>
              </div>
              <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white">
                <iframe
                  src="https://calendly.com/originhqtechnologies/30min?hide_gdpr_banner=1&background_color=ffffff&text_color=0f172a&primary_color=2563eb"
                  width="100%"
                  height="660"
                  frameBorder="0"
                  title="Schedule a call with Origin"
                  className="w-full"
                />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Or send us a message
              </h2>

              {submitState === 'success' ? (
                <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-600 mb-6">{submitMessage}</p>
                  <button
                    onClick={() => setSubmitState('idle')}
                    className="text-blue-600 hover:text-blue-700 font-medium underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Honeypot */}
                  <div className="absolute -left-[9999px]" aria-hidden="true">
                    <input
                      type="text"
                      name="honeypot"
                      value={formData.honeypot}
                      onChange={handleInputChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={inputClass('name')}
                        placeholder="Your full name"
                      />
                      {errors.name && touched.name && (
                        <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                          <AlertCircle size={14} /> {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={inputClass('email')}
                        placeholder="your@email.com"
                      />
                      {errors.email && touched.email && (
                        <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                          <AlertCircle size={14} /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/60 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={inputClass('phone')}
                        placeholder="+254 700 000 000"
                      />
                      {errors.phone && touched.phone && (
                        <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                          <AlertCircle size={14} /> {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">How can we help? *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      rows={5}
                      className={`${inputClass('message')} resize-none`}
                      placeholder="Tell us what you have in mind: a project idea, a problem to solve, or anything else..."
                    />
                    {errors.message && touched.message && (
                      <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle size={14} /> {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 px-6 rounded-xl font-bold shadow-md hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </button>

                  {submitState === 'error' && submitMessage && (
                    <div className="text-center p-4 rounded-lg bg-red-50 text-red-700 border border-red-200">
                      {submitMessage}
                    </div>
                  )}
                </form>
              )}
            </motion.div>
          </div>

          {/* Accordion FAQ Section */}
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {[
              {
                question: 'How do I book a call with Origin?',
                content: (
                  <ol className="space-y-4">
                    {[
                      'Using the calendar above, pick a date and time that works for you.',
                      'Enter your details and hit \u201cConfirm\u201d.',
                      'You\u2019ll receive an email confirming the time and date. Check your spam folder if you don\u2019t see it in your inbox.',
                      'Connect to the video call using the Google Meet link in your meeting invite.',
                    ].map((text, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="shrink-0 w-7 h-7 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center">
                          {i + 1}
                        </span>
                        <p className="text-slate-600 leading-relaxed pt-0.5">{text}</p>
                      </li>
                    ))}
                  </ol>
                ),
              },
              {
                question: 'What will we cover in the call?',
                content: (
                  <div className="space-y-5">
                    {[
                      {
                        title: 'Your challenges',
                        description:
                          'We\u2019d love to understand your biggest pain points. We\u2019ll ask a few questions to get a clear picture of where you are and where you want to be.',
                      },
                      {
                        title: 'Tools & platforms you\u2019ve used',
                        description:
                          'It helps us to know what technologies and platforms you\u2019ve worked with before, and what you liked or didn\u2019t like about them.',
                      },
                      {
                        title: 'Your requirements',
                        description:
                          'We\u2019ll go into depth on what you need \u2014 scope, timeline, budget, and any specific technical or design constraints.',
                      },
                      {
                        title: 'Your questions',
                        description:
                          'We\u2019ll answer anything you want to know about how Origin works.',
                      },
                    ].map((item) => (
                      <div key={item.title}>
                        <h4 className="text-base font-semibold text-slate-900 mb-1">
                          {item.title}
                        </h4>
                        <p className="text-slate-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                ),
              },
              {
                question: 'How can I get help or ask questions before the call?',
                content: (
                  <div>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      If you have any questions beforehand or need technical assistance, reach out to us directly.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 text-sm">
                      <a
                        href="mailto:info@origin.co.ke"
                        className="text-blue-600 hover:text-blue-700 font-medium underline"
                      >
                        info@origin.co.ke
                      </a>
                      <span className="hidden sm:inline text-slate-300">|</span>
                      <a
                        href="https://wa.me/254768519115"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 font-medium underline"
                      >
                        +254 768 519 115
                      </a>
                    </div>
                  </div>
                ),
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`border-b border-slate-200 ${index === 0 ? 'border-t' : ''}`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between py-5 text-left group"
                >
                  <span className="text-lg font-semibold text-slate-900 group-hover:text-blue-700 transition-colors pr-4">
                    {item.question}
                  </span>
                  <span className="shrink-0 text-slate-400 group-hover:text-blue-700 transition-colors">
                    {openAccordion === index ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>
                {openAccordion === index && (
                  <div className="pb-6">
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
