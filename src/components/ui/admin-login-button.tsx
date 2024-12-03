'use client';

import { useRouter } from 'next/navigation';
import { useAuth } from '@clerk/nextjs';

export function AdminLoginButton() {
  const router = useRouter();
  const { isSignedIn } = useAuth();

  return (
    <button
      onClick={() => router.push(isSignedIn ? '/admin/products' : '/sign-in')}
      className="group relative p-2 rounded-lg hover:bg-white/5 transition-colors"
      aria-label="Admin Login"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-accent-blue/20 to-accent-purple/20 opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
      
      {/* Icon */}
      <div className="relative">
        <svg
          className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        
        {/* Status indicator */}
        {isSignedIn && (
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-accent-blue rounded-full">
            <span className="absolute inset-0 rounded-full bg-accent-blue animate-ping" />
          </span>
        )}
      </div>
    </button>
  );
}
