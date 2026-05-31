// ============================================================
//  SECTIONS — các mục của trang
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

// ---------- HERO ----------
function HeroSection() {
  return (
    <section
      id="hero"
      data-screen-label="Mở đầu"
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* nền 3D */}
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 top-0 h-full w-full lg:w-[58%]">
          <Puzzle3D />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
      </div>

      {/* nội dung */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 sm:px-10">
        <div className="max-w-2xl hero-in" style={{ animationDelay: "0.3s" }}>
          <div className="mb-7 flex items-center gap-3">
            <PuzzleDot color="#C26B36" size={18} />
            <span className="font-sans text-xs uppercase tracking-[0.34em] text-terra">
              Triết học Mác – Lênin
            </span>
          </div>
          <h1 className="font-serif text-[3.3rem] leading-[0.98] text-cream sm:text-7xl lg:text-[5.4rem]">
            Mảnh ghép
            <br />
            <span className="text-terra">con người</span>
          </h1>
          <p className="mt-7 max-w-xl font-sans text-lg leading-relaxed text-cream/70 sm:text-xl">
            Bản chất con người là{" "}
            <span className="text-cream">tổng hòa các quan hệ xã hội.</span>
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-5">
            <a
              href="#intro"
              className="group inline-flex items-center gap-3 rounded-full bg-terra px-7 py-3.5 font-sans text-sm font-medium text-ink transition-colors hover:bg-terra/90"
            >
              Bắt đầu hành trình
              <span className="transition-transform group-hover:translate-y-0.5">
                ↓
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* gợi ý cuộn */}
      <div
        className="hero-in absolute bottom-7 left-1/2 z-10 -translate-x-1/2"
        style={{ animationDelay: "1.4s" }}
      >
        <div className="h-12 w-[1px] animate-pulse bg-gradient-to-b from-transparent via-cream/40 to-transparent" />
      </div>
    </section>
  );
}

