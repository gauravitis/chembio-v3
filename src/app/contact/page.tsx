'use client';

import { useState } from 'react';
import { PageHeader } from '@/components/ui/page-header';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    type: 'general'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="min-h-screen bg-gradient-custom">
      <PageHeader 
        title="Contact Us" 
        subtitle="Get in touch with our team for any inquiries or support" 
      />

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="service-card p-8 animate-fade-in">
              <h2 className="text-2xl font-semibold text-gradient mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-accent-blue"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-accent-blue"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-white mb-2">Company/Institution</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-accent-blue"
                  />
                </div>
                <div>
                  <label htmlFor="type" className="block text-white mb-2">Inquiry Type</label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-accent-blue"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="sales">Sales</option>
                    <option value="support">Technical Support</option>
                    <option value="bulk">Bulk Orders</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-white mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-accent-blue"
                    required
                  />
                </div>
                <button type="submit" className="w-full btn-primary">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="service-card p-6 animate-fade-in">
                <h3 className="text-xl font-semibold text-white mb-4">Office Location</h3>
                <p className="text-gray-400">
                  123 Science Park Drive<br />
                  Silicon Valley, CA 94025<br />
                  United States
                </p>
              </div>

              <div className="service-card p-6 animate-fade-in">
                <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <p className="text-gray-400">
                    <strong className="text-white">Email:</strong><br />
                    info@chembiolife.com
                  </p>
                  <p className="text-gray-400">
                    <strong className="text-white">Phone:</strong><br />
                    +1 (555) 123-4567
                  </p>
                  <p className="text-gray-400">
                    <strong className="text-white">Support Hours:</strong><br />
                    Monday - Friday: 9:00 AM - 6:00 PM PST
                  </p>
                </div>
              </div>

              <div className="service-card p-6 animate-fade-in">
                <h3 className="text-xl font-semibold text-white mb-4">Connect With Us</h3>
                <div className="flex gap-4">
                  {['LinkedIn', 'Twitter', 'Facebook'].map((social) => (
                    <button
                      key={social}
                      className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                    >
                      {social}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
