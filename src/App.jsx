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
      <h1>Rock Band</h1>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#music">Music</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

function Principal() {
  return (
    <section className="principal">
      <h2>Welcome to Rock Band</h2>
      <p>Rock Band is a high-energy rock group that has been performing around the world for over a decade. With their electrifying stage presence and killer guitar riffs, they never fail to get the crowd on their feet.</p>
      <p>Check out our latest album "Rock Revolution" available now on all major streaming platforms.</p>
    </section>
  );
}

function Aside() {
  return (
    <aside className="aside">
      <h2>Upcoming Shows</h2>
      <ul>
        <li>April 25 - The Rock Palace, New York</li>
        <li>May 10 - Rock Arena, Los Angeles</li>
        <li>June 5 - Rock Fest, Chicago</li>
      </ul>
    </aside>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2024 Rock Band. All rights reserved.</p>
    </footer>
  );
}
export default App
