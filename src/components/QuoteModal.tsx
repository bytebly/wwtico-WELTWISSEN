import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { trackEvent } from '../utils/analytics';
import { submitToWeb3Forms } from '../utils/submitForm';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialEquipment?: string;
  onSuccess: (refCode: string) => void;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Construction',
  initialEquipment = '',
  onSuccess
}) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: initialService,
    equipment: initialEquipment,
    location: '',
    message: '',
    botcheck: '' // honeypot — must stay empty; bots tend to fill it
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Sync initial props when modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({
        ...prev,
        service: initialService || prev.service || 'Construction',
        equipment: initialEquipment || prev.equipment || ''
      }));
      setErrors({});
      setSubmitError(null);
      trackEvent('quote_form_started');

      // Mark session as interacted so automatic popup won't disturb
      sessionStorage.setItem('weltwissen_quote_session', 'manually_opened');
      // Disable background scrolling
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, initialService, initialEquipment]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full Name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone / WhatsApp number is required.';
    } else if (!/^[+0-9\s-]{7,}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number (at least 7 digits).';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service required.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details about your project or equipment requirement.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await submitToWeb3Forms(
        {
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          equipment: formData.equipment,
          location: formData.location,
          message: formData.message,
          botcheck: formData.botcheck
        },
        `New Quote Request — ${formData.service} (${formData.name})`
      );

      // Local reference code just for display in the success UI
      const refCode = `WW-2026-${Math.floor(100 + Math.random() * 900)}`;

      trackEvent('quote_form_submitted', { refCode, service: formData.service });
      sessionStorage.setItem('weltwissen_quote_session', 'submitted');
      onClose();
      onSuccess(refCode);
    } catch (err) {
      console.error('Form submission error:', err);
      setSubmitError(
        err instanceof Error
          ? err.message
          : 'Failed to submit enquiry. Please try again or email us directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    trackEvent('quote_popup_closed');
    sessionStorage.setItem('weltwissen_quote_session', 'dismissed');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop Fade */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-[#0B211A]/80 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-2xl bg-[#FAF9F5] border border-[#C68B59] rounded-2xl shadow-2xl overflow-hidden z-10 my-auto"
          >
            {/* Modal Header */}
            <div className="bg-[#0B211A] text-white p-4 sm:p-6 border-b border-[#1E4137] flex items-start justify-between">
              <div className="flex flex-col gap-1 pr-4 sm:pr-6">
                <span className="font-mono-tag font-semibold text-[#C68B59] text-xs uppercase tracking-wider">
                  WELTWISSEN // KSA
                </span>
                <h3 className="font-serif-title text-2xl sm:text-3xl text-white leading-tight">
                  Let's Move Your Project Forward
                </h3>
                <p className="font-sans-body text-xs sm:text-sm text-[#E5DEC9] mt-1">
                  Tell us what you need and our team will get back to you.
                </p>
              </div>

              <button
                onClick={handleClose}
                className="text-[#E5DEC9] hover:text-white p-1.5 transition-colors cursor-pointer shrink-0"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Form Container */}
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 flex flex-col gap-5 max-h-[75vh] overflow-y-auto">

              {/* Honeypot field — hidden from real users, bots tend to fill it in */}
              <input
                type="checkbox"
                name="botcheck"
                checked={!!formData.botcheck}
                onChange={() => {}}
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                style={{ display: 'none' }}
                aria-hidden="true"
              />

              {submitError && (
                <div className="flex items-start gap-2 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3 font-sans-body">
                  <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>{submitError}</span>
                </div>
              )}

              {/* Row 1: Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono-tag text-xs uppercase font-semibold text-[#14211D]">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Eng. Abdullah Al-Mansoor"
                    className={`bg-white border text-sm px-4 py-3 rounded-lg text-[#14211D] focus:outline-none transition-colors ${
                      errors.name ? 'border-red-500 focus:border-red-500' : 'border-[#D1C9B7] focus:border-[#C68B59]'
                    }`}
                  />
                  {errors.name && (
                    <span className="text-red-600 text-xs flex items-center gap-1 font-sans-body">
                      <AlertCircle className="w-3 h-3" /> {errors.name}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-mono-tag text-xs uppercase font-semibold text-[#14211D]">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Saudi Aramco / Contractor Co."
                    className="bg-white border border-[#D1C9B7] focus:border-[#C68B59] text-sm px-4 py-3 rounded-lg text-[#14211D] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono-tag text-xs uppercase font-semibold text-[#14211D]">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="a.mansoor@company.com"
                    className={`bg-white border text-sm px-4 py-3 rounded-lg text-[#14211D] focus:outline-none transition-colors ${
                      errors.email ? 'border-red-500 focus:border-red-500' : 'border-[#D1C9B7] focus:border-[#C68B59]'
                    }`}
                  />
                  {errors.email && (
                    <span className="text-red-600 text-xs flex items-center gap-1 font-sans-body">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-mono-tag text-xs uppercase font-semibold text-[#14211D]">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+966 50 123 4567"
                    className={`bg-white border text-sm px-4 py-3 rounded-lg text-[#14211D] focus:outline-none transition-colors ${
                      errors.phone ? 'border-red-500 focus:border-red-500' : 'border-[#D1C9B7] focus:border-[#C68B59]'
                    }`}
                  />
                  {errors.phone && (
                    <span className="text-red-600 text-xs flex items-center gap-1 font-sans-body">
                      <AlertCircle className="w-3 h-3" /> {errors.phone}
                    </span>
                  )}
                </div>
              </div>

              {/* Row 3: Service Required & Equipment Required */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono-tag text-xs uppercase font-semibold text-[#14211D]">
                    Service Required *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="bg-white border border-[#D1C9B7] focus:border-[#C68B59] text-sm px-4 py-3 rounded-lg text-[#14211D] focus:outline-none transition-colors cursor-pointer"
                  >
                    <option value="Construction">Construction</option>
                    <option value="Equipment Rental">Equipment Rental</option>
                    <option value="Logistics">Logistics</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.service && (
                    <span className="text-red-600 text-xs flex items-center gap-1 font-sans-body">
                      <AlertCircle className="w-3 h-3" /> {errors.service}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-mono-tag text-xs uppercase font-semibold text-[#14211D]">
                    Equipment Required
                  </label>
                  <select
                    value={formData.equipment}
                    onChange={(e) => setFormData({ ...formData, equipment: e.target.value })}
                    className="bg-white border border-[#D1C9B7] focus:border-[#C68B59] text-sm px-4 py-3 rounded-lg text-[#14211D] focus:outline-none transition-colors cursor-pointer"
                  >
                    <option value="">None / General Inquiry</option>
                    <option value="Excavators">Excavators</option>
                    <option value="Dump Trucks">Dump Trucks</option>
                    <option value="Cranes">Cranes</option>
                    <option value="Bulldozers & Loaders">Bulldozers & Loaders</option>
                    <option value="Transport">Transport / Lowbed & Flatbed</option>
                    <option value="Power / Generators">Power / Generators</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Project Location */}
              <div className="flex flex-col gap-1.5">
                <label className="font-mono-tag text-xs uppercase font-semibold text-[#14211D]">
                  Project Location
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="e.g. Jubail Industrial City / NEOM / Riyadh"
                  className="bg-white border border-[#D1C9B7] focus:border-[#C68B59] text-sm px-4 py-3 rounded-lg text-[#14211D] focus:outline-none transition-colors"
                />
              </div>

              {/* Row 5: Project / Equipment Requirement Details */}
              <div className="flex flex-col gap-1.5">
                <label className="font-mono-tag text-xs uppercase font-semibold text-[#14211D]">
                  Project / Equipment Requirement *
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your scope of work, duration, required specifications or mobilization date..."
                  className={`bg-white border text-sm px-4 py-3 rounded-lg text-[#14211D] focus:outline-none transition-colors ${
                    errors.message ? 'border-red-500 focus:border-red-500' : 'border-[#D1C9B7] focus:border-[#C68B59]'
                  }`}
                />
                {errors.message && (
                  <span className="text-red-600 text-xs flex items-center gap-1 font-sans-body">
                    <AlertCircle className="w-3 h-3" /> {errors.message}
                  </span>
                )}
              </div>

              {/* Form Action Submit */}
              <div className="pt-2 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={handleClose}
                  className="w-full sm:w-auto px-6 py-3.5 border border-[#14211D] text-[#14211D] font-mono-tag font-semibold text-xs uppercase rounded-xs hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-[#C68B59] hover:bg-[#b07849] disabled:opacity-50 text-[#0B211A] font-mono-tag font-semibold text-xs uppercase py-3.5 px-8 rounded-xs outline outline-1 outline-[#C68B59] -outline-offset-1 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Request a Quote</span>
                      <CheckCircle2 className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};