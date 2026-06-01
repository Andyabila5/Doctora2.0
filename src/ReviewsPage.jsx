import { useEffect } from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

const reviews = [
  {
    name: "Alejandra Cordero",
    rating: 5,
    date: "Hace un mes",
    text: "Excelente profesional, en constante actualización y amante de su profesión. 100% recomendada!!",
    initials: "AC",
  },
  {
    name: "Christopher González",
    rating: 5,
    date: "Hace un mes",
    text: "Marcela es una excelente profesional, siempre en constante actualización y con muchísima experiencia, además educa muy bien que es algo difícil de encontrar.",
    initials: "CG",
  },
  {
    name: "Jennifer Picado Céspedes",
    rating: 5,
    date: "Hace un mes",
    text: "Excelente servicio.",
    initials: "JP",
  },
  {
    name: "Yency Vega",
    rating: 5,
    date: "Hace un mes",
    text: "Excelente atención, tanto de la doctora como en recepción. Muy profesionales, amables y organizados. 100% recomendada.",
    initials: "YV",
  },
  {
    name: "Marcela Benavides",
    rating: 5,
    date: "Hace un mes",
    text: "Excelente atención.",
    initials: "MB",
  },
  {
    name: "Seidy Jiménez",
    rating: 5,
    date: "Hace un mes",
    text: "Excelente experiencia de principio a fin. Desde el momento en que llegué, el personal fue sumamente amable, profesional y atento. La clínica cuenta con instalaciones modernas, limpias y bien equipadas, lo que transmite seguridad y calidad.",
    initials: "SJ",
  },
  {
    name: "Stephanie González Valverde",
    rating: 5,
    date: "Hace un mes",
    text: "Excelente servicio.",
    initials: "SG",
  },
  {
    name: "N&K Creaciones",
    rating: 5,
    date: "Hace un mes",
    text: "Quiero compartir la excelente experiencia con la Dra. Navarro, uróloga. Desde el primer momento brindó un trato sumamente humano, profesional y respetuoso, generando mucha confianza durante todo el proceso.",
    initials: "NK",
  },
  {
    name: "Laura Rodríguez",
    rating: 5,
    date: "Hace un mes",
    text: "Gran profesional y excelente trato!",
    initials: "LR",
  },
  {
    name: "Andrea Ávila Dávila",
    rating: 5,
    date: "Hace un mes",
    text: "Excelente Doctora, un trato maravilloso, y un espacio que permite mucha paz y privacidad.",
    initials: "AA",
  },
  {
    name: "Karla Campos",
    rating: 5,
    date: "Hace un mes",
    text: "Excelente profesional.",
    initials: "KC",
  },
  {
    name: "Alejandro Jiménez González",
    rating: 5,
    date: "Hace un mes",
    text: "Responsabilidad y actualización médica. Recomendada.",
    initials: "AJ",
  },
  {
    name: "Wendy Murillo",
    rating: 5,
    date: "Hace un mes",
    text: "Muy buena atención y excelente profesional.",
    initials: "WM",
  },
  {
    name: "Karla Jaimes",
    rating: 5,
    date: "Hace un mes",
    text: "Súper recomendada, instalaciones súper lindas, atención humanizada, la uróloga de la familia. No dude en contactarla.",
    initials: "KJ",
  },
  {
    name: "Melissa Quesada",
    rating: 5,
    date: "Hace un mes",
    text: "Un lugar con una atención excelente y atención a los problemas para ayudar en lo que puedan. Agradecida con este lugar y esta excelente doctora. La recomiendo, tiene vocación para trabajar.",
    initials: "MQ",
  },
  {
    name: "Lilliana Quesada",
    rating: 5,
    date: "Hace un mes",
    text: "Excelente la atención, una gran profesional.",
    initials: "LQ",
  },
  {
    name: "Estefany González",
    rating: 5,
    date: "Hace un mes",
    text: "Excelente persona, súper recomendable.",
    initials: "EG",
  },
  {
    name: "Teban Rodríguez",
    rating: 5,
    date: "Hace un mes",
    text: "Súper recomendable en todo el sentido. Súper satisfecho con el trato y especialmente con el resultado.",
    initials: "TR",
  },
  {
    name: "Leonardo Hernández Vásquez",
    rating: 5,
    date: "Hace un mes",
    text: "Trato humano, profesional, atenta y cuidadosa.",
    initials: "LH",
  },
  {
    name: "Siboney Salas M.",
    rating: 5,
    date: "Hace un mes",
    text: "Excelente doctora. Dios la bendiga.",
    initials: "SS",
  },
  {
    name: "Nelson Alb. Chaves Quesada",
    rating: 5,
    date: "Hace un mes",
    text: "Excelente servicio.",
    initials: "NC",
  },
  {
    name: "Daniela Arguedas",
    rating: 5,
    date: "Hace un mes",
    text: "Estoy muy satisfecha con la atención recibida por parte de la Dra. Navarro en su clínica, es amable, atenta y demuestra un alto nivel de profesionalismo.",
    initials: "DA",
  },
];

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps?cid=963483043992407838&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=es&gl=CR&source=embed";
const WHATSAPP_URL = "https://wa.me/50687051691";

const CalendarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect x="1" y="3" width="16" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M1 7h16M6 1v4M12 1v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const WhatsappIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const VerifiedIcon = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
    <circle cx="5" cy="5" r="5" fill="#8b6b4f" />
    <path d="M2.8 5.1l1.4 1.4 3-3.2" stroke="#fff" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function renderStars(rating) {
  return "★".repeat(rating) + "☆".repeat(5 - rating);
}

export default function ReviewsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="reviews-page">
      <Navbar />

      <section className="rv-hero">
        <div className="rv-container rv-hero-inner">
          <span className="rv-label">Reseñas —</span>
          <h1>Lo que dicen nuestros pacientes</h1>
          <p className="rv-lead">
            La opinión de quienes han confiado en la Dra. Marcela Navarro Guzmán
            es nuestro mayor reconocimiento.
          </p>

          <div className="rv-rating-badge">
            <div className="rv-rating-main">
              <strong>5.0</strong>
              <span className="rv-stars">★★★★★</span>
            </div>
            <p className="rv-rating-meta">22 reseñas verificadas de Google Maps</p>
            <a
              href={GOOGLE_MAPS_URL}
              className="rv-maps-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver en Google Maps
            </a>
          </div>
        </div>
      </section>

      <div className="rv-stats">
        {[
          { value: "5.0 ★", label: "Calificación promedio" },
          { value: "22", label: "Reseñas de pacientes" },
          { value: "100%", label: "Recomendarían la clínica" },
        ].map((stat) => (
          <div className="rv-stat" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>

      <section className="rv-reviews-section">
        <div className="rv-container">
          <div className="rv-masonry">
            {reviews.map((review) => (
              <article className="rv-card" key={review.name}>
                <div className="rv-card-header">
                  <div className="rv-avatar">{review.initials}</div>
                  <div>
                    <strong>{review.name}</strong>
                    <span>{review.date}</span>
                  </div>
                </div>
                <div className="rv-stars-row">{renderStars(review.rating)}</div>
                <p className="rv-text">&ldquo;{review.text}&rdquo;</p>
                <span className="rv-verified">
                  <VerifiedIcon />
                  Reseña verificada de Google
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rv-cta">
        <div className="rv-cta-box">
          <CalendarIcon />
          <h3>¿Lista para tu primera consulta?</h3>
          <p>
            Agenda tu cita con la Dra. Marcela Navarro y recibe atención
            urológica especializada y personalizada.
          </p>
          <a
            href={WHATSAPP_URL}
            className="rv-cta-wa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsappIcon />
            Agendar cita por WhatsApp
          </a>
        </div>
      </section>

      <Footer />

      <a
        href={WHATSAPP_URL}
        className="rv-fab-wa"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <WhatsappIcon />
      </a>

      <style>{`
        .reviews-page {
          background: #faf8f5;
          color: #5a4535;
        }

        .rv-container {
          width: min(1100px, 100%);
          margin: 0 auto;
        }

        .rv-label {
          display: inline-block;
          margin-bottom: 12px;
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #8b6b4f;
          font-weight: 700;
        }

        .rv-hero {
          padding: 72px 32px;
          background: #faf8f5;
          text-align: center;
        }

        .rv-hero-inner h1 {
          margin: 0 0 12px;
          color: #2a1f18;
          font-size: clamp(1.8rem, 3.2vw, 2.6rem);
          font-weight: 700;
          line-height: 1.15;
        }

        .rv-lead {
          margin: 0 auto 28px;
          max-width: 640px;
          color: #6b5444;
          line-height: 1.75;
          font-size: 1rem;
        }

        .rv-rating-badge {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }

        .rv-rating-main {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .rv-rating-main strong {
          font-size: 2.4rem;
          color: #2a1f18;
          line-height: 1;
        }

        .rv-stars,
        .rv-stars-row {
          color: #c9b49a;
          letter-spacing: 0.06em;
        }

        .rv-stars {
          font-size: 1.35rem;
        }

        .rv-rating-meta {
          margin: 0;
          font-size: 0.88rem;
          color: #9a8070;
        }

        .rv-maps-btn {
          display: inline-block;
          margin-top: 4px;
          padding: 10px 24px;
          border: 1.5px solid #e5ddd5;
          border-radius: 999px;
          background: #fff;
          color: #2a1f18;
          font-size: 0.85rem;
          font-weight: 600;
          text-decoration: none;
          transition: background 0.2s ease, color 0.2s ease;
        }

        .rv-maps-btn:hover {
          background: #2a1f18;
          color: #fff;
        }

        .rv-stats {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          background: #2a1f18;
          padding: 36px 32px;
        }

        .rv-stat {
          flex: 1;
          min-width: 160px;
          text-align: center;
          padding: 0 32px;
          border-right: 1px solid rgba(201, 180, 154, 0.2);
        }

        .rv-stat:last-child {
          border-right: none;
        }

        .rv-stat strong {
          display: block;
          font-size: 1.8rem;
          font-weight: 700;
          color: #c9b49a;
          line-height: 1;
          margin-bottom: 6px;
        }

        .rv-stat span {
          font-size: 0.75rem;
          color: rgba(201, 180, 154, 0.7);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .rv-reviews-section {
          padding: 72px 32px;
        }

        .rv-masonry {
          column-count: 3;
          column-gap: 24px;
        }

        .rv-card {
          break-inside: avoid;
          background: #fff;
          border: 1.5px solid #e5ddd5;
          border-radius: 14px;
          padding: 24px 28px;
          margin-bottom: 24px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .rv-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(139, 107, 79, 0.1);
        }

        .rv-card-header {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .rv-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #2a1f18;
          color: #c9b49a;
          font-size: 0.8rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .rv-card-header strong {
          display: block;
          font-size: 0.92rem;
          color: #2a1f18;
        }

        .rv-card-header span {
          font-size: 0.75rem;
          color: #9a8070;
        }

        .rv-stars-row {
          font-size: 0.95rem;
          margin: 10px 0 12px;
        }

        .rv-text {
          margin: 0 0 16px;
          font-size: 0.88rem;
          color: #5a4535;
          line-height: 1.75;
          font-style: italic;
        }

        .rv-verified {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.72rem;
          color: #8b6b4f;
          font-weight: 600;
          letter-spacing: 0.03em;
        }

        .rv-cta {
          background: #2a1f18;
          padding: 72px 32px;
          text-align: center;
        }

        .rv-cta-box {
          max-width: 560px;
          margin: 0 auto;
        }

        .rv-cta-box svg {
          color: #c9b49a;
          margin-bottom: 16px;
        }

        .rv-cta-box h3 {
          margin: 0 0 12px;
          color: #faf8f5;
          font-size: 1.6rem;
          font-weight: 700;
        }

        .rv-cta-box p {
          margin: 0 0 28px;
          color: rgba(250, 248, 245, 0.65);
          line-height: 1.7;
          font-size: 0.95rem;
        }

        .rv-cta-wa {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 32px;
          border-radius: 999px;
          background: #25d366;
          color: #fff;
          text-decoration: none;
          font-weight: 700;
          transition: transform 0.2s ease, filter 0.2s ease;
        }

        .rv-cta-wa:hover {
          transform: translateY(-1px);
          filter: brightness(0.95);
        }

        .rv-fab-wa {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #25d366;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          z-index: 1000;
          box-shadow: 0 4px 16px rgba(37, 211, 102, 0.4);
          animation: rv-wa-pulse 2.5s infinite;
          transition: transform 0.2s ease, background 0.2s ease;
        }

        .rv-fab-wa:hover {
          transform: scale(1.1);
          background: #128c7e;
        }

        @keyframes rv-wa-pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.6);
          }
          70% {
            box-shadow: 0 0 0 12px rgba(37, 211, 102, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
          }
        }

        @media (max-width: 900px) {
          .rv-hero,
          .rv-reviews-section,
          .rv-cta {
            padding: 48px 20px;
          }

          .rv-masonry {
            column-count: 1;
          }

          .rv-stat {
            padding: 16px 20px;
            border-right: none;
            border-bottom: 1px solid rgba(201, 180, 154, 0.2);
          }

          .rv-stat:last-child {
            border-bottom: none;
          }
        }
      `}</style>
    </div>
  );
}
