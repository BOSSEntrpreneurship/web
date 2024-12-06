import React, { useState, useRef } from 'react';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'react-hot-toast';

emailjs.init('ZiA6Z520v80iFl8hy');

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.sendForm(
        'service_kgcz2lt',
        'template_ohiqq59',
        formRef.current!,
        'ZiA6Z520v80iFl8hy'
      );

      setStatus('success');
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      toast.error('Failed to send message. Please try again.');
    }
  };

  const inputClasses = "w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm sm:text-base";
  const labelClasses = "block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-1";

  return (
    <section id="contact-form" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto w-full">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900 dark:text-white">
          Contact Us Directly
        </h2>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label htmlFor="name" className={labelClasses}>
                Name
              </label>
              <input
                type="text"
                name="user_name"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={inputClasses}
              />
            </div>
            <div>
              <label htmlFor="email" className={labelClasses}>
                Email
              </label>
              <input
                type="email"
                name="user_email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={inputClasses}
              />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className={labelClasses}>
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              required
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className={inputClasses}
            />
          </div>
          <div>
            <label htmlFor="message" className={labelClasses}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className={`${inputClasses} resize-none`}
            />
          </div>
          <div className="flex justify-end pt-2">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
            >
              <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
        <Toaster position="bottom-right" />
      </div>
    </section>
  );
}
