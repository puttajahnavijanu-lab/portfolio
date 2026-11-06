import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowRight, ExternalLink, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '../icons/SocialIcons';
import { TiltCard } from '../ui/TiltCard';
import { MagneticButton } from '../ui/MagneticButton';
import { MaskedTextReveal } from '../ui/MaskedTextReveal';
import { prefersReducedMotion } from '../../styles/motion';

gsap.registerPlugin(ScrollTrigger);

interface ZigZagProject {
  id: string;
  number: string;
  title: string;
  eyebrow: string;
  category: string;
  liveUrl: string;
  githubUrl: string;
  tags: string[];
  description: string;
  fullDescription: string;
  highlights: [string, string];
  previewImage: string;
  accentColor: string;
  accentGlow: string;
}

const FEATURED_PROJECTS: ZigZagProject[] = [
  {
    id: "solara",
    number: "01",
    title: "SOLARA",
    eyebrow: "SOLAR WEARABLE & IOT HARDWARE",
    category: "Solar Technology & Hardware",
    liveUrl: "https://nanii-solara.vercel.app/",
    githubUrl: "https://github.com/puttajahnavijanu-lab",
    tags: ["React.js", "Tailwind CSS", "Wearable Tech", "Solar Energy"],
    description: "Designed a responsive wearable-technology showcase highlighting solar-charging hardware, battery-optimization metrics, and product features.",
    fullDescription: "High-end product showcase for solar-powered wearable technology, featuring dynamic battery optimization analytics, telemetry views, and solar charging efficiency models.",
    highlights: [
      "Solar harvesting telemetry with real-time conversion models",
      "Dynamic battery preservation & responsive ambient telemetry preview"
    ],
    previewImage: "/assets/projects/solara_cinematic.jpg",
    accentColor: "#F59E0B", // Solar gold / amber
    accentGlow: "rgba(245, 158, 11, 0.28)"
  },
  {
    id: "heliowatch",
    number: "02",
    title: "HelioWatch",
    eyebrow: "SMARTWATCH COMMERCE SHOWCASE",
    category: "Sustainable Luxury Wearables",
    liveUrl: "https://nanii-heliowatch.vercel.app/",
    githubUrl: "https://github.com/puttajahnavijanu-lab",
    tags: ["React.js", "TypeScript", "E-Commerce", "Responsive UI"],
    description: "Built a modern smartwatch showcase with dynamic product specifications, pricing tiers, and mobile-first shopping interactions.",
    fullDescription: "E-commerce and interactive showcase for advanced smartwatches, blending technical telemetry with fluid shopping workflows, specifications comparison, and responsive design.",
    highlights: [
      "Modern smartwatch showcase with dynamic product specifications",
      "Responsive pricing tiers & mobile-first shopping interactions"
    ],
    previewImage: "/assets/projects/heliowatch_cinematic.jpg",
    accentColor: "#00D9FF", // Cyan / blue accent
    accentGlow: "rgba(0, 217, 255, 0.28)"
  }
];

