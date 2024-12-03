'use client';

import { PageHeader } from '@/components/ui/page-header';
import { ProductCard } from '@/components/ui/product-card';
import { products } from '@/data/products';
import { motion } from 'framer-motion';

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gradient-custom">
      <PageHeader 
        title="Our Products" 
        subtitle="Discover our comprehensive range of laboratory essentials" 
      />

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
