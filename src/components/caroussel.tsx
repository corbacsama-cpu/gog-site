import { createSignal, onCleanup } from "solid-js";

const slides = [
  {
    image: "/images/ga5.jpeg",
    color: "#E0B818",
    title: "GÉNIE CIVIL & LOGISTIQUE",
    description:
      "Expertise en conception, construction et gestion logistique. Nous garantissons qualité, sécurité et efficacité sur tous nos projets de génie civil.",
  },
  {
    image: "/images/industriel.png",
    color: "#0A33FF",
    title: "SECTEUR INDUSTRIEL",
    description:
      "Nous accompagnons les acteurs du secteur industriel dans la conception, la modernisation et l’optimisation de leurs installations. Notre savoir-faire garantit performance, fiabilité et conformité aux normes les plus exigeantes.",
  },
  {
    image: "/images/securite.png",
    color: "#D81917",
    title: "SECTEUR DE SÉCURITÉ",
    description:
      "Grâce à l’alliance entre expertise humaine et innovation technologique, nous assurons une sécurité optimale à travers des systèmes de surveillance intelligents, de contrôle d’accès et d’intervention rapide.",
  },
];

const intervalTime = 4000;

export default function HeroCarousel() {
  const totalSlides = slides.length;
  const [index, setIndex] = createSignal(0);

  // Auto-slide
  const interval = setInterval(() => {
    setIndex((prev) => (prev + 1) % totalSlides);
  }, intervalTime);

  onCleanup(() => clearInterval(interval));

  return (
    <div class="carousel">
      <div
        class="carousel-track"
        style={{
          transform: `translateX(-${index() * 100}%)`,
        }}
      >
        {slides.map((slide) => (
          <div class="slide">
            {/* Image */}
            <div
              class="hero-image"
              style={{ "background-image": `url('${slide.image}')` }}/>

            {/* Contenu */}
            <div
              class="hero-content"
              style={{ "background-color": slide.color }}
            >
              <div class="flex flex-col w-full  md:w-[700px] text-center md:text-left">
                <div class="hidden md:block w-[85px] h-[7px] mb-6 bg-white"></div>
                <h1 class="text-2xl md:text-4xl font-bold mb-4 md:mb-8">
                  {slide.title}
                </h1>
                <p class="text-sm sm:text-base md:text-lg mb-6 md:mb-12 text-justify md:text-left leading-relaxed">
                  {slide.description}
                </p>
                <div class="mb-6 flex justify-center md:justify-start">
                  <button>Nous contacter</button>
                </div>
                <div class="flex justify-between text-xs sm:text-sm md:text-lg font-semibold tracking-wide">
                  <span>DEVELOPPEMENT</span>
                  <span>PROCÉDÉS</span>
                  <span>PERFORMANCES</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}