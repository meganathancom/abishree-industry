import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

const logo3d = { url: "/abishree-logo-3d.png" };
const logoOutline = { url: "/abishree-logo-outline.png" };

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Abishree Industry — DC Motor & Electrical Motor Spares Manufacturer" },
      { name: "description", content: "Abishree Industry (formerly Abirami Bakelite & Plastic, est. 1994) manufactures DC motor spares, bakelite, plastic-rubber components, connectors, terminal & panel board accessories — made to your drawing." },
      { name: "author", content: "Abishree Industry" },
      { property: "og:title", content: "Abishree Industry — DC Motor & Electrical Motor Spares" },
      { property: "og:description", content: "Custom electrical spares manufactured to your drawing. Parent company Abirami Bakelite & Plastic since 1994." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}

function SiteHeader() {
  const nav = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ] as const;
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 shadow-sm backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-6">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo3d.url}
            alt="Abishree Industry"
            className="h-14 w-14 rounded-full object-cover shadow-md ring-1 ring-[color:var(--gold)]/40"
          />
          <span className="flex flex-col leading-tight">
            <span className="text-[15px] font-bold tracking-tight text-primary sm:text-base">ABISHREE INDUSTRY</span>
            <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Formerly Abirami Bakelite & Plastic · Est. 1994
            </span>
            <span className="mt-0.5 hidden items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] sm:inline-flex" style={{ color: "var(--navy)" }}>
              <span aria-hidden className="inline-block h-1 w-1 rounded-full" style={{ background: "var(--gold)" }} />
              Reliable Connections · Brighter Futures
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-sm px-3 py-2 text-sm font-medium text-foreground/75 transition-colors hover:text-primary"
              activeProps={{ className: "rounded-sm px-3 py-2 text-sm font-semibold text-primary" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <Link to="/contact" className="ml-2 inline-flex items-center rounded-sm px-4 py-2 text-sm font-semibold shadow-sm transition-transform hover:-translate-y-0.5" style={{ background: "var(--gradient-gold)", color: "var(--navy-deep)" }}>
            Request Quote
          </Link>
        </nav>
      </div>
      <QualityStrip />
    </header>
  );
}

function QualityStrip() {
  return (
    <div
      className="w-full border-t border-white/10 text-[11px] font-medium tracking-wide"
      style={{ background: "var(--gradient-hero)", color: "#f4e9c8" }}
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-1 px-6 py-2 text-center sm:justify-between">
        <span className="inline-flex items-center gap-2">
          <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: "var(--gold)" }} />
          <span>
            <strong style={{ color: "var(--gold)" }}>Uncompromised Quality</strong>
            <span className="hidden text-white/75 sm:inline"> — precision, durability & finish you can rely on, every batch.</span>
          </span>
        </span>
        <span className="hidden items-center gap-2 text-white/85 sm:inline-flex">
          <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: "var(--gold)" }} />
          Every part manufactured strictly to the drawing supplied by the customer.
        </span>
      </div>
    </div>
  );
}

function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60" style={{ background: "var(--navy-deep)" }}>
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 text-sm text-white/70 md:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-3">
            <img
              src={logoOutline.url}
              alt="Abishree Industry emblem"
              className="h-14 w-14 rounded-full bg-white p-1"
            />
            <div className="text-base font-bold text-white">Abishree Industry</div>
          </div>
          <p>Precision manufacturer of DC motor spares, bakelite, plastic & rubber electrical components. Parent company Abirami Bakelite & Plastic — serving industry since 1994.</p>
          <p className="mt-3 text-xs uppercase tracking-[0.2em] text-[color:var(--gold)]">Reliable Connections · Brighter Futures</p>
        </div>
        <div>
          <div className="mb-3 font-semibold text-white">Products</div>
          <ul className="space-y-1.5">
            <li>Terminals & Connectors</li>
            <li>Bakelite Components</li>
            <li>Plastic & Rubber Spares</li>
            <li>DC Motor Spares</li>
            <li>Panel Board Accessories</li>
          </ul>
        </div>
        <div>
          <div className="mb-3 font-semibold text-white">Company</div>
          <ul className="space-y-1.5">
            <li><Link to="/about" className="hover:text-[color:var(--gold)]">About us</Link></li>
            <li><Link to="/products" className="hover:text-[color:var(--gold)]">Catalogue</Link></li>
            <li><Link to="/contact" className="hover:text-[color:var(--gold)]">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="mb-3 font-semibold text-white">Get in touch</div>
          <ul className="space-y-1.5">
            <li><a href="mailto:abishreeindustry@gmail.com" className="hover:text-[color:var(--gold)]">abishreeindustry@gmail.com</a></li>
            <li>Made-to-drawing spares</li>
            <li>India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Abishree Industry. All rights reserved.
      </div>
    </footer>
  );
}
