import Reveal from './Reveal'

export default function Hero() {
  return (
    <section className="gradient-bg">
      <div className="container-responsive pt-20 pb-24 md:pt-28 md:pb-32 grid md:grid-cols-2 items-center gap-10">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full bg-brand-50 text-brand-700 px-3 py-1 text-xs font-semibold border border-brand-100">New • AI Assist</p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Streamline your workflow with intelligent collaboration.
          </h1>
          <p className="mt-4 text-slate-600 text-lg">
            A smart workspace that brings teams, projects, and tools together — beautifully.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#get-started" className="btn-primary">Get Started</a>
            <a href="#contact" className="btn-secondary">Book a Demo</a>
          </div>
          <div className="mt-6 text-xs text-slate-500">No credit card needed • Free forever plan</div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative card p-4 md:p-6">
            <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-brand-100 via-white to-teal-50 grid place-items-center">
              <div className="rounded-2xl border border-dashed border-brand-300/70 w-11/12 h-5/6 grid place-items-center">
                <span className="text-slate-500">Product mockup placeholder</span>
              </div>
            </div>
            <div className="mt-3 flex gap-2">
              <span className="h-2 w-2 rounded-full bg-brand-500"/>
              <span className="h-2 w-2 rounded-full bg-teal-500"/>
              <span className="h-2 w-2 rounded-full bg-slate-300"/>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
