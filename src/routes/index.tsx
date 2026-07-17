import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-products.jpg";
import factoryImg from "@/assets/factory.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const categories = [
  { title: "Terminal Boards", desc: "2-way to 20-way terminal strips in bakelite and polyamide for industrial wiring." },
  { title: "Electrical Connectors", desc: "Brass and tin-plated connectors, lugs, cable ends and quick-disconnect terminals." },
  { title: "Bakelite Components", desc: "Thermoset bakelite mouldings — terminal blocks, insulators, switch bases, DCM housings." },
  { title: "Plastic & Rubber Spares", desc: "Injection-moulded plastic parts, rubber grommets, bushes, gaskets and insulating covers." },
  { title: "DC Motor Spares", desc: "Armatures, brushes, commutators, end shields, bearing housings and precision motor assemblies." },
  { title: "Panel Board Accessories", desc: "Panel mounts, DIN rails, indicator bezels, bus-bar supports and shrouding hardware." },
];

const stats = [
  { k: "1994", v: "Parent co. established" },
  { k: "2018", v: "Abishree Industry" },
  { k: "100%", v: "Made to your drawing" },
  { k: "QC", v: "Inspected in-house" },
];

function Index() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "linear-gradient(var(--gold) 1px, transparent 1px), linear-gradient(90deg, var(--gold) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center md:py-32">
          <div className="text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-widest" style={{ color: "var(--gold-soft)" }}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--gold)" }} />
              Precision Electrical Manufacturing
            </span>
            <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight md:text-6xl">
              Built to power<br />
              <span style={{ background: "var(--gradient-gold)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                every motor & panel.
              </span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-white/75">
              DC motor spares, bakelite mouldings, plastic & rubber parts,
              electrical connectors, terminal and panel board accessories —
              manufactured to spec, delivered on time.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/products" className="inline-flex items-center rounded-sm px-6 py-3 text-sm font-semibold shadow-lg transition-transform hover:-translate-y-0.5" style={{ background: "var(--gradient-gold)", color: "var(--navy-deep)" }}>
                Explore Products →
              </Link>
              <Link to="/contact" className="inline-flex items-center rounded-sm border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">
                Request a Quote
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-lg opacity-40 blur-2xl" style={{ background: "var(--gradient-gold)" }} />
            <img
              src={heroImg}
              alt="DC motor spares, bakelite terminal boards and connectors"
              width={1600}
              height={1000}
              className="relative rounded-md border border-white/10 shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-border/60 bg-secondary/50">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.v}>
              <div className="text-3xl font-black text-primary md:text-4xl">{s.k}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest" style={{ color: "oklch(0.55 0.12 85)" }}>What we make</div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary md:text-4xl">Complete range of motor & panel spares</h2>
          </div>
          <Link to="/products" className="hidden text-sm font-semibold text-primary hover:underline md:inline">View catalogue →</Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <article key={c.title} className="group relative overflow-hidden rounded-md border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-sm text-sm font-black" style={{ background: "var(--gradient-gold)", color: "var(--navy-deep)" }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-lg font-bold text-primary">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              <div className="mt-4 h-px w-8 transition-all group-hover:w-16" style={{ background: "var(--gold)" }} />
            </article>
          ))}
        </div>
      </section>

      {/* MFG STRIP */}
      <section className="relative overflow-hidden" style={{ background: "var(--navy-deep)" }}>
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
          <img src={factoryImg} alt="Manufacturing workshop" width={1400} height={900} loading="lazy" className="rounded-md border border-white/10" />
          <div className="text-white">
            <div className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--gold)" }}>Our capability</div>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">In-house moulding, machining and assembly.</h2>
            <ul className="mt-6 space-y-3 text-white/80">
              {["Compression & injection moulding for bakelite and plastics", "Precision CNC machining of connectors and terminals", "Quality control on every batch — dimensional, dielectric, thermal", "Custom manufacturing against drawings and samples"].map((l) => (
                <li key={l} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "var(--gold)" }} />
                  <span>{l}</span>
                </li>
              ))}
            </ul>
            <Link to="/about" className="mt-8 inline-flex items-center text-sm font-semibold" style={{ color: "var(--gold)" }}>
              About the company →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">Have a drawing or a sample?</h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">Send us your specification. We'll come back with pricing, lead time and material options within one working day.</p>
        <Link to="/contact" className="mt-8 inline-flex items-center rounded-sm px-8 py-3.5 text-sm font-semibold shadow-lg transition-transform hover:-translate-y-0.5" style={{ background: "var(--gradient-gold)", color: "var(--navy-deep)" }}>
          Request a Quote →
        </Link>
      </section>
    </div>
  );
}