export const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (prefersReducedMotion()) return;
    const sec = sectionRef.current;
    if (!sec) return;

    // Header entrance reveal
    gsap.fromTo(sec.querySelectorAll('.projects-header-item'),
      { y: 35, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        force3D: true,
        scrollTrigger: {
          trigger: sec,
          start: "top 85%",
          toggleActions: "play reverse play reverse"
        }
      }
    );

    // Zig-Zag rows alternating entrance animation
    const projectRows = sec.querySelectorAll('.zigzag-project-row');
    projectRows.forEach((row) => {
      const isEven = row.getAttribute('data-layout') === 'image-left';
      const previewSide = row.querySelector('.project-preview-side');
      const infoSide = row.querySelector('.project-info-side');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: row,
          start: "top 80%",
          toggleActions: "play reverse play reverse"
        }
      });

      if (previewSide && infoSide) {
        if (isEven) {
          // Image Left -> Slides in from left, Info slides in with vertical lift
          tl.fromTo(previewSide,
            { x: -55, opacity: 0, scale: 0.96 },
            { x: 0, opacity: 1, scale: 1, duration: 0.85, ease: "power3.out", force3D: true }
          );
          tl.fromTo(infoSide,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", force3D: true },
            "-=0.6"
          );
        } else {
          // Info Left -> Slides in with vertical lift, Image Right -> Slides in from right
          tl.fromTo(infoSide,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", force3D: true }
          );
          tl.fromTo(previewSide,
            { x: 55, opacity: 0, scale: 0.96 },
            { x: 0, opacity: 1, scale: 1, duration: 0.85, ease: "power3.out", force3D: true },
            "-=0.6"
          );
        }
      }
    });

  }, { scope: sectionRef });

  return (
    <section 
      id="projects" 
      ref={sectionRef} 
      className="relative w-full bg-[#050505] text-[#F5F5F5] py-24 sm:py-32 overflow-hidden border-t border-white/[0.08]"
    >
      {/* Background Subtle Ambience */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.04] z-0" 
        style={{
          backgroundImage: 'radial-gradient(#3A3F4D 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 relative z-10">

        {/* Section Header */}
        <div className="projects-header-block flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 sm:mb-28 pb-8 border-b border-white/[0.08]">
          <div>
            <div className="projects-header-item inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#00D9FF] shadow-[0_0_8px_#00D9FF] animate-pulse" />
              <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.22em] text-[#00D9FF]">
                SELECTED WORK / FEATURED PROJECTS
              </span>
            </div>

            <h2 className="projects-header-item font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-[#F5F5F5] tracking-tight leading-tight">
              Real Problems.{' '}
              <span className="text-[#929292] font-bold">
                Meaningful Solutions.
              </span>
            </h2>
          </div>

          <p className="projects-header-item text-xs sm:text-sm text-[#929292] max-w-md leading-relaxed font-normal">
            Hand-crafted responsive web applications, interactive product showcases, and front-end engineering with modern frameworks.
          </p>
        </div>

        {/* Alternating Zig-Zag Showcase Container */}
        <div className="space-y-24 sm:space-y-36">
          {FEATURED_PROJECTS.map((project, index) => {
            const isImageLeft = index % 2 === 0;

            return (
              <div
                key={project.id}
                data-layout={isImageLeft ? 'image-left' : 'information-left'}
                className="zigzag-project-row grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-center"
              >
                {/* Visual Preview Side (58% width on desktop) */}
                <div 
                  className={`project-preview-side lg:col-span-7 ${
                    isImageLeft ? 'lg:order-1' : 'lg:order-2'
                  } order-1`}
                >
                  <TiltCard maxTilt={3} perspective={1200} className="w-full">
                    <div 
                      className="group/preview relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#121316] border border-[#262626] hover:border-[#3E424D] transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
                      data-cursor-text="VISIT"
                    >
                      {/* Ambient Project Accent Glow */}
                      <div 
                        className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full blur-3xl opacity-20 group-hover/preview:opacity-35 transition-opacity duration-700"
                        style={{ backgroundColor: project.accentColor }}
                      />

                      {/* Aspect Ratio Artwork Container */}
                      <div className="relative aspect-[16/10] sm:aspect-[16/9.5] overflow-hidden bg-[#101114]">
                        <img
                          src={project.previewImage}
                          alt={`${project.title} - ${project.category}`}
                          className="w-full h-full object-cover object-center group-hover/preview:scale-[1.03] transition-transform duration-700 ease-out"
                          loading={index <= 1 ? "eager" : "lazy"}
                        />

                        {/* Dark Gradient Overlay for Atmospheric Depth */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-transparent to-black/20 pointer-events-none" />

                        {/* Top Metadata Badges */}
                        <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between gap-2">
                          <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[#080808]/85 text-[#F2F0ED] backdrop-blur-md border border-white/10 shadow-xs">
                            PROJECT {project.number}
                          </span>

                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider font-semibold bg-[#080808]/85 text-[#F2F0ED] backdrop-blur-md border border-white/10 shadow-xs">
                            <span 
                              className="w-1.5 h-1.5 rounded-full" 
                              style={{ backgroundColor: project.accentColor }} 
                            />
                            {project.category}
                          </span>
                        </div>

                        {/* Hover Overlay with Instant Live Link Button */}
                        <div className="absolute inset-0 bg-[#080808]/50 backdrop-blur-xs opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#080808] font-bold text-xs sm:text-sm shadow-xl scale-95 group-hover/preview:scale-100 transition-transform duration-300">
                            <span>Explore Live Platform</span>
                            <ExternalLink className="w-4 h-4 text-[#0096C7]" />
                          </div>
                        </div>

                        {/* Bottom-Right Live Pill Indicator */}
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute bottom-4 right-4 z-10 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#080808]/90 text-white font-semibold text-xs border border-white/10 hover:border-white/30 hover:bg-black transition-all shadow-md"
                          onClick={(e) => e.stopPropagation()}
                          data-cursor-text="LIVE"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5 text-[#00D2FF]" />
                        </a>
                      </div>
                    </div>
                  </TiltCard>
                </div>

                {/* Project Information Side (42% width on desktop) */}
                <div 
                  className={`project-info-side lg:col-span-5 ${
                    isImageLeft ? 'lg:order-2' : 'lg:order-1'
                  } order-2 flex flex-col justify-center`}
                >
                  {/* Eyebrow Category */}
                  <div className="inline-flex items-center gap-2 mb-3">
                    <span 
                      className="w-2 h-2 rounded-full" 
                      style={{ backgroundColor: project.accentColor }} 
                    />
                    <span 
                      className="text-[11px] font-mono font-bold uppercase tracking-[0.2em]"
                      style={{ color: project.accentColor }}
                    >
                      {project.eyebrow}
                    </span>
                  </div>

                  {/* Large Project Title with Masked Entrance */}
                  <MaskedTextReveal
                    as="h3"
                    text={project.title}
                    className="font-heading font-black text-3xl sm:text-4xl lg:text-[44px] text-[#F5F5F5] tracking-tight leading-[1.15] mb-4"
                    duration={0.8}
                  />

                  {/* Summary Description in Glyko Sans */}
                  <p className="text-sm sm:text-base text-[#929292] leading-relaxed mb-6 font-normal">
                    {project.description}
                  </p>

                  {/* Engineering Capabilities Highlight Box */}
                  <div className="p-4 rounded-xl bg-[#121316] border border-[#22242B] space-y-2 mb-6">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#666666] mb-1">
                      Key Architectural Highlights
                    </div>
                    {project.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-[12.5px] text-[#A1A1AA] leading-snug">
                        <CheckCircle2 
                          className="w-4 h-4 shrink-0 mt-0.5" 
                          style={{ color: project.accentColor }}
                        />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-lg bg-[#141519] text-xs font-mono font-medium text-[#A1A1AA] border border-[#262626] hover:border-[#3E424D] hover:text-[#F2F0ED] transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action CTAs with Magnetic Physics */}
                  <div className="flex flex-wrap items-center gap-3.5">
                    <MagneticButton
                      as="a"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[#080808] text-xs sm:text-sm font-bold shadow-md hover:gap-3 transition-all"
                      strength={0.25}
                      data-cursor-text="VISIT"
                    >
                      <span
                        className="absolute inset-0 rounded-full"
                        style={{
                          backgroundColor: project.accentColor,
                          boxShadow: `0 4px 18px ${project.accentGlow}`,
                          zIndex: -1,
                        }}
                      />
                      <span>Explore Platform</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </MagneticButton>

                    <MagneticButton
                      as="a"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#121316] border border-[#262626] text-[#F5F5F5] text-xs sm:text-sm font-semibold hover:bg-[#1A1C21] hover:border-white/20 transition-all shadow-xs"
                      strength={0.2}
                      data-cursor-text="CODE"
                    >
                      <GithubIcon className="w-3.5 h-3.5 text-[#929292]" />
                      <span>Source Code</span>
                    </MagneticButton>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
