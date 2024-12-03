import { Product } from '@/data/products';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
}

// Function to format price in Indian Rupees
function formatIndianPrice(price: number) {
  const formatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  return formatter.format(price);
}

// Function to clean image URL
function getCleanImageUrl(url: string) {
  // Remove leading slash if it's an external URL
  if (url.startsWith('/https:')) {
    return url.substring(1);
  }
  return url;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative bg-white/5 border border-white/10 rounded-lg overflow-hidden transition-all hover:border-accent-blue/50">
      <div className="aspect-square relative">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 opacity-0 group-hover:opacity-100 transition-opacity" />
        <Image
          src={getCleanImageUrl(product.image)}
          alt={product.name}
          fill
          className="object-contain p-4"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4 space-y-3">
        {/* Catalogue ID */}
        <div className="flex justify-between items-center">
          <span className="text-xs px-2 py-1 bg-accent-blue/20 rounded-full text-accent-blue">
            {product.id}
          </span>
          <span className="text-accent-blue font-medium">
            {formatIndianPrice(product.price)}
          </span>
        </div>

        {/* Product Name */}
        <h3 className="text-lg font-semibold text-white">{product.name.replace('\r', '')}</h3>

        {/* Description */}
        <p className="text-sm text-gray-400">{product.description}</p>

        {/* CAS Number and Pack Size */}
        <div className="flex flex-wrap justify-between pt-2 border-t border-white/10">
          {(product.casNumber || product.packSize) && (
            <div className="flex flex-col w-full md:w-1/2 xl:w-1/3 mb-4 md:mb-0">
              {product.casNumber && (
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500">CAS Number</span>
                  <span className="text-sm text-gray-300">{product.casNumber}</span>
                </div>
              )}
            </div>
          )}
          {(product.casNumber || product.packSize) && (
            <div className="flex flex-col w-full md:w-1/2 xl:w-1/3 mb-4 md:mb-0">
              {product.packSize && (
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500">Pack Size</span>
                  <span className="text-sm text-gray-300">{product.packSize}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
