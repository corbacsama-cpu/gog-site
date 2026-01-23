import { For } from "solid-js";

type SecteurProps = {
  title: string;
  sub: string;
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
      flex flex-col md:flex-row 
      justify-between items-start 
      h-full w-full m-4 md:m-8  gap-6"
      style={{ "background-color": props.bgColor || "transparent" }}>

    {/* Bloc gauche */}
    <div class="flex flex-col justify-between  md:w-1/3">
      {/* Carré décoratif */}
      <div class="flex justify-center items-center my-12 md:my-16 w-8 h-8 bg-[#FFF]"></div>

      {/* Liste des points */}
      <div class="flex flex-col justify-end text-left space-y-2 py-6">
        <For each={props.points}>
          {(point) => (
            <p class="font-inter text-base  text-justify fade-up"    style={{ color: props.textColor || "#000" }}>{point}</p>
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
          <h1 class="font-inter text-4xl  md:text-[64px] lg:text-[100px] font-bold fade-up leading-tight" style={{ color: props.rightTitleColor || "#000" }}>
        SECTEUR <span class="">{props.sub}</span>
      </h1>
      <h1 class="font-inter text-4xl md:text-[64px]  lg:text-[100px] font-bold fade-up leading-tight"style={{ color: props.rightTitleColor || "#000" }}>
        {props.title} 
      </h1>
      
    </div>
  </div>
);
    
};

export default Secteur;