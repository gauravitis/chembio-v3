'use client';

import { Navbar } from './navbar';

export function Navigation() {
  return <Navbar />;
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}

function NavLink({ href, children, active }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`text-sm font-medium transition-all duration-300 ${
        active
          ? 'text-white border-b-2 border-[#B490F5]'
          : 'text-gray-300 hover:text-white hover:border-b-2 hover:border-[#B490F5]'
      }`}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, children, active }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`text-sm font-medium block px-4 py-2 rounded-lg transition-all duration-300 ${
        active
          ? 'text-white bg-white/10'
          : 'text-gray-300 hover:text-white hover:bg-white/10'
      }`}
    >
      {children}
    </Link>
  );
}
