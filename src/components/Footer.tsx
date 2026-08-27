import { EMAIL, SOCIAL_LINKS } from "../config";

export default function Footer() {
  return (
    <footer className="border-t-4 border-black bg-ink/90">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-5 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="font-display text-xl text-magenta">PG_NINJA</p>

        <ul className="flex items-center gap-5">
          {SOCIAL_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground/85 transition-colors hover:text-magenta focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-pop"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${EMAIL}`}
          className="text-sm text-foreground/75 transition-colors hover:text-magenta focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-pop"
        >
          {EMAIL}
        </a>
      </div>

      <p className="border-t border-white/10 py-3 text-center text-xs text-foreground/60">
        © 2026 PG_NINJA. Todos os direitos reservados.
      </p>
    </footer>
  );
}
