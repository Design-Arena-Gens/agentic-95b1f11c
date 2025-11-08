'use client'

import { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import TransferPanel from '@/components/TransferPanel'
import BalanceOverview from '@/components/BalanceOverview'
import TransactionHistory from '@/components/TransactionHistory'
import QuickActions from '@/components/QuickActions'

export default function Home() {
  const [activeSection, setActiveSection] = useState('dashboard')

  return (
    <main className="flex min-h-screen bg-white">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

      <div className="flex-1 flex flex-col">
        <header className="h-16 border-b border-border flex items-center px-8">
          <h1 className="text-xl font-semibold text-primary tracking-tight">
            {activeSection === 'dashboard' && 'Dashboard'}
            {activeSection === 'transfer' && 'Transfer'}
            {activeSection === 'transactions' && 'Transactions'}
            {activeSection === 'settings' && 'Settings'}
          </h1>
        </header>

        <div className="flex-1 overflow-auto">
          {activeSection === 'dashboard' && (
            <div className="p-8">
              <BalanceOverview />
              <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <TransactionHistory />
                </div>
                <div>
                  <QuickActions setActiveSection={setActiveSection} />
                </div>
              </div>
            </div>
          )}

          {activeSection === 'transfer' && (
            <div className="p-8 max-w-4xl">
              <TransferPanel />
            </div>
          )}

          {activeSection === 'transactions' && (
            <div className="p-8">
              <TransactionHistory expanded />
            </div>
          )}

          {activeSection === 'settings' && (
            <div className="p-8 max-w-4xl">
              <div className="border border-border bg-white p-8">
                <h2 className="text-lg font-semibold mb-6">Account Settings</h2>
                <div className="space-y-6">
                  <div className="border-b border-border pb-6">
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      value="user@example.com"
                      className="w-full border border-border px-4 py-3 text-sm"
                      readOnly
                    />
                  </div>
                  <div className="border-b border-border pb-6">
                    <label className="block text-sm font-medium mb-2">Two-Factor Authentication</label>
                    <button className="border border-primary px-6 py-3 text-sm font-medium hover:bg-primary hover:text-white transition-colors">
                      Enable 2FA
                    </button>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">API Access</label>
                    <button className="border border-border px-6 py-3 text-sm font-medium hover:border-primary transition-colors">
                      Generate API Key
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
