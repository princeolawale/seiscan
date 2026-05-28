import { MessageCircle, Radio, Users } from "lucide-react";

export default function SocialSection() {
  return (
    <section id="community" className="px-4 pb-16 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-lg border border-white/10 bg-[#0d101b] p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Community
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white">
            Built for traders who move fast
          </h2>
          <p className="mt-4 leading-7 text-slate-400">
            Follow shared wallet lists, compare signals with other Solana
            traders, and keep a clean watchlist of wallets that consistently
            find memecoin momentum early.
          </p>
          <a
            href="https://x.com/solana"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-emerald-400/40"
          >
            <MessageCircle size={16} />
            Join the conversation
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              icon: Users,
              value: "12k+",
              label: "wallets on mock watchlists"
            },
            {
              icon: Radio,
              value: "24/7",
              label: "activity feed preview"
            },
            {
              icon: MessageCircle,
              value: "KOL",
              label: "linked wallet monitoring"
            }
          ].map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="rounded-lg border border-white/10 bg-white/[0.04] p-6"
              >
                <div className="mb-8 grid h-10 w-10 place-items-center rounded-lg bg-emerald-400/10 text-emerald-200">
                  <Icon size={18} />
                </div>
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
