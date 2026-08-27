import { WHATSAPP_URL } from "../config";
import painelFundamentos from "../assets/painel-fundamentos.png";
import ninja from "../assets/ninja.png";
import pareDeCopiar from "../assets/pare-de-copiar.png";
import criePersonagens from "../assets/crie-personagens.png";
import painelProfessor from "../assets/painel-professor.png";
import agendeWhatsapp from "../assets/agende-whatsapp.png";
import botao from "../assets/botao-quero-aprender.png";
import sparkle from "../assets/logo.png";

/* Artes com dimensões intrínsecas (evita layout-shift / reserva o aspect-ratio) */
const ART = {
  fundamentos: { src: painelFundamentos, alt: "Aprenda os fundamentos do desenho", w: 1251, h: 594 },
  ninja: { src: ninja, alt: "Ilustração do ninja PG_NINJA em capuz azul", w: 760, h: 1117 },
  pare: { src: pareDeCopiar, alt: "Ilustração autoral em preto e branco com a frase Pare de copiar", w: 550, h: 655 },
  crie: { src: criePersonagens, alt: "Crie personagens e desenhos épicos", w: 352, h: 363 },
  professor: { src: painelProfessor, alt: "Professor Pablo Gutierrez, PG_NINJA", w: 1251, h: 594 },
  agende: { src: agendeWhatsapp, alt: "Agende sua aula pelo WhatsApp", w: 1243, h: 53 },
  botao: { src: botao, alt: "Quero aprender - falar no WhatsApp", w: 422, h: 173 },
} as const;

type ArtKey = keyof typeof ART;

function Art({ name, className, eager = false }: { name: ArtKey; className: string; eager?: boolean }) {
  const a = ART[name];
  return (
    <img
      src={a.src}
      alt={a.alt}
      width={a.w}
      height={a.h}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      className={className}
    />
  );
}

const ctaLinkClasses =
  "inline-block transition-transform duration-200 hover:-translate-y-1 hover:scale-105 active:scale-95 focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-cyan-pop";

export default function Hero() {
  return (
    <section id="inicio" className="px-4 pb-8 pt-6 md:pt-8">
      {/* Título semântico (SEO/acessibilidade) — a composição visual fica por
          conta das artes, então o h1 é visualmente oculto */}
      <h1 className="sr-only">
        Aprenda os fundamentos do desenho com o Professor Pablo Gutierrez, PG_NINJA
      </h1>

      {/* Composição PG_NINJA — canvas retrato proporcional (mesmas proporções
          em qualquer largura; escala por %). Peça gráfica dominante e centralizada. */}
      <div className="relative mx-auto aspect-[627/915] w-full max-w-[1280px]">
        {/* Painel: APRENDA OS FUNDAMENTOS DO DESENHO */}
        <Art
          name="fundamentos"
          eager
          className="absolute left-[12.8%] top-[7.1%] z-10 w-[70.3%] drop-shadow-[0_16px_36px_rgba(0,0,0,0.55)]"
        />

        {/* Ninja PG_NINJA (sobreposto, em destaque) */}
        <Art
          name="ninja"
          eager
          className="absolute left-[53.1%] top-[11.6%] z-20 w-[40.4%] drop-shadow-[0_22px_46px_rgba(0,0,0,0.6)]"
        />

        {/* Sparkle decorativo — canto superior esquerdo do painel APRENDA */}
        <img
          src={sparkle}
          alt=""
          aria-hidden="true"
          className="absolute left-[12.4%] top-[5.9%] z-40 w-[11%]"
        />

        {/* Painel: PARE DE COPIAR! */}
        <Art
          name="pare"
          className="absolute left-[12.8%] top-[31%] z-10 w-[32%] drop-shadow-[0_16px_36px_rgba(0,0,0,0.55)]"
        />

        {/* Balão: CRIE PERSONAGENS E DESENHOS ÉPICOS */}
        <Art
          name="crie"
          className="absolute left-[34%] top-[45%] z-30 w-[31%]"
        />

        {/* Painel: PROFESSOR PABLO GUTIERREZ */}
        <Art
          name="professor"
          className="absolute left-[12.8%] top-[58.1%] z-10 w-[70.3%] drop-shadow-[0_16px_36px_rgba(0,0,0,0.55)]"
        />

        {/* Sparkle decorativo — canto superior direito do painel PROFESSOR */}
        <img
          src={sparkle}
          alt=""
          aria-hidden="true"
          className="absolute left-[75%] top-[56.5%] z-40 w-[8.5%]"
        />

        {/* Chamada: AGENDE SUA AULA PELO WHATSAPP! */}
        <Art
          name="agende"
          className="absolute left-[12.8%] top-[83%] z-10 w-[70.3%]"
        />

        {/* Botão CTA: QUERO APRENDER → WhatsApp */}
        <div className="absolute left-1/2 top-[87.4%] z-30 w-[23.9%] -translate-x-1/2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Quero aprender - falar no WhatsApp"
            className={`${ctaLinkClasses} w-full`}
          >
            <Art
              name="botao"
              className="h-auto w-full max-w-full drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
