import Hero from "../components/hero";
import HeroCarousel from "../components/caroussel";
import LogoCarousel from "~/components/soutien";
import Services from "~/components/services";
import Service from "~/components/3services";
import Secteur from "~/widget/secteur";
import Metallurgie from "~/components/metallurgie";
import Equipe from "~/components/equipe";
import Contact from "~/components/contact";
import Footer from "~/components/footer";

export default function Home() {
  return (
    <main class="w-full bg-black mx-auto scroll-snap-y-mandatory">
         <section id="home">
        <Hero />
      </section>
      {/* Carrousel */}
      <HeroCarousel/>
      {/* Soutien */}
      <div class="bg-white">
        <div class="flex flex-col py-4 text-2xl text-black justify-center items-center">
          SOUTENU PAR
        </div>
        {/* Logo soutien */}
        <LogoCarousel/>
        <Services/>
        {/* Hero 1 */}
        <section
          class="hero relative m-4 md:m-8 min-h-[300px] md:min-h-[500px] lg:min-h-[700px] 
         bg-[url('./images/stock.svg')] bg-cover bg-center"
        ></section>
        {/* service  */}
        <Service bgTrait="#E0B818" />
        {/* Annexe */}
        <div class="flex flex-col py-8 mx-8 text-black">
          <h1 class="uppercase  font-semibold  py-4">
          Des services intelligents pour faire fonctionner votre entreprise plus facilement, plus vite et plus efficacement.
          </h1>
          <p class=" text-start uppercase">
          Nos offres et services fiables et innovants conçus pour simplifier vos opérations, optimiser vos performances et vous permettre de vous concentrer sur l’essentiel : la croissance de votre entreprise.
          </p>
        </div>
        {/* secteur black */}
        <section class="bg-black flex flex-col">
          <Secteur
            bgColor="#000"
            textColor="#fff"
            rightTitleColor="#0A33FF"
            title="INDUSTRIEL"
            subtitle="Spécialisés dans les procédés industriels, nous intervenons sur la conception, l’installation et la maintenance d’équipements de haute performance."
            points={[
              ".GENIE CIVIL & LOGISTIQUE",
              ".CONSTRUCTION & INFRASTRUCTURE",
              ".MAINTENANCE INDUSTRIELLE",
            ]}
          />
        </section>
        {/* hero Secteur */}
        <div class="bg-black w-full h-full p-4 md:p-8">
          <section
            class="
      hero relative 
      w-full 
      min-h-[300px] md:min-h-[500px] lg:min-h-[700px] 
      bg-[url('./images/secteur.png')] 
      bg-cover bg-center
    "></section>
        </div>
        {/* Secteur metallurgique*/}
        <Metallurgie />
        {/* secteur red */}
        <section class="bg-black flex flex-col">
          <div class="bg-[#D81917] w-full">
            <Secteur
              bgColor=""
              textColor="#fff"
              rightTitleColor="#fff"
              title="DE SECURITÉ"
              subtitle="Grâce à des technologies de pointe et une expertise humaine éprouvée, nous garantissons une sécurité proactive et adaptée à chaque environnement."
              points={[
                ". GENIE CIVIL & LOGISTIQUE",
                ". CONSTRUCTION & INFRASTRUCTURE",
                ". MAINTENANCE INDUSTRIELLE",
              ]}
            />
            <Service padding="p-8" />
          </div>
        </section>
        {/* Equipe */}
         {/* 👥 SECTION ÉQUIPE */}
      <section id="company">
        <Equipe/>
      </section>
        {/* Contact */}
          {/* 📞 SECTION CONTACT */}
      <section id="contact" class="bg-black">
        <Contact/>
      </section>
      {/* footer */}
      <Footer/>
      </div>
    </main>
  );
}
