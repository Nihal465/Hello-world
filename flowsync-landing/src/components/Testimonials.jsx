import { testimonials } from '../data/content'
import Reveal from './Reveal'

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-24">
      <div className="container-responsive">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center">Loved by teams worldwide.</h2>
        </Reveal>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.05}>
              <figure className="card p-6">
                <blockquote className="text-slate-700">“{t.quote}”</blockquote>
                <figcaption className="mt-4 text-sm text-slate-500 font-medium">{t.name} • {t.role}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