// ---------- I · GIỚI THIỆU ----------
function IntroSection() {
  const d = window.INTRO;
  return (
    <section
      id="intro"
      data-screen-label="Giới thiệu"
      className="bg-cream py-28 text-ink sm:py-36"
    >
      <div className="mx-auto max-w-4xl px-6 sm:px-10">
        <Reveal variant="left">
          <Kicker>{d.kicker}</Kicker>
        </Reveal>
        <Reveal variant="up" delay={0.05}>
          <p className="font-serif text-2xl leading-snug text-ink/80 sm:text-[2rem]">
            {d.lead}
          </p>
        </Reveal>
        <Reveal variant="up" delay={0.12}>
          <p className="mt-6 font-sans text-lg text-terraDeep">{d.turn}</p>
        </Reveal>

        {/* trích dẫn lớn */}
        <Reveal variant="clip" duration={1}>
          <figure className="my-14 border-l-2 border-terra pl-7 sm:pl-10">
            <blockquote className="font-serif text-[1.6rem] italic leading-snug text-ink sm:text-[2.2rem]">
              “{window.MARX_QUOTE}”
            </blockquote>
            <figcaption className="mt-5 font-sans text-sm tracking-wide text-ink/50">
              — Karl Marx
            </figcaption>
          </figure>
        </Reveal>

        <Stagger className="grid gap-6 sm:grid-cols-2" stagger={0.18}>
          {d.body.map((t, i) => (
            <Item key={i} variant={i % 2 === 0 ? "left" : "right"}>
              <p className="font-sans text-[1.05rem] leading-relaxed text-ink/70">
                {t}
              </p>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

// ---------- II · KARL MARX ----------
function MarxSection() {
  const d = window.MARX;
  return (
    <section
      id="marx"
      data-screen-label="Karl Marx"
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
          {d.cards.map((c, i) => (
            <Item key={i} variant={i % 2 === 0 ? "left" : "right"}>
              <div className="h-full rounded-sm border border-cream/12 bg-ink2 p-8 transition-colors hover:border-terra/40">
                <span className="font-sans text-xs uppercase tracking-[0.28em] text-terra">
                  {c.tag}
                </span>
                <p className="mt-5 font-sans text-[1.05rem] leading-relaxed text-cream/75">
                  {c.text}
                </p>
              </div>
            </Item>
          ))}
        </Stagger>

        <Reveal variant="blur" delay={0.05} duration={1}>
          <p className="mx-auto mt-14 max-w-3xl text-center font-serif text-xl italic leading-relaxed text-cream/85 sm:text-[1.7rem]">
            {d.conclusion}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

// ---------- III · 6 MẢNH GHÉP ----------
function PieceCard({ p, i }) {
  const onView = () => window.__puzzleHighlight && window.__puzzleHighlight(i);
  const onLeave = () =>
    window.__puzzleHighlight && window.__puzzleHighlight(null);
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
              <h3 className="font-serif text-2xl text-ink sm:text-3xl">
                {p.title}
              </h3>
              <span className="font-mono text-[0.7rem] uppercase tracking-widest text-ink/40">
                {p.part}
              </span>
            </div>
          </div>

          <p className="mt-6 font-sans text-[1.02rem] leading-relaxed text-ink/75">
            {p.lead}
          </p>

          <p className="mt-5 font-sans text-sm font-medium text-ink/55">
            {p.listLabel}
          </p>
          <Stagger
            className="mt-3 flex flex-wrap gap-2"
            stagger={0.07}
            amount={0.4}
          >
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
          <p className="mt-4 font-sans text-[0.9rem] leading-relaxed text-ink/60">
            {p.note}
          </p>
          <p
            className="mt-auto pt-4 font-serif text-base italic"
            style={{ color: p.color }}
          >
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
      data-screen-label="6 mảnh ghép"
      className="bg-cream py-28 text-ink sm:py-36"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal variant="left">
          <Kicker>III · Những mảnh ghép tạo nên con người</Kicker>
        </Reveal>
        <Reveal variant="up" delay={0.05}>
          <h2 className="max-w-3xl font-serif text-3xl leading-tight sm:text-5xl">
            Sáu mảnh ghép hợp thành{" "}
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

// ---------- IV · DẪN CHỨNG ----------
function EvidenceSection() {
  const list = window.EVIDENCE;
  return (
    <section
      id="evidence"
      data-screen-label="Dẫn chứng"
      className="bg-ink2 py-28 text-cream sm:py-36"
    >
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        <Reveal variant="right">
          <Kicker dark>IV · Dẫn chứng thực tiễn</Kicker>
        </Reveal>
        <Reveal variant="up" delay={0.05}>
          <h2 className="max-w-3xl font-serif text-3xl leading-tight sm:text-5xl">
            Từ lý luận đến <span className="text-terra">đời sống</span>
          </h2>
        </Reveal>

        <Stagger className="mt-14 space-y-6" stagger={0.14}>
          {list.map((e, i) => (
            <Item key={e.n} variant="up" duration={0.85}>
              <div className="grid gap-6 rounded-sm border border-cream/12 bg-ink p-8 sm:grid-cols-[auto_1fr] sm:p-10">
                <Parallax distance={34}>
                  <BigNumber className="text-5xl text-terra/80 sm:text-6xl">
                    {e.n}
                  </BigNumber>
                </Parallax>
                <div>
                  <h3 className="font-serif text-2xl text-cream sm:text-[1.7rem]">
                    {e.title}
                  </h3>
                  <p className="mt-4 font-sans text-[1.02rem] leading-relaxed text-cream/75">
                    {e.core}
                  </p>
                  <p className="mt-3 font-sans text-[1.02rem] leading-relaxed text-terra/90">
                    {e.proves}
                  </p>
                  <Reveal variant="clip" duration={0.9}>
                    <div className="mt-6 rounded-sm border-l-2 border-moss bg-mossDeep/15 px-5 py-4">
                      <p className="mt-2 font-serif text-base italic leading-relaxed text-cream/80 sm:text-lg">
                        {e.script}
                      </p>
                    </div>
                  </Reveal>
                </div>
              </div>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

// ---------- V · HOẠT ĐỘNG TƯƠNG TÁC ----------
// function ActivitiesSection() {
//   const list = window.ACTIVITIES;
//   return (
//     <section
//       id="activities"
//       data-screen-label="Tương tác"
//       className="bg-cream py-28 text-ink sm:py-36"
//     >
//       <div className="mx-auto max-w-6xl px-6 sm:px-10">
//         <Reveal variant="left">
//           <Kicker>V · Hoạt động tương tác tại booth</Kicker>
//         </Reveal>
//         <Reveal variant="up" delay={0.05}>
//           <h2 className="max-w-3xl font-serif text-3xl leading-tight sm:text-5xl">
//             Để người xem <span className="text-terra">tự tay ghép</span> nên con
//             người
//           </h2>
//         </Reveal>

//         <Stagger className="mt-14 grid gap-6 md:grid-cols-3" stagger={0.15}>
//           {list.map((a, i) => (
//             <Item key={a.n} variant="scale" duration={0.7}>
//               <div className="flex h-full flex-col rounded-sm border border-ink/10 bg-white/50 p-8 transition-colors hover:border-terra/40">
//                 <div className="flex items-center gap-3">
//                   <BigNumber className="text-4xl text-terra">{a.n}</BigNumber>
//                   <h3 className="font-serif text-xl text-ink sm:text-2xl">
//                     {a.title}
//                   </h3>
//                 </div>
//                 <p className="mt-5 font-sans text-[0.95rem] leading-relaxed text-ink/65">
//                   {a.desc}
//                 </p>

//                 {a.questions && (
//                   <ul className="mt-5 space-y-2">
//                     {a.questions.map((q) => (
//                       <li
//                         key={q}
//                         className="flex items-start gap-2.5 font-sans text-[0.9rem] text-ink/75"
//                       >
//                         <PuzzleDot color="#6E7F4E" size={12} />
//                         <span>{q}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 )}

//                 {a.message && (
//                   <p className="mt-auto pt-6 font-serif text-lg italic leading-snug text-terraDeep">
//                     {a.message}
//                   </p>
//                 )}
//               </div>
//             </Item>
//           ))}
//         </Stagger>
//       </div>
//     </section>
//   );
// }

// ---------- VI · KẾT LUẬN ----------
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
          <h2 className="mx-auto max-w-3xl font-serif text-4xl leading-tight text-cream sm:text-6xl">
            {d.headline}
          </h2>
        </Reveal>

        <Stagger className="mx-auto mt-14 max-w-md space-y-3" stagger={0.12}>
          {d.lines.map(([a, b], i) => (
            <Item key={i} variant="left" duration={0.6}>
              <p className="flex items-baseline justify-between gap-4 border-b border-cream/10 pb-3 text-left">
                <span className="whitespace-nowrap font-serif text-xl text-terra sm:text-2xl">
                  {a}
                </span>
                <span className="font-sans text-sm text-cream/70 sm:text-base">
                  {b}
                </span>
              </p>
            </Item>
          ))}
        </Stagger>

        <Stagger className="mx-auto mt-14 max-w-2xl space-y-5" stagger={0.15}>
          {d.body.map((t, i) => (
            <Item key={i} variant="up">
              <p className="font-sans text-[1.05rem] leading-relaxed text-cream/70">
                {t}
              </p>
            </Item>
          ))}
        </Stagger>

        <Reveal variant="scale" delay={0.1}>
          <div className="mt-16 flex items-center justify-center gap-3">
            <PuzzleDot color="#C26B36" size={16} />
            <span className="font-serif text-lg italic text-cream/60">
              Mảnh ghép con người
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window, {
  HeroSection,
  IntroSection,
  MarxSection,
  PiecesSection,
  EvidenceSection,
  ActivitiesSection,
  ConclusionSection,
});
