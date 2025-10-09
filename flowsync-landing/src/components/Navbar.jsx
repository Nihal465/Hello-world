import { useState } from 'react'
import logo from '../assets/logo.svg'
import { navLinks } from '../data/content'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
      <nav className="container-responsive flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="FlowSync logo" className="h-7 w-7" />
          <span className="font-extrabold text-xl tracking-tight">FlowSync</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-slate-700 hover:text-brand-700">
              {l.label}
            </a>
          ))}
          <a href="#get-started" className="btn-primary text-sm">Get Started</a>
        </div>
        <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-slate-200" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="container-responsive py-4 flex flex-col gap-4">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium text-slate-700">
                {l.label}
              </a>
            ))}
            <a href="#get-started" onClick={() => setOpen(false)} className="btn-primary text-sm w-full text-center">Get Started</a>
          </div>
        </div>
      )}
    </header>
  )
}
