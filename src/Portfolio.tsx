import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ArrowUpRight, Mail, MoveDown, X } from "lucide-react";
import MusicPortfolio, { Project } from "./components/ui/music-portfolio";

const projects: Project[] = [
  {
    id: 1,
    title: "DocHive",
    type: "FULL-STACK",
    stack: "REACT · NODE · FIREBASE",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=85",
    description:
      "Role-based doctor–patient platform focused on secure workflows, clear access boundaries and a practical user experience.",
    href: "https://web-project-six-umber.vercel.app/",
  },
  {
    id: 2,
    title: "Secure Document Access",
    type: "WEB3",
    stack: "SOLIDITY · HARDHAT · IPFS",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=1600&q=85",
    description:
      "Web3 document-access system exploring verifiable permissions, decentralized storage and wallet-based identity.",
    href: "https://citizen-data-management.vercel.app/",
  },
  {
    id: 3,
    title: "C Task Manager",
    type: "SYSTEMS",
    stack: "C · UNIX · PROCESSES",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=85",
    description:
      "Systems project built around process discovery, PID-based termination and understanding Unix process control.",
  },
  {
    id: 4,
    title: "NyayAI",
    type: "AI / LEGAL TECH",
    stack: "LLM · RAG · NLP · VERCEL",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1600&q=85",
    description:
      "AI-powered legal assistant for extracting key contract entities, flagging clause risks and answering document questions with grounded citations.",
    href: "https://nyay-ai-beta.vercel.app",
  },
];

const caseStudies = [
  {
    title: "DocHive",
    kicker: "FULL-STACK / PRODUCT ENGINEERING",
    problem:
      "Build a clear workflow for different users while keeping access boundaries understandable.",
    approach:
      "Structured the application around role-aware flows and a backend that separates user responsibilities from the interface.",
    stack: "React · Node.js · Firebase · Tailwind",
    takeaways: [
      "Role-based application design",
      "API and data-flow thinking",
      "UX shaped by access rules",
    ],
  },
  {
    title: "Secure Document Access",
    kicker: "WEB3 / SECURITY",
    problem:
      "Explore how document permissions can be represented with blockchain-backed verification and decentralized storage.",
    approach:
      "Combined Solidity smart-contract logic with Hardhat development, IPFS storage and wallet interaction concepts.",
    stack: "Solidity · Hardhat · IPFS · MetaMask · Firebase",
    takeaways: [
      "Smart-contract fundamentals",
      "Decentralized storage",
      "Wallet-based identity",
    ],
  },
  {
    title: "C Task Manager",
    kicker: "SYSTEMS / LOW-LEVEL",
    problem:
      "Understand how operating systems expose and control running processes.",
    approach:
      "Built around process discovery and PID-based termination, using the project to learn systems-level control rather than hiding it behind a framework.",
    stack: "C · Unix process model",
    takeaways: [
      "Process management",
      "PID-based control",
      "Systems programming fundamentals",
    ],
  },
  {
    title: "NyayAI",
    kicker: "AI / LEGAL TECH",
    problem:
      "Make dense Indian legal documents easier to understand without losing the connection to the source text.",
    approach:
      "Built an AI workflow combining legal-domain entity extraction, clause-risk classification and retrieval-augmented generation so users can ask plain-language questions and receive grounded, citation-backed answers.",
    stack: "LLM · NLP · RAG · Vercel",
    takeaways: [
      "Domain-focused AI workflows",
      "Retrieval-augmented generation",
      "Grounded document question answering",
    ],
  },
];

