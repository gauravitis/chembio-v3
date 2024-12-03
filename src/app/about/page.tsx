'use client';

import Image from 'next/image';
import { PageHeader } from '@/components/ui/page-header';
import { InteractiveMolecule } from '@/components/ui/interactive-molecule';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-custom">
      <PageHeader 
        title="About Us" 
        subtitle="Leading the way in chemical and biological solutions since 2010" 
      />

      {/* Mission & Vision */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-semibold text-gradient mb-6">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                At Chembio Lifesciences, we are dedicated to advancing scientific research by providing 
                high-quality chemicals, equipment, and solutions to research institutions worldwide.
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                Our commitment to quality, innovation, and customer service has made us a trusted partner 
                in the scientific community.
              </p>
              <div className="flex gap-4">
                <button className="btn-primary">Learn More</button>
                <button className="btn-secondary">Our Products</button>
              </div>
            </div>
            <div className="h-[500px]">
              <InteractiveMolecule />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-center text-gradient mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality',
                description: 'We maintain the highest standards in our products and services.',
                icon: '🎯'
              },
              {
                title: 'Innovation',
                description: 'Continuously improving and adapting to new technologies.',
                icon: '💡'
              },
              {
                title: 'Integrity',
                description: 'Operating with transparency and ethical business practices.',
                icon: '🤝'
              }
            ].map((value) => (
              <div key={value.title} className="service-card animate-fade-in">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-center text-gradient mb-12">Our Journey</h2>
          <div className="space-y-12">
            {[
              {
                year: '2010',
                title: 'Foundation',
                description: 'Chembio Lifesciences was established with a vision to serve the scientific community.'
              },
              {
                year: '2015',
                title: 'Expansion',
                description: 'Expanded our product line and reached 500+ research institutions.'
              },
              {
                year: '2020',
                title: 'Innovation',
                description: 'Launched digital platform and modernized operations.'
              },
              {
                year: '2024',
                title: 'Global Reach',
                description: 'Serving customers worldwide with a comprehensive product portfolio.'
              }
            ].map((milestone) => (
              <div key={milestone.year} className="flex gap-8 items-start animate-fade-in">
                <div className="text-2xl font-bold text-gradient w-24 flex-shrink-0">
                  {milestone.year}
                </div>
                <div className="service-card flex-grow">
                  <h3 className="text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                  <p className="text-gray-400">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gradient mb-6">Ready to Work Together?</h2>
          <p className="text-gray-300 mb-8">
            Join the thousands of research institutions that trust Chembio Lifesciences 
            for their chemical and equipment needs.
          </p>
          <button className="btn-primary">Contact Us Today</button>
        </div>
      </section>
    </main>
  );
}
