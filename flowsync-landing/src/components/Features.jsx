import { features } from '../data/content'
import Reveal from './Reveal'

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container-responsive">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center">Powerful Features that Scale with You.</h2>
          <p className="text-slate-600 text-center mt-4 max-w-2xl mx-auto">Build a workflow that grows alongside your business—secure, flexible, and fast.</p>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
            <div className="card p-6 hover:shadow-lg transition-shadow">
              <div className="h-8 w-8 rounded-lg bg-teal-50 border border-teal-100 text-teal-600 grid place-items-center font-semibold">✓</div>
              <h3 className="mt-4 font-semibold text-lg">{f.title}</h3>
              <p className="text-sm text-slate-600 mt-1">{f.desc}</p>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
