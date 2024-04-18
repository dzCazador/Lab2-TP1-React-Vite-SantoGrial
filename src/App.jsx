import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header>
        <Navbar />
      </header>
      <main>
        <Principal />
        <Aside />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <h1>SERPHIKA</h1>
    </nav>
  );
}

function Principal() {
  return (
    <section className="principal">
      <h2>Bienvenidos a Serphika</h2>
      <p>Serphika es un grupo de rock de alta energía que ha estado actuando alrededor del mundo durante más de una década. Con su presencia electrizante en el escenario y sus impresionantes riffs de guitarra, nunca dejan de hacer que la multitud se ponga de pie.
      Echa un vistazo a nuestro último álbum "Sombras de Vanidad", disponible ahora en todas las plataformas de streaming principales.</p>
    </section>
  );
}

function Aside() {
  return (
  <aside className="aside">
    <h2>Próximos Conciertos</h2>
    <ul>
      <li>25 de Abril - El Estadio del Rock, Buenos Aires</li>
      <li>10 de Mayo - Arena del Rock, Córdoba</li>
      <li>5 de Junio - Festival del Rock, Rosario</li>
    </ul>
  </aside>
  );
}

function Footer() {
  return (
  <footer className="footer">
    <p>&copy; {new Date().getFullYear()} Serphika. Todos los derechos reservados.</p>
  </footer>
  );
}
export default App
