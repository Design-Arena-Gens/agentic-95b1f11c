export default function BalanceOverview() {
  const balances = [
    { currency: 'USD', amount: '125,430.00', type: 'fiat', change: '+2.4%' },
    { currency: 'EUR', amount: '89,250.00', type: 'fiat', change: '+1.8%' },
    { currency: 'BTC', amount: '3.45721', type: 'crypto', change: '+5.2%' },
    { currency: 'ETH', amount: '28.91234', type: 'crypto', change: '-1.3%' },
    { currency: 'USDT', amount: '50,000.00', type: 'crypto', change: '+0.1%' },
  ]

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Balance Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {balances.map((balance) => (
          <div
            key={balance.currency}
            className="border border-border bg-white p-6 hover:border-primary transition-colors"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="text-xs font-medium text-secondary uppercase tracking-wider">
                {balance.currency}
              </div>
              <div
                className={`text-xs font-medium ${
                  balance.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {balance.change}
              </div>
            </div>
            <div className="text-2xl font-semibold mb-1 font-mono">{balance.amount}</div>
            <div className="text-xs text-tertiary uppercase tracking-wider">
              {balance.type}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
