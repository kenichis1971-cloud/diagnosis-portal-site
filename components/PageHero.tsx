type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  className?: string;
};

export function PageHero({ eyebrow, title, description, className }: PageHeroProps) {
  const heroClassName = ["page-hero", "hero-image-slot", className].filter(Boolean).join(" ");

  return (
    <section className={heroClassName}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
}
