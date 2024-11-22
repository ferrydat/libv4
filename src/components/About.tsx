import React from 'react';
import { Shield, Clock, BadgeCheck, Lock, Briefcase, Globe, HandshakeIcon, TrendingUp, Banknote } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-gold font-medium tracking-wider text-sm block mb-3">
            NUESTRA PROPUESTA DE VALOR
          </span>
          <h2 className="text-4xl font-serif text-primary mb-6">Maximizamos su Rentabilidad</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Optimizamos la rentabilidad de su negocio transformando el stock de baja rotación en liquidez inmediata. 
            Nuestra experiencia y solidez financiera garantizan las mejores condiciones del mercado.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          {[
            {
              icon: TrendingUp,
              title: "Optimización de Capital",
              description: "Convertimos su stock de baja rotación en liquidez inmediata para su negocio"
            },
            {
              icon: Banknote,
              title: "Valoración Premium",
              description: "Tasaciones competitivas basadas en datos de mercado en tiempo real"
            },
            {
              icon: Globe,
              title: "Red Internacional",
              description: "Acceso directo a los principales mercados de alta relojería"
            }
          ].map((feature, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg border border-gray-100 group hover:shadow-lg transition-all">
              <feature.icon className="h-12 w-12 text-gold mb-6 transform transition-transform group-hover:scale-110" />
              <h3 className="text-xl font-serif text-primary mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-primary p-8 rounded-lg text-white">
            <Shield className="h-12 w-12 text-gold mb-6" />
            <h3 className="text-2xl font-serif mb-4">Ventajas Estratégicas</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <BadgeCheck className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                <span>Valoraciones premium basadas en datos de mercado en tiempo real</span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                <span>Liquidez inmediata para optimizar su flujo de caja</span>
              </li>
              <li className="flex items-start space-x-3">
                <Lock className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                <span>Máxima confidencialidad en cada operación</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
            <div className="flex items-start space-x-4">
              <Lock className="h-12 w-12 text-gold flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-serif text-primary mb-4">Proceso Profesional</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Nuestro proceso está diseñado para maximizar el valor de su stock mientras 
                  mantenemos los más altos estándares de confidencialidad:
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    <span>Valoración detallada de su portfolio</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    <span>Propuesta económica en 24-48 horas</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    <span>Transacción segura y confidencial</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}