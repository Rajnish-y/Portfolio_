import React, { useCallback, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrambleTextPlugin);

export type Project = {
  id: number;
  title: string;
  type: string;
  stack: string;
  year: string;
  image: string;
  description: string;
  href?: string;
};

type Props = {
  projects: Project[];
  timeZone?: string;
};

const TimeDisplay = ({ timeZone = "Asia/Kolkata" }: { timeZone?: string }) => {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () =>
      setTime(new Intl.DateTimeFormat("en-US", {
        timeZone, hour: "numeric", minute: "2-digit", hour12: true
      }).format(new Date()));
    update();
    const id = window.setInterval(update, 1000);
    return () => window.clearInterval(id);
  }, [timeZone]);
  return <time className="mono text-[10px] uppercase tracking-wider">{time} IST</time>;
};

export default function MusicPortfolio({ projects, timeZone }: Props) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isIdle, setIsIdle] = useState(true);
  const bgRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const idleTimer = useRef<number | null>(null);
  const idleTimeline = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    projects.forEach((project) => {
      const img = new Image();
      img.src = project.image;
    });
  }, [projects]);

  const stopIdle = useCallback(() => {
    idleTimeline.current?.kill();
    idleTimeline.current = null;
    itemRefs.current.forEach((el) => el && gsap.set(el, { opacity: 1 }));
  }, []);

  const startIdle = useCallback(() => {
    if (idleTimeline.current || activeIndex !== -1) return;
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });
    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      tl.to(el, { opacity: .12, duration: .12, ease: "power2.inOut" }, i * .07);
      tl.to(el, { opacity: 1, duration: .12, ease: "power2.inOut" },
        projects.length * .035 + i * .07);
    });
    idleTimeline.current = tl;
  }, [activeIndex, projects.length]);

  useEffect(() => {
    idleTimer.current = window.setTimeout(startIdle, 4000);
    return () => {
      if (idleTimer.current) window.clearTimeout(idleTimer.current);
      stopIdle();
    };
  }, [startIdle, stopIdle]);

  const handleEnter = (index: number) => {
    if (idleTimer.current) window.clearTimeout(idleTimer.current);
    stopIdle();
    setIsIdle(false);
    setActiveIndex(index);

    const project = projects[index];
    if (bgRef.current) {
      bgRef.current.style.backgroundImage = `url(${project.image})`;
      gsap.fromTo(bgRef.current,
        { opacity: 0, scale: 1.16 },
        { opacity: .28, scale: 1, duration: .8, ease: "power3.out" }
      );
    }
  };

  const handleLeave = () => {
    setActiveIndex(-1);
    setIsIdle(false);
    if (bgRef.current) gsap.to(bgRef.current, { opacity: 0, duration: .35 });
    idleTimer.current = window.setTimeout(() => {
      setIsIdle(true);
      startIdle();
    }, 4000);
  };

  return (
    <section id="work" className="relative min-h-screen overflow-hidden px-5 py-24 md:px-12 md:py-32">
      <div ref={bgRef} aria-hidden className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-0 blur-[2px]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 flex items-end justify-between border-b border-black/20 pb-4">
          <div>
            <p className="mono text-[10px] uppercase tracking-[.25em]">01 / Selected work</p>
            <h2 className="mt-3 text-5xl font-semibold tracking-[-.055em] md:text-7xl">Built to solve.</h2>
          </div>
          <span className="mono hidden text-[10px] uppercase md:block">{isIdle ? "SYSTEM / IDLE" : "INTERACTION / ACTIVE"}</span>
        </div>

        <div onMouseLeave={handleLeave}>
          {projects.map((project, index) => {
            const active = activeIndex === index;
            return (
              <a
                ref={(el) => { itemRefs.current[index] = el; }}
                key={project.id}
                href={project.href || "#"}
                target={project.href ? "_blank" : undefined}
                rel="noreferrer"
                onMouseEnter={() => handleEnter(index)}
                className={`group grid grid-cols-[30px_1fr_auto] gap-3 border-b border-black/15 py-7 transition-all duration-300 md:grid-cols-[60px_1fr_190px_100px] ${active ? "bg-black/[.025] px-4" : ""}`}
              >
                <span className="mono pt-1 text-[10px] text-black/40">0{index + 1}</span>
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-medium tracking-tight transition-transform duration-300 group-hover:translate-x-2 md:text-4xl">{project.title}</h3>
                    <ArrowUpRight size={18} className="opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-black/55 md:text-base">{project.description}</p>
                </div>
                <span className="mono hidden pt-1 text-[10px] uppercase text-black/50 md:block">{project.stack}</span>
                <span className="mono pt-1 text-[10px]">{project.year}</span>
                {active && <span className="mono col-start-2 text-[9px] uppercase text-black/40 md:hidden">{project.stack}</span>}
              </a>
            );
          })}
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-8 left-5 right-5 flex justify-between md:left-12 md:right-12">
        <span className="mono text-[9px] uppercase text-black/45">VIT CHENNAI / CSE</span>
        <TimeDisplay timeZone={timeZone} />
      </div>
    </section>
  );
}