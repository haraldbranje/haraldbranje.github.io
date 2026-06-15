import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Menu, X, Phone, MapPin, Mail, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img src="/manus-storage/logo-hb-final_aa1da79e.png" alt="Harald Branje" className="h-10 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-foreground hover:text-accent transition-colors text-sm font-medium"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("portafolio")}
              className="text-foreground hover:text-accent transition-colors text-sm font-medium"
            >
              Portafolio
            </button>
            <button
              onClick={() => scrollToSection("ventajas")}
              className="text-foreground hover:text-accent transition-colors text-sm font-medium"
            >
              Por qué elegirnos
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-foreground hover:text-accent transition-colors text-sm font-medium"
            >
              Contacto
            </button>
          </nav>

          {/* CTA Button */}
          <Button
            onClick={() => scrollToSection("contacto")}
            className="hidden sm:inline-flex bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            Contactar
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-white">
            <div className="container py-4 flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("servicios")}
                className="text-left text-foreground hover:text-accent transition-colors font-medium"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("portafolio")}
                className="text-left text-foreground hover:text-accent transition-colors font-medium"
              >
                Portafolio
              </button>
              <button
                onClick={() => scrollToSection("ventajas")}
                className="text-left text-foreground hover:text-accent transition-colors font-medium"
              >
                Por qué elegirnos
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="text-left text-foreground hover:text-accent transition-colors font-medium"
              >
                Contacto
              </button>
              <Button
                onClick={() => scrollToSection("contacto")}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Contactar
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"></div>
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-accent font-semibold text-sm uppercase tracking-wide">
                  Creador de Contenido Digital
                </span>
              </div>
              <h1 className="text-foreground leading-tight">
                Tu contenido digital, profesional y efectivo
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Transformamos tu visión en contenido digital de alta calidad. Desde videos profesionales hasta audio impecable, creamos el contenido que tu negocio necesita para destacar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  onClick={() => scrollToSection("contacto")}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                >
                  Empezar ahora
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => scrollToSection("servicios")}
                  className="border-border text-foreground hover:bg-secondary"
                >
                  Ver servicios
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663670003668/YcPesaAdTW9wZvEetu76D2/hero-banner-JtphzrT35TkaFsBMZLjtey.webp"
                alt="Estudio de creación de contenido digital"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 md:py-32 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wide">
              Nuestros Servicios
            </span>
            <h2 className="text-foreground mt-4">
              Soluciones de contenido digital para tu negocio
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              Ofrecemos una gama completa de servicios diseñados para elevar tu presencia digital y conectar con tu audiencia de manera efectiva.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <Card className="bg-white border-border hover:shadow-lg transition-shadow duration-300">
              <div className="p-8">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-foreground mb-3">Producción de Video</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Videos profesionales para redes sociales, publicidad, testimonios y contenido corporativo. Desde concepto hasta postproducción.
                </p>
              </div>
            </Card>

            {/* Service Card 2 */}
            <Card className="bg-white border-border hover:shadow-lg transition-shadow duration-300">
              <div className="p-8">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-foreground mb-3">Producción de Audio</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Grabación, edición y masterización de audio profesional. Podcasts, locuciones, música y efectos de sonido de calidad estudio.
                </p>
              </div>
            </Card>

            {/* Service Card 3 */}
            <Card className="bg-white border-border hover:shadow-lg transition-shadow duration-300">
              <div className="p-8">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-foreground mb-3">Contenido Multimedia</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Diseño gráfico, animaciones, infografías y contenido interactivo. Todo lo que necesitas para captar la atención de tu audiencia.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="ventajas" className="py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663670003668/YcPesaAdTW9wZvEetu76D2/content-creation-ha2joZm2x5ZGaBEsvrZboV.webp"
                alt="Creación de contenido digital"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-8">
              <div>
                <span className="text-accent font-semibold text-sm uppercase tracking-wide">
                  Por qué elegirnos
                </span>
                <h2 className="text-foreground mt-4">
                  Experiencia, calidad y dedicación
                </h2>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold mb-1">
                      Equipo profesional
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Contamos con expertos en cada área del contenido digital, listos para hacer realidad tu visión.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold mb-1">
                      Equipamiento de calidad
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Utilizamos tecnología de punta para garantizar resultados profesionales en cada proyecto.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold mb-1">
                      Atención personalizada
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Cada proyecto es único. Nos adaptamos a tus necesidades específicas y objetivos comerciales.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold mb-1">
                      Entrega a tiempo
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Respetamos plazos y compromisos. Tu contenido estará listo cuando lo necesites.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">+50</div>
              <p className="text-primary-foreground/80">Proyectos completados</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">+30</div>
              <p className="text-primary-foreground/80">Clientes satisfechos</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
              <p className="text-primary-foreground/80">Calidad garantizada</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <p className="text-primary-foreground/80">Disponible para ti</p>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <span className="text-accent font-semibold text-sm uppercase tracking-wide">
                  Crecimiento garantizado
                </span>
                <h2 className="text-foreground mt-4">
                  Tu negocio crece con contenido de calidad
                </h2>
              </div>
              <p className="text-lg text-muted-foreground">
                El contenido digital profesional no es un gasto, es una inversión. Con nuestros servicios, verás cómo tu presencia online se fortalece y tu negocio crece de manera sostenible.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-foreground">Aumenta tu visibilidad online</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-foreground">Conecta con tu audiencia</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-foreground">Mejora tu posicionamiento</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-foreground">Convierte visitantes en clientes</span>
                </li>
              </ul>
            </div>
            <div>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663670003668/YcPesaAdTW9wZvEetu76D2/digital-growth-6RgWRZGspfRxPSrPmBEzC5.webp"
                alt="Crecimiento digital"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portafolio" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wide">
              Mis trabajos
            </span>
            <h2 className="text-foreground mt-4">
              Galería de Proyectos
            </h2>
            <p className="text-lg text-muted-foreground mt-4">
              Proyectos reales para negocios locales que confían en mi trabajo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img
                src="/manus-storage/portafolio-1-blonda_dd3e5c3d.webp"
                alt="Blonda la Upa - Tortillas de Papa"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-secondary/50">
                <h3 className="text-foreground font-semibold">Donde la Oma</h3>
                <p className="text-sm text-muted-foreground mt-2">Diseño de anuncio para panadería local</p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img
                src="/manus-storage/portafolio-2-garage_6dca86c9.webp"
                alt="Dark Boost Garage - Taller Mecánico"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-secondary/50">
                <h3 className="text-foreground font-semibold">Dark Boost Garage</h3>
                <p className="text-sm text-muted-foreground mt-2">Branding y material promocional para taller</p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img
                src="/manus-storage/portafolio-3-kaimii_cdcb8427.webp"
                alt="Kaimii Bosquenar - Tienda de Útiles"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-secondary/50">
                <h3 className="text-foreground font-semibold">Kawaii Bosquenar</h3>
                <p className="text-sm text-muted-foreground mt-2">Diseño para tienda de artículos creativos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="py-20 md:py-32 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wide">
              Clientes satisfechos
            </span>
            <h2 className="text-foreground mt-4">
              Lo que dicen de mi trabajo
            </h2>
            <p className="text-lg text-muted-foreground mt-4">
              Negocios locales que han mejorado su presencia digital
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-border p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-bold">PC</span>
                </div>
                <div>
                  <h4 className="text-foreground font-semibold">Carlos Mendoza</h4>
                  <p className="text-sm text-muted-foreground">Panadería Don Carlos</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "Harald transformó la forma en que nos presentamos en redes sociales. Nuestros clientes ahora nos encuentran más fácilmente y el engagement ha mejorado notablemente. Muy recomendado."
              </p>
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent">★</span>
                ))}
              </div>
            </Card>

            <Card className="bg-white border-border p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-bold">TM</span>
                </div>
                <div>
                  <h4 className="text-foreground font-semibold">Miguel Torres</h4>
                  <p className="text-sm text-muted-foreground">Taller Mecánico Especialistas</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "El diseño que Harald hizo para nuestro taller es profesional y moderno. Nos ayudó a diferenciarnos de la competencia. Excelente trabajo y muy atento a los detalles."
              </p>
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent">★</span>
                ))}
              </div>
            </Card>

            <Card className="bg-white border-border p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-bold">RP</span>
                </div>
                <div>
                  <h4 className="text-foreground font-semibold">Rosa Pino</h4>
                  <p className="text-sm text-muted-foreground">Comercio Local - Almacén</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "Trabajar con Harald fue fácil y directo. Entiende lo que necesitan los negocios locales. Los videos que hizo para nosotros han generado mucho interés. Muy profesional."
              </p>
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent">★</span>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wide">
                Sobre mí
              </span>
              <h2 className="text-foreground mt-4">
                Harald Branje
              </h2>
              <p className="text-lg text-muted-foreground mt-6">
                Soy creador de contenido digital con experiencia trabajando con negocios locales. Mi objetivo es ayudarte a llevar tu marca al siguiente nivel con contenido profesional, creativo y efectivo.
              </p>
              <p className="text-muted-foreground mt-4">
                He trabajado con panaderías, talleres mecánicos, comercios de barrio y otros negocios locales que confían en mi trabajo. Entiendo las necesidades reales de los pequeños negocios y sé cómo crear contenido que genera resultados.
              </p>
              <p className="text-muted-foreground mt-4">
                Mi enfoque es simple: trabajo rápido, sin complicaciones, y siempre enfocado en lo que realmente importa: que tu negocio crezca.
              </p>
              <div className="mt-8 flex gap-4">
                <a
                  href="https://instagram.com/haraldbranje"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80 transition-colors font-medium"
                >
                  Instagram →
                </a>
                <a
                  href="https://wa.me/56966362642"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80 transition-colors font-medium"
                >
                  WhatsApp →
                </a>
              </div>
            </div>
            <div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/manus-storage/foto-personal-harald_eee2bd8f.jpeg"
                  alt="Harald Branje"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 md:py-32 bg-secondary/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-accent font-semibold text-sm uppercase tracking-wide">
                Ponte en contacto
              </span>
              <h2 className="text-foreground mt-4">
                Hablemos sobre tu proyecto
              </h2>
              <p className="text-lg text-muted-foreground mt-4">
                Estoy listo para ayudarte a llevar tu contenido digital al siguiente nivel. Contáctame hoy mismo.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-white border-border text-center p-8">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-foreground font-semibold mb-2">Teléfono</h3>
                <a
                  href="https://wa.me/56966362642"
                  className="text-accent hover:underline font-medium"
                >
                  +56 9 6636 2642
                </a>
              </Card>

              <Card className="bg-white border-border text-center p-8">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-foreground font-semibold mb-2">Email</h3>
                <a
                  href="mailto:haraldbranje@gmail.com"
                  className="text-accent hover:underline font-medium break-all"
                >
                  haraldbranje@gmail.com
                </a>
              </Card>

              <Card className="bg-white border-border text-center p-8">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-foreground font-semibold mb-2">Ubicación</h3>
                <p className="text-muted-foreground">
                  Puerto Montt, Chile<br />
                  <span className="text-sm">Visita o Remoto</span>
                </p>
              </Card>
            </div>


          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 md:py-16">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
            <img src="/manus-storage/logo-hb-final_aa1da79e.png" alt="Harald Branje" className="h-12 w-auto mb-4" />
              <p className="text-primary-foreground/80 text-sm">
                Creador de contenido digital profesional para negocios.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>
                  <button
                    onClick={() => scrollToSection("servicios")}
                    className="hover:text-primary-foreground transition-colors"
                  >
                    Producción de Video
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("servicios")}
                    className="hover:text-primary-foreground transition-colors"
                  >
                    Producción de Audio
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("servicios")}
                    className="hover:text-primary-foreground transition-colors"
                  >
                    Contenido Multimedia
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>
                  <button
                    onClick={() => scrollToSection("portafolio")}
                    className="hover:text-primary-foreground transition-colors"
                  >
                    Portafolio
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("ventajas")}
                    className="hover:text-primary-foreground transition-colors"
                  >
                    Por qué elegirnos
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contacto")}
                    className="hover:text-primary-foreground transition-colors"
                  >
                    Contacto
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>
                  <a href="https://wa.me/56966362642" className="hover:text-primary-foreground transition-colors">
                    +56 9 6636 2642
                  </a>
                </li>
                <li>
                  <a href="mailto:haraldbranje@gmail.com" className="hover:text-primary-foreground transition-colors">
                    haraldbranje@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8">
            <p className="text-center text-sm text-primary-foreground/80">
              © 2026 Harald Branje. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
