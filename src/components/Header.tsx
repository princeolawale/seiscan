"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Search, Wallet, X, Zap } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { label: "Live Feed", href: "#feed" },
    { label: "Signals", href: "#features" },
    { label: "Community", href: "#community" },
    { label: "FAQ", href: "#faq" }
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090a12]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-white">
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-emerald-400/30 bg-emerald-400/10 text-emerald-300">
            <Zap size={18} />
          </span>
          <span className="text-xl font-semibold tracking-normal">SolScan AI</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-slate-300 sm:flex">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(52,211,153,0.8)]" />
            SOL $168.42
          </div>

          <button
            type="button"
            aria-label="Search wallets"
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-300 transition-colors hover:text-white"
          >
            <Search size={18} />
          </button>

          <button
            type="button"
            className="hidden items-center gap-2 rounded-lg bg-emerald-400 px-4 py-2 text-sm font-semibold text-[#07120d] transition-colors hover:bg-emerald-300 sm:inline-flex"
          >
            <Wallet size={16} />
            Connect
          </button>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-300 transition-colors hover:text-white md:hidden"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-white/10 bg-[#090a12] px-4 py-4 md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-slate-300 transition-colors hover:bg-white/[0.04] hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-slate-300">
              <span>SOL Price</span>
              <span className="font-semibold text-white">$168.42</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
