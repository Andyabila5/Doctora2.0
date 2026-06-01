import { Link } from "react-router-dom";
import logoImg from "./assets/Logo.png";

export default function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="site-footer-inner">
          <div>
            <div className="site-footer-brand">
              <img src={logoImg} alt="Nova Uroclinica by Dra. Navarro G" />
              <div>
                <h4>Dra. Marcela Navarro Guzmán</h4>
                <p>Especialista en Urología</p>
              </div>
            </div>
          </div>

          <div>
            <h5>Enlaces rápidos</h5>
            <nav className="site-footer-links">
              <Link to="/">Inicio</Link>
              <Link to="/sobre-mi">Sobre mí</Link>
              <Link to="/servicios">Servicios</Link>
              <Link to="/resenas">Reseñas</Link>
              <Link to="/contacto">Contacto</Link>
            </nav>
          </div>

          <div>
            <h5>Contacto</h5>
            <p>+506 8705 1691</p>
            <p>San Carlos, Costa Rica</p>
            <p>Lunes a Viernes 1:00 PM – 5:30 PM</p>
          </div>
        </div>
        <div className="site-footer-copy">
          © {new Date().getFullYear()} NOVA UROCLINICA by Dra. Navarro. Todos
          los derechos reservados.
        </div>
      </footer>

      <style>{`
        .site-footer {
          background: #2a1f18;
          color: #c9b49a;
        }

        .site-footer-inner {
          width: min(1100px, 100%);
          margin: 0 auto;
          padding: 32px 32px 24px;
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr;
          gap: 20px;
          align-items: start;
        }

        .site-footer-brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .site-footer-brand img {
          width: 56px;
          height: 56px;
          object-fit: contain;
          border-radius: 50%;
          border: 2px solid #fff;
          background: #fff;
          padding: 4px;
        }

        .site-footer-brand h4 {
          margin: 0;
          color: #fff;
          font-size: 0.95rem;
        }

        .site-footer-brand p,
        .site-footer p {
          margin: 2px 0 0;
          color: #c9b49a;
          font-size: 0.85rem;
          line-height: 1.5;
        }

        .site-footer h5 {
          margin: 0 0 8px;
          color: #fff;
          font-size: 0.88rem;
        }

        .site-footer-links {
          display: grid;
          gap: 6px;
        }

        .site-footer-links a {
          color: #c9b49a;
          text-decoration: none;
          font-size: 0.85rem;
        }

        .site-footer-links a:hover {
          color: #fff;
        }

        .site-footer-copy {
          padding: 12px 32px 16px;
          text-align: center;
          border-top: 1px solid rgba(201, 180, 154, 0.2);
          color: #9a8070;
          font-size: 0.8rem;
        }

        @media (max-width: 900px) {
          .site-footer-inner {
            grid-template-columns: 1fr;
            padding: 28px 20px 20px;
            gap: 16px;
          }

          .site-footer-copy {
            padding: 10px 20px 14px;
          }
        }
      `}</style>
    </>
  );
}
