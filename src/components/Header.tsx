import { WHATSAPP_URL, EMAIL } from "../config";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-4 border-black bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <a
          href="#inicio"
          aria-label="PG_NINJA - voltar ao início"
          className="flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-pop"
        >
          <img src={logo} alt="Logo PG_NINJA" className="h-10 w-auto md:h-12" />
          <span className="font-display text-xl tracking-tight text-magenta transition-colors hover:text-cyan-pop md:text-2xl">
            PG_NINJA
          </span>
        </a>

        <div className="flex items-center gap-4">
          <a
            href={`mailto:${EMAIL}`}
            className="hidden text-sm text-foreground/80 transition-colors hover:text-magenta focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-pop sm:inline"
          >
            {EMAIL}
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border-4 border-black bg-magenta px-4 py-2 font-display text-xs uppercase tracking-wider text-foreground shadow-[4px_4px_0_0_#000] transition-transform hover:-translate-y-0.5 hover:bg-electric active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-pop"
          >
            Quero aprender
          </a>
        </div>
      </div>
    </header>
  );
}
