import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Quote Request — Abishree Industry" },
      { name: "description", content: "Request a quote for DC motor spares, bakelite, connectors, terminal or panel board parts. Call, email or send us your specification." },
      { property: "og:title", content: "Contact Abishree Industry" },
      { property: "og:description", content: "Get pricing and lead time on electrical spare parts within one working day." },
    ],
  }),
  component: Contact,
});

const categories = ["DC Motor Spares", "Bakelite Components", "Plastic & Rubber Spares", "Electrical Connectors", "Terminal Boards", "Panel Board Accessories", "Other / Custom"];

function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: fd.get("name"),
      company: fd.get("company"),
      phone: fd.get("phone"),
      email: fd.get("email"),
      category: fd.get("category"),
      quantity: fd.get("qty"),
      message: fd.get("message"),
      _subject: `Quote request — ${fd.get("category")} — ${fd.get("name")}`,
      _template: "table",
      _captcha: "false",
    };
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("https://formsubmit.co/ajax/abishreeindustry@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && (data.success === "true" || data.success === true)) {
        setStatus("success");
        form.reset();
      } else {
        throw new Error(data?.message || "Submission failed");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <div>
      <section className="border-b border-border/60" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-7xl px-6 py-20 text-white">
          <div className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--gold)" }}>Contact</div>
          <h1 className="mt-3 max-w-3xl text-4xl font-black leading-tight md:text-5xl">Tell us what you need. We'll come back within a day.</h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1fr_1.4fr]">
        {/* Contact info */}
        <aside className="space-y-8">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest" style={{ color: "oklch(0.5 0.12 85)" }}>Reach us</div>
            <div className="mt-4 space-y-4 text-sm">
              <div>
                <div className="font-semibold text-primary">Sales & enquiries</div>
                <div className="mt-1"><a href="mailto:abishreeindustry@gmail.com" className="text-muted-foreground hover:text-primary">abishreeindustry@gmail.com</a></div>
                <div className="mt-2 text-xs text-muted-foreground">Enquiries submitted through the form on this page are delivered straight to this inbox — no email app required.</div>
              </div>
              <div>
                <div className="font-semibold text-primary">Working hours</div>
                <div className="mt-1 text-muted-foreground">Mon – Sat · 9:30 AM to 6:30 PM</div>
              </div>
              <div>
                <div className="font-semibold text-primary">About the company</div>
                <div className="mt-1 text-muted-foreground">Abishree Industry (est. 2018), the successor to <strong>Abirami Bakelite & Plastic</strong> (est. 1998). Every part is manufactured to the drawing supplied by the customer.</div>
              </div>
            </div>
          </div>
          <div className="rounded-md border p-5" style={{ background: "color-mix(in oklab, var(--gold) 12%, transparent)", borderColor: "color-mix(in oklab, var(--gold) 35%, transparent)" }}>
            <div className="text-sm font-bold text-primary">How this form works</div>
            <p className="mt-1 text-xs text-foreground/70">When you press <strong>Send Enquiry</strong>, your details are sent directly to <strong>abishreeindustry@gmail.com</strong> from this website — no email app needed. To share a drawing or sample photo, please attach it in a follow-up reply or email us directly.</p>
          </div>
        </aside>

        {/* Form */}
        <form onSubmit={onSubmit} className="rounded-md border border-border bg-card p-8 shadow-[var(--shadow-card)]">
          <h2 className="text-2xl font-bold text-primary">Request a quote</h2>
          <p className="mt-1 text-sm text-muted-foreground">Fill in the details and we'll respond with pricing and lead time.</p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <Field label="Your name" name="name" required />
            <Field label="Company" name="company" />
            <Field label="Phone" name="phone" type="tel" required />
            <Field label="Email" name="email" type="email" required />
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Product category</label>
              <select name="category" required className="rounded-sm border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary">
                {categories.map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>
            <Field label="Approx. quantity" name="qty" placeholder="e.g. 500 pcs" />
          </div>

          <div className="mt-5 flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Your requirement</label>
            <textarea name="message" required rows={5} placeholder="Describe the part, material, dimensions or reference number..." className="rounded-sm border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary" />
          </div>

          <button type="submit" disabled={status === "sending"} className="mt-8 inline-flex w-full items-center justify-center rounded-sm px-6 py-3.5 text-sm font-semibold shadow-lg transition-transform hover:-translate-y-0.5 disabled:opacity-60 md:w-auto" style={{ background: "var(--gradient-gold)", color: "var(--navy-deep)" }}>
            {status === "sending" ? "Sending…" : "Send Enquiry →"}
          </button>
          {status === "success" && (
            <p className="mt-4 rounded-sm border border-green-600/30 bg-green-600/10 p-3 text-sm text-green-800 dark:text-green-300">
              Thank you — your enquiry has been sent to abishreeindustry@gmail.com. We'll get back to you within one working day.
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 rounded-sm border border-red-600/30 bg-red-600/10 p-3 text-sm text-red-800 dark:text-red-300">
              We couldn't send your enquiry ({errorMsg || "network error"}). Please email us directly at <a href="mailto:abishreeindustry@gmail.com" className="font-semibold underline">abishreeindustry@gmail.com</a>.
            </p>
          )}
        </form>
      </section>
    </div>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}{required && <span style={{ color: "var(--gold)" }}> *</span>}</label>
      <input name={name} type={type} required={required} placeholder={placeholder} className="rounded-sm border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary" />
    </div>
  );
}