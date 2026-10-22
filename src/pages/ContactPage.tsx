import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Mail,
  Send,
  CheckCircle,
  Copy,
  ExternalLink,
  Info,
  Clock,
  MapPin,
  Check,
  AlertCircle,
} from 'lucide-react';
import { profileConfig } from '../config/profileConfig';
import { Badge } from '../components/common/Badge';
import { GithubIcon, LinkedinIcon } from '../components/common/SocialIcons';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialService = searchParams.get('service');

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: initialService ? `Inquiry regarding ${initialService}` : '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({
        ...prev,
        subject: `Inquiry regarding ${initialService}`,
      }));
    }
  }, [initialService]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please specify a subject.';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please write your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate brief client-side validation lifecycle
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
    }, 600);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileConfig.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyCompiledMessage = () => {
    if (!submittedData) return;
    const compiled = `From: ${submittedData.name} (${submittedData.email})\nSubject: ${submittedData.subject}\n\n${submittedData.message}`;
    navigator.clipboard.writeText(compiled);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 2000);
  };

  const generateMailtoUrl = (data: FormData) => {
    const subject = encodeURIComponent(data.subject);
    const body = encodeURIComponent(
      `Hi Eleni,\n\n${data.message}\n\nBest regards,\n${data.name}\n${data.email}`
    );
    return `mailto:${profileConfig.contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-16">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <Badge variant="emerald">Get In Touch</Badge>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-graphite-100 tracking-tight leading-tight">
          Let's discuss opportunities, collaborations, or projects.
        </h1>
        <p className="text-base sm:text-lg text-graphite-300 leading-relaxed font-normal">
          Whether you are recruiting for a full-stack engineering role, exploring an internship transition, or looking for dependable freelance development, I would be delighted to connect.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* =========================================================================
            CONTACT FORM (Client-side validated with honest demo fallback)
            ========================================================================= */}
        <div className="lg:col-span-7 bg-graphite-850 border border-graphite-750 rounded-2xl p-6 sm:p-8 shadow-card">
          {!submittedData ? (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="border-b border-graphite-800 pb-4">
                <h3 className="text-xl font-bold text-graphite-100">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-graphite-400 mt-1">
                  Fill in your details below to compose an inquiry.
                </p>
              </div>

              {/* Name Field */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-mono uppercase tracking-wider text-graphite-300 font-semibold"
                >
                  Your Name <span className="text-emerald-400">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: undefined });
                  }}
                  placeholder="e.g. Alex Morgan"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className={`w-full px-4 py-3 rounded-lg bg-graphite-950 text-graphite-100 text-sm border transition-colors focus:outline-none ${
                    errors.name
                      ? 'border-red-500/80 focus:border-red-500'
                      : 'border-graphite-750 focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/30'
                  }`}
                />
                {errors.name && (
                  <p id="name-error" className="text-xs text-red-400 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-mono uppercase tracking-wider text-graphite-300 font-semibold"
                >
                  Your Email Address <span className="text-emerald-400">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: undefined });
                  }}
                  placeholder="alex@company.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className={`w-full px-4 py-3 rounded-lg bg-graphite-950 text-graphite-100 text-sm border transition-colors focus:outline-none ${
                    errors.email
                      ? 'border-red-500/80 focus:border-red-500'
                      : 'border-graphite-750 focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/30'
                  }`}
                />
                {errors.email && (
                  <p id="email-error" className="text-xs text-red-400 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* Subject Field */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-mono uppercase tracking-wider text-graphite-300 font-semibold"
                >
                  Subject <span className="text-emerald-400">*</span>
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => {
                    setFormData({ ...formData, subject: e.target.value });
                    if (errors.subject) setErrors({ ...errors, subject: undefined });
                  }}
                  placeholder="Job Opportunity / Project Inquiry"
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? 'subject-error' : undefined}
                  className={`w-full px-4 py-3 rounded-lg bg-graphite-950 text-graphite-100 text-sm border transition-colors focus:outline-none ${
                    errors.subject
                      ? 'border-red-500/80 focus:border-red-500'
                      : 'border-graphite-750 focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/30'
                  }`}
                />
                {errors.subject && (
                  <p id="subject-error" className="text-xs text-red-400 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.subject}</span>
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-mono uppercase tracking-wider text-graphite-300 font-semibold"
                >
                  Message <span className="text-emerald-400">*</span>
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: undefined });
                  }}
                  placeholder="Tell me about the engineering role, project scope, or ideas you'd like to collaborate on..."
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className={`w-full px-4 py-3 rounded-lg bg-graphite-950 text-graphite-100 text-sm border transition-colors focus:outline-none resize-y ${
                    errors.message
                      ? 'border-red-500/80 focus:border-red-500'
                      : 'border-graphite-750 focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/30'
                  }`}
                />
                {errors.message && (
                  <p id="message-error" className="text-xs text-red-400 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Notice regarding demonstration mode */}
              <div className="p-3.5 rounded-lg bg-graphite-900 border border-graphite-750 text-xs text-graphite-400 font-mono flex items-start gap-2.5">
                <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  Notice: This form validates client-side and compiles your message. Upon submission, you will be given an instant 1-click option to send via your email client or copy the message.
                </span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-graphite-950 font-semibold text-sm transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer shadow-sm hover:shadow-emerald-sm"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-graphite-950 border-t-transparent rounded-full animate-spin" />
                    <span>Processing Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit & Prepare Email</span>
                  </>
                )}
              </button>
            </form>
          ) : (
            /* =========================================================================
               HONEST POST-SUBMISSION CONFIRMATION
               ========================================================================= */
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="p-4 rounded-xl bg-graphite-900 border border-emerald-500/30 flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-bold text-graphite-100">
                    Message Prepared Successfully!
                  </h3>
                  <p className="text-xs text-graphite-300 mt-1 leading-relaxed">
                    Client-side validation passed. Because this portfolio is currently hosted as a static frontend without a backend server or third-party mailing service, the message was not stored in an external database.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-graphite-950 border border-graphite-800 space-y-3 font-mono text-xs">
                <div className="text-graphite-500 uppercase tracking-wider font-semibold border-b border-graphite-800 pb-2">
                  Compiled Message Preview
                </div>
                <div className="space-y-1 text-graphite-300">
                  <p><span className="text-graphite-500">From:</span> {submittedData.name} ({submittedData.email})</p>
                  <p><span className="text-graphite-500">Subject:</span> {submittedData.subject}</p>
                </div>
                <div className="p-3 bg-graphite-900 rounded border border-graphite-800 text-graphite-200 whitespace-pre-wrap leading-relaxed">
                  {submittedData.message}
                </div>
              </div>

              {/* Functional Actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={generateMailtoUrl(submittedData)}
                  className="flex-1 py-3 px-4 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-graphite-950 font-semibold text-xs sm:text-sm text-center flex items-center justify-center gap-2 transition-all shadow-sm hover:shadow-emerald-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Open in Your Email Client</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyCompiledMessage}
                  className="py-3 px-4 rounded-lg bg-graphite-850 hover:bg-graphite-800 text-graphite-100 border border-graphite-750 hover:border-emerald-500/40 text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  {copiedMessage ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-300">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-graphite-400" />
                      <span>Copy Full Text</span>
                    </>
                  )}
                </button>
              </div>

              <div className="pt-4 border-t border-graphite-800 flex justify-end">
                <button
                  type="button"
                  onClick={() => {
                    setSubmittedData(null);
                    setFormData({
                      name: '',
                      email: '',
                      subject: '',
                      message: '',
                    });
                  }}
                  className="text-xs font-mono text-emerald-400 hover:text-emerald-300 hover:underline cursor-pointer"
                >
                  ← Compose Another Message
                </button>
              </div>
            </div>
          )}
        </div>

        {/* =========================================================================
            DIRECT CONTACT INFO & PROFILE LINKS
            ========================================================================= */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-graphite-850 border border-graphite-750 space-y-6">
            <h3 className="text-xl font-bold text-graphite-100">
              Direct Contact Details
            </h3>
            <p className="text-sm text-graphite-400 leading-relaxed">
              Prefer to connect directly? Feel free to reach out via email or through professional social platforms.
            </p>

            <div className="space-y-4">
              {/* Email */}
              <div className="p-4 rounded-xl bg-graphite-900 border border-graphite-750/80 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-9 h-9 rounded-lg bg-graphite-800 flex items-center justify-center text-emerald-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] font-mono text-graphite-500 uppercase block">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${profileConfig.contact.email}`}
                      className="text-xs sm:text-sm font-semibold text-graphite-200 hover:text-emerald-300 truncate block"
                    >
                      {profileConfig.contact.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  title="Copy email address"
                  className="p-2 rounded-lg bg-graphite-800 text-graphite-400 hover:text-white hover:bg-graphite-750 hover:border-emerald-500/40 border border-transparent transition-colors shrink-0 cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn */}
              <a
                href={profileConfig.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-graphite-900 border border-graphite-750/80 flex items-center justify-between gap-3 hover:border-emerald-500/40 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-graphite-800 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-105 transition-transform">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-graphite-500 uppercase block">
                      LinkedIn Profile
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-graphite-200 group-hover:text-emerald-300 transition-colors">
                      Connect on LinkedIn
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-graphite-500 group-hover:text-emerald-400 transition-colors" />
              </a>

              {/* GitHub */}
              <a
                href={profileConfig.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-graphite-900 border border-graphite-750/80 flex items-center justify-between gap-3 hover:border-emerald-500/40 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-graphite-800 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-105 transition-transform">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-graphite-500 uppercase block">
                      GitHub Repositories
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-graphite-200 group-hover:text-emerald-300 transition-colors">
                      Browse Code & Activity
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-graphite-500 group-hover:text-emerald-400 transition-colors" />
              </a>
            </div>

            {/* Availability details */}
            <div className="pt-4 border-t border-graphite-800 space-y-3 text-xs font-mono text-graphite-400">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>Response Time: Usually within 24–48 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>{profileConfig.contact.locationNote}</span>
              </div>
            </div>
          </div>

          {/* Central config hint */}
          <div className="p-4 rounded-xl bg-graphite-850/60 border border-graphite-800 text-xs text-graphite-500 font-mono leading-relaxed">
            [Editable configuration: You can update your email, GitHub, and LinkedIn links in <code className="text-graphite-300">src/config/profileConfig.ts</code>]
          </div>
        </div>
      </div>
    </div>
  );
};
