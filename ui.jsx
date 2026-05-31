// ============================================================
//  UI — components tái dùng + animation (Framer Motion)
// ============================================================
const { useRef: useRefU, useState: useStateU, useEffect: useEffectU } = window.React;
const { motion: M, useScroll: useScrollM, useTransform: useTransformM } = window.Motion;

const EASE = [0.22, 1, 0.36, 1];

// Bộ biến thể reveal đa dạng
const VARIANTS = {
  up: { hidden: { opacity: 0, y: 44 }, show: { opacity: 1, y: 0 } },
  down: { hidden: { opacity: 0, y: -44 }, show: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -64 }, show: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 64 }, show: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.82 }, show: { opacity: 1, scale: 1 } },
  blur: { hidden: { opacity: 0, filter: "blur(16px)" }, show: { opacity: 1, filter: "blur(0px)" } },
  rotate: { hidden: { opacity: 0, rotate: -5, y: 36 }, show: { opacity: 1, rotate: 0, y: 0 } },
  clip: {
    hidden: { opacity: 0, y: 64, scale: 0.97 },
    show: { opacity: 1, y: 0, scale: 1 },
  },
  zoom: { hidden: { opacity: 0, scale: 1.12 }, show: { opacity: 1, scale: 1 } },
};

// Reveal khi cuộn tới — chọn variant
function Reveal({
  children,
  variant = "up",
  delay = 0,
  duration = 0.8,
  className = "",
  amount = 0.25,
  once = true,
}) {
  const v = VARIANTS[variant] || VARIANTS.up;
  return (
    <M.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={v}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </M.div>
  );
}

// Container stagger — các con xuất hiện lần lượt
function Stagger({
  children,
  className = "",
  stagger = 0.12,
  delayChildren = 0,
  amount = 0.2,
  once = true,
}) {
  return (
    <M.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren } } }}
    >
      {children}
    </M.div>
  );
}

// Phần tử con bên trong Stagger
function Item({ children, variant = "up", className = "", duration = 0.7 }) {
  const v = VARIANTS[variant] || VARIANTS.up;
  return (
    <M.div className={className} variants={v} transition={{ duration, ease: EASE }}>
      {children}
    </M.div>
  );
}

// Parallax — di chuyển theo tốc độ khác khi cuộn qua
function Parallax({ children, className = "", distance = 70, style = {} }) {
  const ref = useRefU(null);
  const { scrollYProgress } = useScrollM({ target: ref, offset: ["start end", "end start"] });
  const y = useTransformM(scrollYProgress, [0, 1], [distance, -distance]);
  return (
    <M.div ref={ref} className={className} style={{ ...style, y }}>
      {children}
    </M.div>
  );
}

// Nhãn nhỏ phía trên tiêu đề mục
function Kicker({ children, dark = false }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className={"h-px w-10 " + (dark ? "bg-terra/70" : "bg-terra/70")} />
      <span
        className={
          "font-sans text-[0.7rem] sm:text-xs tracking-[0.32em] uppercase " +
          (dark ? "text-terra" : "text-terraDeep")
        }
      >
        {children}
      </span>
    </div>
  );
}

// Placeholder ảnh (sọc) — để nhóm thả ảnh thật vào sau
function StripePlaceholder({ label, className = "", ratio = "aspect-[4/3]", dark = false }) {
  const base = dark ? "#23271a" : "#e7ddc9";
  const line = dark ? "#2f3422" : "#d8cbb0";
  return (
    <div
      className={"relative overflow-hidden rounded-sm " + ratio + " " + className}
      style={{
        backgroundColor: base,
        backgroundImage:
          "repeating-linear-gradient(135deg," + line + " 0 1px, transparent 1px 11px)",
      }}
    >
      <div className="absolute inset-0 flex items-end p-3">
        <span
          className="font-mono text-[0.62rem] tracking-wide px-2 py-1 rounded-sm"
          style={{
            color: dark ? "#bdb191" : "#7a6f57",
            background: dark ? "rgba(0,0,0,0.35)" : "rgba(255,255,255,0.55)",
          }}
        >
          [ {label} ]
        </span>
      </div>
      <div
        className="absolute inset-0 ring-1 ring-inset rounded-sm pointer-events-none"
        style={{ borderColor: "transparent", boxShadow: "inset 0 0 0 1px rgba(120,110,85,0.18)" }}
      />
    </div>
  );
}

// Số thứ tự lớn dạng serif
function BigNumber({ children, className = "" }) {
  return (
    <span className={"font-serif leading-none tabular-nums " + className}>{children}</span>
  );
}

// Dấu chấm mảnh ghép (icon nhỏ)
function PuzzleDot({ color = "#C26B36", size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className="shrink-0">
      <path
        fill={color}
        d="M9 3a2 2 0 0 1 4 0c0 .5-.3 1-.3 1.4 0 .6.5 1.1 1.1 1.1.5 0 .9-.3 1.4-.3a2 2 0 0 1 0 4c-.5 0-1-.3-1.4-.3-.6 0-1.1.5-1.1 1.1 0 .5.3.9.3 1.4a2 2 0 0 1-4 0c0-.5.3-.9.3-1.4 0-.6-.5-1.1-1.1-1.1-.5 0-.9.3-1.4.3a2 2 0 0 1 0-4c.5 0 .9.3 1.4.3.6 0 1.1-.5 1.1-1.1C9.3 4 9 3.5 9 3Z"
        transform="translate(0 4)"
      />
    </svg>
  );
}

Object.assign(window, { Reveal, Stagger, Item, Parallax, Kicker, StripePlaceholder, BigNumber, PuzzleDot });
