# SolScan AI

SolScan AI is a Solana wallet intelligence dashboard for tracking top memecoin
wallets in real time. This first phase is frontend-only and uses mock activity
data while the RPC, indexer, alerting, and persistence layers are deferred.

## Frontend Direction

- Track smart money, fresh buys, whale wallets, and KOL-linked wallet activity.
- Monitor SPL token movements with BUY, SELL, and TRANSFER actions.
- Display wallet activity with shortened Solana addresses, SOL size, estimated
  USD value, timestamps, and signal badges.
- Position the product as a trading intelligence dashboard, not a generic block
  explorer.
- Keep the interface premium, dark, responsive, and aligned with Solana
  purple/green accents.

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- lucide-react
- Bun

## Getting Started

Install dependencies:

```bash
bun install
```

Run the development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the dashboard.

Build for production:

```bash
bun run build
```

## Notes

The current live wallet feed is mock Solana activity data. Do not treat it as
real market, wallet, or token data until backend integrations are added.
