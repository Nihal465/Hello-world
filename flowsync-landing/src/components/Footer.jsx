export default function Footer() {
  return (
    <footer className="mt-10 border-t border-slate-200 bg-white" id="contact">
      <div className="container-responsive py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="font-extrabold text-xl">FlowSync</div>
            <nav className="mt-3 flex flex-wrap gap-4 text-sm text-slate-600">
              <a href="#">About</a>
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
              <a href="#">Privacy Policy</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="h-9 w-9 grid place-items-center rounded-lg border border-slate-200 hover:text-brand-700">in</a>
            <a href="#" className="h-9 w-9 grid place-items-center rounded-lg border border-slate-200 hover:text-brand-700">t</a>
            <a href="#" className="h-9 w-9 grid place-items-center rounded-lg border border-slate-200 hover:text-brand-700">gh</a>
          </div>
        </div>
        <p className="mt-6 text-xs text-slate-500">© 2025 FlowSync. All rights reserved.</p>
      </div>
    </footer>
  )
}
