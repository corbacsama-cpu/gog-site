import { For } from "solid-js";

export type Logocategory = {
  image: string;
};

const logos: Logocategory[] = [
  { image: "./logo/baker.png" },
  { image: "./logo/aogc.png" },
  { image: "./logo/scaffall.png" },
  { image: "./logo/medior.png" },
  { image: "./logo/spie.png" },
  { image: "./logo/oceanexpress.png" },
  { image: "./logo/tracktafric.png" },
];

function LogoSection(props: { Logocategory: Logocategory }) {
  return (
    <div class="flex w-32 h-20 shrink-0 md:w-36 md:h-24 lg:w-40 lg:h-28 px-4">
      <img
        src={props.Logocategory.image}
        alt="logo"
        class="max-h-full max-w-full object-contain"
      />
    </div>
  );
}

export default function LogoCarousel() {
  return (
    <div class="overflow-hidden w-full flex bg-white py-6">
      <div class="animate-marquee">
        {/* Logos x2 pour effet continu */}
        <For each={[...logos, ...logos]}>
          {(logo) => <LogoSection Logocategory={logo} />}
        </For>
      </div>
    </div>
  );
}