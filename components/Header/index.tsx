'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { name: 'ABOUT', path: '/' },
    { name: 'WORK', path: '/work' },
    { name: 'EXPERIENCE', path: '/experience' },
  ];

  return (
    <header className="p-8">
      <ul className="flex items-center justify-end gap-4">
        {navItems.map((item) => {
          const isActive = pathname === item.path;

          return (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`text-[16px] leading-[100%] transition-all ${
                  isActive
                    ? 'text-white'
                    : 'text-neutral-500 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
}