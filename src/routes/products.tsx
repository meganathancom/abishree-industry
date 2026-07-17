import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — DC Motor Spares, Bakelite, Connectors, Terminal & Panel Boards" },
      { name: "description", content: "Full product range: DC motor spares, bakelite parts, plastic and rubber components, electrical connectors, terminal boards and panel board accessories." },
      { property: "og:title", content: "Products — Shakthi Electricals" },
      { property: "og:description", content: "Browse our full range of motor and panel spare parts." },
    ],
  }),
  component: Products,
});

const catalogue = [
    {
    title: "Terminal Boards",
    tag: "2–20 way",
    items: ["Bakelite terminal strips", "Polyamide terminal blocks", "Barrier terminal boards", "Feed-through terminals", "Ground terminal blocks", "Custom terminal boards"],
  },
  
  {
    title: "Bakelite Components",
    tag: "Thermoset",
    items: ["Terminal blocks", "Switch bases & covers", "Insulating bushes", "DCM housings", "Handle knobs", "Custom bakelite mouldings"],
  },
  {
    title: "Plastic & Rubber Spares",
    tag: "Moulded",
    items: ["Injection-moulded plastic parts", "Rubber grommets & bushes", "Cable glands & sleeves", "Gaskets and O-rings", "Insulating covers", "Cord grips"],
  },
  {
    title: "Electrical Connectors",
    tag: "Brass / Tin",
    items: ["Ring & fork lugs", "Pin & bullet connectors", "Bus-bar connectors", "Cable end sleeves", "Quick-disconnect terminals", "Screw & solder lugs"],
  },

  {
    title: "DC Motor Spares",
    tag: "DCM",
    items: ["Armature assemblies", "Carbon brushes & brush holders", "Commutators", "End shields & bearing housings", "Field coils", "Motor terminal boxes"],
  },
  {
    title: "Panel Board Accessories",
    tag: "Hardware",
    items: ["DIN rails & end stops", "Panel mount bezels", "Indicator lamp holders", "Bus-bar supports", "Cable ducts & trunking", "Shrouding and covers"],
  },
];

function Products() {
  return (
    <div>
      <section className="border-b border-border/60" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-7xl px-6 py-20 text-white">
          <div className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--gold)" }}>Product catalogue</div>
          <h1 className="mt-3 max-w-3xl text-4xl font-black leading-tight md:text-5xl">Every spare you need to keep motors and panels running.</h1>
          <p className="mt-5 max-w-2xl text-white/75">Standard parts from stock, custom parts built to drawing.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2">
          {catalogue.map((cat) => (
            <article key={cat.title} className="group rounded-md border border-border bg-card p-8 transition-shadow hover:shadow-[var(--shadow-card)]">
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-2xl font-bold text-primary">{cat.title}</h2>
                <span className="rounded-sm border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest" style={{ borderColor: "var(--gold)", color: "oklch(0.5 0.12 85)" }}>{cat.tag}</span>
              </div>
              <div className="mt-4 h-px w-12 transition-all group-hover:w-20" style={{ background: "var(--gold)" }} />
              <ul className="mt-6 grid gap-2 text-sm text-foreground/80 sm:grid-cols-2">
                {cat.items.map((i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full" style={{ background: "var(--navy)" }} />
                    {i}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="mt-6 inline-block text-sm font-semibold text-primary hover:underline">
                Enquire about {cat.title.toLowerCase()} →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold text-primary">Don't see your part?</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">We manufacture against samples and drawings. Send us what you need and we'll quote it.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center rounded-sm px-8 py-3.5 text-sm font-semibold shadow-lg transition-transform hover:-translate-y-0.5" style={{ background: "var(--gradient-gold)", color: "var(--navy-deep)" }}>
            Request a custom quote →
          </Link>
        </div>
      </section>
    </div>
  );
}