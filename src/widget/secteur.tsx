import { For } from "solid-js";

type SecteurProps = {
  title: string;
  subtitle: string;
  points: string[];
  bgColor?: string;   // couleur de fond
  textColor?: string; // couleur des points
  rightTitleColor?: string; // couleur du bloc droit (ex: LOGISTIQUE)
};

const Secteur = (props: SecteurProps) => {
  return (
    <div
    class="
      relative z-10 
      flex flex-col md:flex-row       /* mobile = colonne, md = ligne */
      justify-between items-start 
      m-4 md:m-8 gap-6               /* espacements entre les deux blocs */
    "
    style={{ "background-color": props.bgColor || "transparent" }}
  >
    {/* Bloc gauche */}
    <div class="flex flex-col justify-between w-full md:w-1/2">
      <div class="flex justify-center items-center my-12 md:my-24 w-8 h-8 bg-[#fff]"></div>
  
      <div class="flex flex-col justify-end text-left space-y-2 py-12 md:py-20">
        <For each={props.points}>
          {(point) => (
            <p
              class="font-inter text-base  text-justify fade-up"
              style={{ color: props.textColor || "#000" }}
            >
              {point}
            </p>
          )}
        </For>
      </div>
    </div>
  
    {/* Bloc droit */}
    <div class="
        flex flex-col 
        text-left md:text-right       /* texte centré à gauche sur mobile, à droite sur desktop */
        py-6 md:py-8 
        w-full md:w-2/3 
        max-w-full md:max-w-[1000px]
      ">
      <h1
        class="font-inter nolineHeight text-4xl md:text-[64px] lg:text-[110px] font-bold fade-up leading-tight text-start"
        style={{ color: props.rightTitleColor || "#000" }}
      >
        SECTEUR
      </h1>
      <h1
        class="font-inter nolineHeight text-4xl md:text-[64px] lg:text-[110px] font-bold fade-up leading-tight text-start"
        style={{ color: props.rightTitleColor || "#000" }}
      >
        {props.title}
      </h1>
      <p
        class="uppercase font-inter max-w-full md:max-w-[700px] text-base md:text-2xl text-start fade-up mt-4"
      >
        {props.subtitle}
      </p>
    </div>
  </div>
  );
};

export default Secteur;