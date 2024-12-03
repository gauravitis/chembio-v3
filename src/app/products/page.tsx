'use client';

import { PageHeader } from '@/components/ui/page-header';
import { ProductCard } from '@/components/ui/product-card';
import { ProductSearch } from '@/components/ui/product-search';
import { products } from '@/data/products';
import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = useMemo(() => {
    if (!searchTerm) return products;
    
    const searchLower = searchTerm.toLowerCase();
    return products.filter((product) => 
      product.catalogueId?.toLowerCase().includes(searchLower) ||
      product.name.toLowerCase().includes(searchLower) ||
      product.casNumber?.toLowerCase().includes(searchLower)
    );
  }, [searchTerm]);

  return (
    <main className="min-h-screen bg-gradient-custom">
      <PageHeader 
        title="Our Products" 
        subtitle="Discover our comprehensive range of laboratory essentials" 
      />

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <ProductSearch onSearch={setSearchTerm} />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>

          {filteredProducts.length === 0 && (
            <p className="text-center text-gray-500 mt-8">
              No products found matching your search criteria.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
