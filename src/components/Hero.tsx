import { Lightbulb, TrendingUp, Users } from 'lucide-react';
import { FadeIn } from './animations/FadeIn';
import { scrollToElement } from '../utils/scroll';

export function Hero() {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleJoinNow = () => {
    const setCurrentPage = (window as any).__setCurrentPage;
    if (setCurrentPage) {
      setCurrentPage('contact');
      setTimeout(() => scrollToElement('contact-form'), 100);
    }
  };

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center">
      <div className="absolute inset-0">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx_zVDy2FFV1xPlAUY3Pv1te6KzhTDREh8-w&s"
          alt="Students collaborating"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900/50" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-[90vw] w-full">
        <FadeIn>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6">
            BOSS Entrepreneurship
          </h1>
        </FadeIn>
        
        <FadeIn delay={200}>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Empowering future leaders at Bur Oak Secondary School through
            innovation, creativity, and leadership.
          </p>
        </FadeIn>

        <FadeIn delay={400}>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <button 
              onClick={handleJoinNow}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 rounded-full font-semibold transition-colors text-base sm:text-lg"
            >
              Join Now
            </button>
            <button
              onClick={scrollToFeatures}
              className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors text-base sm:text-lg"
            >
              Learn More
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
