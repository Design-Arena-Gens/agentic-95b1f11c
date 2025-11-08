interface TransactionHistoryProps {
  expanded?: boolean
}

export default function TransactionHistory({ expanded = false }: TransactionHistoryProps) {
  const transactions = [
    {
      id: 'TXN-001',
      type: 'send',
      currency: 'USD',
      amount: '-1,250.00',
      status: 'completed',
      date: '2025-11-08 14:32',
      recipient: 'John Doe',
    },
    {
      id: 'TXN-002',
      type: 'receive',
      currency: 'BTC',
      amount: '+0.05432',
      status: 'completed',
      date: '2025-11-08 12:15',
      recipient: 'Alice Smith',
    },
    {
      id: 'TXN-003',
      type: 'send',
      currency: 'EUR',
      amount: '-890.00',
      status: 'pending',
      date: '2025-11-08 10:45',
      recipient: 'Bob Johnson',
    },
    {
      id: 'TXN-004',
      type: 'receive',
      currency: 'ETH',
      amount: '+2.15000',
      status: 'completed',
      date: '2025-11-07 18:22',
      recipient: 'Carol White',
    },
    {
      id: 'TXN-005',
      type: 'send',
      currency: 'USDT',
      amount: '-5,000.00',
      status: 'completed',
      date: '2025-11-07 15:10',
      recipient: 'David Brown',
    },
    {
      id: 'TXN-006',
      type: 'receive',
      currency: 'USD',
      amount: '+3,420.00',
      status: 'completed',
      date: '2025-11-07 09:33',
      recipient: 'Eve Davis',
    },
  ]

  const displayTransactions = expanded ? transactions : transactions.slice(0, 4)

  return (
    <div className="border border-border bg-white">
      <div className="border-b border-border p-6">
        <h2 className="text-lg font-semibold">Recent Transactions</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="border-b border-border bg-surface">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-secondary uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-secondary uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-secondary uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-secondary uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-secondary uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-secondary uppercase tracking-wider">
                Recipient
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {displayTransactions.map((tx) => (
              <tr key={tx.id} className="hover:bg-surface transition-colors">
                <td className="px-6 py-4 text-sm font-mono">{tx.id}</td>
                <td className="px-6 py-4 text-sm">
                  <span className="uppercase text-xs font-medium">{tx.type}</span>
                </td>
                <td className="px-6 py-4 text-sm font-mono font-semibold">
                  <span
                    className={
                      tx.amount.startsWith('+') ? 'text-green-600' : 'text-red-600'
                    }
                  >
                    {tx.amount}
                  </span>{' '}
                  <span className="text-tertiary">{tx.currency}</span>
                </td>
                <td className="px-6 py-4 text-sm">
                  <span
                    className={`inline-block px-3 py-1 text-xs font-medium uppercase tracking-wider border ${
                      tx.status === 'completed'
                        ? 'border-green-600 text-green-600'
                        : 'border-yellow-600 text-yellow-600'
                    }`}
                  >
                    {tx.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-secondary">{tx.date}</td>
                <td className="px-6 py-4 text-sm">{tx.recipient}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {!expanded && (
        <div className="border-t border-border p-4 text-center">
          <button className="text-sm font-medium text-primary hover:text-secondary transition-colors">
            View All Transactions →
          </button>
        </div>
      )}
    </div>
  )
}
