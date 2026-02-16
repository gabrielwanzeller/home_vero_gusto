import Link from "next/link"
import { navigation } from "./navigation"

export default function StyleguideLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col md:flex-row bg-white">
      <aside className="w-full md:w-64 shrink-0 border-r border-border bg-gray-50 md:h-screen md:sticky md:top-0 overflow-y-auto">
        <div className="p-6">
          <h1 className="text-2xl font-display font-bold text-red-600 mb-6">
            VG Design
          </h1>
          <nav className="space-y-8">
            {navigation.map((section) => (
              <div key={section.title}>
                <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
                  {section.title}
                </h2>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="block text-sm text-gray-600 hover:text-red-600 hover:translate-x-1 transition-transform"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </aside>
      <main className="flex-1 p-8 md:p-12 overflow-y-auto">
        <div className="max-w-4xl mx-auto space-y-12">
          {children}
        </div>
      </main>
    </div>
  )
}
