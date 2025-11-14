import { A } from "@solidjs/router";

type ButtonContactProps = {
  bgColor?: string;   // couleur de fond
  textColor?: string; // couleur du texte
};

const ButtonContact = (props: ButtonContactProps) => {
  const scrollToContact = (e: MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div class="flex justify-start">
      <button
        onClick={scrollToContact}
        class="text-base rounded-[2px] p-4 cursor-pointer transition duration-300 hover:opacity-80"
        style={{
          "background-color": props.bgColor || "#000",
          color: props.textColor || "#fff",
        }}
      >
        CONTACT
      </button>
    </div>
  );
};

export default ButtonContact;