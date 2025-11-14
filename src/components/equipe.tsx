export default function Equipe() {
  const membres = [
    {
      poste: "C.E.O",
      nom: "MDS",
      image: "./images/DG.svg",
      description:
        "Définit la vision stratégique, dirige le développement global et veille à l’excellence opérationnelle.",
    },
    {
      poste: "D.O",
      nom: "Nom 2",
      image: "./images/DO.svg",
      description:
        "Responsable des opérations quotidiennes et de l’optimisation des processus industriels.",
    },
    {
      poste: "I.T",
      nom: "Corbacsama",
      image: "./images/BG.svg",
      description:
        "Conçoit, optimise et maintient les solutions logicielles afin de répondre aux besoins stratégiques de l’entreprise.",
    },
    {
      poste: "RP/RAL",
      nom: "Martino BOUNGOU",
      image: "./images/RP.PNG",
      description:
        "Planifie, coordonne et supervise les flux pour assurer une livraison fiable et efficiente des opérations.",
    },
  ];

  let sliderRef: HTMLDivElement | undefined;
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  const handleMouseDown = (e: MouseEvent) => {
    if (!sliderRef) return;
    isDown = true;
    sliderRef.style.cursor = "grabbing";
    startX = e.pageX - sliderRef.offsetLeft;
    scrollLeft = sliderRef.scrollLeft;
  };

  const handleMouseLeave = () => {
    if (!sliderRef) return;
    isDown = false;
    sliderRef.style.cursor = "grab";
  };

  const handleMouseUp = () => {
    if (!sliderRef) return;
    isDown = false;
    sliderRef.style.cursor = "grab";
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDown || !sliderRef) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.offsetLeft;
    const walk = (x - startX) * 1.5; // vitesse
    sliderRef.scrollLeft = scrollLeft - walk;
  };

  return (
    <div class="flex flex-col m-8 pt-[64px] max-w-[1568px]">
      <h1 class="text-[#0A33FF] pb-4 text-2xl md:text-3xl font-semibold">
        AU COEUR DE NOS EQUIPES
      </h1>
      <h1 class="text-black text-lg md:text-[80px] font-bold max-w-[1200px] nolineHeight">
        L'EXPERTISE INDUSTRIELLE AU SERVICE DE LA PLANETE
      </h1>

      {/* Scroll horizontal + drag*/}
      <div
        ref={sliderRef!}
        class="my-8 flex gap-8 overflow-x-auto no-scrollbar cursor-grab"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {membres.map((membre) => (
          <section
            class="hero relative min-w-[450px] h-[550px] bg-cover shadow-lg"
            style={{ "background-image": `url(${membre.image})` }}
          >
            {/* Poste aligné à droite en haut */}
            <div class="absolute inset-0 flex items-start justify-end p-4">
              <h1 class="text-white text-2xl font-bold">{membre.poste}</h1>
            </div>

            {/* Overlay en bas */}
            <div class="absolute bottom-0 left-0 w-full bg-black/50 h-[150px] flex items-center justify-center">
              <div class="text-start text-white px-8">
                <h1 class="font-inter text-4xl md:text-2xl font-bold fade-up">
                  {membre.nom}
                </h1>
                <p class="font-inter text-sm md:text-lg fade-up">
                  {membre.description}
                </p>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
