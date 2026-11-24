import { isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  PLATFORM_ID,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { Icon, IconName } from './icon/icon';

/** ====== PREENCHER ANTES DE PUBLICAR ====== */
const WHATSAPP_NUMBER = '55XXXXXXXXXXX'; // DDI + DDD + número, só dígitos
const CIDADE = '[cidade]';
const CREF = '[número]';
const ANOS = '[x]';
const ALUNAS = '[X]+';
/** ========================================= */

interface Step {
  title: string;
  text: string;
  icon: IconName;
}
interface Plan {
  title: string;
  desc: string;
  icon: IconName;
  items: string[];
  cta: string;
  featured: boolean;
}
interface Result {
  caption: string;
  alt: string;
  image?: string;
}

@Component({
  selector: 'app-root',
  imports: [Icon],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  private readonly platformId = inject(PLATFORM_ID);

  protected readonly city = CIDADE;
  protected readonly cref = CREF;
  protected readonly instagram = 'danielaaraujo.personal';
  protected readonly instagramUrl = 'https://instagram.com/danielaaraujo.personal';
  protected readonly whatsapp = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Oi Daniela! Vim pelo site e quero começar meu treino.',
  )}`;
  protected readonly whatsappDisplay = '[número]';

  protected readonly menuOpen = signal(false);
  protected readonly slide = signal(0);
  protected readonly year = new Date().getFullYear();

  private readonly track = viewChild<ElementRef<HTMLElement>>('track');

  protected readonly navLinks = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Método', href: '#metodo' },
    { label: 'Resultados', href: '#resultados' },
    { label: 'Planos', href: '#planos' },
    { label: 'Dúvidas', href: '#faq' },
  ];

  protected readonly pains = [
    'Treina há meses e sente que está estagnada',
    'Não sabe se está fazendo os exercícios do jeito certo',
    'Quer ganhar massa magra sem perder a feminilidade',
    'Quer ombros definidos e pernas fortes',
    'Precisa de alguém que acompanhe de perto e ajuste o treino',
  ];

  protected readonly badges = [
    { value: `CREF ${CREF}`, label: 'Profissional registrada', icon: 'shield' as IconName },
    { value: `${ANOS} anos`, label: 'de experiência', icon: 'award' as IconName },
    { value: ALUNAS, label: 'alunas atendidas', icon: 'users' as IconName },
    { value: 'Presencial + online', label: 'Onde você estiver', icon: 'map-pin' as IconName },
  ];

  protected readonly steps: Step[] = [
    {
      title: 'Avaliação e objetivo',
      text: 'Conversamos sobre sua rotina, seu histórico, suas limitações e onde você quer chegar. Tudo começa por você.',
      icon: 'target',
    },
    {
      title: 'Treino individualizado',
      text: 'Um plano montado para o seu corpo, com foco em hipertrofia e prioridade nas regiões que você quer desenvolver.',
      icon: 'user',
    },
    {
      title: 'Execução com técnica',
      text: 'Você aprende a treinar do jeito certo, com orientação de postura, carga e execução. Mais resultado, menos risco de lesão.',
      icon: 'dumbbell',
    },
    {
      title: 'Ajustes e evolução',
      text: 'Seu treino evolui junto com você. A cada ciclo eu analiso seus resultados e ajusto o que for preciso.',
      icon: 'trending-up',
    },
  ];

  protected readonly differentials = [
    {
      title: 'Especialista em hipertrofia feminina',
      text: 'Foco total no que mais importa para a mulher que quer resultado.',
      icon: 'award' as IconName,
    },
    {
      title: 'Ombros e quadríceps',
      text: 'Estratégia específica para desenvolver as regiões que mudam o seu shape.',
      icon: 'target' as IconName,
    },
    {
      title: 'Treino 100% individual',
      text: 'Nada de planilha genérica.',
      icon: 'user' as IconName,
    },
    {
      title: 'Presencial ou online',
      text: 'Você escolhe o formato que cabe na sua rotina.',
      icon: 'monitor' as IconName,
    },
    {
      title: 'Acompanhamento próximo',
      text: 'Ajustes e suporte durante todo o processo.',
      icon: 'message' as IconName,
    },
    {
      title: 'Atualização constante',
      text: 'Congressos e capacitações para trazer o que há de mais moderno.',
      icon: 'sparkles' as IconName,
    },
  ];

  /** Para adicionar mais resultados, coloque a foto autorizada em public/images/resultados e inclua aqui. */
  protected readonly results: Result[] = [
    {
      caption: 'Lohanny | Em evolução constante',
      alt: 'Antes e depois da aluna Lohanny na academia',
      image: 'images/resultados/lohanny.jpg',
    },
    {
      caption: 'Alunas | De 2024 para 2026',
      alt: 'Grupo de alunas na academia em 2024 e em 2026',
      image: 'images/resultados/alunas-2024-2026.jpg',
    },
  ];

  protected readonly plans: Plan[] = [
    {
      title: 'Treino presencial',
      desc: 'Para quem quer acompanhamento lado a lado, com correção de execução em tempo real.',
      icon: 'users',
      items: [
        'Avaliação inicial',
        'Treino individualizado',
        'Correção de técnica ao vivo',
        'Ajustes constantes',
      ],
      cta: 'Quero treinar presencial',
      featured: false,
    },
    {
      title: 'Consultoria online',
      desc: 'Para quem quer o método da Daniela de qualquer lugar do Brasil.',
      icon: 'monitor',
      items: [
        'Avaliação inicial online',
        'Treino individualizado no seu app ou PDF',
        'Vídeos de execução dos exercícios',
        'Suporte e ajustes pelo WhatsApp',
      ],
      cta: 'Quero a consultoria online',
      featured: true,
    },
  ];

  protected readonly faqs = [
    {
      q: 'Nunca treinei, posso começar?',
      a: 'Pode. O treino é montado para o seu nível atual e evolui com você.',
    },
    {
      q: 'Vou ficar "grande demais"?',
      a: 'Não. Hipertrofia feminina é ganho de massa magra de forma controlada. O treino é planejado para definir e fortalecer, respeitando o seu objetivo.',
    },
    {
      q: 'Como funciona a consultoria online?',
      a: 'Depois da avaliação, você recebe seu treino individualizado, com vídeos de execução, e conta com o meu suporte para tirar dúvidas e fazer ajustes.',
    },
    {
      q: 'Preciso ir à academia?',
      a: 'O treino é pensado para o local onde você treina. Conversamos sobre isso na avaliação.',
    },
    {
      q: 'Em quanto tempo vejo resultado?',
      a: 'Depende de cada pessoa, mas com constância e acompanhamento a evolução costuma aparecer já nas primeiras semanas.',
    },
    {
      q: 'Como começo?',
      a: 'É só clicar no botão e me chamar no WhatsApp. Vamos conversar sobre o seu objetivo.',
    },
  ];

  protected toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected scrollSlides(dir: 1 | -1): void {
    const el = this.track()?.nativeElement;
    if (!el || !isPlatformBrowser(this.platformId)) return;
    const card = el.querySelector<HTMLElement>('[data-slide]');
    const step = (card?.offsetWidth ?? el.clientWidth) + 16;
    // Volta ao início/fim ao chegar nas pontas
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    if (dir === 1 && atEnd) el.scrollTo({ left: 0, behavior: 'smooth' });
    else if (dir === -1 && el.scrollLeft <= 4)
      el.scrollTo({ left: el.scrollWidth, behavior: 'smooth' });
    else el.scrollBy({ left: dir * step, behavior: 'smooth' });
  }

  protected goToSlide(i: number): void {
    const el = this.track()?.nativeElement;
    const card = el?.querySelectorAll<HTMLElement>('[data-slide]')[i];
    if (el && card && isPlatformBrowser(this.platformId)) {
      el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: 'smooth' });
    }
  }

  protected onSlideScroll(): void {
    const el = this.track()?.nativeElement;
    if (!el) return;
    const cards = Array.from(el.querySelectorAll<HTMLElement>('[data-slide]'));
    let best = 0;
    let dist = Infinity;
    cards.forEach((c, i) => {
      const d = Math.abs(c.offsetLeft - el.offsetLeft - el.scrollLeft);
      if (d < dist) {
        dist = d;
        best = i;
      }
    });
    if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 4) best = cards.length - 1;
    this.slide.set(best);
  }
}
