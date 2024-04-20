import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* Encabezado de la aplicación que incluye la barra de navegación */}
      <header>
        <Navbar />
      </header>
      {/* Contenido principal y barra lateral */}
      <main>
        <Principal />
        <Aside />
      </main>
      {/* Pie de página */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      {/* Nombre de la banda */}
      <h1>SERPHIKA</h1>
    </nav>
  );
}

function Principal() {
  return (
    <section className="principal">
      {/* Título y descripción de la banda */}
      <h2>Bienvenidos a Serphika</h2>
      <p>
        Serphika es un grupo de rock de alta energía que ha estado actuando alrededor del mundo durante más de una década. Con su presencia electrizante en el escenario y sus impresionantes riffs de guitarra, nunca dejan de hacer que la multitud se ponga de pie.
        Echa un vistazo a nuestro último álbum "Sombras de Vanidad", disponible ahora en todas las plataformas de streaming principales.
      </p>
    </section>
  );
}

function Aside() {
  return (
    <aside className="aside">
      {/* Lista de próximos conciertos */}
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
      {/* Derechos de autor */}
      <p>&copy; {new Date().getFullYear()} Serphika. Todos los derechos reservados.</p>
    </footer>
  );
}

export default App;
