import { faqs } from '../data/content'
import Reveal from './Reveal'

export default function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-24">
      <div className="container-responsive">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center">Frequently Asked Questions.</h2>
        </Reveal>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {faqs.map((f, idx) => (
            <Reveal key={idx} delay={(idx % 2) * 0.05}>
              <details className="card p-6 group">
                <summary className="font-semibold cursor-pointer list-none flex items-center justify-between">
                  <span>{f.q}</span>
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">⌄</span>
                </summary>
                <p className="mt-3 text-sm text-slate-600">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
