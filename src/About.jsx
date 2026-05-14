import draImg from "./assets/Dra.jpg";
import Navbar from "./Navbar.jsx";

/* ── Íconos SVG del sistema ── */
const CalendarIcon = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="1" y="3" width="16" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M1 7h16M6 1v4M12 1v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

const ArrowIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const CheckIcon = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="8" stroke="#c9b49a" strokeWidth="1.3" fill="none" />
        <path d="M5.5 9l2.5 2.5 4.5-4.5" stroke="#8b6b4f" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const GraduationIcon = () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 5l12 6-12 6L2 11l12-6z" stroke="#8b6b4f" strokeWidth="1.4" strokeLinejoin="round" fill="none" />
        <path d="M6 13.5v6c0 2.5 3.6 4.5 8 4.5s8-2 8-4.5v-6" stroke="#8b6b4f" strokeWidth="1.4" strokeLinecap="round" fill="none" />
        <path d="M22 11v7" stroke="#8b6b4f" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
);

const MedalIcon = () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="17" r="7" stroke="#8b6b4f" strokeWidth="1.4" fill="none" />
        <path d="M10 10.5L7 3h14l-3 7.5" stroke="#8b6b4f" strokeWidth="1.4" strokeLinejoin="round" fill="none" />
        <path d="M14 13.5v2l1.5 1" stroke="#8b6b4f" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const HeartPlusIcon = () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 22S4 16 4 10a6 6 0 0112 0 6 6 0 0112 0c0 6-10 12-14 12z" stroke="#8b6b4f" strokeWidth="1.4" fill="none" strokeLinejoin="round" />
        <path d="M14 8v5M11.5 10.5h5" stroke="#8b6b4f" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
);

const ScalpelIcon = () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M6 22L20 8" stroke="#8b6b4f" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M20 8l2-2 1 3-3 1z" stroke="#8b6b4f" strokeWidth="1.3" strokeLinejoin="round" fill="none" />
        <path d="M6 22c1-1 3-1 4 0s3 1 4 0" stroke="#8b6b4f" strokeWidth="1.3" strokeLinecap="round" fill="none" />
    </svg>
);

const MindIcon = () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 6a8 8 0 100 16A8 8 0 0014 6z" stroke="#8b6b4f" strokeWidth="1.4" fill="none" />
        <path d="M10 14c0-2 1.5-3.5 4-3.5s4 1.5 4 3.5" stroke="#8b6b4f" strokeWidth="1.3" strokeLinecap="round" fill="none" />
        <path d="M14 17v2" stroke="#8b6b4f" strokeWidth="1.3" strokeLinecap="round" />
        <circle cx="14" cy="20" r="0.8" fill="#8b6b4f" />
    </svg>
);

const GlobeIcon2 = () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="#8b6b4f" strokeWidth="1.4" fill="none" />
        <path d="M14 4c-2.5 4-3.5 6-3.5 10s1 6.5 3.5 10M14 4c2.5 4 3.5 6 3.5 10S16.5 20.5 14 24M4 14h20" stroke="#8b6b4f" strokeWidth="1.3" />
    </svg>
);

const IdCardIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="1" y="3" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3" fill="none" />
        <circle cx="5.5" cy="8" r="2" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <path d="M9 6.5h4M9 9.5h3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
);

const StethoIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M4 2v5a4 4 0 008 0V2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" fill="none" />
        <path d="M8 11v2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        <circle cx="8" cy="14" r="1.2" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <circle cx="4" cy="2" r="0.8" fill="currentColor" />
        <circle cx="12" cy="2" r="0.8" fill="currentColor" />
    </svg>
);

const StarIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="#c9b49a">
        <path d="M8 1l1.8 3.6 4 .6-2.9 2.8.7 4L8 10l-3.6 1.9.7-4L2.2 5.2l4-.6z" />
    </svg>
);

const QuoteIcon = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M6 14c0-3.3 2.7-6 6-6v3a3 3 0 00-3 3v1h3v7H6v-8zM18 14c0-3.3 2.7-6 6-6v3a3 3 0 00-3 3v1h3v7h-6v-8z" fill="#c9b49a" opacity=".35" />
    </svg>
);

const WhatsappIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

