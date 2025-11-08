'use client'

import { useState } from 'react'

export default function TransferPanel() {
  const [transferType, setTransferType] = useState<'fiat' | 'crypto'>('fiat')
  const [fromCurrency, setFromCurrency] = useState('USD')
  const [toCurrency, setToCurrency] = useState('EUR')
  const [amount, setAmount] = useState('')

  const fiatCurrencies = ['USD', 'EUR', 'GBP', 'JPY', 'CHF']
  const cryptoCurrencies = ['BTC', 'ETH', 'USDT', 'USDC', 'BNB']

  const currencies = transferType === 'fiat' ? fiatCurrencies : cryptoCurrencies

  return (
    <div className="border border-border bg-white">
      <div className="border-b border-border p-6">
        <h2 className="text-lg font-semibold mb-4">New Transfer</h2>
        <div className="flex gap-2">
          <button
            onClick={() => setTransferType('fiat')}
            className={`flex-1 px-6 py-3 text-sm font-medium transition-colors border ${
              transferType === 'fiat'
                ? 'border-primary bg-primary text-white'
                : 'border-border hover:border-primary'
            }`}
          >
            Fiat Transfer
          </button>
          <button
            onClick={() => setTransferType('crypto')}
            className={`flex-1 px-6 py-3 text-sm font-medium transition-colors border ${
              transferType === 'crypto'
                ? 'border-primary bg-primary text-white'
                : 'border-border hover:border-primary'
            }`}
          >
            Crypto Transfer
          </button>
        </div>
      </div>

      <div className="p-6 space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">From</label>
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="w-full border border-border px-4 py-3 text-sm font-medium bg-white"
          >
            {currencies.map((curr) => (
              <option key={curr} value={curr}>
                {curr}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Amount</label>
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
            className="w-full border border-border px-4 py-3 text-sm font-mono"
          />
        </div>

        <div className="py-2 flex justify-center">
          <div className="w-10 h-10 border border-border flex items-center justify-center text-xl">
            ↓
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">To</label>
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="w-full border border-border px-4 py-3 text-sm font-medium bg-white"
          >
            {currencies.map((curr) => (
              <option key={curr} value={curr}>
                {curr}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Recipient Address</label>
          <input
            type="text"
            placeholder={
              transferType === 'fiat'
                ? 'IBAN or Account Number'
                : 'Wallet Address'
            }
            className="w-full border border-border px-4 py-3 text-sm font-mono"
          />
        </div>

        <div className="border border-border bg-surface p-4">
          <div className="flex justify-between items-center text-sm mb-2">
            <span className="text-secondary">Exchange Rate</span>
            <span className="font-mono font-medium">1.0842</span>
          </div>
          <div className="flex justify-between items-center text-sm mb-2">
            <span className="text-secondary">Transaction Fee</span>
            <span className="font-mono font-medium">2.50 {fromCurrency}</span>
          </div>
          <div className="border-t border-border mt-3 pt-3 flex justify-between items-center">
            <span className="font-medium">Total</span>
            <span className="font-mono font-semibold text-lg">
              {amount ? (parseFloat(amount) + 2.5).toFixed(2) : '0.00'} {fromCurrency}
            </span>
          </div>
        </div>

        <button className="w-full bg-primary text-white px-6 py-4 text-sm font-semibold hover:bg-secondary transition-colors">
          Confirm Transfer
        </button>
      </div>
    </div>
  )
}
