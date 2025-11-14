import type { Component } from "solid-js";


interface FooterProps {
  author?: string; // optionnel : permet d'afficher un nom personnalisé
}

const Footer: Component<FooterProps> = (props) => {
  return (
    <footer class="footer last">
  <div class="copyright">
    &copy; {new Date().getFullYear()} {props.author ?? "GOG"}. TOUS DROITS RÉSERVÉS.
  </div>
  <div class="developer">
    Développé par Corbacsama GOG.
  </div>
</footer>
  );
};

export default Footer;
