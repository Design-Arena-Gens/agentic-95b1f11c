interface SidebarProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Sidebar({ activeSection, setActiveSection }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '◼' },
    { id: 'transfer', label: 'Transfer', icon: '→' },
    { id: 'transactions', label: 'Transactions', icon: '≡' },
    { id: 'settings', label: 'Settings', icon: '⚙' },
  ]

  return (
    <aside className="w-64 border-r border-border bg-white flex flex-col">
      <div className="h-16 border-b border-border flex items-center px-6">
        <h1 className="text-xl font-bold tracking-tight">PSP TRANSFER</h1>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveSection(item.id)}
                className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors border border-transparent ${
                  activeSection === item.id
                    ? 'border-primary bg-surface'
                    : 'hover:border-border'
                }`}
              >
                <span className="mr-3 text-base">{item.icon}</span>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-border">
        <div className="px-4 py-3 bg-surface border border-border">
          <div className="text-xs font-medium text-secondary mb-1">Account</div>
          <div className="text-sm font-semibold">user@example.com</div>
        </div>
      </div>
    </aside>
  )
}
