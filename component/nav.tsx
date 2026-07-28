"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { Phone, Clock, Instagram, ChevronDown } from "lucide-react";
import { NAVY, ACCENT } from "@/lib/theme";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-playfair",
});

type BlogSubitem = { name: string; href: string };

type NavLinkItem =
  | {
      name: string;
      href: string;
      highlight?: boolean;
      target?: string;
    }
  | {
      name: string;
      highlight?: boolean;
      dropdown: BlogSubitem[];
    };

function isDropdownNavLink(
  link: NavLinkItem
): link is Extract<NavLinkItem, { dropdown: BlogSubitem[] }> {
  return "dropdown" in link;
}

function FourPointStar({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2l2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2L12 2z" />
    </svg>
  );
}

function Logo({ scrolled }: { scrolled: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2 sm:gap-2.5 group">
      <FourPointStar
        className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 transition-colors"
        style={{ color: scrolled ? ACCENT : ACCENT }}
      />
      <span className={`${playfair.className} flex flex-col leading-none`}>
        <span
          className={`text-base sm:text-lg font-semibold tracking-wide uppercase transition-colors ${
            scrolled ? "text-white" : ""
          }`}
          style={scrolled ? undefined : { color: NAVY }}
        >
          Alma
        </span>
        <span
          className={`text-base sm:text-lg font-semibold tracking-wide uppercase -mt-0.5 transition-colors ${
            scrolled ? "text-white" : ""
          }`}
          style={scrolled ? undefined : { color: NAVY }}
        >
          Viajera
        </span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileBlogOpen, setMobileBlogOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) setMobileBlogOpen(false);
  }, [menuOpen]);

  const navLinks: NavLinkItem[] = [
    { name: "Sobre mí", href: "#sobremi", highlight: true },
    { name: "Destinos de Viajes", href: "#destinos" },
    {
      name: "Donaciones",
      href: "https://cafecito.app/almaviajeravane",
      target: "_blank",
    },
    {
      name: "Blog",
      dropdown: [
        { name: "Maravillas del mundo", href: "/7maravillas" },
        { name: "Maravillas de Argentina", href: "/maravillasargentina" },
        { name: "Maravillas de Córdoba", href: "/maravillascordoba" },
      ],
    },
    { name: "Tienda", href: "#tienda" },
    { name: "Contacto", href: "#contact" },
  ];

  const linkBase =
    "rounded-full px-3 xl:px-4 py-2 text-sm font-medium transition-all duration-200";
  const linkColor = scrolled
    ? "text-white/95 hover:bg-white/10 hover:text-white"
    : "hover:bg-white/60";
  const linkStyle = scrolled ? undefined : { color: NAVY };

  const topBarColor = scrolled ? "text-white/90" : "";
  const topBarStyle = scrolled ? undefined : { color: NAVY };

  return (
    <nav
      className={`${playfair.variable} fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-md" : "bg-transparent"
      }`}
      style={scrolled ? { backgroundColor: ACCENT } : undefined}
    >
      {/* Barra superior — contacto */}
      <div
        className={`hidden lg:block border-b transition-colors ${
          scrolled ? "border-white/15" : "border-[#1A2B4C]/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-8 flex items-center justify-end py-2.5 gap-6 text-xs">
          <a
            href="tel:+5493512435151"
            className={`flex items-center gap-1.5 hover:opacity-80 transition-opacity ${topBarColor}`}
            style={topBarStyle}
          >
            <Phone className="w-3.5 h-3.5 flex-shrink-0" strokeWidth={2} />
            <span>+5493512435151</span>
          </a>
          <a
            href="https://www.instagram.com/vane_almaviajera/"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1.5 hover:opacity-80 transition-opacity ${topBarColor}`}
            style={topBarStyle}
          >
            <Instagram className="w-3.5 h-3.5 flex-shrink-0" strokeWidth={2} />
            <span>@vane_almaviajera
            </span>
          </a>
          <span
            className={`flex items-center gap-1.5 ${topBarColor}`}
            style={topBarStyle}
          >
            <Clock className="w-3.5 h-3.5 flex-shrink-0" strokeWidth={2} />
            <span>Lun a Vie 10:00 a 18:30</span>
          </span>
        </div>
      </div>

      {/* Navegación principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-8 py-3">
        <div className="flex items-center justify-between gap-4">
          <Logo scrolled={scrolled} />

          <div className="hidden lg:flex items-center justify-end gap-1 xl:gap-2 flex-1">
            {navLinks.map((link) =>
              isDropdownNavLink(link) ? (
                <div key={link.name} className="relative group">
                  <button
                    type="button"
                    className={`${linkBase} ${linkColor} flex items-center gap-1 cursor-pointer`}
                    style={linkStyle}
                    aria-haspopup="menu"
                  >
                    {link.name}
                    <ChevronDown
                      className="w-4 h-4 opacity-70 transition-transform duration-200 group-hover:rotate-180"
                      aria-hidden
                    />
                  </button>
                  <div
                    className="absolute right-0 top-full z-[60] pt-0 -mt-1 min-w-[240px] opacity-0 invisible pointer-events-none translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:pointer-events-auto group-focus-within:translate-y-0 transition-all duration-200"
                    role="menu"
                    aria-label={`Submenú ${link.name}`}
                  >
                    <div className="rounded-xl bg-white shadow-xl border border-gray-100 py-2 mt-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2.5 text-sm transition-colors hover:bg-[#5D87FF]/10"
                          style={{ color: NAVY }}
                          role="menuitem"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : link.highlight ? (
                <a
                  key={link.name}
                  href={link.href}
                  className={`${linkBase} flex items-center gap-1.5 border-2 font-semibold`}
                  style={
                    scrolled
                      ? {
                          borderColor: ACCENT,
                          color: "#fff",
                          backgroundColor: "rgba(93, 135, 255, 0.25)",
                        }
                      : {
                          borderColor: ACCENT,
                          color: ACCENT,
                          backgroundColor: "rgba(93, 135, 255, 0.08)",
                        }
                  }
                >
                  <FourPointStar className="w-3 h-3" style={{ color: "currentColor" }} />
                  {link.name}
                </a>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.target}
                  rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
                  className={`${linkBase} ${linkColor}`}
                  style={linkStyle}
                >
                  {link.name}
                </a>
              )
            )}
          </div>

          <button
            type="button"
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-white" : ""
            }`}
            style={scrolled ? undefined : { color: NAVY }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <div
          className="lg:hidden border-t border-white/15 py-4 max-h-[80vh] overflow-y-auto"
          style={{ backgroundColor: ACCENT }}
        >
          <div className="max-w-7xl mx-auto px-4 flex flex-col gap-1">
            {navLinks.map((link) =>
              isDropdownNavLink(link) ? (
                <div key={link.name} className="flex flex-col gap-1">
                  <button
                    type="button"
                    onClick={() => setMobileBlogOpen((o) => !o)}
                    className="flex items-center justify-between w-full text-left rounded-xl px-4 py-3 text-white/95 hover:bg-white/10 font-medium text-sm"
                    aria-expanded={mobileBlogOpen}
                  >
                    {link.name}
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${mobileBlogOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {mobileBlogOpen && (
                    <div className="ml-3 pl-3 border-l-2 border-white/20 flex flex-col gap-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => {
                            setMenuOpen(false);
                            setMobileBlogOpen(false);
                          }}
                          className="text-white/85 text-sm py-2 hover:text-white"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : link.highlight ? (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 rounded-full px-4 py-3 border-2 w-fit font-semibold text-sm text-white"
                  style={{ borderColor: ACCENT, backgroundColor: "rgba(93, 135, 255, 0.3)" }}
                >
                  <FourPointStar className="w-3 h-3" style={{ color: ACCENT }} />
                  {link.name}
                </a>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.target}
                  rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-white/95 hover:bg-white/10 font-medium text-sm"
                >
                  {link.name}
                </a>
              )
            )}

            <div className="mt-3 pt-3 border-t border-white/15 space-y-2 text-white/75 text-xs">
              <a href="tel:+5493512435151" className="flex items-center gap-2 hover:text-white">
                <Phone className="w-3.5 h-3.5" />
                +5493512435151
              </a>
              <a
                href="https://www.instagram.com/vane_almaviajera/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white"
              >
                <Instagram className="w-3.5 h-3.5" />
                @vane_almaviajera
              </a>
              <p className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5" />
                Lun a Vie 10:00 a 18:30
              </p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
