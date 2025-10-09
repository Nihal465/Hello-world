import Reveal from './Reveal'

export default function CTA() {
  return (
    <section id="get-started" className="py-20 md:py-24">
      <div className="container-responsive">
        <Reveal>
          <div className="card p-10 text-center bg-gradient-to-br from-brand-50 to-teal-50">
            <h2 className="text-3xl font-extrabold text-slate-900">Ready to streamline your workflow?</h2>
            <p className="text-slate-600 mt-2">Join thousands of teams boosting productivity with FlowSync.</p>
            <div className="mt-6 flex justify-center">
              <a className="btn-primary" href="#">Start Free Today</a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
