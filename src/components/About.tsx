import React from 'react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <p className="text-gray-600">
                  Currently pursuing Computer Science and Engineering at BMS Institute of Technology (5th semester)
                  with a CGPA of 9.2
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Academic Excellence</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Pre-University (2022): Scored 563/600 (93.83%) with distinction</li>
                  <li>SSLC (2020): Scored 603/625 (96.48%) with distinction</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Professional Focus</h3>
                <p className="text-gray-600">
                  Passionate about full-stack development, cloud computing, and machine learning. 
                  I specialize in building scalable applications and implementing innovative solutions 
                  using modern technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}