import { Bell, BrainCircuit, Coins, Crosshair, Users, WalletCards } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: WalletCards,
      title: "Wallet intelligence",
      description:
        "Follow whale wallets, fresh wallets, and profitable Solana memecoin traders without digging through raw transaction pages."
    },
    {
      icon: Coins,
      title: "SPL token movement",
      description:
        "See buys, sells, transfers, SOL sizing, and estimated USD value across the tokens your watchlist cares about."
    },
    {
      icon: BrainCircuit,
      title: "Smart money labels",
      description:
        "Group wallets by behavior so repeat winners, rotators, and KOL-linked wallets stand out immediately."
    },
    {
      icon: Bell,
      title: "Signal alerts",
      description:
        "Preview alert-ready events for whale entries, fresh wallet accumulation, and suspicious coordinated movement."
    },
    {
      icon: Crosshair,
      title: "Memecoin focus",
      description:
        "Built around Solana trading workflows, not generic block explorer navigation or protocol analytics."
    },
    {
      icon: Users,
      title: "KOL-linked tracking",
      description:
        "Monitor known public clusters and influencer-adjacent wallets as social momentum hits the tape."
    }
  ];

  return (
    <section id="features" className="px-4 pb-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-300">
            Intelligence layer
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white">
            Designed for Solana wallet decisions
          </h2>
          <p className="mt-3 text-slate-400">
            SolScan AI focuses the interface on the activity traders actually
            scan: wallets, SPL tokens, SOL-denominated movement, and signal
            quality.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-lg border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-emerald-400/30 hover:bg-white/[0.06]"
              >
                <div className="mb-5 grid h-11 w-11 place-items-center rounded-lg bg-purple-500/15 text-purple-200">
                  <Icon size={21} />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
