import Link from "next/link";
import { Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#090a12] py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div className="flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center rounded-lg border border-emerald-400/30 bg-emerald-400/10 text-emerald-300">
            <Zap size={16} />
          </span>
          <div>
            <p className="font-semibold text-white">SolScan AI</p>
            <p>Solana wallet intelligence for memecoin traders.</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <span>© 2026 SolScan AI.</span>
          <Link href="#features" className="transition-colors hover:text-white">
            Signals
          </Link>
          <Link href="#feed" className="transition-colors hover:text-white">
            Live Feed
          </Link>
          <Link href="#faq" className="transition-colors hover:text-white">
            FAQ
          </Link>
        </div>
      </div>
    </footer>
  );
}
