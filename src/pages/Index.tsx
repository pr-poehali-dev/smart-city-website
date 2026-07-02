import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/17349256-b48f-4ec4-bde4-ade5e7ace309/files/b5d8223a-e236-4877-97ff-57f2afde78ca.jpg';

const LOGO =
  'https://cdn.poehali.dev/projects/17349256-b48f-4ec4-bde4-ade5e7ace309/bucket/430129fc-7c77-4596-b840-3b4d13c41b54.png';

const nav = [
  { label: 'Портфолио', href: '#portfolio' },
  { label: 'Услуги', href: '#services' },
  { label: 'О компании', href: '#about' },
  { label: 'Контакты', href: '#contacts' },
];

const modules = [
  {
    icon: 'FileText',
    title: 'Проектная документация',
    desc: 'Разработка по ПП РФ №87 для прохождения экспертиз, рабочей документации по СПДС и BIM-моделей объектов.',
    tag: 'DOCUMENTATION',
  },
  {
    icon: 'Box',
    title: 'BIM-моделирование',
    desc: 'BIM-модели новых и действующих объектов, цифровые двойники для работы персонала предприятий заказчика.',
    tag: 'BIM / 3D',
  },
  {
    icon: 'Eye',
    title: 'Авторский надзор',
    desc: 'Надзор за строительством, исполнительная документация по факту реализации инвестиционного проекта.',
    tag: 'SUPERVISION',
  },
];

const projects = [
  { name: 'Квартал «Аврора»', type: 'Жилой район · 42 га', metric: '18 000 жителей' },
  { name: 'ЖК «Меридиан»', type: 'Многоэтажная застройка', metric: '9 корпусов' },
  { name: 'Технопарк «Исеть»', type: 'Общественно-деловая зона', metric: '120 000 м²' },
  { name: 'Микрорайон «Северный»', type: 'Комплексное развитие', metric: '65 га' },
];

const services = [
  {
    icon: 'FileText',
    title: 'Проектная документация',
    desc: 'Разработка по ПП РФ №87 для прохождения экспертиз, рабочей документации по СПДС, BIM-моделей объектов строительства.',
  },
  {
    icon: 'Eye',
    title: 'Авторский надзор',
    desc: 'Надзор за строительством, исполнительная документация по факту реализации, BIM-модель по итогам инвестпроекта.',
  },
  {
    icon: 'MessageSquare',
    title: 'Техническое консультирование',
    desc: 'Консультирование заказчика по техническим вопросам для определения целей инвестирования.',
  },
  {
    icon: 'Lightbulb',
    title: 'Предпроектные проработки',
    desc: 'Общие технические решения и концепты для принятия решений о начале инвестирования.',
  },
  {
    icon: 'Box',
    title: 'BIM-моделирование',
    desc: 'Формирование BIM-моделей действующих объектов для работы персонала предприятий заказчика.',
  },
  {
    icon: 'ClipboardList',
    title: 'Помощь в составлении ТЗ',
    desc: 'Содействие заказчику в составлении и утверждении технического задания на проектирование.',
  },
  {
    icon: 'PenTool',
    title: 'Дизайн-проектирование',
    desc: 'Полный цикл дизайнерских решений любых объектов по брендбуку, техническому заданию или без него.',
  },
  {
    icon: 'Layers',
    title: 'Комплексные изыскания',
    desc: 'Инженерно-геодезические, геологические и экологические изыскания для проектирования объектов.',
  },
];

const stats = [
  { value: '18', label: 'лет на рынке' },
  { value: '240+', label: 'реализованных проектов' },
  { value: '3.2 млн', label: 'м² запроектировано' },
  { value: '100%', label: 'BIM-проектирование' },
];

