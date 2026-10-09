import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site-layout";
import { contact, images, pageHead, projects } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => pageHead("Bespoke Kitchens & Living Spaces", "Mahamba Kitchen Projects creates custom kitchens, cabinetry and entertainment units in Mamelodi, Pretoria.", images.hero),
  component: Index,
});

function Index() {
  return <SiteLayout>
    <section className="hero-photo">
      <img className="hero-photo-image" src={images.hero} alt="Completed white marble island kitchen by Mahamba Kitchen Projects" fetchPriority="high" />
      <div className="hero-photo-shade" aria-hidden="true" />
      <div className="site-container hero-photo-content">
        <p className="eyebrow mb-5 text-gold">Custom interiors · Pretoria</p>
        <h1 className="display-title max-w-[800px]">Mahamba Kitchen Projects.<br /><em className="text-gold">Artistry</em> in wood.</h1>
        <div className="mt-6 h-px w-14 bg-gold" />
        <p className="mt-6 max-w-md text-sm leading-7 text-primary-foreground/90">Beautifully considered kitchens, wardrobes and living spaces, made to feel entirely yours.</p>
        <Button asChild variant="siteGold" size="lg" className="mt-8"><Link to="/projects">Explore our work <ArrowUpRight /></Link></Button>
      </div>
    </section>

    <section className="border-t border-border py-20 md:py-28"><div className="site-container">
      <div className="mb-10 flex items-end justify-between gap-6"><div><p className="eyebrow text-sage">The portfolio</p><h2 className="section-title mt-3">Recent <em>projects</em></h2></div><Link to="/projects" className="rule-link shrink-0">See all <ArrowUpRight size={16} /></Link></div>
      <div className="grid gap-12 md:grid-cols-2 md:gap-8">{projects.slice(0,4).map((project, index) => <Link to="/projects" key={project.title} className="group block"><div className="image-frame aspect-square"><img src={project.image} alt={project.alt} loading="lazy" /></div><div className="mt-5 flex items-start justify-between"><div><p className="eyebrow text-gold">0{index + 1} / {project.category}</p><h3 className="mt-2 font-serif text-3xl italic">{project.title}</h3></div><ArrowUpRight size={20} className="text-gold" /></div></Link>)}</div>
    </div></section>

    <section className="bg-primary py-20 text-primary-foreground md:py-28"><div className="site-container grid gap-12 md:grid-cols-2 md:gap-20"><div><p className="eyebrow text-gold">Our approach</p><h2 className="section-title mt-6 max-w-lg italic">“Crafting the heart of your home.”</h2></div><div className="flex flex-col justify-center gap-10"><div className="border-l border-gold/50 pl-6"><h3 className="eyebrow text-gold">The vision</h3><p className="mt-3 text-sm leading-7 text-primary-foreground/70">Every space begins with your ideas, your routines and the details that make a home feel personal.</p></div><div className="border-l border-gold/50 pl-6"><h3 className="eyebrow text-gold">The making</h3><p className="mt-3 text-sm leading-7 text-primary-foreground/70">Thoughtful proportions and clean finishes bring practical storage and beautiful design together.</p></div><Link to="/process" className="rule-link ml-6 w-fit text-primary-foreground">Explore our process <ArrowUpRight size={16} /></Link></div></div></section>

    <section className="site-container py-20 text-center md:py-28"><p className="eyebrow text-sage">Your space, reimagined</p><h2 className="section-title mx-auto mt-5 max-w-2xl">Start your bespoke <em>kitchen journey.</em></h2><p className="body-copy mx-auto mt-5 max-w-md">Tell us what you have in mind. We would love to hear about it.</p><div className="mx-auto mt-9 flex max-w-md flex-col justify-center gap-3 sm:flex-row"><Button asChild variant="siteOutline" size="lg"><a href={contact.phoneHref}>Call {contact.phone}</a></Button><Button asChild variant="siteGold" size="lg"><Link to="/contact">Get in touch <ArrowUpRight /></Link></Button></div></section>
  </SiteLayout>;
}