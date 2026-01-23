import { For } from "solid-js";

export type ServiceCategory = {
  title: string;
  points: string[]; // ✅ tableau plutôt qu'un seul s1
};

// Exemple de données
const services: ServiceCategory[] = [
  {
    title: "GENIE CIVIL",
    points: [
      ".GENIE CIVIL & LOGISTIQUE",
      ".CONSTRUCTION &INFRASTRUCTURE",
      ".MAINTENANCE INDUSTRIELLE",
    ],
  },
];

function ServiceComponent(props: { service: ServiceCategory }) {
  return (
    <div
      class="
        relative z-10  
        flex flex-col md:flex-row 
        justify-between items-start 
        h-full w-full m-4 md:m-8 text-black gap-6">

      {/* Bloc gauche */}
      <div class="flex flex-col justify-between  md:w-1/3">
        {/* Carré décoratif */}
        <div class="flex justify-center items-center my-12 md:my-16 w-8 h-8 bg-[#E0B818]"></div>
  
        {/* Liste des points */}
        <div class="flex flex-col justify-end text-left space-y-2 py-6">
          <For each={props.service.points}>
            {(point) => (
              <p class="font-inter text-base  text-justify fade-up">{point}</p>
            )}
          </For>
        </div>
      </div>
  
      {/* Bloc droit */}
      <div
        class="
          flex flex-col 
           md:w-2/3 
          text-start py-6 px-4">
        <h1 class="font-inter text-4xl md:text-[64px]  lg:text-[100px] font-bold fade-up leading-tight">
          {props.service.title} <span class="text-gray-400">&</span>
        </h1>
        <h1 class="font-inter text-4xl text-[#E0B818] md:text-[64px] lg:text-[100px] font-bold fade-up leading-tight">
          LOGISTIQUE
        </h1>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <div id="services" class="overflow-hidden w-full flex  bg-white py-6">
      <For each={services}>
        {(service) => <ServiceComponent service={service} />}
      </For>
    </div>
  );
}