/* ── Datos ── */
const formacion = [
    {
        icon: <GraduationIcon />,
        titulo: "Licenciatura en Medicina",
        inst: "Universidad de Costa Rica",
        detalle: "Graduada con honores",
    },
    {
        icon: <MedalIcon />,
        titulo: "Especialización en Urología",
        inst: "Universidad de Costa Rica",
        detalle: "Especialidad médica especializada",
    },
    {
        icon: <GlobeIcon2 />,
        titulo: "Educación Médica Continua",
        inst: "Diversos Congresos Internacionales",
        detalle: "Actualización constante en avances urológicos",
    },
    {
        icon: <HeartPlusIcon />,
        titulo: "Membresías Profesionales",
        inst: "Múltiples Asociaciones Internacionales",
        detalle: "Miembro activo de asociaciones de urología",
    },
];

const membresias = [
    {
        sigla: "EAU",
        nombre: "Asociación Europea de Urología",
        desc: "Miembro activo de la European Association of Urology",
    },
    {
        sigla: "AUA",
        nombre: "Asociación Americana de Urología",
        desc: "Miembro activo de la American Urological Association",
    },
    {
        sigla: "ACCU",
        nombre: "Asoc. Costarricense de Cirugía Urológica",
        desc: "Miembro activo comprometido con la urología nacional",
    },
    {
        sigla: "CAU",
        nombre: "Confederación Americana de Urología",
        desc: "Promoviendo la excelencia urológica continental",
    },
];

const filosofia = [
    {
        icon: <StethoIcon />,
        bigIcon: <HeartPlusIcon />,
        title: "Enfoque Médico",
        desc: "Diagnóstico preciso y tratamiento basado en evidencia científica, utilizando las técnicas más avanzadas disponibles.",
    },
    {
        icon: null,
        bigIcon: <ScalpelIcon />,
        title: "Enfoque Quirúrgico",
        desc: "Procedimientos especializados cuando son necesarios, con técnicas mínimamente invasivas y resultados óptimos.",
    },
    {
        icon: null,
        bigIcon: <MindIcon />,
        title: "Enfoque Psicoemocional",
        desc: "Atención integral que considera el bienestar emocional, brindando apoyo y comprensión durante todo el proceso.",
    },
];

const especialidades = [
    { titulo: "Patologías Renales", desc: "Diagnóstico y tratamiento de cálculos renales, infecciones urinarias y otras patologías del sistema renal." },
    { titulo: "Patologías Prostáticas", desc: "Manejo integral de hiperplasia prostática benigna, prostatitis y seguimiento de patologías prostáticas." },
    { titulo: "Incontinencia Urinaria", desc: "Evaluación y tratamiento de diferentes tipos de incontinencia urinaria tanto en hombres como en mujeres." },
    { titulo: "Medicina Preventiva", desc: "Programas de prevención y detección temprana de patologías urológicas, promoviendo la salud integral." },
];

const horarios = [
    { dia: "Lunes", hora: "1:00 PM – 5:30 PM" },
    { dia: "Martes", hora: "1:00 PM – 5:30 PM" },
    { dia: "Miércoles", hora: "1:00 PM – 5:30 PM" },
    { dia: "Jueves", hora: "1:00 PM – 5:30 PM" },
    { dia: "Viernes", hora: "1:00 PM – 5:30 PM" },
    { dia: "Sábado", hora: "Cerrado", cerrado: true },
    { dia: "Domingo", hora: "Cerrado", cerrado: true },
];

