import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { COMPANY_INFO, FACILITIES } from '../data/websiteData';
import { ArrowRight, CheckCircle2, AlertCircle, MapPin } from 'lucide-react';
import { submitToWeb3Forms } from '../utils/submitForm';

interface ContactPageProps {
  onSubmitSuccess?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onSubmitSuccess }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    service: 'Construction | Equipment Rental | Logistics | General Enquiry',
    details: '',
    botcheck: '', // honeypot — must stay empty; bots tend to fill it
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await submitToWeb3Forms(
        {
          name: formData.fullName,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.details,
          botcheck: formData.botcheck,
        },
        `New Contact Enquiry — ${formData.service} (${formData.fullName})`
      );

      setSubmitted(true);
      onSubmitSuccess?.();
    } catch (err) {
      console.error('Enquiry submission failed:', err);
      setSubmitError(
        err instanceof Error
          ? err.message
          : 'Something went wrong sending your enquiry. Please try again or email us directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToEnquiry = () => {
    document.getElementById('enquiry-form-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToLocations = () => {
    document.getElementById('facilities-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col items-start w-full min-h-screen bg-[#FAF9F5] text-[#14211D]">

      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center gap-6 sm:gap-10 lg:gap-12 px-5 sm:px-10 lg:px-20 py-10 sm:py-16 lg:py-20 w-full bg-[#0B211A] sm:bg-[#071F17] border-b border-[#1E4137] text-white">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col lg:flex-row items-center gap-6 sm:gap-10 lg:gap-12">

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-6 sm:gap-8 w-full lg:w-1/2 text-[#FAF9F5]"
          >
            {/* Breadcrumb */}
            <div className="font-['Geist_Mono',monospace] text-[10px] sm:text-xs uppercase tracking-wider">
              <span className="text-[#E5DEC9] opacity-60 sm:text-[#C6A15B] sm:opacity-100">Home</span>
              <span className="mx-2 text-[#C6A15B]">//</span>
              <span className="text-[#FAF9F5] sm:text-[#C6A15B]">Contact</span>
            </div>

            {/* Title */}
            <h1 className="font-['DM_Serif_Text',serif] text-[36px] sm:text-[48px] lg:text-[62px] leading-[110%] text-[#FAF9F5] sm:text-white">
              Let's build together.
            </h1>

            {/* Subtitle */}
            <p className="font-['Geist',sans-serif] text-[15px] sm:text-lg text-[#E5DEC9] max-w-[580px]">
              Tell us about your project and our team will get back to you.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
              <button
  onClick={scrollToEnquiry}
  className="group flex items-center justify-center gap-3 px-6 sm:px-7 py-3.5 
             bg-[#C6A15B] sm:bg-[#E5DEC9] text-[#0B211A] font-['Geist_Mono',monospace] 
             font-semibold text-xs uppercase rounded-none sm:rounded tracking-wider 
             transition-colors duration-300 w-full sm:w-auto 
             hover:bg-[#C6A15B] hover:border-[#C6A15B]"
>
  <span
    className="transition-colors duration-300 group-hover:text-[#06251F]"
  >
    Start an Enquiry
  </span>
  <ArrowRight
    className="h-4 w-4 shrink-0 transition-colors duration-300 group-hover:text-[#06251F]"
    strokeWidth={2}
  />
</button>

              <button
  onClick={scrollToLocations}
  className="group flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 
             border border-[#E5DEC9] sm:border-white/60 text-[#E5DEC9] 
             font-['Geist_Mono',monospace] font-semibold text-xs uppercase 
             rounded-none sm:rounded tracking-wider transition-colors duration-300 
             w-full sm:w-auto hover:bg-[#C6A15B] hover:border-[#C6A15B]"
>
  <span
    className="transition-colors duration-300 group-hover:text-[#06251F]"
  >
    View Locations
  </span>
</button>

            </div>

            {/* Footer Bar */}
            <div className="hidden sm:block pt-4 border-t border-[#1E4137] font-['Geist_Mono',monospace] text-[10px] sm:text-xs text-[#E5DEC9] opacity-60 tracking-wider">
              CONSTRUCTION · EQUIPMENT RENTAL · PROJECT LOGISTICS
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="w-full lg:w-1/2 h-[200px] sm:h-[320px] lg:h-[400px] rounded-lg overflow-hidden bg-[#123329] border border-[#1D4137] shadow-xl"
          >
            <img
              src="/weltwissen/contact_hero.png"
              alt="WELTWISSEN Industrial Site"
              className="w-full h-full object-cover"
            />
          </motion.div>

        </div>
      </section>

      {/* Team Section */}
      <section className="flex flex-col gap-8 sm:gap-10 px-5 sm:px-10 lg:px-20 py-14 sm:py-16 lg:py-24 w-full bg-[#FAF9F5] border-b border-[#D1C9B7]">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-8 sm:gap-10">

          {/* Section Header */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center gap-2 sm:gap-3">
              <div className="hidden sm:block w-2 h-2 bg-[#C6A15B] rounded-full" />
              <div className="block sm:hidden w-3 h-px bg-[#C6A15B]" />
              <span className="font-['Geist_Mono',monospace] font-bold text-xs uppercase tracking-wider text-[#C6A15B]">
                <span className="hidden sm:inline">Contact</span>
                <span className="inline sm:hidden">01 // Contact Info</span>
              </span>
            </div>
            <h2 className="hidden sm:block font-normal font-['DM_Serif_Text',serif] text-[28px] sm:text-[36px] lg:text-[44px] text-[#14211D]">
              Talk to Our Team
            </h2>
            <div className="hidden sm:block w-20 sm:w-28 border-t-2 border-[#C6A15B]" />
          </div>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">

            {/* Email Card */}
            <div className="flex flex-col gap-3 p-5 sm:p-8 bg-white border border-[#C0913F]/20 shadow-sm rounded-xl">
              <div className="flex flex-row items-center gap-3 text-xs font-['Geist_Mono',monospace] text-[#C6A15B] tracking-wider">
                <div className="w-4 h-[1px] bg-[#C6A15B]" />
                EMAIL
              </div>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="font-['Geist',sans-serif] font-semibold text-base sm:text-lg text-[#14211D] hover:text-[#C6A15B] transition-colors break-words"
              >
                {COMPANY_INFO.email}
              </a>
            </div>

            {/* Phone Card */}
            <div className="flex flex-col gap-3 p-5 sm:p-8 bg-white border border-[#C0913F]/20 shadow-sm rounded-xl">
              <div className="flex flex-row items-center gap-3 text-xs font-['Geist_Mono',monospace] text-[#C6A15B] tracking-wider">
                <div className="w-4 h-[1px] bg-[#C6A15B]" />
                PHONE
              </div>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="font-['Geist_Mono',monospace] text-sm sm:text-base text-[#14211D] hover:text-[#C6A15B] transition-colors"
              >
                {COMPANY_INFO.phone}
              </a>
            </div>

            {/* Hours Card */}
            <div className="flex flex-col gap-3 p-5 sm:p-8 bg-white border border-[#C0913F]/20 shadow-sm rounded-xl">
              <div className="flex flex-row items-center gap-3 text-xs font-['Geist_Mono',monospace] text-[#C6A15B] tracking-wider">
                <div className="w-4 h-[1px] bg-[#C6A15B]" />
                HOURS
              </div>
              <span className="font-['Geist',sans-serif] font-semibold text-base sm:text-lg text-[#14211D]">
                8:00 AM - 5:00 PM (Sun-Thu)
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* Enquiry Section */}
      <section
        id="enquiry-form-section"
        className="flex flex-col gap-8 sm:gap-10 px-5 sm:px-10 lg:px-20 py-14 sm:py-16 lg:py-24 w-full bg-[#FAF9F5] border-b border-[#D1C9B7]"
      >
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-8 sm:gap-10">

          {/* Section Header */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center gap-2 sm:gap-3">
              <div className="hidden sm:block w-2 h-2 bg-[#C6A15B] rounded-full" />
              <div className="block sm:hidden w-3 h-px bg-[#C6A15B]" />
              <span className="font-['Geist_Mono',monospace] font-bold text-xs uppercase tracking-wider text-[#C6A15B]">
                <span className="hidden sm:inline">Project Enquiry</span>
                <span className="inline sm:hidden">02 // Project Enquiry</span>
              </span>
            </div>
            <h2 className="font-['DM_Serif_Text',serif] font-normal text-[28px] sm:text-[36px] lg:text-[44px] text-[#14211D]">
              Tell us what you're working on.
            </h2>
            <div className="w-20 sm:w-28 border-t-2 border-[#C6A15B]" />
          </div>

          {/* Form Container */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="w-full max-w-[1280px]"
          >
            {submitted ? (
              <div className="flex min-h-[300px] sm:min-h-[330px] flex-col items-center justify-center rounded-xl border border-[#D6CFBF] bg-white p-6 sm:p-8 text-center shadow-sm">
                <span className="grid h-14 w-14 sm:h-16 sm:w-16 place-items-center rounded-full bg-[#D3A238]/20 text-[#B77E28]">
                  <CheckCircle2 className="h-8 w-8 sm:h-9 sm:w-9" />
                </span>
                <h3 className="mt-6 font-['DM_Serif_Text',serif] text-[24px] sm:text-[32px] text-[#0B211A]">
                  Enquiry Submitted Successfully
                </h3>
                <p className="mt-4 max-w-lg font-['Geist',sans-serif] text-sm sm:text-base leading-relaxed text-[#4A5E59]">
                  Thank you for reaching out. A WELTWISSEN project specialist will review your requirements and respond within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 font-['Geist_Mono',monospace] text-xs font-semibold uppercase tracking-wider text-[#B77E28] hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-6 w-full">

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
                  <div className="flex items-start gap-2 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3 font-['Geist',sans-serif]">
                    <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                    <span>{submitError}</span>
                  </div>
                )}

                {/* Row 1: Name & Company */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <FormField label="Full Name">
                    <input
                      required
                      type="text"
                      placeholder="Name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={inputClassName}
                    />
                  </FormField>
                  <FormField label="Company Name">
                    <input
                      required
                      type="text"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className={inputClassName}
                    />
                  </FormField>
                </div>

                {/* Row 2: Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <FormField label="Email Address">
                    <input
                      required
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={inputClassName}
                    />
                  </FormField>
                  <FormField label="Phone Number">
                    <input
                      required
                      type="tel"
                      placeholder="+966"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={inputClassName}
                    />
                  </FormField>
                </div>

                {/* Row 3: Project Type */}
                <FormField label="Project Type">
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className={`${inputClassName} cursor-pointer`}
                  >
                    <option value="Construction | Equipment Rental | Logistics | General Enquiry">
                      Construction | Equipment Rental | Logistics | General Enquiry
                    </option>
                    <option value="Industrial Construction">Industrial Construction</option>
                    <option value="Equipment Rental">Equipment Rental</option>
                    <option value="Project Logistics">Project Logistics</option>
                  </select>
                </FormField>

                {/* Row 4: Requirements */}
                <FormField label="Project Requirements / Message">
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe your requirements..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className={`${inputClassName} resize-none h-[100px] sm:h-40 py-3`}
                  />
                </FormField>

                {/* Submit Button */}
                <button
  type="submit"
  disabled={isSubmitting}
  className="group w-full py-3.5 sm:py-4 bg-[#0E2620] text-white 
             font-['Geist_Mono',monospace] font-bold text-xs uppercase 
             tracking-widest border border-[#C0913F]/40 rounded-lg shadow-md 
             transition-colors duration-300 disabled:cursor-wait 
             hover:bg-[#C6A15B] hover:border-[#C6A15B]"
>
  <span className="transition-colors duration-300 group-hover:text-[#06251F]">
    {isSubmitting ? 'Sending...' : 'SEND ENQUIRY'}
  </span>
</button>

              </form>
            )}
          </motion.div>

        </div>
      </section>

      {/* Facilities Section */}
      <section
        id="facilities-section"
        className="flex flex-col gap-8 sm:gap-10 px-5 sm:px-10 lg:px-20 py-14 sm:py-16 lg:py-24 w-full bg-[#0B211A] text-white"
      >
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-8 sm:gap-10">

          {/* Section Header */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center gap-2 sm:gap-3">
              <div className="hidden sm:block w-2 h-2 bg-[#C6A15B] rounded-full" />
              <div className="block sm:hidden w-3 h-px bg-[#C6A15B]" />
              <span className="font-['Geist_Mono',monospace] font-bold text-xs uppercase tracking-wider text-[#C6A15B]">
                <span className="hidden sm:inline">Our Facilities</span>
                <span className="inline sm:hidden">03 // Our Facilities</span>
              </span>
            </div>
            <h2 className="font-['DM_Serif_Text',serif] text-[28px] sm:text-[36px] lg:text-[44px]">
              <span className="hidden sm:inline">Positioned to support the project.</span>
              <span className="inline sm:hidden">Positioned to support.</span>
            </h2>
            <div className="w-20 sm:w-28 border-t-2 border-[#C6A15B]" />
          </div>

          {/* Facility Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {FACILITIES.map((facility) => (
              <div
                key={`${facility.city}-${facility.badge}`}
                className="flex flex-col gap-2 p-5 sm:p-8 bg-[#0E2620] border border-[#C0913F]/20 shadow-md rounded-xl transition-all hover:border-[#C0913F]/50"
              >
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#C6A15B] rounded-full" />
                  <h3 className="font-['DM_Serif_Text',serif] text-xl sm:text-2xl text-white">
                    {facility.city}
                  </h3>
                </div>
                <p className="font-['Geist',sans-serif] text-sm text-[#F5EFE2] opacity-80 leading-relaxed mt-1">
                  {facility.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Map / HQ Location Section */}
      <section className="flex flex-col gap-5 sm:gap-6 px-5 sm:px-10 lg:px-20 py-10 sm:py-16 lg:py-20 w-full bg-[#FAF9F5]">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-4">

          {/* Map Overlay Card Box */}
          <div className="relative h-[260px] sm:h-[360px] lg:h-[440px] overflow-hidden rounded-xl bg-[#0B211A] shadow-md border border-[#D1C9B7]">
            {/* Aerial Site / Map Background */}
            <img
              src="/weltwissen/map_contact.png"
              alt="Aerial view of WELTWISSEN headquarters and industrial port"
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* Satellite Grid Pattern Overlay */}
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.15]"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(0deg, #C6A15B 0px, #C6A15B 1px, transparent 1px, transparent 68px), repeating-linear-gradient(90deg, #C6A15B 0px, #C6A15B 1px, transparent 1px, transparent 68px)',
              }}
            />
            <div className="absolute inset-0 bg-[#092D23]/35" />

            {/* HQ Pin Badge */}
            <div className="absolute left-1/2 top-1/2 w-[85%] max-w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-[#0E2620] border border-[#C0913F]/40 p-4 sm:p-6 text-center text-white shadow-2xl">
              <span className="mx-auto grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-full bg-[#C6A15B] text-[#0B211A]">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
              </span>
              <h3 className="mt-4 font-['DM_Serif_Text',serif] text-xl sm:text-2xl">WELTWISSEN HQ</h3>
              <p className="mt-2 font-['Geist',sans-serif] text-xs leading-relaxed text-[#F0EEE5] opacity-90">
                {COMPANY_INFO.address}
              </p>
            </div>
          </div>

          {/* Map Footer Label */}
          <p className="text-center font-['Geist_Mono',monospace] text-[11px] sm:text-xs text-[#4A5E59] tracking-tight px-2">
            {COMPANY_INFO.registeredOfficeAddress}
          </p>

        </div>
      </section>

    </div>
  );
};

// Input Classes matching reference styling
const inputClassName =
  'w-full px-4 py-3 bg-white border border-[#C0913F]/20 rounded-lg font-[\'Geist\',sans-serif] text-sm text-[#14211D] outline-none transition-colors placeholder:text-[#8C9894] focus:border-[#C6A15B]';

interface FormFieldProps {
  label: string;
  children: React.ReactNode;
}

const FormField: React.FC<FormFieldProps> = ({ label, children }) => (
  <label className="flex flex-col gap-2 w-full">
    <span className="font-['Geist_Mono',monospace] text-xs font-semibold text-[#4A5E59] uppercase tracking-wider">
      {label}
    </span>
    {children}
  </label>
);