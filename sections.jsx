// ============================================================
//  SECTIONS — 11 section
// ============================================================
const {
  Reveal,
  Stagger,
  Item,
  Parallax,
  Kicker,
  StripePlaceholder,
  BigNumber,
  PuzzleDot,
  Puzzle3D,
} = window;

// ─────────────────────────────────────────────
// I · HERO
// ─────────────────────────────────────────────
function HeroSection() {
  return (
    <section
      id="hero"
      data-screen-label="Mở đầu"
      className="relative min-h-screen w-full overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 top-0 h-full w-full lg:w-[58%]">
          <Puzzle3D />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 sm:px-10">
        <div className="max-w-2xl hero-in" style={{ animationDelay: "0.3s" }}>
          <div className="mb-7 flex items-center gap-3">
            <PuzzleDot color="#C26B36" size={18} />
            <span className="font-sans text-xs uppercase tracking-[0.34em] text-terra">
              Triết học Mác – Lênin
            </span>
          </div>
          <h1 className="font-serif text-[3.3rem] leading-[0.98] text-cream sm:text-7xl lg:text-[5.4rem]">
            Bản chất
            <br />
            <span className="text-terra">con người</span>
          </h1>
          <p className="mt-7 max-w-xl font-sans text-lg leading-relaxed text-cream/70 sm:text-xl">
            là{" "}
            <span className="font-serif italic text-cream">
              tổng hòa các quan hệ xã hội.
            </span>
          </p>
          <p className="mt-3 max-w-lg font-sans text-sm leading-relaxed text-cream/45 sm:text-base">
            — Karl Marx, <em>Luận cương về Feuerbach</em>, 1845
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-5">
            <a
              href="#history"
              className="group inline-flex items-center gap-3 rounded-full bg-terra px-7 py-3.5 font-sans text-sm font-medium text-ink transition-colors hover:bg-terra/90"
            >
              Bắt đầu hành trình
              <span className="transition-transform group-hover:translate-y-0.5">↓</span>
            </a>
          </div>
        </div>
      </div>

      <div
        className="hero-in absolute bottom-7 left-1/2 z-10 -translate-x-1/2"
        style={{ animationDelay: "1.4s" }}
      >
        <div className="h-12 w-[1px] animate-pulse bg-gradient-to-b from-transparent via-cream/40 to-transparent" />
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// II · LỊCH SỬ
// ─────────────────────────────────────────────
function HistorySection() {
  const d = window.HISTORY;
  return (
    <section
      id="history"
      data-screen-label="Lịch sử"
      className="bg-ink2 py-28 text-cream sm:py-36"
    >
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        <Reveal variant="left">
          <Kicker dark>{d.kicker}</Kicker>
        </Reveal>
        <Reveal variant="blur" duration={1}>
          <h2 className="max-w-3xl font-serif text-3xl leading-tight sm:text-5xl">
            {d.title}
          </h2>
        </Reveal>
        <Reveal variant="up" delay={0.08}>
          <p className="mt-6 max-w-2xl font-sans text-[1.05rem] leading-relaxed text-cream/65">
            {d.intro}
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-5 md:grid-cols-3" stagger={0.14}>
          {d.views.map((v) => (
            <Item key={v.n} variant="up" duration={0.8}>
              <div className="flex h-full flex-col rounded-sm border border-cream/10 bg-ink p-7 transition-colors hover:border-terra/35">
                <div className="mb-4 flex items-center gap-3">
                  <BigNumber className="text-3xl" style={{ color: v.color }}>
                    <span style={{ color: v.color }}>{v.n}</span>
                  </BigNumber>
                  <span
                    className="rounded-full px-2.5 py-1 font-sans text-[0.68rem] uppercase tracking-widest"
                    style={{ background: v.color + "22", color: v.color }}
                  >
                    {v.tag}
                  </span>
                </div>
                <h3 className="font-serif text-lg leading-snug text-cream sm:text-xl">
                  {v.title}
                </h3>
                <p className="mt-4 flex-1 font-sans text-[0.9rem] leading-relaxed text-cream/65">
                  {v.text}
                </p>
                <p className="mt-5 font-sans text-[0.82rem] italic text-terra/80">
                  → {v.critique}
                </p>
              </div>
            </Item>
          ))}
        </Stagger>

        <Reveal variant="clip" duration={1} delay={0.1}>
          <p className="mx-auto mt-16 max-w-2xl text-center font-serif text-xl italic leading-relaxed text-cream/80 sm:text-2xl">
            {d.turn}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// III · SO SÁNH ĐÔNG – TÂY – MÁC
// ─────────────────────────────────────────────
function ComparisonSection() {
  const d = window.COMPARISON;
  return (
    <section
      id="comparison"
      data-screen-label="So sánh"
      className="bg-cream py-28 text-ink sm:py-36"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal variant="left">
          <Kicker>{d.kicker}</Kicker>
        </Reveal>
        <Reveal variant="up" delay={0.05}>
          <h2 className="max-w-3xl font-serif text-3xl leading-tight sm:text-5xl">
            {d.title}
          </h2>
        </Reveal>

        <Stagger className="mt-14 grid gap-5 lg:grid-cols-3" stagger={0.13}>
          {d.cols.map((col, ci) => {
            const isMarx = ci === 2;
            return (
              <Item key={col.heading} variant={ci === 0 ? "left" : ci === 2 ? "right" : "up"} duration={0.85}>
                <div
                  className={
                    "flex h-full flex-col rounded-sm p-7 sm:p-8 " +
                    (isMarx
                      ? "border-2 border-terra/50 bg-cream2"
                      : "border border-ink/10 bg-white/50")
                  }
                >
                  <div className="mb-6 flex items-center gap-3">
                    <span
                      className="h-1 w-8 rounded-full"
                      style={{ background: col.color }}
                    />
                    <h3
                      className="font-serif text-lg font-medium sm:text-xl"
                      style={{ color: isMarx ? col.color : undefined }}
                    >
                      {col.heading}
                    </h3>
                    {isMarx && (
                      <span className="ml-auto rounded-full bg-terra/15 px-2.5 py-0.5 font-sans text-[0.65rem] uppercase tracking-widest text-terraDeep">
                        Trọng tâm
                      </span>
                    )}
                  </div>
                  <div className="space-y-5">
                    {col.rows.map((row) => (
                      <div key={row.label}>
                        <p
                          className="mb-1 font-sans text-xs font-semibold uppercase tracking-wider"
                          style={{ color: col.color }}
                        >
                          {row.label}
                        </p>
                        <p className="font-sans text-[0.9rem] leading-relaxed text-ink/70">
                          {row.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Item>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// IV · SINH HỌC – XÃ HỘI
// ─────────────────────────────────────────────
function BioSocialSection() {
  const d = window.BIOSOCIAL;
  return (
    <section
      id="biosocial"
      data-screen-label="Sinh học & XH"
      className="bg-ink py-28 text-cream sm:py-36"
    >
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        <Reveal variant="left">
          <Kicker dark>{d.kicker}</Kicker>
        </Reveal>
        <Reveal variant="blur" duration={1}>
          <h2 className="max-w-3xl font-serif text-3xl leading-tight sm:text-5xl">
            {d.title}
          </h2>
        </Reveal>

        <Stagger className="mt-14 grid gap-6 md:grid-cols-2" stagger={0.16}>
          {[d.bio, d.social].map((side) => (
            <Item key={side.tag} variant={side === d.bio ? "left" : "right"} duration={0.85}>
              <div className="flex h-full flex-col rounded-sm border border-cream/12 bg-ink2 p-8">
                <span
                  className="mb-4 inline-block rounded-full px-3 py-1 font-sans text-[0.68rem] uppercase tracking-widest"
                  style={{ background: side.color + "28", color: side.color }}
                >
                  {side.tag}
                </span>
                <h3 className="font-serif text-xl text-cream sm:text-2xl">
                  {side.headline}
                </h3>
                <ul className="mt-5 space-y-2.5">
                  {side.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3 font-sans text-[0.9rem] text-cream/70">
                      <PuzzleDot color={side.color} size={12} />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 border-t border-cream/10 pt-5 font-sans text-[0.85rem] italic leading-relaxed text-cream/55">
                  {side.note}
                </p>
              </div>
            </Item>
          ))}
        </Stagger>

        <Reveal variant="clip" duration={1} delay={0.05}>
          <p className="mx-auto mt-14 max-w-2xl text-center font-serif text-xl italic leading-relaxed text-terra/90 sm:text-[1.5rem]">
            {d.bridge}
          </p>
        </Reveal>

        <Reveal variant="up" delay={0.08}>
          <div className="mx-auto mt-10 max-w-2xl rounded-sm border-l-2 border-moss bg-mossDeep/15 px-6 py-5">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-moss">
              {d.example.title}
            </p>
            <p className="mt-3 font-serif text-base italic leading-relaxed text-cream/75 sm:text-lg">
              {d.example.text}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// V · TỔNG HÒA
// ─────────────────────────────────────────────
function TotalitySection() {
  const d = window.TOTALITY;
  return (
    <section
      id="totality"
      data-screen-label="Tổng hòa"
      className="bg-cream py-28 text-ink sm:py-36"
    >
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        <Reveal variant="left">
          <Kicker>{d.kicker}</Kicker>
        </Reveal>
        <Reveal variant="up" delay={0.05}>
          <h2 className="max-w-3xl font-serif text-3xl leading-tight sm:text-5xl">
            {d.title}
          </h2>
        </Reveal>

        <Reveal variant="clip" duration={1}>
          <figure className="my-12 border-l-2 border-terra pl-7 sm:pl-10">
            <blockquote className="font-serif text-[1.5rem] italic leading-snug text-ink sm:text-[2rem]">
              "{window.MARX_QUOTE}"
            </blockquote>
            <figcaption className="mt-5 font-sans text-sm tracking-wide text-ink/50">
              — Karl Marx, <em>Luận cương về Feuerbach</em>
            </figcaption>
          </figure>
        </Reveal>

        <Reveal variant="up" delay={0.05}>
          <p className="max-w-2xl font-sans text-[1.05rem] leading-relaxed text-ink/65">
            {d.meaning}
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2" stagger={0.13}>
          {d.points.map((pt) => (
            <Item key={pt.n} variant="up" duration={0.75}>
              <div className="flex h-full flex-col rounded-sm border border-ink/10 bg-white/50 p-7 transition-colors hover:border-terra/40 hover:bg-white/80">
                <div className="mb-4 flex items-center gap-3">
                  <BigNumber className="text-3xl" style={{ color: pt.color }}>
                    <span style={{ color: pt.color }}>{pt.n}</span>
                  </BigNumber>
                  <div
                    className="h-px flex-1"
                    style={{ background: pt.color + "40" }}
                  />
                </div>
                <h3 className="font-serif text-lg leading-snug text-ink sm:text-xl">
                  {pt.title}
                </h3>
                <p className="mt-4 flex-1 font-sans text-[0.9rem] leading-relaxed text-ink/65">
                  {pt.text}
                </p>
              </div>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// VI · CÁC QUAN HỆ XÃ HỘI (8 mảnh)
// ─────────────────────────────────────────────
function PieceCard({ p, i }) {
  const onView = () => i < 6 && window.__puzzleHighlight && window.__puzzleHighlight(i);
  const onLeave = () => window.__puzzleHighlight && window.__puzzleHighlight(null);
  return (
    <Reveal variant={i % 2 === 0 ? "left" : "right"} duration={0.9}>
      <article
        onMouseEnter={onView}
        onMouseLeave={onLeave}
        className="group relative grid gap-8 rounded-sm border border-ink/10 bg-white/40 p-7 transition-all duration-300 hover:border-terra/40 hover:bg-white/70 sm:grid-cols-[1.1fr_1fr] sm:p-9"
      >
        <div>
          <div className="flex items-baseline gap-4">
            <Parallax distance={26}>
              <BigNumber className="text-5xl sm:text-6xl">
                <span style={{ color: p.color }}>{p.n}</span>
              </BigNumber>
            </Parallax>
            <div>
              <h3 className="font-serif text-2xl text-ink sm:text-3xl">{p.title}</h3>
              <span className="font-mono text-[0.7rem] uppercase tracking-widest text-ink/40">
                {p.part}
              </span>
            </div>
          </div>

          <p className="mt-6 font-sans text-[1.02rem] leading-relaxed text-ink/75">
            {p.lead}
          </p>

          <p className="mt-5 font-sans text-sm font-medium text-ink/55">{p.listLabel}</p>
          <Stagger className="mt-3 flex flex-wrap gap-2" stagger={0.07} amount={0.4}>
            {p.list.map((item) => (
              <Item key={item} variant="scale" duration={0.5}>
                <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-cream px-3 py-1.5 font-sans text-[0.82rem] text-ink/70">
                  <PuzzleDot color={p.color} size={11} />
                  {item}
                </span>
              </Item>
            ))}
          </Stagger>
        </div>

        <div className="flex flex-col">
          <image-slot
            id={"slot-" + p.n}
            class="block w-full"
            style={{ height: "300px" }}
            shape="rounded"
            radius="4"
            placeholder={"Kéo ảnh vào: " + p.img}
          ></image-slot>
          <p className="mt-4 font-sans text-[0.9rem] leading-relaxed text-ink/60">{p.note}</p>
          <p className="mt-auto pt-4 font-serif text-base italic" style={{ color: p.color }}>
            {p.pin}
          </p>
        </div>
      </article>
    </Reveal>
  );
}

function PiecesSection() {
  const list = window.PIECES;
  return (
    <section
      id="pieces"
      data-screen-label="Quan hệ XH"
      className="bg-cream py-28 text-ink sm:py-36"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal variant="left">
          <Kicker>VI · Các quan hệ xã hội hình thành con người</Kicker>
        </Reveal>
        <Reveal variant="up" delay={0.05}>
          <h2 className="max-w-3xl font-serif text-3xl leading-tight sm:text-5xl">
            Tám quan hệ xã hội tạo nên{" "}
            <span className="text-terra">một con người</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6">
          {list.map((p, i) => (
            <PieceCard key={p.n} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// VII · TÍNH LỊCH SỬ
// ─────────────────────────────────────────────
function HistoricalNatureSection() {
  const d = window.HISTORICAL_NATURE;
  return (
    <section
      id="historical"
      data-screen-label="Tính lịch sử"
      className="bg-ink2 py-28 text-cream sm:py-36"
    >
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        <Reveal variant="right">
          <Kicker dark>{d.kicker}</Kicker>
        </Reveal>
        <Reveal variant="blur" duration={1}>
          <h2 className="max-w-3xl font-serif text-3xl leading-tight sm:text-5xl">
            {d.title}
          </h2>
        </Reveal>
        <Reveal variant="up" delay={0.06}>
          <p className="mt-6 max-w-2xl font-sans text-[1.05rem] leading-relaxed text-cream/65">
            {d.intro}
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2" stagger={0.13}>
          {d.eras.map((era, i) => (
            <Item key={era.era} variant={i % 2 === 0 ? "left" : "right"} duration={0.8}>
              <div className="flex h-full flex-col rounded-sm border border-cream/10 bg-ink p-7 transition-colors hover:border-terra/30">
                <div
                  className="mb-4 inline-flex items-center gap-2 self-start rounded-full px-3 py-1"
                  style={{ background: era.color + "28" }}
                >
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ background: era.color }}
                  />
                  <span
                    className="font-sans text-xs font-semibold uppercase tracking-wide"
                    style={{ color: era.color }}
                  >
                    {era.era}
                  </span>
                </div>
                <div className="mt-3 space-y-4">
                  <div>
                    <p className="font-sans text-[0.68rem] uppercase tracking-widest text-cream/40">
                      Quan hệ xã hội
                    </p>
                    <p className="mt-1.5 font-sans text-[0.9rem] leading-relaxed text-cream/70">
                      {era.relations}
                    </p>
                  </div>
                  <div>
                    <p className="font-sans text-[0.68rem] uppercase tracking-widest text-cream/40">
                      Bản chất con người
                    </p>
                    <p className="mt-1.5 font-sans text-[0.9rem] leading-relaxed text-cream/80">
                      {era.human}
                    </p>
                  </div>
                </div>
              </div>
            </Item>
          ))}
        </Stagger>

        <Reveal variant="clip" duration={1} delay={0.1}>
          <p className="mx-auto mt-14 max-w-2xl text-center font-serif text-xl italic leading-relaxed text-terra/85 sm:text-2xl">
            {d.conclusion}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// VIII · THA HÓA
// ─────────────────────────────────────────────
function AlienationSection() {
  const d = window.ALIENATION;
  return (
    <section
      id="alienation"
      data-screen-label="Tha hóa"
      className="bg-ink py-28 text-cream sm:py-36"
    >
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        <Reveal variant="left">
          <Kicker dark>{d.kicker}</Kicker>
        </Reveal>
        <Reveal variant="blur" duration={1}>
          <h2 className="max-w-3xl font-serif text-3xl leading-tight sm:text-5xl">
            {d.title}
          </h2>
        </Reveal>
        <Reveal variant="up" delay={0.06}>
          <p className="mt-6 max-w-2xl font-sans text-[1.05rem] leading-relaxed text-cream/65">
            {d.intro}
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2" stagger={0.13}>
          {d.types.map((t, i) => (
            <Item key={t.n} variant={i % 2 === 0 ? "left" : "right"} duration={0.8}>
              <div className="flex h-full flex-col rounded-sm border border-cream/10 bg-ink2 p-7 transition-colors hover:border-terra/35">
                <div className="mb-5 flex items-center gap-3">
                  <BigNumber className="text-4xl">
                    <span style={{ color: t.color }}>{t.n}</span>
                  </BigNumber>
                  <div className="h-px flex-1" style={{ background: t.color + "35" }} />
                </div>
                <h3 className="font-serif text-lg leading-snug text-cream sm:text-xl">
                  {t.title}
                </h3>
                <p className="mt-4 flex-1 font-sans text-[0.9rem] leading-relaxed text-cream/65">
                  {t.text}
                </p>
              </div>
            </Item>
          ))}
        </Stagger>

        <Reveal variant="clip" duration={0.9} delay={0.05}>
          <div className="mt-10 rounded-sm border-l-2 border-terra bg-ink2/80 px-6 py-5">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-terra">
              Tha hóa trong thời đại hiện nay
            </p>
            <p className="mt-3 font-serif text-base italic leading-relaxed text-cream/75 sm:text-lg">
              {d.today}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// IX · THỜI ĐẠI SỐ
// ─────────────────────────────────────────────
function DigitalAgeSection() {
  const d = window.DIGITAL_AGE;
  return (
    <section
      id="digital"
      data-screen-label="Thời đại số"
      className="bg-ink3 py-28 text-cream sm:py-36"
    >
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        <Reveal variant="right">
          <Kicker dark>{d.kicker}</Kicker>
        </Reveal>
        <Reveal variant="blur" duration={1}>
          <h2 className="max-w-3xl font-serif text-3xl leading-tight sm:text-5xl">
            {d.title}
          </h2>
        </Reveal>
        <Reveal variant="up" delay={0.06}>
          <p className="mt-6 max-w-2xl font-sans text-[1.05rem] leading-relaxed text-cream/65">
            {d.intro}
          </p>
        </Reveal>

        <Stagger className="mt-12 space-y-5" stagger={0.14}>
          {d.cards.map((card, i) => (
            <Item key={card.title} variant="up" duration={0.8}>
              <div className="grid gap-6 rounded-sm border border-cream/10 bg-ink p-7 sm:grid-cols-[1fr_auto] sm:items-start sm:p-8">
                <div>
                  <h3
                    className="font-serif text-xl sm:text-2xl"
                    style={{ color: card.color }}
                  >
                    {card.title}
                  </h3>
                  <p className="mt-4 font-sans text-[1rem] leading-relaxed text-cream/70">
                    {card.text}
                  </p>
                </div>
                <div className="shrink-0">
                  <span
                    className="inline-block rounded-full px-4 py-2 font-mono text-[0.72rem] leading-relaxed"
                    style={{ background: card.color + "22", color: card.color }}
                  >
                    {card.stat}
                  </span>
                </div>
              </div>
            </Item>
          ))}
        </Stagger>

        <Reveal variant="clip" duration={1} delay={0.08}>
          <figure className="my-14 border-l-2 border-terra pl-7 sm:pl-10">
            <blockquote className="font-serif text-xl italic leading-snug text-cream/85 sm:text-2xl">
              {d.quote}
            </blockquote>
          </figure>
        </Reveal>

        <Reveal variant="up" delay={0.05}>
          <p className="mx-auto max-w-2xl text-center font-sans text-[1rem] leading-relaxed text-terra/80">
            {d.bridge}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// X · VIỆT NAM
// ─────────────────────────────────────────────
function VietnamSection() {
  const d = window.VIETNAM;
  return (
    <section
      id="vietnam"
      data-screen-label="Việt Nam"
      className="bg-cream py-28 text-ink sm:py-36"
    >
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        <Reveal variant="left">
          <Kicker>{d.kicker}</Kicker>
        </Reveal>
        <Reveal variant="blur" duration={1}>
          <h2 className="max-w-3xl font-serif text-3xl leading-tight sm:text-5xl">
            {d.title}
          </h2>
        </Reveal>
        <Reveal variant="up" delay={0.06}>
          <p className="mt-6 max-w-2xl font-sans text-[1.05rem] leading-relaxed text-ink/65">
            {d.intro}
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2" stagger={0.13}>
          {d.pillars.map((pl, i) => (
            <Item key={pl.n} variant={i % 2 === 0 ? "left" : "right"} duration={0.8}>
              <div className="flex h-full flex-col rounded-sm border border-ink/10 bg-white/50 p-7 transition-colors hover:border-terra/40 hover:bg-white/80">
                <div className="mb-5 flex items-center gap-3">
                  <BigNumber className="text-4xl">
                    <span style={{ color: pl.color }}>{pl.n}</span>
                  </BigNumber>
                  <h3 className="font-serif text-lg leading-snug text-ink sm:text-xl">
                    {pl.title}
                  </h3>
                </div>
                <p className="flex-1 font-sans text-[0.9rem] leading-relaxed text-ink/70">
                  {pl.text}
                </p>
                <div
                  className="mt-6 flex items-start gap-2.5 rounded-sm px-4 py-3"
                  style={{ background: pl.color + "14" }}
                >
                  <span style={{ color: pl.color }} className="mt-0.5 text-xs">▸</span>
                  <p
                    className="font-mono text-[0.78rem] leading-relaxed"
                    style={{ color: pl.color }}
                  >
                    {pl.action}
                  </p>
                </div>
              </div>
            </Item>
          ))}
        </Stagger>

        <Reveal variant="clip" duration={1} delay={0.1}>
          <p className="mx-auto mt-14 max-w-2xl text-center font-serif text-xl italic leading-relaxed text-ink/70 sm:text-2xl">
            {d.closing}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// XI · KẾT LUẬN
// ─────────────────────────────────────────────
function ConclusionSection() {
  const d = window.CONCLUSION;
  return (
    <section
      id="conclusion"
      data-screen-label="Kết luận"
      className="relative overflow-hidden bg-ink py-32 text-cream sm:py-44"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg,#C26B36 0 1px,transparent 1px 26px)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-10">
        <Reveal variant="up">
          <Kicker dark>{d.kicker}</Kicker>
        </Reveal>
        <Reveal variant="blur" duration={1.1}>
          <h2 className="mx-auto max-w-3xl font-serif text-3xl leading-tight text-cream sm:text-5xl">
            {d.headline}
          </h2>
        </Reveal>

        <Stagger className="mx-auto mt-14 max-w-lg space-y-3" stagger={0.1}>
          {d.lines.map(([a, b], i) => (
            <Item key={i} variant="left" duration={0.6}>
              <p className="flex items-baseline justify-between gap-4 border-b border-cream/10 pb-3 text-left">
                <span className="whitespace-nowrap font-serif text-xl text-terra sm:text-2xl">
                  {a}
                </span>
                <span className="font-sans text-sm text-cream/70 sm:text-base">{b}</span>
              </p>
            </Item>
          ))}
        </Stagger>

        <Stagger className="mx-auto mt-14 max-w-2xl space-y-5" stagger={0.15}>
          {d.body.map((t, i) => (
            <Item key={i} variant="up">
              <p className="font-sans text-[1.05rem] leading-relaxed text-cream/70">{t}</p>
            </Item>
          ))}
        </Stagger>

        <Reveal variant="scale" delay={0.1}>
          <div className="mt-16 flex items-center justify-center gap-3">
            <PuzzleDot color="#C26B36" size={16} />
            <span className="font-serif text-lg italic text-cream/60">
              Mảnh ghép con người
            </span>
            <PuzzleDot color="#C26B36" size={16} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window, {
  HeroSection,
  HistorySection,
  ComparisonSection,
  BioSocialSection,
  TotalitySection,
  PiecesSection,
  HistoricalNatureSection,
  AlienationSection,
  DigitalAgeSection,
  VietnamSection,
  ConclusionSection,
  // giữ để tránh lỗi nếu còn tham chiếu cũ
  IntroSection: () => null,
  MarxSection: () => null,
  EvidenceSection: () => null,
  ActivitiesSection: () => null,
});
