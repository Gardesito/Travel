"use client";
import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Sobre mí", href: "#" },
    { name: "Diseños de Viajes", href: "#" },
    { name: "Información", href: "#" },
    { name: "Información", href: "#" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-filter backdrop-blur-lg bg-white/30 border border-white/50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo / Marca */}
        <a href="/" className="flex items-center space-x-2">
          <div className="bg-white/80 rounded-full p-2">
            {/* Aquí podés poner un ícono real o imagen */}
            ✈️
          </div>
          <span className="font-bold text-gray-900">DeLaPosta ALMUNDO</span>
        </a>

        {/* Menú links (desktop) */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="text-gray-800 hover:text-blue-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Botón de contacto (o CTA) */}
        <a
          href="#contact"
          className="hidden md:inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-full transition-colors"
        >
          Contacto
        </a>

        {/* Botón menú móvil */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Menú móvil (cuando menuOpen = true) */}
      {menuOpen && (
        <div className="md:hidden bg-white/40 backdrop-filter backdrop-blur-lg border-t border-white/50">
          <div className="flex flex-col space-y-2 px-6 py-4">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="text-gray-800 hover:text-blue-600 transition-colors block"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-full transition-colors inline-block text-center"
            >
              Contacto
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