/* ── Componente ── */
export default function About() {
    return (
        <div className="about-page">

            <Navbar />

            {/* ── HERO ── */}
            <section className="ab-hero">
                <div className="ab-hero-inner">
                    <span className="section-label">Sobre mí —</span>
                    <h1>
                        Dra. Marcela<br />
                        Navarro Guzmán
                        <span className="ab-hero-sub">Médico Especialista en Urología</span>
                    </h1>
                    <p className="ab-hero-lead">
                        Graduada en la Universidad de Costa Rica, con más de 11 años
                        dedicados a una urología integral: médica, quirúrgica y psicoemocional.
                    </p>
                    <div className="ab-hero-meta">
                        <span><IdCardIcon /> Código MED9124</span>
                        <span><StethoIcon /> Urología · UCR</span>
                    </div>
                    <div className="ab-hero-actions">
                        <a
                            href="https://wa.me/50687051691"
                            className="btn-dark ab-whatsapp-btn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <WhatsappIcon /> Agendar cita
                        </a>
                        <button className="btn-ghost">
                            Ver servicios <ArrowIcon />
                        </button>
                    </div>
                </div>

                <div className="ab-hero-photo-wrap">
                    <img src={draImg} alt="Dra. Marcela Navarro Guzmán" className="ab-hero-photo" />
                    <div className="ab-photo-badge">
                        <span className="ab-badge-num">+11</span>
                        <span className="ab-badge-label">años de<br />experiencia</span>
                    </div>
                </div>
            </section>

            {/* ── STATS ── */}
            <div className="ab-stats">
                {[
                    { n: "+11", label: "Años de trayectoria" },
                    { n: "4", label: "Membresías internacionales" },
                    { n: "UCR", label: "Universidad de Costa Rica" },
                    { n: "3", label: "Pilares de atención" },
                ].map((s) => (
                    <div className="ab-stat" key={s.label}>
                        <strong>{s.n}</strong>
                        <span>{s.label}</span>
                    </div>
                ))}
            </div>

            {/* ── BIO ── */}
            <section className="ab-bio">
                <div className="ab-bio-text">
                    <span className="section-label">Historia —</span>
                    <h2>Mi historia profesional</h2>
                    <p>
                        Con más de 11 años de experiencia en el campo de la urología, me he
                        dedicado a proporcionar atención médica especializada con un enfoque
                        integral y personalizado. Mi principal interés es la urología general
                        con énfasis en el manejo desde tres aristas: médico-quirúrgico-psicoemocional.
                    </p>
                    <p>
                        Soy uróloga graduada de la Universidad de Costa Rica. Inicié mi carrera
                        hace más de 11 años y aún sigue siendo una gran pasión el aprendizaje
                        continuo de esta especialidad. Mis fortalezas son mi fortaleza en Dios,
                        mi pasión por esta carrera y la dedicación a mis pacientes con
                        calidez humana y empatía.
                    </p>

                    <div className="ab-id-chips">
                        <div className="ab-chip">
                            <IdCardIcon />
                            <div>
                                <strong>Código profesional</strong>
                                <span>MED9124</span>
                            </div>
                        </div>
                        <div className="ab-chip">
                            <StethoIcon />
                            <div>
                                <strong>Especialidad</strong>
                                <span>Urología</span>
                            </div>
                        </div>
                        <div className="ab-chip">
                            <CalendarIcon />
                            <div>
                                <strong>Experiencia</strong>
                                <span>Más de 11 años</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="ab-bio-aside">
                    <div className="ab-quote-card">
                        <QuoteIcon />
                        <blockquote>
                            "La buena medicina no solo trata enfermedades; devuelve
                            a las personas la libertad de vivir sin miedo."
                        </blockquote>
                        <cite>— Dra. Marcela Navarro Guzmán</cite>
                    </div>

                    <div className="ab-horario-card">
                        <h4>Horario de atención</h4>
                        <ul>
                            {horarios.map((h) => (
                                <li key={h.dia} className={h.cerrado ? "cerrado" : ""}>
                                    <span>{h.dia}</span>
                                    <span>{h.hora}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ── FORMACIÓN ── */}
            <section className="ab-formacion">
                <span className="section-label center-label">Formación —</span>
                <h2>Trayectoria académica</h2>
                <p className="ab-section-lead">
                    Mi preparación académica me permite ofrecer atención médica de la más alta calidad.
                </p>
                <div className="ab-form-grid">
                    {formacion.map((f) => (
                        <div className="ab-form-card" key={f.titulo}>
                            <div className="card-icon">{f.icon}</div>
                            <strong>{f.titulo}</strong>
                            <p className="ab-form-inst">{f.inst}</p>
                            <p className="ab-form-detail">{f.detalle}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── MEMBRESÍAS ── */}
            <section className="ab-membresias">
                <span className="section-label center-label">Membresías —</span>
                <h2>Asociaciones profesionales</h2>
                <p className="ab-section-lead">
                    Miembro activo de prestigiosas asociaciones de urología a nivel internacional.
                </p>
                <div className="ab-mem-grid">
                    {membresias.map((m) => (
                        <div className="ab-mem-card" key={m.sigla}>
                            <div className="ab-mem-sigla">{m.sigla}</div>
                            <div>
                                <strong>{m.nombre}</strong>
                                <p>{m.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── FILOSOFÍA ── */}
            <section className="ab-filosofia">
                <span className="section-label center-label">Filosofía —</span>
                <h2>Los pilares de mi práctica</h2>
                <p className="ab-section-lead">
                    Enfoque integral de la urología desde tres aristas fundamentales.
                </p>
                <div className="ab-valores-grid">
                    {filosofia.map((v) => (
                        <div className="ab-valor-card" key={v.title}>
                            <div className="card-icon">{v.bigIcon}</div>
                            <strong>{v.title}</strong>
                            <p>{v.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── ESPECIALIDADES ── */}
            <section className="ab-especialidades">
                <span className="section-label center-label">Especialización —</span>
                <h2>Áreas de especialización</h2>
                <p className="ab-section-lead">
                    Experiencia especializada en diversas patologías urológicas.
                </p>
                <div className="ab-esp-grid">
                    {especialidades.map((e) => (
                        <div className="ab-esp-card" key={e.titulo}>
                            <div className="ab-esp-check"><CheckIcon /></div>
                            <div>
                                <strong>{e.titulo}</strong>
                                <p>{e.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="ab-cta">
                <div className="ab-cta-box">
                    <CalendarIcon />
                    <h3>¿Lista para tu primera consulta?</h3>
                    <p>
                        Agenda tu cita y recibe atención médica especializada y personalizada.
                    </p>
                    <div className="ab-cta-btns">
                        <a
                            href="https://wa.me/50687051691"
                            className="btn-outline-white ab-whatsapp-btn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <WhatsappIcon /> Agendar cita por WhatsApp
                        </a>
                    </div>
                </div>
            </section>

            {/* ── BOTÓN FLOTANTE WHATSAPP ── */}
            <a
                href="https://wa.me/50687051691"
                className="ab-fab-wa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
            >
                <WhatsappIcon />
            </a>

            {/* ── ESTILOS ── */}
            <style>{`
        .about-page {
          font-family: inherit;
          color: #3a2e26;
          background: #faf8f5;
        }

        /* Hero */
        .ab-hero {
          display: flex;
          align-items: center;
          gap: 64px;
          max-width: 1100px;
          margin: 0 auto;
          padding: 72px 32px 56px;
        }
        .ab-hero-inner { flex: 1; }
        .ab-hero-inner h1 {
          font-size: clamp(1.9rem, 4vw, 2.8rem);
          font-weight: 700;
          line-height: 1.15;
          margin: 12px 0 16px;
          color: #2a1f18;
        }
        .ab-hero-sub {
          display: block;
          font-size: 1rem;
          font-weight: 400;
          color: #8b6b4f;
          letter-spacing: 0.04em;
          margin-top: 6px;
        }
        .ab-hero-lead {
          font-size: 1rem;
          color: #6b5444;
          line-height: 1.7;
          max-width: 460px;
          margin-bottom: 20px;
        }
        .ab-hero-meta {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          margin-bottom: 28px;
        }
        .ab-hero-meta span {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.82rem;
          font-weight: 600;
          color: #8b6b4f;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .ab-hero-actions { display: flex; gap: 14px; flex-wrap: wrap; align-items: center; }
        .ab-whatsapp-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
        }

        /* Photo */
        .ab-hero-photo-wrap { position: relative; flex-shrink: 0; }
        .ab-hero-photo {
          width: 320px;
          height: 400px;
          object-fit: cover;
          object-position: top;
          border-radius: 12px;
          display: block;
          border: 1.5px solid #e5ddd5;
        }
        .ab-photo-badge {
          position: absolute;
          bottom: -18px;
          left: -18px;
          background: #2a1f18;
          color: #faf8f5;
          border-radius: 10px;
          padding: 14px 18px;
          display: flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 4px 20px rgba(42,31,24,.18);
        }
        .ab-badge-num {
          font-size: 1.6rem;
          font-weight: 700;
          color: #c9b49a;
          line-height: 1;
        }
        .ab-badge-label {
          font-size: 0.75rem;
          color: #c9b49a;
          line-height: 1.4;
          opacity: .85;
        }

        /* Stats */
        .ab-stats {
          display: flex;
          justify-content: center;
          background: #2a1f18;
          padding: 36px 32px;
          flex-wrap: wrap;
        }
        .ab-stat {
          flex: 1;
          min-width: 140px;
          text-align: center;
          padding: 0 32px;
          border-right: 1px solid rgba(201,180,154,.2);
        }
        .ab-stat:last-child { border-right: none; }
        .ab-stat strong {
          display: block;
          font-size: 1.8rem;
          font-weight: 700;
          color: #c9b49a;
          line-height: 1;
          margin-bottom: 6px;
        }
        .ab-stat span {
          font-size: 0.75rem;
          color: rgba(201,180,154,.7);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        /* Bio */
        .ab-bio {
          display: flex;
          gap: 56px;
          max-width: 1100px;
          margin: 0 auto;
          padding: 72px 32px;
        }
        .ab-bio-text { flex: 1.2; }
        .ab-bio-text h2 {
          font-size: clamp(1.4rem, 2.5vw, 1.9rem);
          font-weight: 700;
          margin: 12px 0 20px;
          color: #2a1f18;
        }
        .ab-bio-text p {
          color: #5a4535;
          line-height: 1.8;
          margin-bottom: 16px;
          font-size: 0.95rem;
        }
        .ab-id-chips {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 24px;
        }
        .ab-chip {
          display: flex;
          align-items: center;
          gap: 12px;
          background: #fff;
          border: 1.5px solid #e5ddd5;
          border-radius: 10px;
          padding: 12px 16px;
        }
        .ab-chip svg { color: #8b6b4f; flex-shrink: 0; }
        .ab-chip strong {
          display: block;
          font-size: 0.75rem;
          font-weight: 600;
          color: #8b6b4f;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .ab-chip span {
          font-size: 0.9rem;
          color: #3a2e26;
        }

        /* Bio aside */
        .ab-bio-aside {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .ab-quote-card {
          background: #fff;
          border: 1.5px solid #e5ddd5;
          border-radius: 12px;
          padding: 28px;
        }
        .ab-quote-card blockquote {
          font-size: 0.97rem;
          line-height: 1.75;
          color: #3a2e26;
          font-style: italic;
          margin: 12px 0 14px;
        }
        .ab-quote-card cite {
          font-size: 0.8rem;
          color: #8b6b4f;
          font-style: normal;
        }
        .ab-horario-card {
          background: #fff;
          border: 1.5px solid #e5ddd5;
          border-radius: 12px;
          padding: 24px 28px;
        }
        .ab-horario-card h4 {
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #8b6b4f;
          margin-bottom: 14px;
        }
        .ab-horario-card ul { list-style: none; padding: 0; margin: 0; }
        .ab-horario-card li {
          display: flex;
          justify-content: space-between;
          font-size: 0.86rem;
          color: #3a2e26;
          padding: 7px 0;
          border-bottom: 1px solid #f0ebe4;
        }
        .ab-horario-card li:last-child { border-bottom: none; }
        .ab-horario-card li.cerrado { color: #b0a090; }

        /* Formación */
        .ab-formacion {
          background: #fff;
          padding: 72px 32px;
          text-align: center;
        }
        .ab-formacion h2,
        .ab-membresias h2,
        .ab-filosofia h2,
        .ab-especialidades h2 {
          font-size: clamp(1.4rem, 2.5vw, 1.9rem);
          font-weight: 700;
          color: #2a1f18;
          margin: 12px 0 12px;
        }
        .ab-section-lead {
          font-size: 0.97rem;
          color: #6b5444;
          margin-bottom: 40px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        .ab-form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          max-width: 900px;
          margin: 0 auto;
          text-align: left;
        }
        .ab-form-card {
          background: #faf8f5;
          border: 1.5px solid #e5ddd5;
          border-radius: 12px;
          padding: 28px 24px;
          transition: box-shadow .2s, transform .2s;
        }
        .ab-form-card:hover {
          box-shadow: 0 6px 24px rgba(139,107,79,.1);
          transform: translateY(-2px);
        }
        .ab-form-card .card-icon {
          width: 52px; height: 52px;
          border-radius: 50%;
          background: #fff;
          border: 1.5px solid #e5ddd5;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 16px;
        }
        .ab-form-card strong {
          display: block;
          font-size: 0.95rem;
          font-weight: 700;
          color: #2a1f18;
          margin-bottom: 4px;
        }
        .ab-form-inst {
          font-size: 0.86rem;
          color: #8b6b4f;
          margin-bottom: 4px;
        }
        .ab-form-detail {
          font-size: 0.82rem;
          color: #9a8070;
          margin: 0;
        }

        /* Membresías */
        .ab-membresias {
          max-width: 1100px;
          margin: 0 auto;
          padding: 72px 32px;
          text-align: center;
        }
        .ab-mem-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          max-width: 900px;
          margin: 0 auto;
          text-align: left;
        }
        .ab-mem-card {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          background: #fff;
          border: 1.5px solid #e5ddd5;
          border-radius: 12px;
          padding: 24px;
          transition: box-shadow .2s, transform .2s;
        }
        .ab-mem-card:hover {
          box-shadow: 0 6px 24px rgba(139,107,79,.1);
          transform: translateY(-2px);
        }
        .ab-mem-sigla {
          flex-shrink: 0;
          width: 52px; height: 52px;
          border-radius: 50%;
          background: #2a1f18;
          color: #c9b49a;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          line-height: 1.2;
        }
        .ab-mem-card strong {
          display: block;
          font-size: 0.92rem;
          font-weight: 700;
          color: #2a1f18;
          margin-bottom: 6px;
        }
        .ab-mem-card p {
          font-size: 0.84rem;
          color: #6b5444;
          line-height: 1.55;
          margin: 0;
        }

        /* Filosofía */
        .ab-filosofia {
          background: #fff;
          padding: 72px 32px;
          text-align: center;
        }
        .ab-valores-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          max-width: 1000px;
          margin: 0 auto;
        }
        .ab-valor-card {
          background: #faf8f5;
          border: 1.5px solid #e5ddd5;
          border-radius: 14px;
          padding: 36px 24px;
          text-align: center;
          transition: box-shadow .2s, transform .2s;
        }
        .ab-valor-card:hover {
          box-shadow: 0 8px 28px rgba(139,107,79,.12);
          transform: translateY(-3px);
        }
        .ab-valor-card .card-icon {
          width: 60px; height: 60px;
          border-radius: 50%;
          background: #fff;
          border: 1.5px solid #e5ddd5;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 20px;
        }
        .ab-valor-card strong {
          display: block;
          font-size: 0.97rem;
          font-weight: 700;
          color: #2a1f18;
          margin-bottom: 10px;
        }
        .ab-valor-card p {
          font-size: 0.88rem;
          color: #6b5444;
          line-height: 1.65;
          margin: 0;
        }

        /* Especialidades */
        .ab-especialidades {
          max-width: 1100px;
          margin: 0 auto;
          padding: 72px 32px;
          text-align: center;
        }
        .ab-esp-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          max-width: 900px;
          margin: 0 auto;
          text-align: left;
        }
        .ab-esp-card {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          background: #fff;
          border: 1.5px solid #e5ddd5;
          border-radius: 12px;
          padding: 24px;
          transition: box-shadow .2s, transform .2s;
        }
        .ab-esp-card:hover {
          box-shadow: 0 6px 24px rgba(139,107,79,.1);
          transform: translateY(-2px);
        }
        .ab-esp-check { flex-shrink: 0; margin-top: 2px; }
        .ab-esp-card strong {
          display: block;
          font-size: 0.92rem;
          font-weight: 700;
          color: #2a1f18;
          margin-bottom: 6px;
        }
        .ab-esp-card p {
          font-size: 0.84rem;
          color: #6b5444;
          line-height: 1.6;
          margin: 0;
        }

        /* CTA */
        .ab-cta {
          background: #2a1f18;
          padding: 72px 32px;
          text-align: center;
        }
        .ab-cta-box {
          max-width: 520px;
          margin: 0 auto;
        }
        .ab-cta-box svg { color: #c9b49a; margin-bottom: 16px; }
        .ab-cta-box h3 {
          font-size: 1.6rem;
          font-weight: 700;
          color: #faf8f5;
          margin-bottom: 12px;
        }
        .ab-cta-box p {
          font-size: 0.95rem;
          color: rgba(250,248,245,.65);
          line-height: 1.7;
          margin-bottom: 28px;
        }
        .ab-cta-btns { display: flex; justify-content: center; }

        /* WhatsApp FAB */
        .ab-fab-wa {
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
        .ab-fab-wa:hover {
          transform: scale(1.1);
          background: #128c7e;
        }
        @keyframes wa-pulse {
          0%   { box-shadow: 0 0 0 0 rgba(37,211,102,.6); }
          70%  { box-shadow: 0 0 0 12px rgba(37,211,102,0); }
          100% { box-shadow: 0 0 0 0 rgba(37,211,102,0); }
        }

        /* Responsive */
        @media (max-width: 900px) {
          .ab-hero { flex-direction: column; gap: 40px; padding: 48px 20px 40px; }
          .ab-hero-photo { width: 100%; height: 320px; }
          .ab-bio { flex-direction: column; gap: 28px; padding: 48px 20px; }
          .ab-form-grid,
          .ab-mem-grid,
          .ab-esp-grid { grid-template-columns: 1fr; }
          .ab-valores-grid { grid-template-columns: 1fr; }
          .ab-stat {
            padding: 16px 20px;
            border-right: none;
            border-bottom: 1px solid rgba(201,180,154,.2);
          }
          .ab-stat:last-child { border-bottom: none; }
        }
      `}</style>
        </div>
    );
}