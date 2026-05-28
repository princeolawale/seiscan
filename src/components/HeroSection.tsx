"use client";

import { useState } from "react";
import { ArrowRight, BellRing, Radar, Search, ShieldCheck } from "lucide-react";

export default function HeroSection() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:py-20 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(153,69,255,0.28),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(20,241,149,0.18),transparent_28%)]" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-lg border border-emerald-400/30 bg-emerald-400/10 px-3 py-2 text-sm font-medium text-emerald-200">
            <Radar size={16} />
            Solana wallet intelligence dashboard
          </div>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-normal text-white sm:text-5xl lg:text-6xl">
            Track top Solana memecoin wallets in real time.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Monitor smart money, fresh buys, wallet activity, SPL token
            movements, and KOL-linked wallets from one premium Solana command
            center.
          </p>

          <div className="mt-8 max-w-2xl rounded-lg border border-white/10 bg-white/[0.05] p-2 shadow-2xl shadow-purple-950/30">
            <div className="flex flex-col gap-2 sm:flex-row">
              <div className="relative flex-1">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                />
                <input
                  type="text"
                  placeholder="Search wallet, token ticker, or KOL handle"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="h-12 w-full rounded-md border border-white/10 bg-[#0c0f19] pl-11 pr-4 text-white outline-none transition-colors placeholder:text-slate-500 focus:border-emerald-400/60"
                />
              </div>
              <button
                type="button"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-emerald-400 px-5 text-sm font-semibold text-[#07120d] transition-colors hover:bg-emerald-300"
              >
                Analyze
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="mt-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              ["2.4k", "tracked whale wallets"],
              ["18s", "median alert latency"],
              ["71", "KOL-linked clusters"]
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-lg border border-white/10 bg-white/[0.04] p-4"
              >
                <div className="text-2xl font-bold text-white">{value}</div>
                <div className="mt-1 text-sm text-slate-400">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-white/10 bg-[#0d101b]/90 p-4 shadow-2xl shadow-purple-950/30">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-400">Signal monitor</p>
              <h2 className="text-xl font-semibold text-white">Fresh activity</h2>
            </div>
            <span className="rounded-lg border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-200">
              LIVE
            </span>
          </div>

          <div className="space-y-3">
            {[
              {
                icon: BellRing,
                title: "Fresh wallet bought $WIF",
                detail: "7.8 SOL · $1,313 · 22s ago"
              },
              {
                icon: ShieldCheck,
                title: "Smart money rotated into $POPCAT",
                detail: "15.4 SOL · $2,591 · 48s ago"
              },
              {
                icon: Radar,
                title: "KOL wallet transferred $BONK",
                detail: "3.2 SOL · $538 · 1m ago"
              }
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-4"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-purple-500/15 text-purple-200">
                    <Icon size={18} />
                  </span>
                  <div>
                    <p className="font-medium text-white">{item.title}</p>
                    <p className="mt-1 text-sm text-slate-400">{item.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full w-3/4 rounded-full bg-gradient-to-r from-purple-400 to-emerald-300"
              aria-hidden="true"
            />
          </div>
          <p className="mt-3 text-sm text-slate-400">
            Mock data for frontend preview. RPC and indexer integrations are not
            connected yet.
          </p>
        </div>
      </div>
    </section>
  );
}
