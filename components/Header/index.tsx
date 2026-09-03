'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const navContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const navItem = {
  hidden: { opacity: 0, y: -12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { name: 'ABOUT', path: '/' },
    { name: 'WORK', path: '/work' },
    { name: 'EXPERIENCE', path: '/experience' },
  ];

  return (
    <header className="p-8">
      <motion.ul
        className="flex items-center justify-end gap-4"
        variants={navContainer}
        initial="hidden"
        animate="visible"
      >
        {navItems.map((item) => {
          const isActive = pathname === item.path;

          return (
            <motion.li key={item.path} variants={navItem}>
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
            </motion.li>
          );
        })}
      </motion.ul>
    </header>
  );
}