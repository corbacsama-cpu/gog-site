import ButtonContact from "~/widget/button-contact";
import Process from "../components/process";

export type Herocategory = {
  title: string;
  subtitle: string;
  image: string;
  color: string;
};

export const categories: Herocategory[] = [
  {
    title: "GÉNIE CIVIL & LOGISTIQUE",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.",
    image: "/images/ga5.jpeg",
    color: "#E0B818",
  },
  {
    title: "SECTEUR INDUSTRIEL",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.",
    image: "/images/industriel.png",
    color: "#0A33FF",
  },
  {
    title: "SECTEUR DE SÉCURITÉ",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.",
    image: "/images/securite.png",
    color: "#D81917",
  },
];

function HeroSection(props: { category: Herocategory }) {
  return (
    <div
      class="flex flex-col md:flex-row w-full max-w-[1200px] mx-auto 
             h-auto md:h-[688px] overflow-hidden rounded-2xl"
    >
      {/* Colonne image */}
      <div
        class="w-full md:w-1/3 
               h-[240px] sm:h-[300px] md:h-[688px] 
               bg-cover bg-center bg-no-repeat 
               flex-shrink md:shrink-0"
        style={{
          "background-image": `url(${props.category.image})`,
        }}
      ></div>

      {/* Colonne contenu */}
      <div
        class="flex flex-col justify-center items-center flex-1 
               px-4 py-8 sm:px-8 md:px-12 md:py-0"
        style={{ "background-color": props.category.color }}
      >
        <div
          class="flex flex-col w-full sm:w-[90%] md:w-[672px] 
                 text-center md:text-left text-white"
        >
          {/* Trait blanc */}
          <div class="hidden md:block w-[85px] h-[7px] mb-6 bg-white"></div>

          {/* Titre */}
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-8">
            {props.category.title}
          </h1>

          {/* Texte */}
          <p class="text-sm sm:text-base md:text-lg mb-6 md:mb-12 text-justify md:text-left leading-relaxed">
            {props.category.subtitle}
          </p>

          {/* Bouton */}
          <div class="mb-6 flex justify-center md:justify-start">
            <ButtonContact bgColor="#fff" textColor="#000" />
          </div>

          {/* Process */}
          <div class="mt-6 md:mt-20">
            <Process
              bgColor="transparent"
              padding="py-0 px-0"
              items={[
                {
                  text: "DEVELOPPEMENT",
                  textColor: "text-white",
                  fontSize: "text-sm sm:text-base md:text-xl",
                },
                {
                  text: "PROCÉDÉS",
                  textColor: "text-white",
                  fontSize: "text-sm md:text-lg",
                },
                {
                  text: "PERFORMANCES",
                  textColor: "text-white",
                  fontSize: "text-sm md:text-lg",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;