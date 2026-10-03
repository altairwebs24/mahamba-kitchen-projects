import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { contact } from "@/lib/site";

const navigation = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Services", to: "/services" },
  { label: "Our process", to: "/process" },
  { label: "Contact", to: "/contact" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (state) => state.location.pathname });
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="site-header">
        <div className="site-container flex h-full items-center justify-between gap-5">
          <Link to="/" className="brand" aria-label="Mahamba Kitchen Projects home" onClick={() => setOpen(false)}>
            <span>Mahamba</span><small>KITCHEN PROJECTS</small>
          </Link>
          <nav className="hidden items-center gap-9 lg:flex" aria-label="Main navigation">
            {navigation.map((item) => <Link key={item.to} to={item.to} className={`nav-link ${path === item.to ? "is-active" : ""}`}>{item.label}</Link>)}
          </nav>
          <div className="hidden lg:block"><Button asChild variant="siteOutline"><Link to="/contact">Enquire now <ArrowUpRight /></Link></Button></div>
          <Button variant="siteIcon" size="icon" className="lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
        </div>
        {open && <nav className="mobile-nav lg:hidden" aria-label="Mobile navigation">{navigation.map((item, i) => <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className={path === item.to ? "is-active" : ""}><span>0{i + 1}</span>{item.label}<ArrowUpRight size={18} /></Link>)}</nav>}
      </header>
      <main>{children}</main>
      <footer className="footer-band">
        <div className="site-container">
          <div className="footer-top"><div><p className="eyebrow text-gold">Have something in mind?</p><h2 className="display-title mt-4 max-w-2xl">Let's make room for <em>something beautiful.</em></h2></div><Button asChild variant="siteGold"><Link to="/contact">Start a project <ArrowUpRight /></Link></Button></div>
          <div className="footer-grid">
            <div><Link to="/" className="brand brand-light"><span>Mahamba</span><small>KITCHEN PROJECTS</small></Link><p className="mt-5 max-w-xs text-sm leading-7 text-muted-light">Thoughtful kitchens, cabinetry and living spaces, crafted around the way you live.</p></div>
            <div><p className="footer-label">Explore</p>{navigation.map(item => <Link key={item.to} to={item.to} className="footer-link">{item.label}</Link>)}</div>
            <div><p className="footer-label">Get in touch</p><a className="footer-link" href={contact.phoneHref}>{contact.phone}</a><a className="footer-link break-all" href={`mailto:${contact.email}`}>{contact.email}</a><p className="mt-5 max-w-xs text-sm leading-6 text-muted-light">{contact.address}</p></div>
          </div>
          <div className="footer-bottom"><span>© {new Date().getFullYear()} Mahamba Kitchen Projects</span><span>Crafted for living.</span></div>
        </div>
      </footer>
    </div>
  );
}