// ============================================================
//  APP — ghép trang, nav dots, thanh tiến trình cuộn
// ============================================================
const { useState, useEffect } = window.React;

function ProgressBar() {
  const [w, setW] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setW(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className="fixed left-0 top-0 z-50 h-[3px] bg-terra"
      style={{ width: w + "%" }}
    />
  );
}

function SideNav() {
  const items = window.NAV;
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    items.forEach(([id]) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <nav className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 lg:block">
      <ul className="flex flex-col gap-3">
        {items.map(([id, label]) => {
          const on = active === id;
          return (
            <li key={id} className="group flex items-center justify-end gap-3">
              <span
                className={
                  "font-sans text-[0.7rem] tracking-wide transition-all duration-300 " +
                  (on
                    ? "translate-x-0 text-terra opacity-100"
                    : "translate-x-2 text-terra/0 opacity-0 group-hover:translate-x-0 group-hover:text-terra/70 group-hover:opacity-100")
                }
              >
                {label}
              </span>
              <a
                href={"#" + id}
                aria-label={label}
                className={
                  "block rounded-full border transition-all duration-300 " +
                  (on
                    ? "h-3 w-3 border-terra bg-terra"
                    : "h-2.5 w-2.5 border-terra/40 bg-transparent hover:border-terra")
                }
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function App() {
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const hero = document.getElementById("hero");
        if (hero && window.__puzzleSetScroll) {
          const p = window.scrollY / (hero.offsetHeight * 0.9);
          window.__puzzleSetScroll(p);
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <ProgressBar />
      <SideNav />
      <main>
        <window.HeroSection />
        <window.HistorySection />
        <window.ComparisonSection />
        <window.BioSocialSection />
        <window.TotalitySection />
        <window.PiecesSection />
        <window.HistoricalNatureSection />
        <window.PracticalEvidenceSection />
        <window.ConclusionSection />
      </main>
    </>
  );
}

window.ReactDOM.createRoot(document.getElementById("root")).render(<App />);
