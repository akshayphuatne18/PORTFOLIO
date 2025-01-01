import React from 'react';
import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackgroundGrid } from './components/BackgroundGrid';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-text-base relative">
      <BackgroundGrid />
      <div className="relative z-10">
        <NavBar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}