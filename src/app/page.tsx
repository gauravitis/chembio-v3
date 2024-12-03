'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-custom">
      {/* Hero Section */}
      <section className="hero-section min-h-screen">
        <div className="hero-grid min-h-screen pt-32 pb-16 px-4">
          <div className="hero-glow" />
          <div className="max-w-7xl mx-auto text-center hero-content">
            <div className="animate-fade-in">
              <h1 className="text-7xl font-bold text-white mb-6 animate-float">
                Chembio Lifesciences
              </h1>
              <h2 className="text-5xl font-semibold text-gradient mb-8">
                Empowering Research
              </h2>
              <p className="text-gray-300 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                Your Trusted Vendor for High-Quality Chemicals and Lab Equipment
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8">
                <Link href="/products" className="btn-primary">
                  Explore Products
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Get Quotes
                </Link>
              </div>
            </div>
            
            {/* Stats */}
            <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-4xl font-bold text-gradient mb-2">500+</div>
                <div className="text-gray-400">Products</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-4xl font-bold text-gradient mb-2">50+</div>
                <div className="text-gray-400">Brands</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-4xl font-bold text-gradient mb-2">1000+</div>
                <div className="text-gray-400">Customers</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-4xl font-bold text-gradient mb-2">24/7</div>
                <div className="text-gray-400">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Brands */}
      <section className="py-16 px-4 animate-fade-in">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-semibold text-center text-gradient mb-8">
            Trusted Brands
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {['Merck', 'SRL', 'Sigma Aldrich', 'Honeywell', 'Borosil', 'Thermo Fischer'].map((brand) => (
              <div key={brand} 
                className="bg-white/5 backdrop-blur-sm p-4 rounded-lg text-center text-gray-300 
                         hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
                {brand}
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 mt-4">
            We partner with leading brands to provide you with the highest quality products
          </p>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 px-4 animate-fade-in">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-semibold text-center text-gradient mb-2">
            Our Services
          </h3>
          <p className="text-center text-gray-400 mb-12">
            Delivering excellence across various sectors of the scientific community
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon="/icons/research-institute.svg"
              title="Research Institutes"
              description="Supporting groundbreaking research with premium equipment and chemicals"
            />
            <ServiceCard
              icon="/icons/research-center.svg"
              title="Research Centers"
              description="Providing specialized solutions for advanced research facilities"
            />
            <ServiceCard
              icon="/icons/university.svg"
              title="Colleges and Universities"
              description="Equipping educational institutions with quality lab materials"
            />
            <ServiceCard
              icon="/icons/government.svg"
              title="Government Organizations"
              description="Partnering with government bodies for scientific excellence"
            />
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 px-4 animate-fade-in">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-semibold text-center text-gradient mb-12">
            Product Categories
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <CategoryCard
              icon="/icons/chemical.svg"
              title="Chemical Reagents"
              description="High-purity chemicals for precise research and analysis"
              items={[
                'Analytical Reagents',
                'Organic Chemicals',
                'Inorganic Compounds',
                'Solvents'
              ]}
            />
            <CategoryCard
              icon="/icons/equipment.svg"
              title="Lab Equipment"
              description="State-of-the-art equipment for modern laboratories"
              items={[
                'Analytical Instruments',
                'Lab Furniture',
                'Safety Equipment',
                'Measurement Tools'
              ]}
            />
            <CategoryCard
              icon="/icons/diagnostic.svg"
              title="Diagnostic Tools"
              description="Advanced tools for accurate diagnostics"
              items={[
                'Clinical Analyzers',
                'Molecular Tools',
                'Diagnostic Kits',
                'Imaging Systems'
              ]}
            />
            <CategoryCard
              icon="/icons/consumables.svg"
              title="Research Consumables"
              description="Essential supplies for daily research needs"
              items={[
                'Lab Plasticware',
                'Filters & Membranes',
                'Glassware',
                'Safety Supplies'
              ]}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1E1145] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image src="/logo.svg" alt="Chembio Logo" width={32} height={32} />
                <span className="text-xl font-bold text-gradient">Chembio</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Leading the way in innovative chemical and biological solutions. 
                Committed to excellence in research, development, and manufacturing.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/products" className="text-gray-400 hover:text-white transition-colors">Products</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
              <div className="flex gap-4">
                {['linkedin', 'twitter', 'instagram'].map((social) => (
                  <Link 
                    key={social}
                    href="#" 
                    className="bg-white/5 p-2 rounded-full hover:bg-white/10 transition-colors"
                  >
                    <Image 
                      src={`/icons/${social}.svg`} 
                      alt={social} 
                      width={20} 
                      height={20}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                2024 Chembio Lifesciences. All rights reserved.
              </p>
              <div className="flex gap-8">
                <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="service-card">
      <Image src={icon} alt={title} width={40} height={40} className="mb-4" />
      <h4 className="text-white font-semibold mb-2">{title}</h4>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}

interface CategoryCardProps {
  icon: string;
  title: string;
  description: string;
  items?: string[];
}

function CategoryCard({ icon, title, description, items }: CategoryCardProps) {
  return (
    <div className="service-card">
      <Image src={icon} alt={title} width={40} height={40} className="mb-4" />
      <h4 className="text-white font-semibold mb-2">{title}</h4>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      {items && (
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item} className="text-gray-400 text-sm flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#B490F5] rounded-full"></span>
              {item}
            </li>
          ))}
        </ul>
      )}
      <Link 
        href={`/products/${title.toLowerCase().replace(' ', '-')}`} 
        className="inline-block mt-4 text-[#7BA4F4] hover:text-white transition-colors"
      >
        View All Products →
      </Link>
    </div>
  );
}
