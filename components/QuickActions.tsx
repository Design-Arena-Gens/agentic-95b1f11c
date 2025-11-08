interface QuickActionsProps {
  setActiveSection: (section: string) => void
}

export default function QuickActions({ setActiveSection }: QuickActionsProps) {
  const actions = [
    { label: 'Send Money', icon: '↑', action: () => setActiveSection('transfer') },
    { label: 'Request Payment', icon: '↓', action: () => setActiveSection('transfer') },
    { label: 'Exchange', icon: '⇄', action: () => setActiveSection('transfer') },
    { label: 'View History', icon: '≡', action: () => setActiveSection('transactions') },
  ]

  return (
    <div className="border border-border bg-white">
      <div className="border-b border-border p-6">
        <h2 className="text-lg font-semibold">Quick Actions</h2>
      </div>
      <div className="p-4 space-y-2">
        {actions.map((action, idx) => (
          <button
            key={idx}
            onClick={action.action}
            className="w-full border border-border px-6 py-4 text-left hover:border-primary transition-colors group"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">{action.label}</span>
              <span className="text-xl group-hover:translate-x-1 transition-transform">
                {action.icon}
              </span>
            </div>
          </button>
        ))}
      </div>

      <div className="border-t border-border p-6">
        <h3 className="text-sm font-semibold mb-3">Market Overview</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center text-sm">
            <span className="text-secondary">BTC/USD</span>
            <div className="text-right">
              <div className="font-mono font-semibold">$43,250.00</div>
              <div className="text-xs text-green-600">+3.2%</div>
            </div>
          </div>
          <div className="flex justify-between items-center text-sm border-t border-border pt-3">
            <span className="text-secondary">ETH/USD</span>
            <div className="text-right">
              <div className="font-mono font-semibold">$2,280.50</div>
              <div className="text-xs text-green-600">+1.8%</div>
            </div>
          </div>
          <div className="flex justify-between items-center text-sm border-t border-border pt-3">
            <span className="text-secondary">EUR/USD</span>
            <div className="text-right">
              <div className="font-mono font-semibold">1.0842</div>
              <div className="text-xs text-red-600">-0.3%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
