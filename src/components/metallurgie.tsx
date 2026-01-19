import { For } from "solid-js";
import ButtonContact from "~/widget/button-contact";

export type Block = {
  title: string;
  subtitle: string;
  points: string[];
  breakpoint: string[];
};

export type MetallurgieCategory = {
  image: string;
  blocks: Block[];
};

// Exemple de données
const services: MetallurgieCategory[] = [
  {
    image: "/images/meta.png",
    blocks: [
      {
        title: "METALLURGIE",
        subtitle:
          "des services métallurgiques professionnels pour optimiser la production, assurer la qualité des pièces et garantir un suivi rigoureux des opérations industrielles.",
        points: [
          ".Contrôle qualité métallurgique",
          ".Traitement et transformation des métaux",
          ".Usinage et fabrication de pièces",
        ],
        breakpoint: [
          ".Suivi précis des opérations en atelier",
          ".Amélioration de la productivité industrielle",
          ".Traçabilité complète des processus",
        ],
      },
      {
        title: "MAINTENANCE INDUSTRIELLE",
        subtitle:
          "maintenance préventive et corrective des équipements industriels afin de garantir la continuité de production et réduire les arrêts techniques.",
        points: [
          ".Maintenance préventive des machines",
          ".Maintenance corrective et dépannage",
        ],
        breakpoint: [
          ".Réduction des temps d’arrêt de production",
          ".Optimisation de la durée de vie des équipements",
        ],
      },
      {
        title: "CONSTRUCTION & INFRASTRUCTURE",
        subtitle:
          "Réaliser des projets de construction et d’infrastructure en garantissant solidité, conformité technique et respect des délais d’exécution.",
        points: [
          ".Construction de bâtiments industriels et civils",
          ".Réalisation d’ouvrages et infrastructures",
        ],
        breakpoint: [
          ".Respect des normes et standards de qualité",
          ".Maîtrise des coûts et des délais de réalisation",
        ],
      },
    ],
  },
];

function MetallurgieComponent(props: { service: MetallurgieCategory }) {
  return (
    <div class="relative z-10 flex flex-col md:flex-row items-start gap-8 w-full m-8 text-black">
      {/* Bloc gauche */}
      <div class="flex-1 flex-col justify-between">
        <div
          class=" h-[400px] w-[300px] md:h-[400px] lg:w-[504px] lg:h-[702px] bg-center bg-cover"
          style={{ "background-image": `url(${props.service.image})` }}
        ></div>
      </div>

      {/* Blocs droits dynamiques */}
      <div class="flex-1 flex flex-col text-white">
        <For each={props.service.blocks}>
          {(block) => (
            <div class="flex flex-col mb-12">
              {/* Trait décoratif */}
              <div class="w-[85px] h-[7px] bg-[#0A33FF]"></div>

              {/* Titre + points */}
              <div class="flex flex-col ">
                <div class="flex-1 text-start">
                  <h1 class="font-inter pt-8 text-2xl md:text-[32px] font-semibold leading-tight">
                    {block.title}
                  </h1>
                </div>

                <div class="flex flex-col items-start md:items-left lg:items-end text-justify py-4 md:py-16 flex-1">
                  <For each={block.points}>
                    {(point) => (
                      <p class="uppercase font-inter text-base text-justify">
                        {point}
                      </p>
                    )}
                  </For>
                </div>
              </div>

              {/* Sous-titre */}
              <p class="uppercase font-inter text-base md:text-2xl text-start mt-4 max-w-full md:max-w-[700px]">
                {block.subtitle}
              </p>

              {/* breakpoints */}
              <div class="flex flex-col items-start text-justify py-4 flex-1">
                <For each={block.breakpoint}>
                  {(bp) => (
                    <p class="uppercase font-inter text-base text-justify">
                      {bp}
                    </p>
                  )}
                </For>
              </div>

              <div class="items-end pb-8 md:pb-32">
                <ButtonContact bgColor="#0A33FF" />
              </div>
            </div>
          )}
        </For>
      </div>
    </div>
  );
}

export default function Metallurgie() {
  return (
    <div class="flex bg-black">
      <For each={services}>
        {(service) => <MetallurgieComponent service={service} />}
      </For>
    </div>
  );
}
