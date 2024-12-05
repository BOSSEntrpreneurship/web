import { Lightbulb, TrendingUp, Users } from 'lucide-react';

interface HeroProps {
  setCurrentPage: (page: string) => void;
}

export function Hero({ setCurrentPage }: HeroProps) {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleJoinNow = () => {
    setCurrentPage('contact');
    setTimeout(() => {
      const contactForm = document.querySelector('.contact-form');
      contactForm?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-12 sm:py-20">
      <div className="absolute inset-0">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx_zVDy2FFV1xPlAUY3Pv1te6KzhTDREh8-w&s"
          alt="Famous Image"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900/80 dark:from-gray-900/80 dark:to-gray-900/95" />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6">
          BOSS Entrepreneurship
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto">
          Empowering future leaders at Bur Oak Secondary School through innovation, creativity, and leadership.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <button 
            onClick={handleJoinNow}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 rounded-full font-semibold transition"
          >
            Join Now
          </button>
          <button 
            onClick={scrollToFeatures}
            className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
