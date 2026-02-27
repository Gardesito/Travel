"use client";

import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Sobre mí", href: "#sobremi", icon: "person", highlight: true },
    { name: "Diseños de Viajes", href: "#destinos", icon: "document" },
    { name: "Informacion", href: "#informacion", icon: "info" },
    { name: "Blog", href: "#blog", icon: "blog" },
    { name: "Tienda", href: "#tienda", icon: "shop" },
    { name: "Contacto", href: "#contact", icon: "contact" },
  ];

  const Icon = ({ type }: { type: string }) => {
    const className = "w-4 h-4 flex-shrink-0";
    if (type === "person")
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      );
    if (type === "document")
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      );
    if (type === "info")
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    if (type === "blog")
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      );
    if (type === "shop")
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      );
    if (type === "contact")
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    return null;
  };

  const isTransparent = !scrolled;
  const textColor = isTransparent ? "text-white" : "text-white";
  const bgStyle = isTransparent ? {} : { backgroundColor: "#1C3893" };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent ? "bg-transparent" : ""
      }`}
      style={bgStyle}
    >
      {/* Fila superior - Logo y contacto (solo desktop) */}
      <div className="hidden lg:block border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between py-3">
          {/* Logo */}
          <a href="/" className="flex flex-col">
            <span className="font-bold text-white text-lg tracking-wide uppercase leading-tight">
              ALMA
            </span>
            <span className="font-bold text-white text-lg tracking-wide uppercase leading-tight -mt-0.5">
              VIAJERA
            </span>
          </a>

          {/* Contacto */}
          <div className="flex items-center gap-6 text-sm">
            <a href="tel:+542975179462" className={`flex items-center gap-2 ${textColor} hover:opacity-80 transition-opacity`}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+542975179462</span>
            </a>
            <a href="tel:+3884601000" className={`flex items-center gap-2 ${textColor} hover:opacity-80 transition-opacity`}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <span>+3884601000</span>
            </a>
            <span className={`flex items-center gap-2 ${textColor}`}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Lunes a Viernes de 10:00 a 18:00</span>
            </span>
          </div>
        </div>
      </div>

      {/* Fila inferior - Links de navegación */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo móvil (cuando no hay fila superior) */}
          <a href="/" className="lg:hidden flex flex-col">
            <span className="font-bold text-white text-sm uppercase">ALMA</span>
            <span className="font-bold text-white text-sm uppercase -mt-0.5">VIAJERA</span>
          </a>

          {/* Links desktop */}
          <div className="hidden lg:flex items-center justify-center gap-4 flex-1">
            {navLinks.map((link) => (
              link.highlight ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-2 bg-white rounded-full px-4 py-2 border-2 transition-all hover:opacity-90"
                  style={{ borderColor: "#60A5FA", color: "#3B82F6" }}
                >
                  <Icon type={link.icon} />
                  <span className="font-medium text-sm">{link.name}</span>
                </a>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 border-2 border-transparent transition-all font-medium text-sm ${textColor} hover:bg-white hover:border-[#60A5FA] hover:text-[#3B82F6]`}
                >
                  <Icon type={link.icon} />
                  <span>{link.name}</span>
                </a>
              )
            ))}
          </div>

          {/* Botón menú móvil */}
          <button
            className={`lg:hidden p-2 ${textColor}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
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
          className="lg:hidden border-t border-white/20 py-4"
          style={isTransparent ? { backgroundColor: "rgba(28, 56, 147, 0.98)" } : bgStyle}
        >
          <div className="max-w-7xl mx-auto px-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              link.highlight ? (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 bg-white rounded-full px-4 py-3 border-2 w-fit"
                  style={{ borderColor: "#60A5FA", color: "#3B82F6" }}
                >
                  <Icon type={link.icon} />
                  <span className="font-medium">{link.name}</span>
                </a>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-2 rounded-full px-4 py-3 border-2 border-transparent transition-all font-medium w-fit hover:bg-white hover:border-[#60A5FA] hover:text-[#3B82F6] ${textColor}`}
                >
                  <Icon type={link.icon} />
                  <span>{link.name}</span>
                </a>
              )
            ))}
            <div className="mt-2 pt-2 border-t border-white/20">
              <p className="text-white/80 text-sm">+542975179462</p>
              <p className="text-white/80 text-sm">Lunes a Viernes 10:00 - 18:00</p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