export default function Portfolio() {
  const [selected, setSelected] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState("");
  const hero = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      ".reveal",
      { y: 55, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 1,
        ease: "power4.out",
        delay: 0.15,
      }
    );

    const move = (e: MouseEvent) =>
      gsap.to(".cursor-dot", {
        x: e.clientX - 4,
        y: e.clientY - 4,
        duration: 0.18,
      });

    window.addEventListener("mousemove", move);

    const updateTime = () => {
      const now = new Date();

      setCurrentTime(
        now.toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    };

    updateTime();

    const clock = window.setInterval(updateTime, 1000);

    return () => {
      window.removeEventListener("mousemove", move);
      window.clearInterval(clock);
    };
  }, []);

  return (
    <main className="noise grid-bg min-h-screen">
      <div className="cursor-dot" />

      {/* ================= HEADER ================= */}

      <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-5 py-5 mix-blend-multiply md:px-12">
        <a
          href="#"
          className="mono text-xs font-medium tracking-[.15em]"
        >
          RKY
        </a>

        <nav className="mono flex gap-5 text-[11px] uppercase">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer">
            Resume
          </a>
        </nav>
      </header>

      {/* ================= HERO ================= */}

      <section
        ref={hero}
        className="relative flex min-h-screen flex-col justify-between px-5 pb-8 pt-24 md:px-12 md:pb-10 md:pt-24"
      >
        {/* Top information */}

        <div className="reveal flex items-center justify-between">
          <span className="mono text-xs uppercase tracking-[.2em]">
            Software Engineer
          </span>

          <span className="mono text-xs">
            INDIA · OPEN TO WORK
          </span>
        </div>

        {/* Main hero */}

        <div className="grid flex-1 items-center gap-10 py-10 md:grid-cols-[280px_1fr_260px] lg:grid-cols-[330px_1fr_300px]">

          {/* ================= PROFILE CARD ================= */}

          <div className="reveal order-2 w-full max-w-[330px] justify-self-center bg-black p-4 text-[var(--paper)] md:order-1 md:max-w-none">

            {/* Status */}

            <div className="flex items-center justify-between border-b border-white/15 pb-4">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />

                <span className="mono text-[9px] uppercase tracking-[.15em]">
                  Available for work
                </span>
              </div>

              <div className="mono text-[9px] text-white/50">
                {currentTime || "INDIA "}
              </div>
            </div>

            {/* Photo */}

            <div className="mt-4 aspect-[4/5] overflow-hidden bg-white">
              <img
                src="/profile.jpeg"
                alt="Rajnish Kumar Yadav"
                className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>

            {/* Identity */}

            <div className="pt-4">
              <div className="flex items-end justify-between gap-3">
                <div>
                  <h2 className="text-xl font-medium tracking-[-.04em]">
                    RAJNISH KUMAR YADAV
                  </h2>

                  <p className="mono mt-2 text-[9px] uppercase tracking-[.15em] text-white/50">
                    Software Engineer
                  </p>
                </div>

                <span className="mono text-[9px] text-white/40">
                  RKY
                </span>
              </div>

              {/* Actions */}

              <div className="mt-5 flex gap-2">
                <a
                  href="mailto:rajnishkryadav10@gmail.com"
                  className="flex flex-1 items-center justify-center gap-1 bg-[var(--accent)] px-3 py-3 text-[10px] font-medium text-black transition-transform hover:-translate-y-0.5"
                >
                  HIRE ME
                  <ArrowUpRight size={13} />
                </a>

                <button
                  onClick={() => {
                    navigator.clipboard.writeText(
                      "rajnishkryadav10@gmail.com"
                    );
                  }}
                  className="flex-1 border border-white/25 px-3 py-3 text-[10px] transition-colors hover:bg-white hover:text-black"
                >
                  COPY EMAIL
                </button>
              </div>
            </div>
          </div>

          {/* ================= NAME ================= */}

          <div className="order-1 md:order-2">
            <p className="reveal mono mb-5 text-xs uppercase tracking-[.2em] text-black/50">
              I turn problems into systems.
            </p>

            <h1 className="reveal text-[18vw] font-semibold leading-[.78] tracking-[-.075em] md:text-[10.5vw]">
              RAJNISH
              <br />
              <span className="outline-text">YADAV.</span>
            </h1>
          </div>

          {/* ================= DESCRIPTION ================= */}

          <div className="reveal order-3 self-center">
            <span className="mono text-[10px] uppercase tracking-[.18em]">
              Software Engineer / CSE
            </span>

            <div className="mt-5 h-px w-12 bg-black" />

            <p className="mt-7 text-sm leading-relaxed text-black/65 md:text-base">
              Computer Science student at VIT Chennai building practical
              software across full-stack development, systems and emerging
              Web3 technologies.
            </p>

            <a
              href="#work"
              className="mono mt-7 inline-flex items-center gap-2 bg-black px-5 py-3 text-[10px] uppercase text-[var(--paper)] transition-transform hover:-translate-y-1"
            >
              Explore
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* Bottom cue */}

        <div className="reveal flex items-center gap-5">
          <span className="mono text-[10px] uppercase">
            Scroll to discover
          </span>

          <div className="h-px flex-1 bg-black/20" />

          <MoveDown size={16} className="animate-bounce" />
        </div>
      </section>

      {/* ================= SKILL STRIP ================= */}

      <div className="border-y border-black/15 px-5 py-3 md:px-12">
        <div className="mono flex gap-10 overflow-hidden whitespace-nowrap text-[10px] uppercase tracking-[.22em] text-black/55">
          <span>DSA</span>
          <span>OOP</span>
          <span>React</span>
          <span>Node.js</span>
          <span>C++</span>
          <span>Java</span>
          <span>Python</span>
          <span>SQL</span>
          <span>Solidity</span>
          <span>IPFS</span>
          <span>Systems</span>
        </div>
      </div>

      {/* ================= PROJECTS ================= */}

      <MusicPortfolio
        projects={projects}
        timeZone="Asia/Kolkata"
      />

      {/* ================= CASE STUDIES ================= */}

      <section
        id="case-studies"
        className="px-5 py-20 md:px-12 md:py-28"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mb-10 border-t border-black/15 pt-5">
            <p className="mono text-[10px] uppercase tracking-[.25em]">
              01.5 / How I build
            </p>

            <h2 className="mt-3 text-4xl font-semibold tracking-[-.05em] md:text-6xl">
              The thinking behind the code.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {caseStudies.map((c, i) => (
              <button
                key={c.title}
                onClick={() => setSelected(i)}
                className="group min-h-[300px] border border-black/15 p-6 text-left transition-all hover:-translate-y-1 hover:bg-black hover:text-[var(--paper)]"
              >
                <div className="flex justify-between">
                  <span className="mono text-[10px]">
                    0{i + 1}
                  </span>

                  <ArrowUpRight size={18} />
                </div>

                <p className="mono mt-16 text-[9px] uppercase opacity-50">
                  {c.kicker}
                </p>

                <h3 className="mt-2 text-3xl font-medium tracking-tight">
                  {c.title}
                </h3>

                <p className="mt-4 text-sm opacity-60">
                  Open case study →
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="px-5 py-24 md:px-12 md:py-36"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mb-10 border-t border-black/15 pt-5">
            <p className="mono text-xs uppercase tracking-[.2em]">
              02 / About
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-[1fr_1.5fr]">

            <div>
              <p className="mono text-[10px] uppercase tracking-[.2em] text-black/40">
                PROFILE
              </p>

              <p className="mt-6 max-w-sm text-base leading-relaxed text-black/55">
                Computer Science student focused on building practical
                software and understanding the engineering underneath it.
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-medium tracking-[-.04em] md:text-6xl">
                Curious by default.
                <br />
                Serious about the craft.
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-black/60">
                I enjoy understanding how things work beneath the
                interface—from data structures and operating systems to APIs,
                databases and distributed applications. My goal is simple:
                build software that is technically sound, useful and
                memorable.
              </p>

              <div className="mt-12 grid grid-cols-2 gap-8 border-t border-black/15 pt-6 md:grid-cols-3">

                <div>
                  <b className="text-3xl">8.87</b>

                  <p className="mono mt-1 text-[10px] uppercase text-black/50">
                    CGPA
                  </p>
                </div>

                <div>
                  <b className="text-3xl">CSE</b>

                  <p className="mono mt-1 text-[10px] uppercase text-black/50">
                    VIT Chennai
                  </p>
                </div>

                <div>
                  <b className="text-3xl"></b>

                  <p className="mono mt-1 text-[10px] uppercase text-black/50">
                    Graduation
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ENGINEERING TOOLKIT ================= */}

      <section className="px-5 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl border-t border-black/15 pt-6">

          <div className="grid gap-10 md:grid-cols-[1fr_2fr]">

            <p className="mono text-xs uppercase tracking-[.2em]">
              02.5 / Engineering toolkit
            </p>

            <div className="grid grid-cols-2 gap-y-8 md:grid-cols-4">

              <div>
                <p className="mono text-[10px] text-black/45">
                  LANGUAGES
                </p>

                <p className="mt-3 text-lg">
                  C · C++ · Java
                  <br />
                  JavaScript · Python · SQL
                </p>
              </div>

              <div>
                <p className="mono text-[10px] text-black/45">
                  FRONTEND
                </p>

                <p className="mt-3 text-lg">
                  React
                  <br />
                  Tailwind · HTML/CSS
                </p>
              </div>

              <div>
                <p className="mono text-[10px] text-black/45">
                  BACKEND / DATA
                </p>

                <p className="mt-3 text-lg">
                  Node.js · Firebase
                  <br />
                  MySQL · MongoDB · Redis
                </p>
              </div>

              <div>
                <p className="mono text-[10px] text-black/45">
                  WEB3 / CORE
                </p>

                <p className="mt-3 text-lg">
                  Solidity · IPFS
                  <br />
                  DSA · OOP · OS · CN · SD
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ================= RECRUITER SNAPSHOT ================= */}

      <section
        id="proof"
        className="px-5 py-24 md:px-12 md:py-32"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 border-t border-black/15 pt-5">

            <p className="mono text-[10px] uppercase tracking-[.25em]">
              02.8 / Recruiter snapshot
            </p>

            <h2 className="mt-3 max-w-4xl text-4xl font-semibold tracking-[-.05em] md:text-6xl">
              A quick read before the interview.
            </h2>

          </div>

          <div className="grid border-l border-t border-black/15 md:grid-cols-2">

            {[
              [
                "01",
                "ACADEMIC BASE",
                "B.Tech Computer Science & Engineering · VIT Chennai · 8.87 CGPA · 2027",
              ],
              [
                "02",
                "CORE FOUNDATION",
                "Data Structures & Algorithms · OOP · Operating Systems · problem solving",
              ],
              [
                "03",
                "BUILDING RANGE",
                "Full-stack applications, systems programming and Web3 experimentation",
              ],
              [
                "04",
                "CURRENT DIRECTION",
                "Looking for software engineering opportunities where strong fundamentals meet real product problems",
              ],
            ].map(([n, k, v]) => (
              <div
                key={n}
                className="border-b border-r border-black/15 p-7 md:p-9"
              >
                <div className="flex justify-between">

                  <span className="mono text-[10px] text-black/40">
                    {n}
                  </span>

                  <span className="mono text-[10px] text-black/45">
                    {k}
                  </span>

                </div>

                <p className="mt-12 max-w-md text-lg leading-relaxed">
                  {v}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 border-b border-black/15 pb-5 md:flex-row md:items-center md:justify-between">

            <p className="mono text-[10px] uppercase text-black/45">
              Resume / PDF
            </p>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-black px-5 py-3 text-sm transition hover:bg-black hover:text-[var(--paper)]"
            >
              View resume
              <ArrowUpRight size={15} />
            </a>

          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}

      <section
        id="contact"
        className="bg-black px-5 py-24 text-[var(--paper)] md:px-12 md:py-32"
      >
        <div className="mx-auto max-w-7xl">

          <p className="mono text-xs uppercase tracking-[.2em] text-white/50">
            03 / Contact
          </p>

          <h2 className="mt-8 max-w-5xl text-[12vw] font-semibold leading-[.8] tracking-[-.07em] md:text-[9vw]">
            LET&apos;S BUILD
            <br />
            <span className="text-[var(--accent)]">
              SOMETHING.
            </span>
          </h2>

          <div className="mt-14 flex flex-col justify-between gap-8 border-t border-white/20 pt-6 md:flex-row">

            <p className="max-w-md text-white/55">
              Open to software engineering opportunities, challenging
              problems and teams that care about building well.
            </p>

            <div className="flex gap-5">

              <a
                href="https://github.com/Rajnish-y"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm"
              >
                <span className="mono text-xs">
                  GH
                </span>
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/rajnish-kumar-yadav-22001b28b/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm"
              >
                <span className="mono text-xs">
                  IN
                </span>
                LinkedIn
              </a>

              <a
                href="mailto:rajnishkryadav10@gmail.com"
                className="flex items-center gap-2 text-sm"
              >
                <Mail size={17} />
                Email
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className="flex justify-between bg-black px-5 pb-8 text-[10px] text-white/40 md:px-12">
      </footer>

      {/* ================= CASE STUDY MODAL ================= */}

      {selected !== null && (
        <div className="fixed inset-0 z-[80] overflow-y-auto bg-[var(--paper)] p-5 md:p-12">

          <div className="mx-auto max-w-5xl">

            <div className="flex justify-between border-b border-black/20 pb-5">

              <span className="mono text-[10px] uppercase">
                Case study / 0{selected + 1}
              </span>

              <button
                onClick={() => setSelected(null)}
                aria-label="Close"
              >
                <X />
              </button>

            </div>

            <div className="py-16 md:py-24">

              <p className="mono text-[10px] uppercase tracking-[.2em] text-black/45">
                {caseStudies[selected].kicker}
              </p>

              <h2 className="mt-4 text-6xl font-semibold tracking-[-.06em] md:text-9xl">
                {caseStudies[selected].title}
              </h2>

              <div className="mt-16 grid gap-12 md:grid-cols-2">

                <div>
                  <p className="mono text-[10px] uppercase text-black/45">
                    THE PROBLEM
                  </p>

                  <p className="mt-4 text-xl leading-relaxed">
                    {caseStudies[selected].problem}
                  </p>
                </div>

                <div>
                  <p className="mono text-[10px] uppercase text-black/45">
                    THE APPROACH
                  </p>

                  <p className="mt-4 text-xl leading-relaxed">
                    {caseStudies[selected].approach}
                  </p>
                </div>

              </div>

              <div className="mt-16 border-y border-black/15 py-8">

                <p className="mono text-[10px] uppercase text-black/45">
                  STACK
                </p>

                <p className="mt-3 text-lg">
                  {caseStudies[selected].stack}
                </p>

              </div>

              <div className="mt-10">

                <p className="mono text-[10px] uppercase text-black/45">
                  WHAT IT SHOWS
                </p>

                <ul className="mt-5 space-y-3">

                  {caseStudies[selected].takeaways.map((t) => (
                    <li
                      key={t}
                      className="text-lg"
                    >
                      — {t}
                    </li>
                  ))}

                </ul>

              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}