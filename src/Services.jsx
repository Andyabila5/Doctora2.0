import { useEffect } from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import draImg from "./assets/Dra3.jpg";

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

const StethoscopeIcon = (props) => (
  <Icon {...props}>
    <path d="M4.5 3v3a4 4 0 008 0V3M8.5 11v2.5M8.5 16.5a1.5 1.5 0 003 0" />
    <circle cx="12" cy="19" r="2" />
  </Icon>
);

const RotateCcwIcon = (props) => (
  <Icon {...props}>
    <path d="M3 12a9 9 0 109-9M3 3v6h6" />
  </Icon>
);

const MicroscopeIcon = (props) => (
  <Icon {...props}>
    <path d="M6 18h8M9 18v3M11 21h2M7 14l2-8h6l2 8M10 6h4" />
  </Icon>
);

const ScissorsIcon = (props) => (
  <Icon {...props}>
    <circle cx="6" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <path d="M20 4L8.5 15.5M20 20L8.5 8.5" />
  </Icon>
);

const ZapIcon = (props) => (
  <Icon {...props}>
    <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
  </Icon>
);

const ActivityIcon = (props) => (
  <Icon {...props}>
    <path d="M22 12h-4l-3 9-4-18-3 9H2" />
  </Icon>
);

const SearchIcon = (props) => (
  <Icon {...props}>
    <circle cx="11" cy="11" r="7" />
    <path d="M20 20l-3-3" />
  </Icon>
);

const WrenchIcon = (props) => (
  <Icon {...props}>
    <path d="M14.7 6.3a4 4 0 00-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 005.4-5.4l2.3 2.3 2-2-2.3-2.3z" />
  </Icon>
);

const BanknoteIcon = (props) => (
  <Icon {...props}>
    <rect x="2" y="6" width="20" height="12" rx="2" />
    <circle cx="12" cy="12" r="2" />
    <path d="M6 10h.01M18 14h.01" />
  </Icon>
);

const CreditCardIcon = (props) => (
  <Icon {...props}>
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <path d="M2 10h20" />
  </Icon>
);

const LandmarkIcon = (props) => (
  <Icon {...props}>
    <path d="M3 21h18M6 21V9l6-4 6 4v12M10 21v-4h4v4" />
  </Icon>
);

const WhatsappIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const services = [
  {
    title: "Consulta Médica Especializada",
    description:
      "Evaluación integral con diagnóstico profesional y plan de tratamiento personalizado.",
    icon: StethoscopeIcon,
  },
  {
    title: "Reconsulta",
    description:
      "Seguimiento a consulta previa. Traer resultados solicitados por el médico.",
    icon: RotateCcwIcon,
  },
  {
    title: "Biopsia de Próstata",
    description:
      "Diagnóstico especializado para detectar anomalías en el tejido prostático. Requiere laboratorios previos.",
    icon: MicroscopeIcon,
  },
  {
    title: "Vasectomía",
    description:
      "Procedimiento anticonceptivo masculino permanente. Alta efectividad y recuperación rápida.",
    icon: ScissorsIcon,
  },
  {
    title: "Cauterización de Papilomas",
    description:
      "Eliminación rápida y segura de lesiones cutáneas causadas por VPH.",
    icon: ZapIcon,
  },
  {
    title: "Circuncisión",
    description:
      "Intervención ambulatoria para remover el prepucio. Mejora la higiene y puede reducir infecciones.",
    icon: ActivityIcon,
  },
  {
    title: "Cistoscopia",
    description:
      "Estudio endoscópico para evaluar vejiga y uretra. Útil para diagnosticar infecciones y obstrucciones.",
    icon: SearchIcon,
  },
  {
    title: "Frenoplastia",
    description:
      "Cirugía menor para liberar el frenillo del pene. Mejora funcionalidad y evita molestias.",
    icon: WrenchIcon,
  },
];

const paymentMethods = [
  {
    title: "Efectivo",
    description: "Pago en efectivo al momento de la consulta o procedimiento.",
    icon: BanknoteIcon,
    iconBg: "#25d366",
  },
  {
    title: "Tarjetas de Crédito y Débito",
    description: "Visa, MasterCard, American Express y tarjetas de débito.",
    icon: CreditCardIcon,
    iconBg: "#2a1f18",
  },
  {
    title: "Transferencias",
    description: "SINPE Móvil y transferencias bancarias.",
    icon: LandmarkIcon,
    iconBg: "#8b6b4f",
  },
];