export default function Index() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-neon-cyan/30">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="container flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <img src={LOGO} alt="Оттенок" className="h-10 w-auto rounded-sm bg-white/95 px-1.5 py-1 box-glow" />
            <span className="hidden sm:block font-display font-bold uppercase tracking-widest text-sm leading-tight">
              Архитектурное бюро<br /><span className="text-neon-cyan">«Оттенок»</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-neon-cyan transition-colors">
                {n.label}
              </a>
            ))}
          </nav>
          <a href="#contacts">
            <Button className="bg-neon-cyan text-primary-foreground hover:bg-neon-cyan/90 font-mono text-xs uppercase tracking-widest rounded-none">
              Обсудить проект
            </Button>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg animate-grid-flow opacity-60" />
        <div className="absolute inset-0 radial-glow" />
        <div className="container relative py-20 md:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-neon-cyan mb-6 flex items-center gap-3">
              <span className="inline-block w-10 h-px bg-neon-cyan" /> Smart City · Архитектурное бюро «Оттенок»
            </p>
            <h1 className="font-display font-bold uppercase leading-[0.95] text-4xl sm:text-5xl md:text-6xl">
              Проектируем <span className="text-neon-cyan text-glow">умные</span> города будущего
            </h1>
            <p className="mt-6 text-muted-foreground text-lg max-w-lg">
              Генеральный проектировщик жилых кварталов: аксонометрический разбор инфраструктуры, параметрическая архитектура и цифровые двойники инженерных сетей.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#portfolio">
                <Button size="lg" className="bg-neon-cyan text-primary-foreground hover:bg-neon-cyan/90 font-mono uppercase tracking-widest rounded-none">
                  Смотреть проекты
                </Button>
              </a>
              <a href="#services">
                <Button size="lg" variant="outline" className="border-neon-blue/50 text-foreground hover:bg-neon-blue/10 font-mono uppercase tracking-widest rounded-none">
                  Услуги
                </Button>
              </a>
            </div>
          </div>

          <div className="relative animate-float">
            <div className="relative box-glow rounded-sm overflow-hidden border border-neon-cyan/30">
              <img src={HERO_IMG} alt="Аксонометрия умного квартала" className="w-full h-full object-cover" loading="eager" />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-neon-cyan/20 to-transparent animate-scan pointer-events-none" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-card border border-border px-4 py-3 font-mono text-xs box-glow">
              <span className="text-neon-cyan">●</span> LIVE · цифровой двойник
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="container relative pb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 border border-border divide-x divide-border bg-card/40">
            {stats.map((s) => (
              <div key={s.label} className="p-6 text-center">
                <div className="font-display font-bold text-3xl md:text-4xl text-neon-cyan text-glow">{s.value}</div>
                <div className="mt-1 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE MODULES */}
      <section className="container py-20">
        <SectionTitle index="01" title="Интерактивные модули" subtitle="Три ключевых слоя проектной модели квартала" />
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {modules.map((m) => (
            <div key={m.title} className="group relative bg-card border border-border p-8 box-glow-hover cursor-pointer">
              <div className="absolute top-4 right-5 font-mono text-[10px] tracking-widest text-muted-foreground">{m.tag}</div>
              <div className="w-14 h-14 flex items-center justify-center border border-neon-cyan/40 text-neon-cyan mb-6 group-hover:bg-neon-cyan/10 transition-colors">
                <Icon name={m.icon} size={26} />
              </div>
              <h3 className="font-display font-semibold uppercase text-xl tracking-wide">{m.title}</h3>
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{m.desc}</p>
              <div className="mt-6 flex items-center gap-2 font-mono text-xs text-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity">
                Открыть слой <Icon name="ArrowUpRight" size={14} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="relative py-20 border-y border-border">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="container relative">
          <SectionTitle index="02" title="Портфолио" subtitle="Реализованные генпланы и жилые кварталы" />
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {projects.map((p) => (
              <div key={p.name} className="group flex items-center justify-between bg-card border border-border p-7 box-glow-hover cursor-pointer">
                <div>
                  <h3 className="font-display font-semibold uppercase text-xl">{p.name}</h3>
                  <p className="font-mono text-xs text-muted-foreground mt-1">{p.type}</p>
                </div>
                <div className="text-right">
                  <div className="font-display font-bold text-neon-cyan text-lg">{p.metric}</div>
                  <Icon name="ArrowUpRight" className="inline text-muted-foreground group-hover:text-neon-cyan transition-colors mt-1" size={18} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="container py-20">
        <SectionTitle index="03" title="Услуги" subtitle="Полный цикл от идеи до ввода объекта в эксплуатацию" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border mt-12 border border-border">
          {services.map((s) => (
            <div key={s.title} className="group flex flex-col gap-4 bg-card p-6 box-glow-hover">
              <div className="w-11 h-11 flex items-center justify-center border border-neon-blue/40 text-neon-blue group-hover:bg-neon-blue/10 transition-colors">
                <Icon name={s.icon} size={20} />
              </div>
              <h3 className="font-display font-semibold uppercase text-base tracking-wide leading-tight">{s.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed flex-1">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative py-20 border-y border-border">
        <div className="absolute inset-0 radial-glow" />
        <div className="container relative grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle index="04" title="О компании" subtitle="" />
            <p className="mt-8 text-muted-foreground text-lg leading-relaxed">
              <span className="text-foreground font-medium">Архитектурное бюро «Оттенок»</span> — генеральный проектировщик с центром в Екатеринбурге. Мы объединяем градостроителей, архитекторов и инженеров вокруг единой BIM-модели и концепции «Умного города».
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Проектируем микрорайоны с продуманной топографией, транспортным каркасом и светящейся картой инженерных сетей — от школы во дворе до магистральной теплотрассы.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 font-mono text-xs uppercase tracking-widest">
              {['BIM', 'Autodesk Revit', 'Госэкспертиза', 'Smart City'].map((t) => (
                <span key={t} className="border border-neon-cyan/40 text-neon-cyan px-3 py-1.5">{t}</span>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="border border-neon-cyan/30 box-glow p-8 bg-card/60">
              <Icon name="MapPin" className="text-neon-cyan animate-glow-pulse" size={28} />
              <div className="mt-4 font-display font-bold uppercase text-2xl">Екатеринбург</div>
              <p className="font-mono text-xs text-muted-foreground mt-2">ул. Розы Люксембург, стр. 25, помещ. 27</p>
              <a
                href="https://2gis.ru/ekaterinburg/search/%D1%83%D0%BB.%20%D0%A0%D0%BE%D0%B7%D1%8B%20%D0%9B%D1%8E%D0%BA%D1%81%D0%B5%D0%BC%D0%B1%D1%83%D1%80%D0%B3%2025%2C%20%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex items-center gap-2 border border-neon-cyan/40 text-neon-cyan px-4 py-2.5 font-mono text-xs uppercase tracking-widest hover:bg-neon-cyan/10 transition-colors w-fit"
              >
                <Icon name="ExternalLink" size={14} /> Открыть на 2ГИС
              </a>
              <div className="mt-5 grid grid-cols-3 gap-px bg-border">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="aspect-square bg-card grid-bg" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="container py-20">
        <SectionTitle index="05" title="Контакты" subtitle="Расскажите о задаче — предложим проектное решение" />
        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          <div className="space-y-6 font-mono text-sm">
            <ContactRow icon="Phone" label="Телефон" value="+7 (343) 000-00-00" />
            <ContactRow icon="Mail" label="Почта" value="info@ottenok-ab.ru" />
            <ContactRow icon="MapPin" label="Офис" value="Екатеринбург, ул. Розы Люксембург, стр. 25, помещ. 27" href="https://2gis.ru/ekaterinburg/search/%D1%83%D0%BB.%20%D0%A0%D0%BE%D0%B7%D1%8B%20%D0%9B%D1%8E%D0%BA%D1%81%D0%B5%D0%BC%D0%B1%D1%83%D1%80%D0%B3%2025%2C%20%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3" />
            <ContactRow icon="Clock" label="Часы работы" value="Пн–Пт · 09:00–18:00" />
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="bg-card border border-border p-8 box-glow space-y-4"
          >
            <Input required placeholder="Ваше имя" className="bg-input border-border rounded-none focus-visible:ring-neon-cyan" />
            <Input required type="tel" placeholder="Телефон или e-mail" className="bg-input border-border rounded-none focus-visible:ring-neon-cyan" />
            <Textarea placeholder="Кратко о проекте" rows={4} className="bg-input border-border rounded-none focus-visible:ring-neon-cyan" />
            <Button type="submit" size="lg" className="w-full bg-neon-cyan text-primary-foreground hover:bg-neon-cyan/90 font-mono uppercase tracking-widest rounded-none">
              Отправить заявку
            </Button>
            {sent && (
              <p className="text-neon-cyan font-mono text-xs text-center animate-fade-in">
                ✓ Заявка отправлена. Мы свяжемся с вами.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border">
        <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-muted-foreground">
          <div className="flex items-center gap-2.5 font-display font-bold uppercase tracking-widest text-foreground text-sm">
            <img src={LOGO} alt="Оттенок" className="h-8 w-auto rounded-sm bg-white/95 px-1 py-0.5" />
            Архитектурное бюро «Оттенок»
          </div>
          <p>© 2026 АБ «Оттенок» · Екатеринбург, ул. Розы Люксембург, 25</p>
        </div>
      </footer>
    </div>
  );
}

function SectionTitle({ index, title, subtitle }: { index: string; title: string; subtitle: string }) {
  return (
    <div>
      <p className="font-mono text-xs text-neon-cyan tracking-widest">// {index}</p>
      <h2 className="font-display font-bold uppercase text-3xl md:text-4xl mt-2">{title}</h2>
      {subtitle && <p className="text-muted-foreground mt-3">{subtitle}</p>}
    </div>
  );
}

function ContactRow({ icon, label, value, href }: { icon: string; label: string; value: string; href?: string }) {
  return (
    <div className="flex items-center gap-4 border-b border-border pb-5">
      <div className="w-11 h-11 shrink-0 flex items-center justify-center border border-neon-cyan/40 text-neon-cyan">
        <Icon name={icon} size={20} />
      </div>
      <div>
        <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
        {href ? (
          <a href={href} target="_blank" rel="noopener noreferrer" className="text-foreground text-base mt-0.5 hover:text-neon-cyan transition-colors flex items-center gap-1.5">
            {value} <Icon name="ExternalLink" size={13} className="text-neon-cyan/60" />
          </a>
        ) : (
          <div className="text-foreground text-base mt-0.5">{value}</div>
        )}
      </div>
    </div>
  );
}