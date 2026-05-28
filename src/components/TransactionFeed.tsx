import { ArrowDownLeft, ArrowUpRight, Repeat2 } from "lucide-react";

type ActivityAction = "BUY" | "SELL" | "TRANSFER";
type SignalBadge = "Fresh Wallet" | "Whale" | "Smart Money" | "KOL Wallet";

interface WalletActivity {
  id: string;
  wallet: string;
  label: string;
  token: string;
  action: ActivityAction;
  amountSol: string;
  estimatedUsd: string;
  timestamp: string;
  signal: SignalBadge;
}

const mockActivity: WalletActivity[] = [
  {
    id: "1",
    wallet: "7mR4...9Qk2",
    label: "alpha sweeper",
    token: "$WIF",
    action: "BUY",
    amountSol: "18.42 SOL",
    estimatedUsd: "$3,101",
    timestamp: "12s ago",
    signal: "Smart Money"
  },
  {
    id: "2",
    wallet: "Hn8p...V2xz",
    label: "new pair hunter",
    token: "$POPCAT",
    action: "BUY",
    amountSol: "6.80 SOL",
    estimatedUsd: "$1,145",
    timestamp: "27s ago",
    signal: "Fresh Wallet"
  },
  {
    id: "3",
    wallet: "4KxY...bN91",
    label: "high conviction whale",
    token: "$BONK",
    action: "TRANSFER",
    amountSol: "42.10 SOL",
    estimatedUsd: "$7,087",
    timestamp: "44s ago",
    signal: "Whale"
  },
  {
    id: "4",
    wallet: "9sVd...Qp44",
    label: "influencer cluster",
    token: "$MOTHER",
    action: "SELL",
    amountSol: "11.05 SOL",
    estimatedUsd: "$1,860",
    timestamp: "1m ago",
    signal: "KOL Wallet"
  },
  {
    id: "5",
    wallet: "2BVa...L7fq",
    label: "early buyer",
    token: "$MEW",
    action: "BUY",
    amountSol: "25.00 SOL",
    estimatedUsd: "$4,208",
    timestamp: "2m ago",
    signal: "Whale"
  },
  {
    id: "6",
    wallet: "Fs39...aK6m",
    label: "rotator",
    token: "$BOME",
    action: "SELL",
    amountSol: "8.75 SOL",
    estimatedUsd: "$1,473",
    timestamp: "3m ago",
    signal: "Smart Money"
  }
];

const actionStyles: Record<ActivityAction, string> = {
  BUY: "border-emerald-400/30 bg-emerald-400/10 text-emerald-200",
  SELL: "border-rose-400/30 bg-rose-400/10 text-rose-200",
  TRANSFER: "border-purple-400/30 bg-purple-400/10 text-purple-200"
};

const signalStyles: Record<SignalBadge, string> = {
  "Fresh Wallet": "border-cyan-400/30 bg-cyan-400/10 text-cyan-200",
  Whale: "border-purple-400/30 bg-purple-400/10 text-purple-200",
  "Smart Money": "border-emerald-400/30 bg-emerald-400/10 text-emerald-200",
  "KOL Wallet": "border-amber-400/30 bg-amber-400/10 text-amber-200"
};

const actionIcons = {
  BUY: ArrowDownLeft,
  SELL: ArrowUpRight,
  TRANSFER: Repeat2
};

export default function TransactionFeed() {
  return (
    <section id="feed" className="px-4 pb-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Live wallet feed
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white">
              Solana activity worth watching
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-400">
            Mock Solana memecoin activity showing wallet labels, SPL token
            tickers, SOL size, estimated USD value, and signal quality.
          </p>
        </div>

        <div className="overflow-hidden rounded-lg border border-white/10 bg-[#0d101b]/90">
          <div className="hidden grid-cols-[1.3fr_0.8fr_0.8fr_0.9fr_1fr_0.7fr] gap-4 border-b border-white/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 md:grid">
            <span>Wallet</span>
            <span>Action</span>
            <span>Token</span>
            <span>Amount</span>
            <span>Signal</span>
            <span className="text-right">Time</span>
          </div>

          <div className="divide-y divide-white/10">
            {mockActivity.map((activity) => {
              const Icon = actionIcons[activity.action];

              return (
                <article
                  key={activity.id}
                  className="grid gap-4 px-5 py-4 transition-colors hover:bg-white/[0.03] md:grid-cols-[1.3fr_0.8fr_0.8fr_0.9fr_1fr_0.7fr] md:items-center"
                >
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-purple-500/30 to-emerald-400/20 text-sm font-bold text-white">
                      {activity.wallet.slice(0, 2)}
                    </div>
                    <div>
                      <p className="font-semibold text-white">{activity.wallet}</p>
                      <p className="text-sm text-slate-400">{activity.label}</p>
                    </div>
                  </div>

                  <span
                    className={`inline-flex w-fit items-center gap-2 rounded-lg border px-3 py-1 text-xs font-bold ${actionStyles[activity.action]}`}
                  >
                    <Icon size={14} />
                    {activity.action}
                  </span>

                  <span className="font-semibold text-white">{activity.token}</span>

                  <div>
                    <p className="font-semibold text-white">{activity.amountSol}</p>
                    <p className="text-sm text-slate-400">{activity.estimatedUsd}</p>
                  </div>

                  <span
                    className={`inline-flex w-fit rounded-lg border px-3 py-1 text-xs font-semibold ${signalStyles[activity.signal]}`}
                  >
                    {activity.signal}
                  </span>

                  <span className="text-left text-sm text-slate-400 md:text-right">
                    {activity.timestamp}
                  </span>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