const whatsappUrl = "https://wa.me/50687051691";

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="services-page">
      <Navbar />

      <section className="sp-section sp-hero">
        <div className="sp-container sp-hero-grid">
          <div className="sp-hero-image-card">
            <img
              src={draImg}
              alt="Dra. Marcela Navarro Guzmán"
              className="sp-hero-image"
            />
          </div>
          <div className="sp-hero-copy">
            <span className="sp-label">Servicios especializados —</span>
            <h1>Procedimientos Urológicos de Alta Calidad</h1>
            <p>
              Ofrecemos una amplia gama de procedimientos urológicos
              especializados, realizados con la más alta tecnología y estándares
              de calidad médica.
            </p>
            <a
              href={whatsappUrl}
              className="sp-wa-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsappIcon size={18} />
              Agendar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="sp-section">
        <div className="sp-container">
          <span className="sp-label center">Procedimientos —</span>
          <h2 className="sp-heading center">Nuestros servicios</h2>
          <p className="sp-lead center">
            Tratamientos y procedimientos especializados con enfoque profesional
            y atención personalizada.
          </p>

          <div className="sp-services-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article className="sp-card sp-service-card" key={service.title}>
                  <div className="sp-icon-circle">
                    <Icon size={22} strokeWidth={2} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="sp-section sp-payments">
        <div className="sp-container">
          <span className="sp-label center">Métodos de pago —</span>
          <h2 className="sp-heading center">Opciones de pago disponibles</h2>
          <p className="sp-lead center">
            Selecciona la modalidad que mejor se adapte a ti.
          </p>

          <div className="sp-payment-grid">
            {paymentMethods.map((payment) => {
              const Icon = payment.icon;
              return (
                <article className="sp-card sp-payment-card" key={payment.title}>
                  <div
                    className="sp-icon-circle colored"
                    style={{ backgroundColor: payment.iconBg }}
                  >
                    <Icon size={20} strokeWidth={2} />
                  </div>
                  <h3>{payment.title}</h3>
                  <p>{payment.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />

      <a
        href={whatsappUrl}
        className="sp-fab-wa"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <WhatsappIcon size={22} />
      </a>

      <style>{`
        .services-page {
          background: #faf8f5;
          color: #5a4535;
        }

        .sp-container {
          width: min(1120px, 100%);
          margin: 0 auto;
        }

        .sp-section {
          padding: 72px 32px;
        }

        .sp-label {
          display: inline-block;
          margin-bottom: 12px;
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #8b6b4f;
          font-weight: 700;
        }

        .sp-label.center,
        .sp-heading.center,
        .sp-lead.center {
          text-align: center;
          display: block;
        }

        .sp-heading {
          margin: 0 0 10px;
          color: #2a1f18;
          font-size: clamp(1.6rem, 2.7vw, 2.2rem);
          line-height: 1.2;
        }

        .sp-lead {
          margin: 0 0 28px;
          max-width: 700px;
          color: #6b5444;
          line-height: 1.75;
        }

        .sp-lead.center {
          margin-left: auto;
          margin-right: auto;
        }

        .sp-card {
          background: #fff;
          border: 1.5px solid #e5ddd5;
          border-radius: 12px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .sp-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(139, 107, 79, 0.1);
        }

        .sp-icon-circle {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1.5px solid #e5ddd5;
          background: #fff;
          color: #8b6b4f;
        }

        .sp-icon-circle.colored {
          border: none;
          color: #fff;
        }

        .sp-hero {
          padding-bottom: 40px;
        }

        .sp-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 42px;
          align-items: center;
        }

        .sp-hero-image-card {
          border-radius: 14px;
          overflow: hidden;
          border: 1.5px solid #e5ddd5;
          background: #fff;
        }

        .sp-hero-image {
          width: 100%;
          height: 420px;
          object-fit: cover;
          object-position: center top;
          display: block;
        }

        .sp-hero-copy h1 {
          margin: 0 0 12px;
          color: #2a1f18;
          line-height: 1.16;
          font-size: clamp(1.8rem, 3.2vw, 2.7rem);
        }

        .sp-hero-copy p {
          margin: 0 0 24px;
          color: #6b5444;
          line-height: 1.75;
          max-width: 560px;
        }

        .sp-wa-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 18px;
          border-radius: 999px;
          border: 1px solid transparent;
          background: #25d366;
          color: #fff;
          text-decoration: none;
          font-weight: 700;
          transition: transform 0.2s ease, filter 0.2s ease;
        }

        .sp-wa-button:hover {
          transform: translateY(-1px);
          filter: brightness(0.95);
        }

        .sp-wa-button.small {
          margin-top: 14px;
        }

        .sp-services-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .sp-service-card {
          background: #faf8f5;
          padding: 24px;
          text-align: center;
        }

        .sp-service-card .sp-icon-circle {
          margin: 0 auto;
        }

        .sp-service-card h3,
        .sp-payment-card h3 {
          margin: 14px 0 8px;
          color: #2a1f18;
          font-size: 1.02rem;
        }

        .sp-service-card p,
        .sp-payment-card p {
          margin: 0;
          color: #6b5444;
          line-height: 1.65;
        }

        .sp-payments {
          background: #fff;
        }

        .sp-payment-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          justify-content: center;
        }

        .sp-payment-card {
          text-align: center;
          padding: 24px;
        }

        .sp-payment-card .sp-icon-circle {
          margin: 0 auto;
        }

        .sp-fab-wa {
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
          animation: sp-wa-pulse 2.4s infinite;
          transition: transform 0.2s ease, background 0.2s ease;
        }

        .sp-fab-wa:hover {
          transform: scale(1.08);
          background: #128c7e;
        }

        @keyframes sp-wa-pulse {
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
          .sp-section {
            padding: 48px 20px;
          }

          .sp-hero-grid,
          .sp-services-grid,
          .sp-payment-grid {
            grid-template-columns: 1fr;
          }

          .sp-hero {
            padding-bottom: 24px;
          }

          .sp-hero-image {
            height: 320px;
          }
        }
      `}</style>
    </div>
  );
}
