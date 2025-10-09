import { pricingPlans } from '../data/content'
import Reveal from './Reveal'

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container-responsive">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center">Simple, transparent pricing.</h2>
          <p className="text-slate-600 text-center mt-3">Start free and scale as your business grows.</p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {pricingPlans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.05}>
            <div className={`card p-6 flex flex-col ${p.highlight ? 'border-brand-200 shadow-lg' : ''}`}>
              {p.highlight && (
                <span className="self-start -mt-3 mb-2 text-xs font-bold text-brand-700 bg-brand-50 border border-brand-200 px-2 py-1 rounded-full">Most Popular</span>
              )}
              <h3 className="text-xl font-bold">{p.name}</h3>
              <div className="mt-1 flex items-baseline gap-1">
                <span className="text-3xl font-extrabold">{p.price}</span>
                {p.period && <span className="text-slate-500">/{p.period}</span>}
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2"><span className="text-teal-600">✓</span>{f}</li>
                ))}
              </ul>
              <a href="#get-started" className={`mt-6 ${p.highlight ? 'btn-primary' : 'btn-secondary'}`}>{p.cta}</a>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
