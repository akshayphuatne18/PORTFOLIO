import React from 'react';
import { SocialLinks } from './SocialLinks';
import { TypewriterEffect } from './TypewriterEffect';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-primary font-mono mb-4">Hi, my name is</p>
            <h1 className="text-4xl md:text-6xl font-bold text-text-bright mb-4">
              Akshay Phutane
            </h1>
            <div className="text-xl md:text-2xl text-text-base mb-8 h-20">
              <TypewriterEffect 
                words={[
                  "Full Stack Developer",
                  "Machine Learning Engineer",
                  "Problem Solver",
                  "Tech Enthusiast"
                ]} 
              />
            </div>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="px-6 py-3 bg-transparent border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-mono"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-6 py-3 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors font-mono"
              >
                View Projects
              </a>
            </div>
            <SocialLinks className="mt-8 justify-center md:justify-start" />
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-lg blur-xl animate-pulse"></div>
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600"
                alt="Developer workspace"
                className="relative rounded-lg shadow-xl animate-float gradient-border"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}