import "./App.css";
import heroImg from "./assets/hero.png";
import draImg from "./assets/Dra.jpg";
import Navbar from "./Navbar.jsx";

const KidneyIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="19" stroke="#c9b49a" strokeWidth="1.5" fill="#faf8f5" />
    <path d="M14 13c-2.5 1.5-4 4.5-3 8 .7 2.5 2.5 4 4.5 4 1.2 0 2-.8 2.5-2 .3-.8.5-1.8.5-3s.2-2.2.5-3c.5-1.2 1.3-2 2.5-2 2 0 3.8 1.5 4.5 4 1 3.5-.5 6.5-3 8" stroke="#8b6b4f" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <path d="M26 13c2.5 1.5 4 4.5 3 8-.7 2.5-2.5 4-4.5 4-1.2 0-2-.8-2.5-2-.3-.8-.5-1.8-.5-3s-.2-2.2-.5-3c-.5-1.2-1.3-2-2.5-2-2 0-3.8 1.5-4.5 4-1 3.5.5 6.5 3 8" stroke="#8b6b4f" strokeWidth="1.5" strokeLinecap="round" fill="none" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="19" stroke="#c9b49a" strokeWidth="1.5" fill="#faf8f5" />
    <path d="M20 11l-8 3v7c0 4.4 3.4 8.5 8 9.5 4.6-1 8-5.1 8-9.5v-7l-8-3z" stroke="#8b6b4f" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
    <path d="M16 20l3 3 5-5" stroke="#8b6b4f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const HeartIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="19" stroke="#c9b49a" strokeWidth="1.5" fill="#faf8f5" />
    <circle cx="20" cy="17" r="4" stroke="#8b6b4f" strokeWidth="1.5" fill="none" />
    <path d="M20 22c-4 0-7 2-7 4.5" stroke="#8b6b4f" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M20 22c4 0 7 2 7 4.5" stroke="#8b6b4f" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M22 19.5c1-.5 2.5-.2 3 1" stroke="#8b6b4f" strokeWidth="1" strokeLinecap="round" />
  </svg>
);

const ClipboardIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="19" stroke="#c9b49a" strokeWidth="1.5" fill="#faf8f5" />
    <rect x="14" y="13" width="12" height="15" rx="1.5" stroke="#8b6b4f" strokeWidth="1.5" fill="none" />
    <path d="M17 13v-1.5a1 1 0 011-1h4a1 1 0 011 1V13" stroke="#8b6b4f" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M17 19h6M17 22h4" stroke="#8b6b4f" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const CalendarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect x="1" y="3" width="16" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M1 7h16M6 1v4M12 1v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M2 3a1 1 0 011-1h2.5l1 3-1.5 1a9 9 0 004 4l1-1.5 3 1V12a1 1 0 01-1 1C5.4 13 2 8.6 2 3z" stroke="currentColor" strokeWidth="1.3" fill="none" />
  </svg>
);

const PinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M8 1a5 5 0 015 5c0 3.5-5 9-5 9S3 9.5 3 6a5 5 0 015-5z" stroke="currentColor" strokeWidth="1.3" fill="none" />
    <circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.3" />
  </svg>
);

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect x="1" y="3" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3" fill="none" />
    <path d="M1 5l7 5 7-5" stroke="currentColor" strokeWidth="1.3" />
  </svg>
);

const GlobeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.3" />
    <path d="M8 1.5C6.5 4 5.5 6 5.5 8s1 4 2.5 6.5M8 1.5C9.5 4 10.5 6 10.5 8s-1 4-2.5 6.5M1.5 8h13" stroke="currentColor" strokeWidth="1.3" />
  </svg>
);

const ServiceKidneyIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path d="M12 10c-2 1.5-3.5 4-2.5 7.5.6 2.2 2.2 3.5 4 3.5 1 0 1.8-.7 2.2-1.8.3-.7.5-1.6.5-2.7s.2-2 .5-2.7c.5-1 1.2-1.8 2.3-1.8 1.8 0 3.4 1.4 4 3.5 1 3.1-.4 5.8-2.5 7.5" stroke="#8b6b4f" strokeWidth="1.4" strokeLinecap="round" fill="none" />
    <path d="M24 10c2 1.5 3.5 4 2.5 7.5-.6 2.2-2.2 3.5-4 3.5-1 0-1.8-.7-2.2-1.8-.3-.7-.5-1.6-.5-2.7s-.2-2-.5-2.7c-.5-1-1.2-1.8-2.3-1.8-1.8 0-3.4 1.4-4 3.5-1 3.1.4 5.8 2.5 7.5" stroke="#8b6b4f" strokeWidth="1.4" strokeLinecap="round" fill="none" />
  </svg>
);

const ProstateIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <ellipse cx="18" cy="18" rx="7" ry="5.5" stroke="#8b6b4f" strokeWidth="1.4" fill="none" />
    <path d="M18 23.5v4M15 27.5h6" stroke="#8b6b4f" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M11 18a7 7 0 010-3M25 18a7 7 0 000-3" stroke="#8b6b4f" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

const GenderIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <circle cx="15" cy="19" r="5.5" stroke="#8b6b4f" strokeWidth="1.4" fill="none" />
    <path d="M19 15l7-7M26 8h-4M26 8v4" stroke="#8b6b4f" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 24.5v4M12 27.5h6" stroke="#8b6b4f" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

const FemaleIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <circle cx="18" cy="15" r="6" stroke="#8b6b4f" strokeWidth="1.4" fill="none" />
    <path d="M18 21v7M15 25h6" stroke="#8b6b4f" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const UserIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="5.5" r="3" stroke="currentColor" strokeWidth="1.3" />
    <path d="M2 14c0-3 2.7-5 6-5s6 2 6 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);

const WhatsappIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const WA_LINK = "https://wa.me/50687051691";

function App() {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <h1>
            Cuidamos tu salud,<br />mejoramos tu vida.
          </h1>
          <div className="hero-divider"></div>
          <p>
            Atención urológica especializada, humana<br />
            y de alta calidad para tu bienestar.
          </p>
          <div className="hero-buttons">
            {/* Hero CTA principal → WhatsApp */}
            <a href={WA_LINK} className="btn-dark btn-wa" target="_blank" rel="noopener noreferrer">
              <WhatsappIcon /> Agenda tu cita
            </a>
            <button className="btn-ghost">
              Conoce más <ArrowIcon />
            </button>
          </div>
        </div>

        <div className="hero-img">
          <img src={heroImg} alt="Nova Uroclinica recepción" />
          <div className="hero-img-badge">
            <svg width="28" height="28" viewBox="0 0 36 36" fill="none">
              <path d="M10 8c-2 1.5-3.5 4-2.5 7.5.6 2.2 2.2 3.5 4 3.5 1 0 1.8-.7 2.2-1.8.3-.7.5-1.6.5-2.7s.2-2 .5-2.7c.5-1 1.2-1.8 2.3-1.8 1.8 0 3.4 1.4 4 3.5 1 3.1-.4 5.8-2.5 7.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
              <path d="M26 8c2 1.5 3.5 4 2.5 7.5-.6 2.2-2.2 3.5-4 3.5-1 0-1.8-.7-2.2-1.8-.3-.7-.5-1.6-.5-2.7s-.2-2-.5-2.7c-.5-1-1.2-1.8-2.3-1.8-1.8 0-3.4 1.4-4 3.5-1 3.1.4 5.8 2.5 7.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            </svg>
            <div>
              <strong>Nova Uroclinica</strong>
              <span>by Dra. Navarro G</span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="feature">
          <KidneyIcon />
          <strong>Especialista</strong>
          <p>Atención urológica integral con enfoque personalizado.</p>
        </div>
        <div className="feature">
          <ShieldIcon />
          <strong>Tecnología</strong>
          <p>Equipamiento moderno para diagnósticos precisos.</p>
        </div>
        <div className="feature">
          <HeartIcon />
          <strong>Trato humano</strong>
          <p>Escuchamos, comprendemos y te acompañamos.</p>
        </div>
        <div className="feature">
          <ClipboardIcon />
          <strong>Confianza</strong>
          <p>Comprometidos con tu salud y bienestar.</p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about">
        <div className="about-img-wrap">
          <img src={draImg} alt="Dra. Navarro G" />
        </div>
        <div className="about-text">
          <span className="section-label">Sobre mí —</span>
          <h2>Dra. Navarro G</h2>
          <p>
            Médico uróloga con amplia experiencia en el diagnóstico
            y tratamiento de enfermedades del sistema urinario
            masculino y femenino, y del sistema reproductor masculino.
          </p>
          <p>
            Mi compromiso es brindarte una atención médica
            de excelencia, con ética, empatía y respeto.
          </p>
          <button className="btn-outline-round">
            <UserIcon /> Conoce más sobre mí
          </button>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services">
        <span className="section-label center-label">Servicios —</span>
        <h2>¿Cómo podemos ayudarte?</h2>
        <div className="cards">
          <div className="card">
            <div className="card-icon"><ServiceKidneyIcon /></div>
            <strong>Infecciones urinarias</strong>
            <p>Diagnóstico y tratamiento de infecciones urinarias recurrentes.</p>
          </div>
          <div className="card">
            <div className="card-icon"><ServiceKidneyIcon /></div>
            <strong>Cálculos renales</strong>
            <p>Evaluación y manejo integral de cálculos en riñones, uréteres y vejiga.</p>
          </div>
          <div className="card">
            <div className="card-icon"><ProstateIcon /></div>
            <strong>Salud prostática</strong>
            <p>Diagnóstico y tratamiento de enfermedades prostáticas como hiperplasia y próstata.</p>
          </div>
          <div className="card">
            <div className="card-icon"><GenderIcon /></div>
            <strong>Salud urológica masculina</strong>
            <p>Atención especializada en disfunción eréctil, infertilidad, y más.</p>
          </div>
          <div className="card">
            <div className="card-icon"><FemaleIcon /></div>
            <strong>Urología femenina</strong>
            <p>Diagnóstico y tratamiento de problemas urinarios en la mujer.</p>
          </div>
        </div>
        <button className="btn-dark center-btn">Ver todos los servicios</button>
      </section>

      {/* CONTACT */}
      <section className="contact">
        <div className="contact-box">
          <CalendarIcon />
          <h3>Agenda tu cita</h3>
          <p>Estamos aquí para ayudarte. Reserva tu consulta de manera fácil y segura.</p>
          {/* Contact CTA → WhatsApp */}
          <a href={WA_LINK} className="btn-outline-white btn-wa" target="_blank" rel="noopener noreferrer">
            <WhatsappIcon /> Agenda por WhatsApp
          </a>
        </div>

        <div className="contact-info">
          <h4>Información de contacto</h4>
          <ul>
            <li><PhoneIcon /> 87051956</li>
            <li>
              <PinIcon />
              <span>Av. San Martín, Edif. Medilife<br />Piso 3, Consultorio 305<br />Santa Cruz de la Sierra – Bolivia</span>
            </li>
            <li><MailIcon /> urologia@novauroclinica.com</li>
            <li><GlobeIcon /> www.novauroclinica.com</li>
          </ul>
        </div>

        <div className="contact-map">
          <div className="map-placeholder">
            <PinIcon />
            <span>Santa Cruz de la Sierra</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-logo">
          <svg width="28" height="28" viewBox="0 0 36 36" fill="none">
            <path d="M10 8c-2 1.5-3.5 4-2.5 7.5.6 2.2 2.2 3.5 4 3.5 1 0 1.8-.7 2.2-1.8.3-.7.5-1.6.5-2.7s.2-2 .5-2.7c.5-1 1.2-1.8 2.3-1.8 1.8 0 3.4 1.4 4 3.5 1 3.1-.4 5.8-2.5 7.5" stroke="#c9b49a" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <path d="M26 8c2 1.5 3.5 4 2.5 7.5-.6 2.2-2.2 3.5-4 3.5-1 0-1.8-.7-2.2-1.8-.3-.7-.5-1.6-.5-2.7s-.2-2-.5-2.7c-.5-1-1.2-1.8-2.3-1.8-1.8 0-3.4 1.4-4 3.5-1 3.1.4 5.8 2.5 7.5" stroke="#c9b49a" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          </svg>
          <div>
            <span className="footer-logo-name">Nova Uroclinica</span>
            <span className="footer-logo-sub">by Dra. Navarro G</span>
          </div>
        </div>
        <p>© 2024 Nova UroClinica by Dra. Navarro G. Todos los derechos reservados.</p>
        <div className="footer-socials">
          <a href="#" aria-label="Facebook">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" /></svg>
          </a>
          <a href="#" aria-label="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" /><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>
          </a>
        </div>
      </footer>

      {/* BOTÓN FLOTANTE WHATSAPP */}
      <a
        href={WA_LINK}
        className="fab-wa"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <WhatsappIcon />
      </a>

      {/* Estilos para los elementos nuevos */}
      <style>{`
        .btn-wa-nav,
        .btn-wa {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          cursor: pointer;
        }

        /* Botón flotante */
        .fab-wa {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #25d366;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          box-shadow: 0 4px 16px rgba(37,211,102,.4);
          z-index: 1000;
          transition: transform .2s, background .2s;
          animation: wa-pulse 2.5s infinite;
        }
        .fab-wa:hover {
          transform: scale(1.1);
          background: #128c7e;
        }
        @keyframes wa-pulse {
          0%   { box-shadow: 0 0 0 0 rgba(37,211,102,.6); }
          70%  { box-shadow: 0 0 0 12px rgba(37,211,102,0); }
          100% { box-shadow: 0 0 0 0 rgba(37,211,102,0); }
        }
      `}</style>
    </>
  );
}

export default App;