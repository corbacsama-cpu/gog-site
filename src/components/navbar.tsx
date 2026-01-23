import type { Component } from "solid-js";
import ButtonContact from "~/widget/button-contact";
import { createSignal, Show } from "solid-js";
import logo from "../icons/gog.png";

const [menuOpen, setMenuOpen] = createSignal(false);
const toggleMenu = () => setMenuOpen((o) => !o);

interface NavbarProps {
  title?: string;
  onTitleClick?: () => void;
}

const Navbar: Component<NavbarProps> = (props) => {
  const scrollToSection = (id: string) => {
    if (typeof window === "undefined") return;
  
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  };

  return (
    <nav class="bg-gradient-to-r from-black/80 to-black sticky top-0 z-90">
      <div class="relative max-w-[1200px] mx-auto h-20 px-6 flex items-center">
        {/* Logo / titre */}
        <div class="flex-shrink-0 w-40">
          <a
            href="#"
            class="text-2xl font-bold flex items-center gap-2 text-white"
            onClick={(e) => {
              e.preventDefault();
              props.onTitleClick?.();
              scrollToSection("home");
            }}
          >
           <img src="/icons/gog.png" alt="Galaxy Oil & Gas" class="h-10 w-auto" />
          </a>
        </div>

        {/* Menu centré – caché sur mobile */}
        <div class="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-6 text-white text-sm">
          <button onClick={() => scrollToSection("home")}   class=" cursor-pointer transition-colors duration-200">HOME</button>
          <button onClick={() => scrollToSection("company")}  class=" cursor-pointer transition-colors duration-200">COMPANY</button>
          <button onClick={() => scrollToSection("services")} class=" cursor-pointer transition-colors duration-200">SERVICES</button>
          <button onClick={() => scrollToSection("gallery")} class=" cursor-pointer transition-colors duration-200">GALLERIE</button>
        </div>

        {/* Bouton à droite */}
        <div class=" ml-auto hidden md:block">
          <ButtonContact />
        </div>

        {/* Burger pour mobile */}
        <div class="ml-auto md:hidden">
          <button onClick={toggleMenu} class="text-white">
            ☰
          </button>
        </div>
      </div>

      {/* Menu mobile en dessous */}
      <Show when={menuOpen()}>
        <div class="flex flex-col px-6 pb-4 md:hidden bg-black/90 text-white space-y-2">
          <button onClick={() => scrollToSection("home")}>HOME</button>
          <button onClick={() => scrollToSection("company")}>COMPANY</button>
          <button onClick={() => scrollToSection("services")}>SERVICES</button>
          <button onClick={() => scrollToSection("gallery")}>GALLERIE</button>
          <div class="flex justify-center">
            <button
              onClick={() => scrollToSection("contact")}
              class="text-base rounded-[2px]"
            >
              CONTACT
            </button>
          </div>
        </div>
      </Show>
    </nav>
  );
};

export default Navbar;