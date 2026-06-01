import { useEffect } from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

const Icon = ({ size = 22, strokeWidth = 2, children }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

const MapPinIcon = (props) => (
  <Icon {...props}>
    <path d="M12 21s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </Icon>
);

const PhoneIcon = (props) => (
  <Icon {...props}>
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.8 19.8 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.12.89.32 1.76.59 2.6a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.48-1.16a2 2 0 012.11-.45c.84.27 1.71.47 2.6.59A2 2 0 0122 16.92z" />
  </Icon>
);

const ClockIcon = (props) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </Icon>
);

const WhatsappIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const contactCards = [
  {
    title: "Teléfono",
    text: "+506 8705 1691",
    href: "tel:+50687051691",
    icon: PhoneIcon,
    iconBg: "#2a1f18",
  },
  {
    title: "Ubicación",
    text: "NOVA UROCLINICA by Dra. Navarro, San Carlos, Costa Rica",
    icon: MapPinIcon,
    iconBg: "#8b6b4f",
  },
  {
    title: "Horario",
    text: "Lunes a Viernes 1:00 PM – 5:30 PM. Sábado y Domingo: Cerrado",
    icon: ClockIcon,
    iconBg: "#c9b49a",
  },
];

const whatsappUrl = "https://wa.me/50687051691";
const googleMapsUrl =
  "https://www.google.com/maps?cid=963483043992407838&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=es&gl=CR&source=embed";
const mapsEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.822996164596!2d-84.43725062419842!3d10.340712492793735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa065d16e43a39b%3A0xd5efab948478f1e!2sNOVA%20UROCLINICA%20by%20Dra.%20Navarro!5e0!3m2!1ses!2scr!4v1700000000000!5m2!1ses!2scr";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-page">
      <Navbar />

      <section className="ct-section ct-hero">
        <div className="ct-container ct-hero-inner">
          <span className="ct-label">Contacto —</span>
          <h1>Estamos para atenderte</h1>
          <p className="ct-lead">
            Comunícate con NOVA UROCLINICA by Dra. Navarro en San Carlos. Agenda
            tu cita o resuelve tus dudas por teléfono o WhatsApp.
          </p>
          <a
            href={whatsappUrl}
            className="ct-wa-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsappIcon size={18} />
            Agendar por WhatsApp
          </a>
        </div>
      </section>

      <section className="ct-section">
        <div className="ct-container">
          <span className="ct-label center">Información —</span>
          <h2 className="ct-heading center">Datos de contacto</h2>
          <p className="ct-lead center">
            Teléfono, ubicación y horario de atención de la clínica.
          </p>

          <div className="ct-cards-grid">
            {contactCards.map((item) => {
              const CardIcon = item.icon;
              const content = (
                <>
                  <div
                    className="ct-icon-circle"
                    style={{ backgroundColor: item.iconBg }}
                  >
                    <CardIcon size={20} strokeWidth={2} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </>
              );

              return item.href ? (
                <a
                  href={item.href}
                  className="ct-card ct-info-card"
                  key={item.title}
                >
                  {content}
                </a>
              ) : (
                <article className="ct-card ct-info-card" key={item.title}>
                  {content}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="ct-section ct-location-section">
        <div className="ct-container">
          <span className="ct-label">Ubicación —</span>
          <h2 className="ct-heading">NOVA UROCLINICA by Dra. Navarro</h2>
          <p className="ct-lead">San Carlos, Costa Rica</p>

          <div className="ct-location-grid">
            <article className="ct-card ct-location-info">
              <h3>Información de contacto</h3>
              <ul>
                <li>
                  <MapPinIcon size={18} />
                  <span>
                    NOVA UROCLINICA by Dra. Navarro, San Carlos, Costa Rica
                  </span>
                </li>
                <li>
                  <PhoneIcon size={18} />
                  <a href="tel:+50687051691">+506 8705 1691</a>
                </li>
                <li>
                  <ClockIcon size={18} />
                  <span>
                    Lunes a Viernes 1:00 PM – 5:30 PM, Sábado y Domingo: Cerrado
                  </span>
                </li>
              </ul>
              <a
                href={whatsappUrl}
                className="ct-wa-button small"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsappIcon size={18} />
                Escribir por WhatsApp
              </a>
            </article>

            <article className="ct-card ct-map-card">
              <iframe
                title="NOVA UROCLINICA by Dra. Navarro"
                src={mapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ct-map-link"
              >
                Ver en Google Maps
              </a>
            </article>
          </div>
        </div>
      </section>

      <Footer />

      <a
        href={whatsappUrl}
        className="ct-fab-wa"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <WhatsappIcon size={22} />
      </a>

      <style>{`
        .contact-page {
          background: #faf8f5;
          color: #5a4535;
        }

        .ct-container {
          width: min(1100px, 100%);
          margin: 0 auto;
        }

        .ct-section {
          padding: 72px 32px;
        }

        .ct-label {
          display: inline-block;
          margin-bottom: 12px;
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #8b6b4f;
          font-weight: 700;
        }

        .ct-label.center,
        .ct-heading.center,
        .ct-lead.center {
          text-align: center;
          display: block;
        }

        .ct-heading {
          margin: 0 0 10px;
          color: #2a1f18;
          font-size: clamp(1.6rem, 2.7vw, 2.2rem);
          line-height: 1.2;
        }

        .ct-lead {
          margin: 0 0 28px;
          max-width: 700px;
          color: #6b5444;
          line-height: 1.75;
        }

        .ct-lead.center {
          margin-left: auto;
          margin-right: auto;
        }

        .ct-card {
          background: #fff;
          border: 1.5px solid #e5ddd5;
          border-radius: 12px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .ct-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(139, 107, 79, 0.1);
        }

        .ct-hero {
          text-align: center;
          padding-bottom: 40px;
        }

        .ct-hero-inner h1 {
          margin: 0 0 12px;
          color: #2a1f18;
          font-size: clamp(1.8rem, 3.2vw, 2.6rem);
          font-weight: 700;
          line-height: 1.15;
        }

        .ct-hero-inner .ct-lead {
          margin: 0 auto 24px;
        }

        .ct-wa-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 18px;
          border-radius: 999px;
          background: #25d366;
          color: #fff;
          text-decoration: none;
          font-weight: 700;
          transition: transform 0.2s ease, filter 0.2s ease;
        }

        .ct-wa-button:hover {
          transform: translateY(-1px);
          filter: brightness(0.95);
        }

        .ct-wa-button.small {
          margin-top: 14px;
        }

        .ct-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .ct-info-card {
          text-align: center;
          padding: 24px;
          text-decoration: none;
          color: inherit;
          display: block;
        }

        .ct-icon-circle {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 14px;
          color: #fff;
          border: none;
        }

        .ct-info-card h3 {
          margin: 0 0 8px;
          color: #2a1f18;
          font-size: 1.02rem;
        }

        .ct-info-card p {
          margin: 0;
          color: #6b5444;
          line-height: 1.65;
          font-size: 0.9rem;
        }

        .ct-location-section {
          background: #fff;
        }

        .ct-location-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 20px;
        }

        .ct-location-info {
          padding: 24px;
        }

        .ct-location-info h3 {
          margin: 0 0 16px;
          color: #2a1f18;
          font-size: 1.02rem;
        }

        .ct-location-info ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 14px;
        }

        .ct-location-info li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: #5a4535;
          line-height: 1.6;
        }

        .ct-location-info li svg {
          margin-top: 2px;
          color: #8b6b4f;
          flex-shrink: 0;
        }

        .ct-location-info a {
          color: #5a4535;
          text-decoration: none;
        }

        .ct-location-info a:hover {
          color: #2a1f18;
        }

        .ct-map-card {
          overflow: hidden;
        }

        .ct-map-card iframe {
          width: 100%;
          height: 350px;
          border: 0;
          display: block;
        }

        .ct-map-link {
          display: inline-block;
          padding: 14px 16px;
          color: #8b6b4f;
          font-weight: 600;
          text-decoration: none;
        }

        .ct-map-link:hover {
          color: #2a1f18;
          text-decoration: underline;
        }

        .ct-fab-wa {
          position: fixed;
          right: 24px;
          bottom: 24px;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          color: #fff;
          background: #25d366;
          z-index: 1000;
          box-shadow: 0 4px 16px rgba(37, 211, 102, 0.4);
          animation: ct-wa-pulse 2.4s infinite;
          transition: transform 0.2s ease, background 0.2s ease;
        }

        .ct-fab-wa:hover {
          transform: scale(1.1);
          background: #128c7e;
        }

        @keyframes ct-wa-pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.58);
          }
          70% {
            box-shadow: 0 0 0 12px rgba(37, 211, 102, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
          }
        }

        @media (max-width: 900px) {
          .ct-section {
            padding: 48px 20px;
          }

          .ct-cards-grid,
          .ct-location-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
