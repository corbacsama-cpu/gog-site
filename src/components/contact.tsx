export default function Contact() {
  return (
    <section id="contact" class="contact-section">
        <div class="contact-container">
          <div class="contact-left">
            <h2 class="contact-title">CONTACTEZ NOUS<br />MAINTENANT</h2>
            <div class="contact-details">
              <p>
                <img class="icon" src="icons/IoMailOutline.png" alt="email" />
                contact@galaxy-oilandgas.com
              </p>
              <p>
                <img class="icon" src="icons/IoCallOutline.png" alt="phone" />
                +242 06 578 58 58
              </p>
              <p>
                <img
                  class="icon"
                  src="icons/IoLocationOutline.png"
                  alt="location"
                />
                ROND POINT EX BATA, CENTRE-VILLE RC<br />POINTE-NOIRE
              </p>
            </div>
          </div>

          <div class="contact-right">
            <form
              class="contact-form"
              id="contactForm">
              <input
                type="email"
                id="email"
                placeholder="ENTREZ VOTRE ADRESSE EMAIL"
                required
              />
              <input
                type="text"
                placeholder="ENTREZ VOTRE NOM"
                id="prenom"
                required
              />
              <textarea
                placeholder="ECRIVEZ LE CONTENU DE L'EMAIL ICI"
                id="message"
                rows="5"
                required
              ></textarea>
              <button type="submit" class="sendE">ENVOYER</button>
            </form>
          </div>
        </div>
      </section>
  );
}
