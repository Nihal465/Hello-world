import { valueCards } from '../data/content'
import Reveal from './Reveal'

function Icon({ name }) {
  const className = 'h-6 w-6 text-brand-700'
  switch (name) {
    case 'dashboard':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="4" rx="2"/><rect x="14" y="9" width="7" height="12" rx="2"/><rect x="3" y="12" width="7" height="9" rx="2"/></svg>
      )
    case 'automation':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 7h6l2 3h8"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>
      )
    case 'insights':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 20h18"/><path d="M7 20V9"/><path d="M12 20V5"/><path d="M17 20v-7"/></svg>
      )
    default:
      return null
  }
}

export default function ValueSection() {
  return (
    <section className="py-20 md:py-24" id="value">
      <div className="container-responsive">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center">Everything your team needs in one place.</h2>
          <p className="text-slate-600 text-center mt-4 max-w-3xl mx-auto">Save time switching between tools. FlowSync integrates chats, tasks, and insights in a single dashboard.</p>
        </Reveal>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {valueCards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.05}>
            <div className="card p-6">
              <div className="h-10 w-10 rounded-lg bg-brand-50 border border-brand-100 grid place-items-center">
                <Icon name={c.icon} />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{c.title}</h3>
              <p className="text-sm text-slate-600 mt-1">{c.desc}</p>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
