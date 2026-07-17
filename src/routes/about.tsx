import { createFileRoute, Link } from "@tanstack/react-router";
import factoryImg from "@/assets/factory.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Abishree Industry" },
      { name: "description", content: "Abishree Industry (formerly Abirami Bakelite & Plastic, est. 1998) manufactures DC motor spares, bakelite mouldings, plastic-rubber components and panel accessories to customer drawings." },
      { property: "og:title", content: "About Abishree Industry" },
      { property: "og:description", content: "Precision electrical spare parts manufacturing — moulding, machining and assembly under one roof." },
    ],
  }),
  component: About,
});

const values = [
  { t: "Precision first", d: "Every part is inspected against drawing tolerances before it leaves the floor." },
  { t: "Material integrity", d: "Genuine bakelite, virgin plastics and grade-tested brass — never recycled scrap." },
  { t: "On-time delivery", d: "Planned production and buffer stock so your line never waits on a spare." },
  { t: "Custom-built", d: "We manufacture to your sample, drawing or specification — no minimum job too small." },
];

function About() {
  return (
    <div>
      <section className="border-b border-border/60" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-7xl px-6 py-20 text-white md:py-28">
          <div className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--gold)" }}>About us</div>
          <h1 className="mt-3 max-w-3xl text-4xl font-black leading-tight md:text-5xl">Building electrical spares to your drawing — since 1998.</h1>
          <p className="mt-6 max-w-2xl text-white/75">
            Abishree Industry is the successor to <strong className="text-white">Abirami Bakelite & Plastic</strong>, which
            has been manufacturing bakelite and plastic electrical components since 1998. In 2018 the
            business was reorganised and renamed Abishree Industry. We supply DC motor spares,
            bakelite mouldings, plastic and rubber parts, connectors, terminal and panel-board
            hardware — every item made to the specification and drawing provided by the customer.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
        <img src={factoryImg} alt="Our workshop" width={1400} height={900} loading="lazy" className="rounded-md border border-border shadow-[var(--shadow-card)]" />
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-primary">Manufacturing under one roof</h2>
          <p className="mt-4 text-muted-foreground">
            We run compression and injection moulding for bakelite and thermoplastics,
            CNC and conventional machining for metal parts, and in-house assembly
            and testing. Keeping every process in one facility means tighter
            quality control and shorter lead times.
          </p>
          <dl className="mt-8 grid grid-cols-2 gap-6">
            {[["1998", "Parent co. established"],["2018", "Abishree Industry"],["100%", "Made to drawing"],["QC", "Inspected in-house"]].map(([k, v]) => (
              <div key={v} className="border-l-2 pl-4" style={{ borderColor: "var(--gold)" }}>
                <dt className="text-2xl font-black text-primary">{k}</dt>
                <dd className="text-xs uppercase tracking-widest text-muted-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-t border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-bold tracking-tight text-primary">What we stand for</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.t} className="rounded-md border border-border bg-card p-6">
                <div className="h-1 w-8" style={{ background: "var(--gold)" }} />
                <h3 className="mt-4 text-lg font-bold text-primary">{v.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 text-center">
        <h2 className="text-3xl font-bold text-primary">Work with us</h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">Share your requirement and we'll respond with pricing and lead time.</p>
        <Link to="/contact" className="mt-8 inline-flex items-center rounded-sm px-8 py-3.5 text-sm font-semibold shadow-lg transition-transform hover:-translate-y-0.5" style={{ background: "var(--gradient-gold)", color: "var(--navy-deep)" }}>
          Contact our team →
        </Link>
      </section>
    </div>
  );
}